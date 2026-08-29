import React, { useState } from 'react';
import type { Merchant, UserContext } from '../types/merchant';
import { evaluateBestCard } from '../utils/decisionEngine';
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
  ChevronUp
} from 'lucide-react';

interface MerchantDecisionCardProps {
  merchant: Merchant;
  context: UserContext;
  onOpenSchemeModal: () => void;
  onOpenSourceModal: () => void;
}

export const MerchantDecisionCard: React.FC<MerchantDecisionCardProps> = ({
  merchant,
  context,
  onOpenSchemeModal,
  onOpenSourceModal,
}) => {
  const [showAllPathways, setShowAllPathways] = useState(true);
  const decision = evaluateBestCard(merchant, context);
  const isCubeWinner = decision.winnerCard === 'cube';
  const isRichartWinner = decision.winnerCard === 'richart';
  const isTie = decision.winnerCard === 'tie';

  return (
    <div className="bg-white rounded-3xl border-2 border-indigo-500/30 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      {/* Top Banner: Selected Merchant */}
      <div className="p-5 sm:p-6 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-indigo-200 border border-white/10">
            {merchant.categoryLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-2">
            {merchant.name}
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenSourceModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-xs font-medium text-amber-200 transition-colors border border-amber-400/30"
            title="查看此權益的官方原始出處與公告"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>資料出處</span>
          </button>

          <button
            onClick={onOpenSchemeModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-indigo-100 transition-colors border border-white/15"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>方案總表</span>
          </button>
        </div>
      </div>

      {/* Decision Result Highlight */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* The WINNER Card Banner */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border-2 shadow-md relative overflow-hidden ${
            isCubeWinner
              ? 'bg-linear-to-br from-amber-500/10 via-amber-50 to-white border-amber-400'
              : isRichartWinner
              ? 'bg-linear-to-br from-blue-500/10 via-blue-50 to-white border-blue-400'
              : 'bg-linear-to-br from-emerald-500/10 via-emerald-50 to-white border-emerald-400'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    isCubeWinner
                      ? 'bg-amber-500 text-slate-950'
                      : isRichartWinner
                      ? 'bg-blue-600 text-white'
                      : 'bg-emerald-600 text-white'
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
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isCubeWinner && `請於 App 切換為【${decision.winnerSchemeName}】方案`}
                  {isRichartWinner && `適用權益：【${decision.winnerSchemeName}】`}
                  {isTie && decision.winnerSchemeName}
                </span>
              </div>
            </div>

            {/* Huge Rate display */}
            <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-indigo-700 tracking-tight">
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
        </div>

        {/* ⚡ 達人情境加碼刷法攻略 (Multi-Scenario Pathways) */}
        <div className="bg-linear-to-br from-indigo-50/90 via-slate-50 to-amber-50/50 rounded-2xl border border-indigo-200/80 p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-lg bg-indigo-600 text-white">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                ⚡ 聰明刷法情境通道（依結帳地點與支付方式）：
              </h4>
            </div>
            <button
              onClick={() => setShowAllPathways(!showAllPathways)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center space-x-1"
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
          {/* CUBE Card box */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isCubeWinner || isTie
                ? 'bg-amber-50/40 border-amber-200 ring-1 ring-amber-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 text-sm">國泰 CUBE 卡</span>
              <span
                className={`text-base font-black ${
                  isCubeWinner ? 'text-amber-600' : 'text-slate-700'
                }`}
              >
                {context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial
                  ? '10.0%'
                  : `${merchant.cube.rate}%`}
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>
                <span className="font-semibold text-slate-700">權益方案：</span>
                {context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial
                  ? '🎂 慶生月 (生日特店)'
                  : merchant.cube.schemeName}
              </div>
              <div className="text-[11px] text-slate-700">{merchant.cube.note}</div>
            </div>
          </div>

          {/* Richart Card box */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isRichartWinner || isTie
                ? 'bg-blue-50/40 border-blue-200 ring-1 ring-blue-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 text-sm">台新 Richart 卡</span>
              <span
                className={`text-base font-black ${
                  isRichartWinner ? 'text-blue-600' : 'text-slate-700'
                }`}
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
                <span className="font-semibold text-slate-700">權益方案：</span>
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
