import React from 'react';
import { Search, Sparkles, X } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCards: number;
}

const QUICK_TAGS = [
  'LINE Pay',
  '街口支付',
  '日本實體',
  'Apple Pay',
  '蝦皮購物',
  'Uber Eats',
  '高鐵機票',
  '無腦刷',
  'Netflix',
];

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  totalCards,
}) => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-indigo-900 via-indigo-800 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-indigo-200 text-xs sm:text-sm font-medium">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>收錄 {totalCards} 張台灣主流高回饋信用卡權益資訊</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          消費刷哪張？<br className="sm:hidden" />
          <span className="bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            一鍵查詢最殺回饋
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-indigo-200/90 leading-relaxed">
          支援搜尋銀行、卡片名稱、通路特店 (如 LINE Pay、日本實體、蝦皮、外送)。即時試算消費回饋與每月上限！
        </p>

        {/* Search Input Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-2xl rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 p-1.5 text-slate-800 focus-within:ring-2 focus-within:ring-indigo-400">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="搜尋通路 (例如: LINE Pay, 日本, 蝦皮, 叫車, 全聯) 或卡名、銀行..."
              className="w-full px-3 py-2.5 bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
                title="清除"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Keywords */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-indigo-200">
            <span className="text-indigo-300 font-medium">熱門搜尋：</span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className={`px-2.5 py-1 rounded-full transition-colors border ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-indigo-500 text-white border-indigo-400 font-semibold'
                    : 'bg-white/10 hover:bg-white/20 text-white/90 border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
