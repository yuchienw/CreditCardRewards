import React, { useState } from 'react';
import type { CreditCard as CreditCardType } from '../types/card';
import { Calculator, X, Sparkles, AlertTriangle } from 'lucide-react';

interface RewardCalculatorProps {
  cards: CreditCardType[];
  isOpen: boolean;
  onClose: () => void;
}

const SCENARIOS = [
  { id: 'mobile_pay', label: '行動支付 (LINE Pay / 全支付 / 街口)', category: 'mobile_pay', defaultKeyword: 'LINE Pay' },
  { id: 'japan_korea', label: '日韓/海外實體旅遊', category: 'overseas', defaultKeyword: '日本' },
  { id: 'online_shopping', label: '電商網購 (蝦皮 / momo / PChome)', category: 'online_shopping', defaultKeyword: '網購' },
  { id: 'food_delivery', label: '美食外送 & 叫車 (Uber Eats / foodpanda)', category: 'food_delivery', defaultKeyword: '外送' },
  { id: 'transport', label: '機票航空 & 高鐵加油', category: 'transport', defaultKeyword: '高鐵' },
  { id: 'general', label: '國內一般消費 (無特定通路/無腦刷)', category: 'general', defaultKeyword: '' },
];

export const RewardCalculator: React.FC<RewardCalculatorProps> = ({
  cards,
  isOpen,
  onClose,
}) => {
  const [spendAmount, setSpendAmount] = useState<number>(10000);
  const [selectedScenario, setSelectedScenario] = useState<string>('mobile_pay');

  if (!isOpen) return null;

  const currentScenario = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];

  // 計算每張卡片在此情境下的預計回饋
  const calculatedResults = cards.map((card) => {
    // 找出該情境的最佳回饋項目
    const matchedRewards = card.rewards.filter(
      (r) =>
        r.category === currentScenario.category ||
        (currentScenario.defaultKeyword &&
          (r.name.includes(currentScenario.defaultKeyword) ||
            r.channels.some((c) => c.includes(currentScenario.defaultKeyword))))
    );

    let bestRewardItem = matchedRewards.length > 0
      ? matchedRewards.sort((a, b) => b.rate - a.rate)[0]
      : null;

    let appliedRate = 0;
    let earnedAmount = 0;
    let isCapped = false;
    let capNote = '';
    let rewardName = '';

    if (bestRewardItem) {
      appliedRate = bestRewardItem.rate;
      rewardName = bestRewardItem.name;
      const rawEarned = (spendAmount * appliedRate) / 100;

      if (bestRewardItem.capAmount && rawEarned > bestRewardItem.capAmount) {
        // 超過上限，多出的消費算一般消費回饋
        const maxEligibleSpend = bestRewardItem.maxSpend || (bestRewardItem.capAmount / (appliedRate / 100));
        const extraSpend = Math.max(0, spendAmount - maxEligibleSpend);
        const extraEarned = (extraSpend * card.generalDomesticRate) / 100;
        
        earnedAmount = Math.round(bestRewardItem.capAmount + extraEarned);
        isCapped = true;
        capNote = `已達上限！前 $${Math.round(maxEligibleSpend).toLocaleString()} 享 ${appliedRate}%，其餘享一般 ${card.generalDomesticRate}%`;
      } else {
        earnedAmount = Math.round(rawEarned);
      }
    } else {
      // 算一般消費回饋
      const fallbackRate = currentScenario.category === 'overseas' ? card.generalOverseasRate : card.generalDomesticRate;
      appliedRate = fallbackRate;
      earnedAmount = Math.round((spendAmount * appliedRate) / 100);
      rewardName = currentScenario.category === 'overseas' ? '國外一般消費' : '國內一般消費';
    }

    return {
      card,
      rewardName,
      appliedRate,
      earnedAmount,
      isCapped,
      capNote,
      bestRewardItem,
    };
  }).sort((a, b) => b.earnedAmount - a.earnedAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-linear-to-r from-indigo-700 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
              <Calculator className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold">消費回饋試算機</h2>
              <p className="text-xs text-indigo-200 mt-0.5">輸入每月消費預算，一秒找出賺最多回饋的神卡</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration inputs */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              選擇消費情境 / 通路
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenario(sc.id)}
                  className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                    selectedScenario === sc.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                預估每月消費金額 (NT$)
              </label>
              <div className="text-lg font-bold text-indigo-700">
                ${spendAmount.toLocaleString()} 元
              </div>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={spendAmount}
              onChange={(e) => setSpendAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[11px] text-slate-700 mt-1">
              <span>$1,000</span>
              <span>$25,000</span>
              <span>$50,000</span>
              <span>$100,000</span>
            </div>

            {/* Quick preset buttons */}
            <div className="flex items-center space-x-2 mt-3">
              {[3000, 5000, 10000, 20000, 50000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSpendAmount(amt)}
                  className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-colors ${
                    spendAmount === amt
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  ${(amt / 1000).toLocaleString()}k
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ranking list */}
        <div className="p-6 max-h-96 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase">
            <span>最佳回饋排行</span>
            <span>預估實領回饋</span>
          </div>

          {calculatedResults.map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={item.card.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                  isFirst
                    ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-500/20'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      isFirst
                        ? 'bg-amber-400 text-amber-950 shadow-xs'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-800'
                        : idx === 2
                        ? 'bg-amber-700/30 text-amber-900'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </div>

                  <div className="truncate">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-700">{item.card.bank}</span>
                      <span className="text-sm font-bold text-slate-900">{item.card.name}</span>
                      {isFirst && (
                        <span className="inline-flex items-center space-x-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span>首選推薦</span>
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-slate-700 mt-0.5 truncate">
                      適用：{item.rewardName} ({item.appliedRate}%)
                      {item.isCapped && (
                        <span className="text-amber-600 font-medium ml-1 inline-flex items-center">
                          <AlertTriangle className="w-3 h-3 mr-0.5 inline" />
                          {item.capNote}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <div className="text-base font-extrabold text-indigo-600">
                    ≈ ${item.earnedAmount.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-700">{item.card.currencyRewardType}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-700">
          ※ 試算結果僅供參考，實際回饋金額以各發卡銀行結帳帳單計算為準。
        </div>
      </div>
    </div>
  );
};
