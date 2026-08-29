import React from 'react';
import type { UserContext } from '../types/merchant';
import { Cake, Calendar, Award, Sparkles } from 'lucide-react';

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
          <span className="font-semibold text-slate-300">情境與等級即時切換：</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
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

          {/* Birthday toggle button */}
          <button
            onClick={toggleBirthday}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isCurrentMonthBirthday
                ? 'bg-linear-to-r from-rose-500 to-pink-600 text-white border-pink-400 shadow-xs shadow-pink-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="切換是否為生日月份（觸發 CUBE 慶生月 10% 回饋）"
          >
            <Cake className="w-3.5 h-3.5" />
            <span>
              {context.isCurrentMonthBirthday
                ? `🎂 ${context.birthMonth}月壽星 (慶生月加碼啟用)`
                : `🎂 設定為壽星月份 (${context.birthMonth}月)`}
            </span>
          </button>

          {/* Weekend toggle button */}
          <button
            onClick={toggleWeekend}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
              context.isWeekend
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-xs'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="切換今天是平日還是週末假日（影響台新假日刷 2%）"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{context.isWeekend ? '🌴 週末假日 (假日刷 2%)' : '💼 平日 (一般 1%)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
