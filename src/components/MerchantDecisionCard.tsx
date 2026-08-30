import React, { useState, useEffect } from 'react';
import type { Merchant, UserContext, SmartScenario } from '../types/merchant';
import { evaluateScenarioDecision } from '../utils/decisionEngine';
import { checkValidity } from '../utils/validityChecker';
import { 
  Trophy, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  Clock,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  AlertOctagon,
  Heart,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';

interface MerchantDecisionCardProps {
  merchant: Merchant;
  context: UserContext;
  onOpenSchemeModal: () => void;
  onOpenSourceModal: () => void;
  onOpenExpiryAlertModal?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const MerchantDecisionCard: React.FC<MerchantDecisionCardProps> = ({
  merchant,
  context,
  onOpenSchemeModal,
  onOpenSourceModal,
  onOpenExpiryAlertModal,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [showAllPathways, setShowAllPathways] = useState(true);
  const [selectedScenario, setSelectedScenario] = useState<SmartScenario>('default');

  // 當切換選取的店家時，重設情境為預設
  useEffect(() => {
    setSelectedScenario('default');
  }, [merchant.id]);

  const decision = evaluateScenarioDecision(merchant, context, selectedScenario);
  const validity = checkValidity(merchant.validUntil);
  const isCubeWinner = decision.winnerCard === 'cube';
  const isRichartWinner = decision.winnerCard === 'richart';
  const isTie = decision.winnerCard === 'tie';

  // 計算聰明刷法情境通道與當前條件下的潛在回饋區間 (Range)
  const allPathwayRates = (decision.pathways || []).map((p) => p.rate).filter((r) => typeof r === 'number' && !isNaN(r));
  const candidateRates = [decision.winnerRate, decision.runnerUpRate, ...allPathwayRates].filter(
    (r): r is number => typeof r === 'number' && !isNaN(r)
  );
  const minPotentialRate = candidateRates.length > 0 ? Math.min(...candidateRates) : decision.winnerRate;
  const maxPotentialRate = candidateRates.length > 0 ? Math.max(...candidateRates) : decision.winnerRate;
  const hasRateRange = candidateRates.length > 0 && minPotentialRate !== maxPotentialRate;

  // 根據商家的屬性動態篩選出合適的情境標籤
  const scenarioOptions: { id: SmartScenario; label: string; icon: string; desc: string }[] = [
    { id: 'default', label: '門市直刷 / 官網', icon: '🏪', desc: '店家標準門市或官網直刷' },
    { id: 'dining_mcc', label: '實體餐廳 (MCC)', icon: '🍽️', desc: '全台實體餐飲業（MCC 5811~5814）' },
    { id: 'delivery', label: '外送平台', icon: '🛵', desc: 'Uber Eats 或 Foodpanda 訂餐' },
    { id: 'shinkong_counter', label: '新光三越專櫃', icon: '🏢', desc: '新光三越專櫃（台新Pay 3.8%）' },
    { id: 'dept_counter', label: '各大百貨專櫃', icon: '🏬', desc: 'SOGO / 遠百 / 微風 / 101 等（3.3%）' },
    { id: 'taishin_pay', label: '台新 Pay', icon: '💳', desc: '特店掃碼付款（3.8%）' },
    { id: 'line_pay', label: 'LINE Pay', icon: '📲', desc: '行動支付掃碼（2.3%）' },
    { id: 'weekend_spend', label: '週末假日', icon: '🌴', desc: '週六或週日消費（2.0%）' },
  ];

  return (
    <div className="bg-white rounded-3xl border-2 border-indigo-500/30 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      {/* 🚨 High-Priority Expiration Alert Banner (if expired or expiring soon) */}
      {validity.status === 'expired' && (
        <div 
          onClick={onOpenExpiryAlertModal}
          className="bg-rose-600 text-white px-5 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold shadow-md cursor-pointer hover:bg-rose-700 transition-colors animate-pulse"
        >
          <div className="flex items-center space-x-2">
            <AlertOctagon className="w-5 h-5 shrink-0 text-white" />
            <span>{validity.message}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-white text-rose-700 font-bold rounded-lg shrink-0 text-xs">
              查看詳情 ⚠️
            </span>
          </div>
        </div>
      )}

      {validity.status === 'expiring_soon' && (
        <div className="bg-amber-500 text-slate-950 px-5 py-2.5 flex items-center justify-between gap-3 text-xs font-semibold shadow-xs">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-slate-950" />
            <span>{validity.message}</span>
          </div>
          {merchant.officialSourceUrl && (
            <a
              href={merchant.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 bg-slate-950 text-amber-300 font-bold rounded-md hover:bg-slate-900 transition-colors shrink-0 flex items-center space-x-1 text-[11px]"
            >
              <span>確認最新公告</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Top Banner: Selected Merchant */}
      <div className="p-5 sm:p-6 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-indigo-200 border border-white/10">
              {merchant.categoryLabel}
            </span>
            <span className={`text-[11px] px-2.5 py-0.5 rounded-full border ${validity.badgeClass}`}>
              {validity.badgeLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            {merchant.name}
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          {onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all border cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500/20 text-rose-300 border-rose-400/40 hover:bg-rose-500/30'
                  : 'bg-white/10 text-slate-300 border-white/15 hover:bg-white/20 hover:text-rose-300'
              }`}
              title={isFavorite ? '從常用通路移除' : '加入常用通路'}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-400' : ''}`} />
              <span className="text-xs font-semibold">{isFavorite ? '已加入常用' : '加入常用'}</span>
            </button>
          )}

          <button
            onClick={onOpenSourceModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-xs font-medium text-amber-200 transition-colors border border-amber-400/30 cursor-pointer"
            title="查看此權益的官方原始出處與公告"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>資料出處</span>
          </button>

          <button
            onClick={onOpenSchemeModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-indigo-100 transition-colors border border-white/15 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>方案總表</span>
          </button>
        </div>
      </div>

      {/* Decision Result Highlight */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* ⚡ 聰明刷法情境模擬切換器 (Interactive Scenario Filter) */}
        <div className="bg-linear-to-r from-indigo-50/80 via-slate-50 to-indigo-50/50 border border-indigo-200/70 rounded-2xl p-4 sm:p-4.5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-lg bg-indigo-600 text-white">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-black text-indigo-950">
                ⚡ 模擬不同結帳情境（點擊即時試算更優結果）：
              </span>
            </div>

            {selectedScenario !== 'default' && (
              <button
                onClick={() => setSelectedScenario('default')}
                className="inline-flex items-center space-x-1 text-xs text-indigo-600 hover:text-indigo-800 font-bold bg-white px-2.5 py-1 rounded-lg border border-indigo-200 shadow-2xs cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>還原預設</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {scenarioOptions.map((opt) => {
              const isSelected = selectedScenario === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedScenario(opt.id)}
                  title={opt.desc}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/60'
                  }`}
                >
                  <span className="text-sm">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {selectedScenario !== 'default' && decision.scenarioDescription && (
            <div className="text-xs text-indigo-950 bg-indigo-100/70 px-3.5 py-2 rounded-xl border border-indigo-300/60 font-semibold flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-1.5">
                <span>💡 正在模擬：</span>
                <span className="font-extrabold underline">{decision.scenarioDescription}</span>
              </div>
              <span className="text-emerald-700 font-black text-xs sm:text-sm">
                最佳回饋率：{decision.winnerRate}%
              </span>
            </div>
          )}
        </div>

        {/* The WINNER Card Banner */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border-2 shadow-md relative overflow-hidden ${
            isCubeWinner
              ? 'bg-linear-to-br from-emerald-500/15 via-emerald-50/80 to-white border-emerald-500'
              : isRichartWinner
              ? 'bg-linear-to-br from-rose-500/15 via-rose-50/80 to-white border-rose-500'
              : 'bg-linear-to-br from-indigo-500/10 via-slate-50 to-white border-indigo-400'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    isCubeWinner
                      ? 'bg-emerald-700 text-white'
                      : isRichartWinner
                      ? 'bg-rose-600 text-white'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{isTie ? '雙卡並列最優' : '當前條件最佳直刷推薦'}</span>
                </span>

                {context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial && isCubeWinner && (
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-pink-100 text-pink-700 border border-pink-200">
                    <Sparkles className="w-3 h-3 text-pink-600" />
                    <span>8月生日加碼</span>
                  </span>
                )}
              </div>

              {/* Winner Name */}
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {isCubeWinner && '👉 刷 國泰 CUBE 卡'}
                {isRichartWinner && '👉 刷 台新 Richart 卡'}
                {isTie && '👉 刷 CUBE卡 或 台新Richart卡 皆可'}
              </div>

              {/* Scheme instruction */}
              <div className="text-sm sm:text-base font-semibold text-slate-700 flex items-center space-x-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${isCubeWinner ? 'text-emerald-600' : isRichartWinner ? 'text-rose-600' : 'text-indigo-600'}`} />
                <span>
                  {isCubeWinner && `請於 App 切換為【${decision.winnerSchemeName}】方案`}
                  {isRichartWinner && `適用權益：【${decision.winnerSchemeName}】`}
                  {isTie && decision.winnerSchemeName}
                </span>
              </div>
            </div>

            {/* Huge Rate display */}
            <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
              <div className={`text-4xl sm:text-5xl font-black tracking-tight ${isCubeWinner ? 'text-emerald-700' : isRichartWinner ? 'text-rose-600' : 'text-indigo-700'}`}>
                {decision.winnerRate}%
              </div>
              <div className="text-xs font-bold text-slate-700 mt-0.5">
                {isCubeWinner
                  ? '小樹點 (1點 = 1元)'
                  : isRichartWinner
                  ? '台新 Point (1點 = 1元)'
                  : '點數等值折抵'}
              </div>
            </div>
          </div>

          {/* Winner note */}
          {decision.winnerNote && (
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700">
              💡 {decision.winnerNote}
            </div>
          )}

          {/* ⚡ Potential Strategy Rate Range Callout */}
          {hasRateRange && (
            <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-1.5 text-xs font-extrabold text-amber-950 bg-amber-500/20 border border-amber-400/50 px-3 py-1.5 rounded-xl shadow-2xs">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  聰明刷法潛在區間：
                  <span className="text-amber-800 underline font-black text-sm ml-1">
                    {minPotentialRate}% ~ {maxPotentialRate}%
                  </span>
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-semibold">
                👇 請參考下方情境通道獲取最高回饋
              </span>
            </div>
          )}
        </div>

        {/* ⚡ 達人情境加碼刷法攻略 (Multi-Scenario Pathways) */}
        <div className="bg-linear-to-br from-indigo-50/90 via-slate-50 to-amber-50/50 rounded-2xl border border-indigo-200/80 p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-lg bg-indigo-600 text-white">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  ⚡ 聰明刷法情境通道
                </h4>
                {hasRateRange && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/25 text-amber-900 text-[11px] font-black border border-amber-400/40">
                    潛在區間 {minPotentialRate}% ~ {maxPotentialRate}%
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowAllPathways(!showAllPathways)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center space-x-1 cursor-pointer"
            >
              <span>{showAllPathways ? '收合' : '展開'}</span>
              {showAllPathways ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-xs text-slate-600">
            即使此品牌非獨立加碼通路，只要透過以下結帳情境或支付方式，依然可享有超高回饋：
          </p>

          {showAllPathways && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {decision.pathways.map((path, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs flex items-start space-x-3 hover:border-indigo-300 transition-colors"
                >
                  <span className="text-xl shrink-0 mt-0.5">{path.icon}</span>
                  <div className="space-y-1 text-xs flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-slate-900">{path.title}</span>
                      <span className="font-extrabold text-indigo-600 shrink-0 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                        {path.highlightText}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-snug">
                      👉 <strong>{path.cardName}</strong>（{path.schemeName}）
                    </div>
                    <div className="text-[10px] text-slate-700 leading-tight">
                      {path.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Side-by-Side Comparison of both cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* CUBE Card box (國泰 綠色背景) */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isCubeWinner || isTie
                ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/30'
                : 'bg-emerald-50/30 border-emerald-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                <span>國泰 CUBE 卡</span>
              </span>
              <span
                className="text-base font-black text-emerald-700 bg-white px-2 py-0.5 rounded-lg border border-emerald-200 shadow-2xs"
              >
                {context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial
                  ? `${merchant.cube.birthdayRate || 10.0}%`
                  : `${merchant.cube.rate}%`}
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>
                <span className="font-semibold text-emerald-950">權益方案：</span>
                {context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial
                  ? `🎂 慶生月 (${merchant.cube.birthdayRate || 10.0}%)`
                  : merchant.cube.schemeName}
              </div>
              <div className="text-[11px] text-slate-700">{merchant.cube.note}</div>
            </div>
          </div>

          {/* Richart Card box (台新 紅色背景) */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isRichartWinner || isTie
                ? 'bg-rose-50/80 border-rose-300 ring-2 ring-rose-500/30'
                : 'bg-rose-50/30 border-rose-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block"></span>
                <span>台新 Richart 卡</span>
              </span>
              <span
                className="text-base font-black text-rose-700 bg-white px-2 py-0.5 rounded-lg border border-rose-200 shadow-2xs"
              >
                {decision.winnerCard === 'richart'
                  ? `${decision.winnerRate}%`
                  : decision.runnerUpCard === 'richart'
                  ? `${decision.runnerUpRate}%`
                  : `${merchant.richart.rate}%`}
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>
                <span className="font-semibold text-rose-950">權益方案：</span>
                {merchant.richart.schemeName}
              </div>
              <div className="text-[11px] text-slate-700">
                {decision.winnerCard === 'richart'
                  ? decision.winnerNote
                  : merchant.richart.note}
              </div>
            </div>
          </div>
        </div>

        {/* Tips section */}
        {merchant.tips && (
          <div className="p-4 bg-indigo-50/80 border border-indigo-100 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm text-indigo-950">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-indigo-900">刷卡實用建議：</span>
              <span>{merchant.tips}</span>
            </div>
          </div>
        )}

        {/* Validity & Source Footnote */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1 font-medium text-slate-700">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>權益有效至：<strong className="text-slate-800">{merchant.validUntil}</strong></span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-700">查核日期：{merchant.lastVerifiedAt}</span>
          </div>

          {merchant.officialSourceUrl && (
            <a
              href={merchant.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              <span>查看發卡行官方公告</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
