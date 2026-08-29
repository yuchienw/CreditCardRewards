import React, { useState } from 'react';
import type { CreditCard as CreditCardType } from '../types/card';
import { 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Check, 
  Lightbulb, 
  Coins 
} from 'lucide-react';

interface CardItemProps {
  card: CreditCardType;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
  highlightCategory?: string;
}

export const CardItem: React.FC<CardItemProps> = ({
  card,
  isCompared,
  onToggleCompare,
}) => {
  const [expanded, setExpanded] = useState(false);

  // 計算最高回饋率
  const maxRewardRate = Math.max(
    card.generalDomesticRate,
    card.generalOverseasRate,
    ...card.rewards.map((r) => r.rate)
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Top Banner / Card Simulation */}
      <div className={`p-5 bg-linear-to-r ${card.colorGradient} text-white relative overflow-hidden`}>
        {/* Abstract pattern */}
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-4 translate-y-4 pointer-events-none">
          <div className="w-36 h-36 rounded-full border-8 border-white" />
        </div>

        <div className="flex items-start justify-between relative z-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              {card.bank}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
              {card.name}
            </h3>
          </div>

          {card.badge && (
            <span className="px-2.5 py-1 text-xs font-bold bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-amber-200 shadow-xs">
              {card.badge}
            </span>
          )}
        </div>

        {/* Currency type & Domestic / Overseas quick metrics */}
        <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/15 text-xs text-white/90">
          <div>
            <div className="text-white/60 text-[10px]">國內一般</div>
            <div className="text-base font-bold text-white">{card.generalDomesticRate}%</div>
          </div>
          <div>
            <div className="text-white/60 text-[10px]">國外一般</div>
            <div className="text-base font-bold text-white">{card.generalOverseasRate}%</div>
          </div>
          <div>
            <div className="text-white/60 text-[10px]">指定最高</div>
            <div className="text-base font-bold text-amber-300">{maxRewardRate}%</div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Reward Currency Badge & Annual Fee */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 font-medium border border-amber-200">
            <Coins className="w-3.5 h-3.5 text-amber-600" />
            <span>{card.currencyRewardType}</span>
          </div>
          <span className="text-slate-500 text-[11px]">{card.annualFeeInfo}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
          {card.highlights.slice(0, 3).map((hl, i) => (
            <li key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{hl}</span>
            </li>
          ))}
        </ul>

        {/* Featured Specific Reward Items */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            熱門通路回饋：
          </span>
          <div className="space-y-2">
            {card.rewards.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
              >
                <div className="pr-2 truncate">
                  <div className="font-semibold text-slate-800 truncate">{item.name}</div>
                  <div className="text-slate-700 text-[11px] truncate mt-0.5">
                    {item.channels.slice(0, 3).join('、')}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-extrabold text-indigo-600">
                    {item.rate}%
                  </div>
                  <div className="text-[10px] text-slate-700">{item.capText}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded View with Full Reward List and Tips */}
        {expanded && (
          <div className="pt-3 border-t border-slate-200 space-y-4 animate-fadeIn">
            {/* All Rewards */}
            {card.rewards.length > 2 && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500">其他專屬回饋：</span>
                {card.rewards.slice(2).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
                  >
                    <div className="pr-2">
                      <div className="font-semibold text-slate-800">{item.name}</div>
                      <div className="text-slate-700 text-[11px] mt-0.5">
                        {item.channels.join('、')}
                      </div>
                      <div className="text-[10px] text-slate-700 mt-0.5">
                        門檻：{item.condition}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-indigo-600">{item.rate}%</div>
                      <div className="text-[10px] text-slate-700">{item.capText}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Practical Tips */}
            {card.tips && card.tips.length > 0 && (
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5 text-xs text-amber-950">
                <div className="flex items-center space-x-1 font-semibold text-amber-800">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>達人實用心得與眉角</span>
                </div>
                <ul className="space-y-1 text-slate-700 text-[11px] list-disc list-inside">
                  {card.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] text-slate-700 pt-1">
              <span className="flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{card.lastUpdated}</span>
              </span>
              {card.officialUrl && (
                <a
                  href={card.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center space-x-0.5"
                >
                  <span>官方權益詳情</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-2 flex items-center space-x-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors"
          >
            <span>{expanded ? '收合詳情' : '展開完整權益'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => onToggleCompare(card.id)}
            className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center space-x-1 transition-colors ${
              isCompared
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/50'
            }`}
          >
            {isCompared ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>已加入比較</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>加入比較</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
