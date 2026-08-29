import React from 'react';
import type { Merchant } from '../types/merchant';
import { checkValidity } from '../utils/validityChecker';
import { 
  Gamepad2, 
  Smartphone, 
  ShoppingBag, 
  UtensilsCrossed, 
  Plane, 
  Store, 
  CreditCard, 
  Sparkles,
  Search,
  X
} from 'lucide-react';

interface QuickMerchantGridProps {
  merchants: Merchant[];
  selectedMerchantId: string;
  onSelectMerchant: (merchant: Merchant) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: '全部通路', icon: Sparkles },
  { id: 'game_stream', label: '遊戲 & 影音', icon: Gamepad2 },
  { id: 'mobile_pay', label: '行動支付', icon: Smartphone },
  { id: 'ecommerce', label: '網購電商', icon: ShoppingBag },
  { id: 'dining_delivery', label: '外送 & 餐飲', icon: UtensilsCrossed },
  { id: 'travel_traffic', label: '旅遊 & 交通', icon: Plane },
  { id: 'grocery_convenience', label: '量販 & 超商', icon: Store },
  { id: 'general', label: '一般消費', icon: CreditCard },
];

export const QuickMerchantGrid: React.FC<QuickMerchantGridProps> = ({
  merchants,
  selectedMerchantId,
  onSelectMerchant,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}) => {
  const filteredMerchants = merchants.filter((m) => {
    if (selectedCategory !== 'all' && m.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      const matchName = m.name.toLowerCase().includes(q);
      const matchTags = m.tags.some((t) => t.toLowerCase().includes(q));
      const matchCategory = m.categoryLabel.toLowerCase().includes(q);
      return matchName || matchTags || matchCategory;
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="relative flex items-center bg-white rounded-2xl border-2 border-indigo-200/80 shadow-md p-1.5 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
          <Search className="w-5 h-5 text-indigo-500 ml-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && filteredMerchants.length > 0) {
                onSelectMerchant(filteredMerchants[0]);
              }
            }}
            placeholder="搜尋通路 (例如: 50嵐, adidas, PlayStation, LINE Pay, 蝦皮, 全聯, 新光三越)..."
            className="w-full px-3 py-2.5 bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-hidden font-medium text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="overflow-x-auto no-scrollbar pb-1">
        <div className="flex space-x-1.5 min-w-max">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Merchants Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {filteredMerchants.map((merchant) => {
          const isSelected = selectedMerchantId === merchant.id;
          const validity = checkValidity(merchant.validUntil);
          return (
            <button
              key={merchant.id}
              onClick={() => onSelectMerchant(merchant)}
              className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between group relative overflow-hidden ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 ring-2 ring-indigo-600 ring-offset-2'
                  : 'bg-white text-slate-800 border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/30 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-indigo-200' : 'text-slate-700'
                    }`}
                  >
                    {merchant.categoryLabel}
                  </span>

                  {validity.status === 'expired' && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-rose-500 text-white font-bold animate-pulse">
                      已逾期
                    </span>
                  )}
                  {validity.status === 'expiring_soon' && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 font-bold">
                      即將到期
                    </span>
                  )}
                </div>

                <div className="font-bold text-xs sm:text-sm mt-0.5 line-clamp-1">
                  {merchant.name}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] pt-1.5 border-t border-current/10">
                <span className={isSelected ? 'text-indigo-200' : 'text-slate-700'}>
                  至 {merchant.validUntil.slice(5)}
                </span>
                <span className="font-extrabold text-xs">
                  {isSelected ? '已選取 🎯' : '查看 →'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
