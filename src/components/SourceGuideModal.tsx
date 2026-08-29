import React from 'react';
import { OFFICIAL_SOURCES } from '../data/sources';
import { X, ExternalLink, Calendar, RefreshCw, FileCode, CheckCircle2 } from 'lucide-react';

interface SourceGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceGuideModal: React.FC<SourceGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl overflow-hidden border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">資料出處與定期維護指引</h3>
              <p className="text-xs text-slate-400">發卡行官方公告來源、權益時效與資料手動更新 SOP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Section 1: Official Bank Sources */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                1. 官方原始公告出處（點擊直達官方網頁查核）
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OFFICIAL_SOURCES.map((src) => (
                <div
                  key={src.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-2 hover:border-indigo-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-indigo-600">{src.bank} • {src.cardName}</span>
                      <span className="flex items-center space-x-1 text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-[10px] font-bold">
                        <Calendar className="w-3 h-3" />
                        <span>至 {src.validUntil}</span>
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm mt-1">
                      {src.title}
                    </h5>
                    <p className="text-slate-600 text-[11px] mt-1 leading-relaxed">
                      {src.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">上次查核：{src.lastChecked}</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-bold text-xs"
                    >
                      <span>前往官網驗證</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: How to Update Data */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                2. 如何定期手動更新通路資料（1 分鐘完成）
              </h4>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed">
              本專案所有通路與雙卡比對資料均集中於單一檔案：<br />
              📁 <code className="bg-slate-100 text-indigo-700 px-1.5 py-0.5 rounded font-mono text-xs">src/data/merchants.ts</code>
            </p>

            {/* Step by Step */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700">
                  <strong>步驟一</strong>：打開 <code className="font-mono bg-white px-1 border rounded">src/data/merchants.ts</code>。
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700">
                  <strong>步驟二</strong>：若要調整既有通路（例如回饋率或有效期限），直接搜尋該店家名稱修改數字或文字。
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700">
                  <strong>步驟三</strong>：若要新增自己的常去愛店，只需複製貼上一個區塊並填入 CUBE 與 Richart 方案即可！
                </span>
              </div>
            </div>

            {/* Code example */}
            <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] overflow-x-auto space-y-1">
              <div className="text-slate-400">// 新增自訂店家範例：</div>
              <div>{`{`}</div>
              <div>{`  id: 'my-favorite-shop',`}</div>
              <div>{`  name: '我的愛店名稱',`}</div>
              <div>{`  category: 'dining_delivery', // 分類`}</div>
              <div>{`  categoryLabel: '外送 & 餐飲',`}</div>
              <div>{`  tags: ['咖啡', '早午餐'],`}</div>
              <div>{`  validUntil: '2026/12/31',`}</div>
              <div>{`  lastVerifiedAt: '2026/08/29',`}</div>
              <div>{`  cube: { scheme: 'dining', schemeName: '樂饗購', rate: 3.3 },`}</div>
              <div>{`  richart: { scheme: 'pay', schemeName: 'Pay著刷', rate: 2.3, payMethod: 'line_pay' },`}</div>
              <div>{`  tips: '建議使用 LINE Pay 刷 Richart 卡！'`}</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};
