import React from 'react';
import type { UserContext } from '../types/merchant';
import { Cake, Calendar, Sparkles } from 'lucide-react';

interface TopContextBarProps {
  context: UserContext;
  onUpdateContext: (updater: (prev: UserContext) => UserContext) => void;
}

export const TopContextBar: React.FC<TopContextBarProps> = ({
  context,
  onUpdateContext,
}) => {
  const toggleBirthday = () => {
    onUpdateContext((prev) => ({
      ...prev,
      isCurrentMonthBirthday: !prev.isCurrentMonthBirthday,
    }));
  };

  const toggleWeekend = () => {
    onUpdateContext((prev) => ({
      ...prev,
      isWeekend: !prev.isWeekend,
    }));
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-200 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-1.5 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold text-slate-300">情境變數切換：</span>
          <span className="hidden sm:inline text-slate-500">（自動影響 CUBE 慶生月 10% 與台新假日刷 2% 決策）</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Birthday toggle button */}
          <button
            onClick={toggleBirthday}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isCurrentMonthBirthday
                ? 'bg-linear-to-r from-rose-500 to-pink-600 text-white border-pink-400 shadow-xs shadow-pink-500/30 ring-2 ring-pink-400/50'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="切換是否為生日月份（觸發 CUBE 慶生月 10% 回饋）"
          >
            <Cake className="w-3.5 h-3.5" />
            <span>
              {context.isCurrentMonthBirthday
                ? `🎂 ${context.birthMonth}月壽星 (慶生月加碼啟用中)`
                : `🎂 設定為壽星月份 (${context.birthMonth}月)`}
            </span>
          </button>

          {/* Weekend toggle button */}
          <button
            onClick={toggleWeekend}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isWeekend
                ? 'bg-amber-500 text-amber-950 border-amber-400 shadow-xs shadow-amber-500/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="切換今天是平日還是週末假日（影響台新假日刷 2%）"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{context.isWeekend ? '🌴 週末/假日 (假日刷 2%)' : '💼 平日 (一般 1%)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
