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
  X,
  Heart
} from 'lucide-react';

interface QuickMerchantGridProps {
  merchants: Merchant[];
  selectedMerchantId: string;
  onSelectMerchant: (merchant: Merchant) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const BASE_CATEGORY_TABS = [
  { id: 'all', label: '全部通路', icon: Sparkles },
  { id: 'favorites', label: '常用通路', icon: Heart, isFavoriteTab: true },
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
  favorites,
  onToggleFavorite,
}) => {
  const filteredMerchants = merchants.filter((m) => {
    // 常用通路篩選
    if (selectedCategory === 'favorites') {
      if (!favorites.includes(m.id)) {
        return false;
      }
    } else if (selectedCategory !== 'all' && m.category !== selectedCategory) {
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

  const handleSearchSubmit = () => {
    if (filteredMerchants.length > 0) {
      onSelectMerchant(filteredMerchants[0]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Search Input with Dedicated Submit Button */}
      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchSubmit();
          }}
          className="relative flex items-center bg-white rounded-2xl border-2 border-indigo-200/80 shadow-md p-1.5 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all"
        >
          <Search className="w-5 h-5 text-indigo-500 ml-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜尋通路 (例如: 50嵐, 燒肉, 牛肉麵, PlayStation, 蝦皮, 全聯, 新光三越)..."
            className="w-full px-3 py-2.5 bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-hidden font-medium text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              title="清除搜尋"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>搜尋送出</span>
          </button>
        </form>
      </div>

      {/* Persistent Search Results Status Bar */}
      {searchQuery.trim() !== '' && (
        <div className="flex items-center justify-between bg-indigo-50/80 border border-indigo-100 px-3.5 py-2 rounded-xl text-xs text-indigo-900">
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              🔍 搜尋「<span className="text-indigo-600 font-bold">{searchQuery}</span>」：
            </span>
            <span>
              共找到 <strong className="text-indigo-700 text-sm">{filteredMerchants.length}</strong> 個相符通路（點擊任一卡片即可查看決策）
            </span>
          </div>
          <button
            onClick={() => onSearchChange('')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 ml-2 shrink-0 cursor-pointer"
          >
            清除搜尋結果
          </button>
        </div>
      )}

      {/* Category Pills Bar */}
      <div className="overflow-x-auto no-scrollbar pb-1">
        <div className="flex space-x-1.5 min-w-max">
          {BASE_CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            const isFav = tab.id === 'favorites';
            const countLabel = isFav ? ` (${favorites.length})` : '';

            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? isFav
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-900 text-white shadow-xs'
                    : isFav
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${
                  isSelected 
                    ? 'text-white' 
                    : isFav 
                    ? 'text-rose-500 fill-rose-500' 
                    : 'text-slate-400'
                }`} />
                <span>{tab.label}{countLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State for Favorites */}
      {selectedCategory === 'favorites' && filteredMerchants.length === 0 && (
        <div className="p-8 text-center bg-white rounded-2xl border-2 border-dashed border-rose-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mx-auto text-rose-500">
            <Heart className="w-6 h-6 fill-rose-100 text-rose-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">尚無常用通路</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              點擊任何店家卡片右上角的 <span className="text-rose-500 font-bold">❤️ 愛心按鈕</span>，即可將您最常消費的店家加入常用清單！
            </p>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            瀏覽全部通路
          </button>
        </div>
      )}

      {/* Quick Merchants Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {filteredMerchants.map((merchant) => {
          const isSelected = selectedMerchantId === merchant.id;
          const isFavorite = favorites.includes(merchant.id);
          const validity = checkValidity(merchant.validUntil);

          return (
            <div
              key={merchant.id}
              onClick={() => onSelectMerchant(merchant)}
              className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between group relative overflow-hidden cursor-pointer ${
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

                  <div className="flex items-center gap-1">
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
                    
                    {/* ❤️ Heart Toggle Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(merchant.id);
                      }}
                      className={`p-1 rounded-full transition-all cursor-pointer hover:scale-125 active:scale-95 ${
                        isFavorite
                          ? 'text-rose-500'
                          : isSelected
                          ? 'text-white/40 hover:text-rose-300'
                          : 'text-slate-300 hover:text-rose-400'
                      }`}
                      title={isFavorite ? '從常用通路移除' : '加入常用通路'}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isFavorite ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <h4
                  className={`font-extrabold text-sm sm:text-base leading-tight mt-1 line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-900 group-hover:text-indigo-600'
                  }`}
                >
                  {merchant.name}
                </h4>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100/60 dark:border-white/10 flex items-center justify-between text-xs">
                <span className={`text-[11px] font-medium ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                  回饋率
                </span>
                <div className="flex items-center space-x-1.5 font-black text-xs">
                  <span className={isSelected ? 'text-indigo-200' : 'text-indigo-600'}>
                    {merchant.cube.rate}%
                  </span>
                  <span className={isSelected ? 'text-white/40' : 'text-slate-300'}>|</span>
                  <span className={isSelected ? 'text-rose-200' : 'text-rose-600'}>
                    {merchant.richart.rate}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
