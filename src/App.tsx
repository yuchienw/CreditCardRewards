import { useState, useMemo } from 'react';
import { CREDIT_CARDS } from './data/cards';
import type { CategoryType } from './types/card';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { CardItem } from './components/CardItem';
import { RewardCalculator } from './components/RewardCalculator';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { Footer } from './components/Footer';
import { 
  ArrowUpDown, 
  RotateCcw, 
  SearchX, 
  Calculator, 
  Layers
} from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedBank, setSelectedBank] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'maxRate' | 'domesticRate' | 'overseasRate' | 'name'>('maxRate');
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // 取得所有銀行清單
  const allBanks = useMemo(() => {
    return Array.from(new Set(CREDIT_CARDS.map((c) => c.bank)));
  }, []);

  // 比較選取切換
  const handleToggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 4) {
        alert('最多只能同時比較 4 張信用卡喔！');
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearCompare = () => {
    setComparedIds([]);
  };

  // 篩選與排序邏輯
  const filteredCards = useMemo(() => {
    return CREDIT_CARDS.filter((card) => {
      // 銀行篩選
      if (selectedBank !== 'all' && card.bank !== selectedBank) {
        return false;
      }

      // 分類篩選
      if (selectedCategory !== 'all') {
        const matchesCategory =
          card.rewards.some((r) => r.category === selectedCategory) ||
          (selectedCategory === 'general' && card.generalDomesticRate >= 1.0) ||
          (selectedCategory === 'overseas' && card.generalOverseasRate >= 2.5);

        if (!matchesCategory) return false;
      }

      // 關鍵字搜尋
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const matchesBank = card.bank.toLowerCase().includes(query);
        const matchesName = card.name.toLowerCase().includes(query);
        const matchesBadge = card.badge?.toLowerCase().includes(query);
        const matchesHighlights = card.highlights.some((h) => h.toLowerCase().includes(query));
        const matchesRewards = card.rewards.some(
          (r) =>
            r.name.toLowerCase().includes(query) ||
            r.channels.some((ch) => ch.toLowerCase().includes(query)) ||
            r.condition.toLowerCase().includes(query)
        );

        if (!matchesBank && !matchesName && !matchesBadge && !matchesHighlights && !matchesRewards) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const getMaxRate = (c: typeof a) =>
        Math.max(c.generalDomesticRate, c.generalOverseasRate, ...c.rewards.map((r) => r.rate));

      if (sortBy === 'maxRate') {
        return getMaxRate(b) - getMaxRate(a);
      }
      if (sortBy === 'domesticRate') {
        return b.generalDomesticRate - a.generalDomesticRate;
      }
      if (sortBy === 'overseasRate') {
        return b.generalOverseasRate - a.generalOverseasRate;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name, 'zh-Hant');
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedBank, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBank('all');
    setSortBy('maxRate');
  };

  const isFiltered = searchQuery !== '' || selectedCategory !== 'all' || selectedBank !== 'all';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={comparedIds.length}
      />

      {/* Hero Header & Search */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCards={CREDIT_CARDS.length}
      />

      {/* Category Pills Bar */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Bar (Bank Filter, Sorter, Reset) */}
        <div className="bg-white rounded-2xl p-4 mb-6 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="text-slate-700 font-semibold">
              找到 <span className="text-indigo-600 font-bold">{filteredCards.length}</span> 張符合條件的卡片
            </span>

            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重設篩選</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            {/* Bank Select */}
            <div className="flex items-center space-x-1.5">
              <label htmlFor="bank-filter" className="text-slate-700 font-medium">銀行：</label>
              <select
                id="bank-filter"
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
              >
                <option value="all">全部銀行 ({allBanks.length})</option>
                {allBanks.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorter */}
            <div className="flex items-center space-x-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <label htmlFor="sort-filter" className="text-slate-700 font-medium">排序：</label>
              <select
                id="sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
              >
                <option value="maxRate">指定最高回饋率</option>
                <option value="domesticRate">國內一般回饋率</option>
                <option value="overseasRate">國外一般回饋率</option>
                <option value="name">卡片名稱</option>
              </select>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                isCompared={comparedIds.includes(card.id)}
                onToggleCompare={handleToggleCompare}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <SearchX className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-800">找不到符合條件的信用卡</h3>
              <p className="text-xs text-slate-700">
                嘗試更換搜尋關鍵字，或點擊下方按鈕重設所有篩選條件。
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>清除搜尋與篩選條件</span>
            </button>
          </div>
        )}
      </main>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 sm:hidden z-30 flex flex-col space-y-2">
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="p-3 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-600/30 flex items-center justify-center hover:bg-indigo-700 transition-colors"
          title="回饋試算機"
        >
          <Calculator className="w-5 h-5" />
        </button>
        {comparedIds.length > 0 && (
          <button
            onClick={() => setIsCompareOpen(true)}
            className="p-3 bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center relative hover:bg-slate-800 transition-colors"
            title="卡片比較"
          >
            <Layers className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {comparedIds.length}
            </span>
          </button>
        )}
      </div>

      {/* Reward Calculator Modal */}
      <RewardCalculator
        cards={CREDIT_CARDS}
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Comparison Drawer / Modal */}
      <ComparisonDrawer
        cards={CREDIT_CARDS}
        comparedIds={comparedIds}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemoveCard={handleRemoveCompare}
        onClearAll={handleClearCompare}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
