import React from 'react';
import type { Merchant } from '../types/merchant';
import { checkValidity } from '../utils/validityChecker';
import { AlertOctagon, ExternalLink, ShieldCheck, X } from 'lucide-react';

interface ExpiryAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  merchant: Merchant;
  onOpenSourceModal: () => void;
}

export const ExpiryAlertModal: React.FC<ExpiryAlertModalProps> = ({
  isOpen,
  onClose,
  merchant,
  onOpenSourceModal,
}) => {
  if (!isOpen) return null;

  const validity = checkValidity(merchant.validUntil);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-2 border-rose-500 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-linear-to-r from-rose-600 via-red-600 to-rose-700 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-xs">
              <AlertOctagon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black tracking-tight">
                ⚠️ 權益已超過有效期限提醒！
              </h3>
              <p className="text-xs text-rose-100 font-medium">
                此通路的加碼活動可能已調整或結束
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-slate-800 text-sm">
          {/* Merchant summary card */}
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-rose-200 text-rose-800">
                {merchant.categoryLabel}
              </span>
              <span className="text-xs font-black text-rose-600">
                {validity.badgeLabel}
              </span>
            </div>
            <div className="text-lg font-black text-slate-900">
              {merchant.name}
            </div>
            <div className="text-xs text-rose-700 leading-relaxed font-semibold">
              {validity.message}
            </div>
          </div>

          {/* Explanation & Instructions */}
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              💡 <strong>重要提醒：</strong>信用卡各項加碼方案通常具備週期性（如每季或半年度更新）。當超過原本記錄的有效區間時：
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs text-slate-700">
              <li>發卡銀行可能已<strong>更換適用特店清單</strong>或<strong>調降回饋趴數</strong>。</li>
              <li>若銀行有續推新一期方案，建議手動更新資料庫或依照最新公告為主。</li>
              <li>在未確認官方最新公告前，<strong>建議先以一般消費或其他常態卡別結帳</strong>以防權益落空。</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            {merchant.officialSourceUrl && (
              <a
                href={merchant.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-colors shadow-md shadow-rose-600/20"
              >
                <span>🔍 前往發卡行官方公告查核最新特店</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenSourceModal();
              }}
              className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors text-xs border border-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>查看官方來源出處與手動更新 SOP</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-center text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors"
            >
              我已了解，關閉彈窗並繼續查看試算
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
