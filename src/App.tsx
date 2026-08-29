import { useState, useMemo, useEffect, useRef } from 'react';
import { MERCHANTS } from './data/merchants';
import type { Merchant, UserContext } from './types/merchant';
import { TopContextBar } from './components/TopContextBar';
import { MerchantDecisionCard } from './components/MerchantDecisionCard';
import { QuickMerchantGrid } from './components/QuickMerchantGrid';
import { SchemeDrawer } from './components/SchemeDrawer';
import { SourceGuideModal } from './components/SourceGuideModal';
import { ExpiryAlertModal } from './components/ExpiryAlertModal';
import { checkValidity } from './utils/validityChecker';
import { CreditCard, Layers, ShieldCheck, ArrowUp, Search } from 'lucide-react';

export function App() {
  // 自動由系統當前真實日期判定：
  // 1. 是否為週末六日 (週六 = 6, 週日 = 0)
  // 2. 是否為 8 月生日當月
  const [context, setContext] = useState<UserContext>(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const currentMonth = today.getMonth() + 1; // 1 ~ 12
    const birthMonth = 8; // 使用者生日為 8 月

    return {
      birthMonth,
      isCurrentMonthBirthday: currentMonth === birthMonth,
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
      cubeLevel: 'level2', // 預設持有帳戶扣繳 (3.0%)
      selectedPayMethod: 'all',
    };
  });

  // 目前選取的通路（預設選中 PlayStation）
  const [selectedMerchantId, setSelectedMerchantId] = useState<string>('playstation');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('favorites');
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isExpiryAlertOpen, setIsExpiryAlertOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ❤️ 使用者常用通路 (預設為空清單 []，由使用者自行點擊愛心加入)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cc_favorites');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      // 若是上一版本預設寫入的範例清單，自動重置為乾淨空清單
      if (Array.isArray(parsed) && parsed.length === 7 && parsed.includes('playstation') && parsed.includes('uncle-shawn-1')) {
        localStorage.removeItem('cc_favorites');
        return [];
      }
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (merchantId: string) => {
    setFavorites((prev) => {
      const next = prev.includes(merchantId)
        ? prev.filter((id) => id !== merchantId)
        : [...prev, merchantId];
      try {
        localStorage.setItem('cc_favorites', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // 錨點 Refs
  const resultSectionRef = useRef<HTMLDivElement>(null);
  const searchSectionRef = useRef<HTMLDivElement>(null);

  // 監聽滾動以顯示/隱藏置頂按鈕
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滾動到結果區塊
  const scrollToResult = () => {
    setTimeout(() => {
      resultSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // 滾動回頂端搜尋框
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    if (input) {
      setTimeout(() => input.focus(), 300);
    }
  };

  // 根據搜尋字串或選取的 ID 動態計算出當前的 Merchant
  const activeMerchant = useMemo<Merchant>(() => {
    const selected = MERCHANTS.find((m) => m.id === selectedMerchantId);

    // 1. 若有搜尋字串
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();

      // 若目前選取的 merchant 剛好符合搜尋條件，優先維持選取
      if (
        selected &&
        (selected.name.toLowerCase().includes(q) ||
          selected.tags.some((t) => t.toLowerCase().includes(q)) ||
          selected.categoryLabel.toLowerCase().includes(q))
      ) {
        return selected;
      }

      // 否則尋找第一個匹配的
      const match = MERCHANTS.find(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q)) ||
          m.categoryLabel.toLowerCase().includes(q)
      );
      if (match) {
        return match;
      }

      // 若兩張卡都不適用特定加碼，自動生成「一般消費」判定
      return {
        id: `custom-${searchQuery}`,
        name: `${searchQuery.trim()}（一般消費）`,
        category: 'general',
        categoryLabel: '一般消費',
        tags: [searchQuery.trim()],
        validUntil: '2026/12/31',
        lastVerifiedAt: '2026/08/29',
        cube: {
          scheme: 'general',
          schemeName: '一般消費',
          rate: 0.3,
          note: '未在 CUBE 特約加碼清單，適用一般消費 0.3%（若切換「固定回饋」方案則 1.2%）'
        },
        richart: {
          scheme: 'weekend',
          schemeName: '假日刷 (週末2.0%) / 平日 1.0%',
          rate: 2.0,
          note: '週末六日一般消費 2.0% / 平日 1.0%'
        },
        tips: `「${searchQuery.trim()}」未在雙卡特約加碼名單中：週末六日刷【台新 Richart 卡】切換【假日刷】享 2.0% 台新 Point，平日刷 Richart 卡享 1.0%，均優於 CUBE 的 0.3%！`
      };
    }

    // 2. 若無搜尋字串，返回選取的 Merchant
    return selected || MERCHANTS[0];
  }, [searchQuery, selectedMerchantId]);

  // 當選取的通路已過期時，自動跳出 Popup 彈窗警告
  useEffect(() => {
    const validity = checkValidity(activeMerchant.validUntil);
    if (validity.status === 'expired') {
      setIsExpiryAlertOpen(true);
    }
  }, [activeMerchant.id, activeMerchant.validUntil]);

  const handleSelectMerchant = (merchant: Merchant) => {
    // 保留搜尋結果，不主動清空 searchQuery！
    setSelectedMerchantId(merchant.id);
    scrollToResult();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans relative">
      {/* Top Header (Single-line Compact Layout) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-linear-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-xs">
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight whitespace-nowrap flex items-center gap-1.5">
              <span>刷卡決策小幫手</span>
              <span className="text-[11px] sm:text-xs font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md border border-indigo-100 hidden sm:inline">
                CUBE 🆚 Richart
              </span>
            </h1>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <button
              onClick={() => setIsSourceOpen(true)}
              className="flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors text-[11px] sm:text-xs font-semibold border border-amber-200 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>資料出處</span>
            </button>

            <button
              onClick={() => setIsSchemeOpen(true)}
              className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-[11px] sm:text-xs font-semibold border border-slate-200 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>方案總表</span>
            </button>
          </div>
        </div>
      </header>

      {/* Top Context Switcher (自動判定平日/假日、生日月、CUBE Level) */}
      <TopContextBar context={context} onUpdateContext={setContext} />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* 上方區塊：查詢視窗與常用通路按鈕 */}
        <section ref={searchSectionRef} className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              🔍 查詢通路
            </h3>
            <span className="text-xs text-slate-500">
              共 {MERCHANTS.length} 個精選特店
            </span>
          </div>

          <QuickMerchantGrid
            merchants={MERCHANTS}
            selectedMerchantId={selectedMerchantId}
            onSelectMerchant={handleSelectMerchant}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>

        {/* 下方區塊：查詢結果 (決策卡片) - 設有自動平滑滾動錨點 */}
        <section ref={resultSectionRef} className="space-y-2 pt-4 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
              <span>🎯 最佳刷卡決策結果：</span>
            </h3>
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
              即時精算中
            </span>
          </div>

          <MerchantDecisionCard
            merchant={activeMerchant}
            context={context}
            onOpenSchemeModal={() => setIsSchemeOpen(true)}
            onOpenSourceModal={() => setIsSourceOpen(true)}
            onOpenExpiryAlertModal={() => setIsExpiryAlertOpen(true)}
            isFavorite={favorites.includes(activeMerchant.id)}
            onToggleFavorite={() => toggleFavorite(activeMerchant.id)}
          />
        </section>
      </main>

      {/* 🚀 懸浮置頂/回搜尋框按鈕 (Floating Back-to-Search Button) */}
      {showScrollTop && (
        <button
          onClick={scrollToSearch}
          className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-4 py-3 bg-slate-900/90 hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-2xl backdrop-blur-md border border-slate-700/60 transition-all hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-5 duration-200 group"
          title="快速回到上方搜尋框"
        >
          <Search className="w-4 h-4 text-indigo-400 group-hover:text-white" />
          <span>回搜尋框</span>
          <ArrowUp className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-white" />
        </button>
      )}

      {/* Expiry Alert Popup Modal (自動彈出 / 點擊警報彈出) */}
      <ExpiryAlertModal
        isOpen={isExpiryAlertOpen}
        onClose={() => setIsExpiryAlertOpen(false)}
        merchant={activeMerchant}
        onOpenSourceModal={() => setIsSourceOpen(true)}
      />

      {/* Full Scheme Catalog Modal */}
      <SchemeDrawer
        isOpen={isSchemeOpen}
        onClose={() => setIsSchemeOpen(false)}
      />

      {/* Official Sources & Data Maintenance Modal */}
      <SourceGuideModal
        isOpen={isSourceOpen}
        onClose={() => setIsSourceOpen(false)}
      />

      {/* Minimal Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        <p>專屬自用刷卡決策工具 • 國泰 CUBE 卡 ＆ 台新 Richart 卡權益即時比對</p>
      </footer>
    </div>
  );
}

export default App;
