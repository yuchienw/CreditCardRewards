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
    <div className="bg-slate-900 border-b border-slate-800 text-slate-200 text-xs py-2.5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center space-x-1.5 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold text-slate-300">
            自動判定情境（點擊可手動切換測試）：
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Automatic Weekend / Weekday detection with manual toggle */}
          <button
            onClick={toggleWeekend}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isWeekend
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-xs'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title="系統已自動根據今日日期判定！點擊可手動切換平日/週末測試"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>
              {context.isWeekend
                ? `🌴 今日${currentDayName} (自動判定週末 假日刷2%)`
                : `💼 今日${currentDayName} (自動判定平日 一般1%)`}
            </span>
          </button>

          {/* Birthday toggle button */}
          <button
            onClick={toggleBirthday}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isCurrentMonthBirthday
                ? 'bg-linear-to-r from-rose-500 to-pink-600 text-white border-pink-400 shadow-xs shadow-pink-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="系統已自動根據當前月份判定！點擊可手動切換"
          >
            <Cake className="w-3.5 h-3.5" />
            <span>
              {context.isCurrentMonthBirthday
                ? `🎂 ${context.birthMonth}月壽星 (慶生月 10% 啟用)`
                : `🎂 非壽星月份 (${context.birthMonth}月生日)`}
            </span>
          </button>

          {/* CUBE Level switcher */}
          <button
            onClick={cycleCubeLevel}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.cubeLevel === 'level3'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-xs'
                : context.cubeLevel === 'level2'
                ? 'bg-indigo-600 text-white border-indigo-400'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="點擊切換 CUBE 會員等級 (Level 1: 2% / Level 2: 3% / Level 3 VIP: 3.3%)"
          >
            <Award className="w-3.5 h-3.5" />
            <span>
              {context.cubeLevel === 'level3' && 'CUBE: Level 3 VIP (3.3%)'}
              {context.cubeLevel === 'level2' && 'CUBE: Level 2 帳戶扣繳 (3.0%)'}
              {context.cubeLevel === 'level1' && 'CUBE: Level 1 一般 (2.0%)'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
