import React from 'react';
import { X, Layers, Cake } from 'lucide-react';

interface SchemeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemeDrawer: React.FC<SchemeDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl overflow-hidden border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">雙卡權益方案總目錄</h3>
              <p className="text-xs text-slate-400">國泰 CUBE 卡 6 大方案 vs 台新 Richart 卡精選權益</p>
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
          {/* Section 1: 國泰 CUBE 卡方案 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h4 className="text-base font-bold text-slate-900">國泰世華 CUBE 卡（每日可切換權益方案）</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* 慶生月 */}
              <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 space-y-1.5 md:col-span-2">
                <div className="flex items-center justify-between font-bold text-pink-900">
                  <span className="flex items-center space-x-1">
                    <Cake className="w-4 h-4 text-pink-600" />
                    <span>🎂 慶生月方案（生日月專屬）</span>
                  </span>
                  <span className="text-base text-pink-600 font-extrabold">最高 10.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  特店：PlayStation、Nintendo eShop、精選連鎖餐廳、指定百貨與影城、生活特店等。
                </p>
              </div>

              {/* 玩數位 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>📱 玩數位</span>
                  <span className="text-indigo-600 font-extrabold">3.0% ~ 3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  網購（蝦皮、momo、PChome）、串流（Netflix、Spotify、Disney+）、遊戲（Steam、PlayStation、Nintendo）。
                </p>
              </div>

              {/* 樂饗購 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>🍔 樂饗購</span>
                  <span className="text-indigo-600 font-extrabold">3.0% ~ 3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  外送平台（Uber Eats、foodpanda）、全台實體餐廳、知名百貨專櫃、UNIQLO、GU。
                </p>
              </div>

              {/* 趣旅行 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>✈️ 趣旅行</span>
                  <span className="text-indigo-600 font-extrabold">3.0% ~ 3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  海外所有實體消費、航空公司機票、台灣高鐵、Agoda、Klook、Trip.com 訂房。
                </p>
              </div>

              {/* 集精選 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>🛒 集精選</span>
                  <span className="text-indigo-600 font-extrabold">2.0% ~ 3.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  全聯福利中心、家樂福、台灣中油直營加油站、超商便利商店。
                </p>
              </div>

              {/* 日本賞 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 md:col-span-2">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>🗾 日本賞</span>
                  <span className="text-indigo-600 font-extrabold">3.5%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  日本實體門市（BicCamera、唐吉訶德、松本清、日本各大百貨與連鎖超商）。
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: 台新 Richart 卡方案 */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <h4 className="text-base font-bold text-slate-900">台新銀行 Richart 卡（自動依通路/扣繳享有加碼）</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Pay著刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>📲 Pay著刷</span>
                  <span className="text-blue-700 font-extrabold">台新Pay 3.8% / LINE Pay 2.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  綁定台新 Pay 享最高 3.8%；綁定 LINE Pay、全盈+PAY 享 2.3%。
                </p>
              </div>

              {/* 數趣刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🎮 數趣刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  熱門網購（蝦皮、momo）、外送（Uber Eats）、數位遊戲（PlayStation、Steam、Nintendo）。
                </p>
              </div>

              {/* 假日刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🌴 假日刷</span>
                  <span className="text-blue-700 font-extrabold">週末六日 2.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  週六與週日全台實體與線上一般消費，無腦享有 2.0% 回饋！
                </p>
              </div>

              {/* 好行刷 / 出國刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🚗 好行刷 / 出國刷</span>
                  <span className="text-blue-700 font-extrabold">3.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  中油直營加油、台灣高鐵、國外海外實體與外幣線上消費。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors"
          >
            關閉總表
          </button>
        </div>
      </div>
    </div>
  );
};
