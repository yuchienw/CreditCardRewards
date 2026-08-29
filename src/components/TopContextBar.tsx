import React from 'react';
import type { UserContext } from '../types/merchant';
import { Cake, Calendar, Award, Sparkles } from 'lucide-react';

interface TopContextBarProps {
  context: UserContext;
  onUpdateContext: (updater: (prev: UserContext) => UserContext) => void;
}

const WEEKDAY_NAMES = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

export const TopContextBar: React.FC<TopContextBarProps> = ({
  context,
  onUpdateContext,
}) => {
  const today = new Date();
  const currentDayName = WEEKDAY_NAMES[today.getDay()];

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

  const cycleCubeLevel = () => {
    onUpdateContext((prev) => {
      const nextLevel =
        prev.cubeLevel === 'level2'
          ? 'level3'
          : prev.cubeLevel === 'level3'
          ? 'level1'
          : 'level2';
      return { ...prev, cubeLevel: nextLevel };
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg text-slate-200 text-xs py-2 px-3 sm:px-6 transition-all">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2.5">
        {/* Desktop title only */}
        <div className="hidden sm:flex items-center space-x-1.5 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-semibold text-slate-300">
            即時情境切換：
          </span>
        </div>

        {/* 3 Buttons in a Clean Single Row on Mobile, Flex on Desktop: 1. 壽星 -> 2. 等級 -> 3. 週末 */}
        <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto sm:flex sm:flex-wrap items-center">
          {/* 1. Birthday toggle button (壽星移到最前面) */}
          <button
            onClick={toggleBirthday}
            className={`flex items-center justify-center space-x-1 py-1 px-1.5 sm:px-3 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition-all border cursor-pointer active:scale-95 text-center ${
              context.isCurrentMonthBirthday
                ? 'bg-linear-to-r from-rose-500 to-pink-600 text-white border-pink-400 shadow-xs shadow-pink-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:border-slate-500'
            }`}
            title="系統已自動根據當前月份判定！點擊可手動切換"
          >
            <Cake className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="truncate">
              {context.isCurrentMonthBirthday ? (
                <>
                  <span className="sm:hidden">🎂 壽星 10%</span>
                  <span className="hidden sm:inline">🎂 {context.birthMonth}月壽星 (10%)</span>
                </>
              ) : (
                <>
                  <span className="sm:hidden">🎂 非壽星月</span>
                  <span className="hidden sm:inline">🎂 非壽星月份</span>
                </>
              )}
            </span>
          </button>

          {/* 2. CUBE Level switcher (會員等級放中間) */}
          <button
            onClick={cycleCubeLevel}
            className={`flex items-center justify-center space-x-1 py-1 px-1.5 sm:px-3 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition-all border cursor-pointer active:scale-95 text-center ${
              context.cubeLevel === 'level3'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-xs'
                : context.cubeLevel === 'level2'
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-xs shadow-indigo-500/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="點擊切換 CUBE 等級 (Lv1: 2.0% / Lv2: 3.0% / Lv3: 3.3%)"
          >
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="truncate">
              {context.cubeLevel === 'level3' && '💳 Lv3 (3.3%)'}
              {context.cubeLevel === 'level2' && '💳 Lv2 (3.0%)'}
              {context.cubeLevel === 'level1' && '💳 Lv1 (2.0%)'}
            </span>
          </button>

          {/* 3. Automatic Weekend / Weekday detection (週末移到最後面) */}
          <button
            onClick={toggleWeekend}
            className={`flex items-center justify-center space-x-1 py-1 px-1.5 sm:px-3 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition-all border cursor-pointer active:scale-95 text-center ${
              context.isWeekend
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-xs shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:border-slate-500'
            }`}
            title="系統已自動根據今日日期判定！點擊可手動切換平日/週末測試"
          >
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300 shrink-0" />
            <span className="truncate">
              {context.isWeekend ? (
                <>
                  <span className="sm:hidden">🌴 週末 2%</span>
                  <span className="hidden sm:inline">🌴 今日{currentDayName} (週末 2%)</span>
                </>
              ) : (
                <>
                  <span className="sm:hidden">💼 {currentDayName} 1%</span>
                  <span className="hidden sm:inline">💼 今日{currentDayName} (平日 1%)</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
