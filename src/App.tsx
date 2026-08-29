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
import { CreditCard, Layers, ShieldCheck } from 'lucide-react';

export function App() {
  // 使用者情境變數（預設 8 月壽星、CUBE Level 2 帳戶扣繳 3.0%）
  const [context, setContext] = useState<UserContext>({
    birthMonth: 8,
    isCurrentMonthBirthday: true, // 預設開啟 8 月生日慶生特店加碼 (10%)
    isWeekend: false,
    cubeLevel: 'level2',
    selectedPayMethod: 'all',
  });

  // 目前選取的通路（預設選中 PlayStation）
  const [selectedMerchantId, setSelectedMerchantId] = useState<string>('playstation');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isExpiryAlertOpen, setIsExpiryAlertOpen] = useState(false);

  // 結果區域的滾動錨點 Ref
  const resultSectionRef = useRef<HTMLDivElement>(null);

  // 滾動到結果區塊
  const scrollToResult = () => {
    setTimeout(() => {
      resultSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // 根據搜尋字串或選取的 ID 動態計算出當前的 Merchant
  const activeMerchant = useMemo<Merchant>(() => {
    // 1. 若有搜尋字串
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const match = MERCHANTS.find(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
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
    const found = MERCHANTS.find((m) => m.id === selectedMerchantId);
    return found || MERCHANTS[0];
  }, [searchQuery, selectedMerchantId]);

  // 當選取的通路已過期時，自動跳出 Popup 彈窗警告
  useEffect(() => {
    const validity = checkValidity(activeMerchant.validUntil);
    if (validity.status === 'expired') {
      setIsExpiryAlertOpen(true);
    }
  }, [activeMerchant.id, activeMerchant.validUntil]);

  const handleSelectMerchant = (merchant: Merchant) => {
    setSearchQuery('');
    setSelectedMerchantId(merchant.id);
    scrollToResult();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-xs">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight leading-none">
                刷卡決策小幫手
              </h1>
              <span className="text-[10px] text-slate-500 font-medium">
                國泰 CUBE 卡 🆚 台新 Richart 卡
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSourceOpen(true)}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors text-xs font-semibold border border-amber-200"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>資料出處與維護</span>
            </button>

            <button
              onClick={() => setIsSchemeOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-semibold border border-slate-200"
            >
              <Layers className="w-3.5 h-3.5 text-slate-600" />
              <span>方案總表</span>
            </button>
          </div>
        </div>
      </header>

      {/* Top Context Switcher (CUBE Level, 8月生日月, 週末假日) */}
      <TopContextBar context={context} onUpdateContext={setContext} />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* 上方區塊：查詢視窗與常用通路按鈕 */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              🔍 查詢通路（輸入任何店家或點擊常用按鈕）：
            </h3>
            <span className="text-xs text-slate-500">
              共 {MERCHANTS.length} 個精選特店 • 支援任意店家一般消費
            </span>
          </div>

          <QuickMerchantGrid
            merchants={MERCHANTS}
            selectedMerchantId={searchQuery.trim() ? '' : selectedMerchantId}
            onSelectMerchant={handleSelectMerchant}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
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
          />
        </section>
      </main>

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
