import React from 'react';
import type { CreditCard as CreditCardType } from '../types/card';
import { X, Layers, Trash2, CheckCircle2, ExternalLink } from 'lucide-react';

interface ComparisonDrawerProps {
  cards: CreditCardType[];
  comparedIds: string[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveCard: (id: string) => void;
  onClearAll: () => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  cards,
  comparedIds,
  isOpen,
  onClose,
  onRemoveCard,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const comparedCards = cards.filter((c) => comparedIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-5xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">信用卡方案對比 ({comparedCards.length}/4)</h3>
              <p className="text-xs text-slate-400">橫向並列比較各卡回饋率、幣別與年費條件</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {comparedCards.length > 0 && (
              <button
                onClick={onClearAll}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs text-rose-300 hover:text-white hover:bg-rose-500/20 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>清空比較</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          {comparedCards.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Layers className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-slate-600 font-medium">尚未加入任何要比較的卡片</p>
              <p className="text-xs text-slate-700">請在卡片列表點擊「加入比較」按鈕以進行對比（最多 4 張）</p>
            </div>
          ) : (
            <div className="min-w-[650px] grid grid-cols-4 gap-4">
              {comparedCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl border border-slate-200 bg-white flex flex-col justify-between overflow-hidden shadow-xs"
                >
                  {/* Card Visual Header */}
                  <div className={`p-4 bg-linear-to-r ${card.colorGradient} text-white relative`}>
                    <button
                      onClick={() => onRemoveCard(card.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors"
                      title="移除"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="text-[11px] font-semibold text-white/80">{card.bank}</div>
                    <div className="text-base font-bold text-white mt-0.5">{card.name}</div>
                    <div className="text-[11px] text-amber-200 mt-1 font-medium">{card.badge || '熱門首選'}</div>
                  </div>

                  <div className="p-4 space-y-4 text-xs flex-1">
                    {/* Rate Specs */}
                    <div className="space-y-2 pb-3 border-b border-slate-100">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">國內一般</span>
                        <span className="font-bold text-slate-800">{card.generalDomesticRate}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">國外一般</span>
                        <span className="font-bold text-slate-800">{card.generalOverseasRate}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">回饋幣別</span>
                        <span className="font-semibold text-amber-700 truncate max-w-[120px]">{card.currencyRewardType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">年費門檻</span>
                        <span className="text-slate-700 text-[11px] text-right truncate max-w-[120px]">{card.annualFeeInfo}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-700 text-[11px]">權益亮點：</span>
                      {card.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start space-x-1.5 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2 text-[11px]">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Rewards list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="font-bold text-slate-700 text-[11px]">精選指定通路：</span>
                      {card.rewards.slice(0, 2).map((r, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
                          <div className="flex justify-between font-semibold text-slate-800">
                            <span>{r.name}</span>
                            <span className="text-indigo-600 font-bold">{r.rate}%</span>
                          </div>
                          <div className="text-slate-700 text-[10px] truncate mt-0.5">{r.capText}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {card.officialUrl && (
                    <div className="p-3 bg-slate-50 border-t border-slate-100">
                      <a
                        href={card.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-1 text-indigo-600 hover:text-indigo-800 text-xs font-semibold py-1.5"
                      >
                        <span>官方網站</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
