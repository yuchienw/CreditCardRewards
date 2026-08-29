import { useState } from 'react';
import { MERCHANTS } from './data/merchants';
import type { Merchant, UserContext } from './types/merchant';
import { TopContextBar } from './components/TopContextBar';
import { MerchantDecisionCard } from './components/MerchantDecisionCard';
import { QuickMerchantGrid } from './components/QuickMerchantGrid';
import { SchemeDrawer } from './components/SchemeDrawer';
import { CreditCard, Layers } from 'lucide-react';

export function App() {
  // 使用者情境變數（預設 8 月壽星）
  const [context, setContext] = useState<UserContext>({
    birthMonth: 8,
    isCurrentMonthBirthday: true, // 預設開啟 8 月生日慶生特店加碼 (10%)
    isWeekend: false,
    selectedPayMethod: 'all',
  });

  // 目前選取的通路（預設選中 PlayStation）
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant>(
    MERCHANTS.find((m) => m.id === 'playstation') || MERCHANTS[0]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);

  // 當搜尋字串精準符合某個通路時，自動切換該通路
  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    if (q.trim()) {
      const match = MERCHANTS.find(
        (m) =>
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.tags.some((t) => t.toLowerCase() === q.toLowerCase().trim())
      );
      if (match) {
        setSelectedMerchant(match);
      }
    }
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

          <button
            onClick={() => setIsSchemeOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-semibold border border-slate-200"
          >
            <Layers className="w-3.5 h-3.5 text-slate-600" />
            <span>權益方案總表</span>
          </button>
        </div>
      </header>

      {/* Top Context Switcher (8月生日月 / 週末假日) */}
      <TopContextBar context={context} onUpdateContext={setContext} />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Primary Decision Card */}
        <section>
          <MerchantDecisionCard
            merchant={selectedMerchant}
            context={context}
            onOpenSchemeModal={() => setIsSchemeOpen(true)}
          />
        </section>

        {/* Quick Merchant Selection Grid & Search */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              點擊通路直接查詢（或打字搜尋）：
            </h3>
            <span className="text-xs text-slate-500">
              共 {MERCHANTS.length} 個常用精選特店
            </span>
          </div>

          <QuickMerchantGrid
            merchants={MERCHANTS}
            selectedMerchantId={selectedMerchant.id}
            onSelectMerchant={(m) => {
              setSelectedMerchant(m);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>
      </main>

      {/* Full Scheme Catalog Modal */}
      <SchemeDrawer
        isOpen={isSchemeOpen}
        onClose={() => setIsSchemeOpen(false)}
      />

      {/* Minimal Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        <p>專屬自用刷卡決策工具 • 國泰 CUBE 卡 ＆ 台新 Richart 卡權益即時比對</p>
      </footer>
    </div>
  );
}

export default App;
