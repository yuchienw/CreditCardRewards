import React from 'react';
import { X, Layers, Cake, Sparkles } from 'lucide-react';

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
              <h3 className="text-lg font-bold">2026 官方雙卡權益方案總表</h3>
              <p className="text-xs text-slate-400">國泰 CUBE 卡 8 大方案 🆚 台新 Richart 卡 7+1 大方案（均於 App 每日切換）</p>
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
          {/* Section 1: 台新 Richart 卡 (7+1 大方案) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                <h4 className="text-base font-bold text-slate-900">
                  台新銀行 Richart 卡（Richart Life App 每日切換 7+1 方案）
                </h4>
              </div>
              <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                自動扣繳享 3.3% ~ 3.8%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Pay 著刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>📲 Pay 著刷</span>
                  <span className="text-blue-700 font-extrabold">台新Pay 3.8% / LINE Pay 2.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  綁定台新 Pay 於指定特店（全家、新光三越等）享 3.8%；綁定 LINE Pay、全盈+PAY 享 2.3%。
                </p>
              </div>

              {/* 數趣刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🎮 數趣刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  網購平台（蝦皮、momo、PChome、酷澎）、遊戲影音（PlayStation、Steam、Nintendo、Netflix、Spotify）、AI 服務。
                </p>
              </div>

              {/* 天天刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🏪 天天刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  超商（7-11、全家）、量販店（家樂福）、交通（高鐵）、加油（中油直營）、充電站、藥妝藥局。
                </p>
              </div>

              {/* 大筆刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🛍️ 大筆刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  指定百貨專櫃（新光三越、SOGO、遠百、微風）、Outlet、時尚名品（UNIQLO、GU）、居家裝修。
                </p>
              </div>

              {/* 好饗刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🍽️ 好饗刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  全臺餐飲店家、外送平台（Uber Eats、foodpanda）、星巴克、指定飯店 Buffet、購票娛樂、KTV。
                </p>
              </div>

              {/* 玩旅刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>✈️ 玩旅刷</span>
                  <span className="text-blue-700 font-extrabold">3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  海外實體與線上外幣交易（含歐洲實體）、全球航空公司機票、訂房平台（Agoda、Booking.com、Klook）。
                </p>
              </div>

              {/* 假日刷 */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <span>🌴 假日刷</span>
                  <span className="text-blue-700 font-extrabold">週末 2.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  週六與週日全臺不限通路一般消費享 2.0% 無腦刷（含街口支付、保費）。
                </p>
              </div>

              {/* Chill 刷 */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-amber-950">
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>🧋 Chill 刷（指定加碼）</span>
                  </span>
                  <span className="text-amber-700 font-extrabold">最高 10.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  指定熱門餐廳聚會、指定手搖飲日常續命、娛樂追星活動等限時特店加碼。
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: 國泰 CUBE 卡 (8 大方案) */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <h4 className="text-base font-bold text-slate-900">
                  國泰世華 CUBE 卡（CUBE App 每日切換 8 大方案）
                </h4>
              </div>
              <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                帳戶扣繳享 3.0% / VIP 3.3%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* 慶生月 */}
              <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 space-y-1.5 md:col-span-2">
                <div className="flex items-center justify-between font-bold text-pink-900">
                  <span className="flex items-center space-x-1">
                    <Cake className="w-4 h-4 text-pink-600" />
                    <span>🎂 慶生月方案（當月壽星專屬）</span>
                  </span>
                  <span className="text-base text-pink-600 font-extrabold">最高 10.0% 小樹點</span>
                </div>
                <p className="text-slate-600 text-xs">
                  當月壽星特店：PlayStation、Nintendo eShop、精選連鎖餐廳、指定百貨與影城、生活特店等每月 1 號公告特店。
                </p>
              </div>

              {/* 玩數位 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>📱 玩數位</span>
                  <span className="text-indigo-600 font-extrabold">3.0% ~ 3.3%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  線上網購（蝦皮、momo、PChome、酷澎）、數位串流（Netflix、Spotify、Disney+）、遊戲平台（Steam、PlayStation、Nintendo）。
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
                  海外所有實體消費、全球航空公司機票、台灣高鐵、Agoda、Booking.com、Klook 訂房平台。
                </p>
              </div>

              {/* 集精選 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>🛒 集精選</span>
                  <span className="text-indigo-600 font-extrabold">2.0% ~ 3.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  全聯福利中心、家樂福、台灣中油直營加油站、超商便利商店、充電停車。
                </p>
              </div>

              {/* 日本賞 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>🗾 日本賞</span>
                  <span className="text-indigo-600 font-extrabold">3.5%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  日本實體門市（BicCamera、唐吉訶德、松本清、日本各大百貨與連鎖超商）。
                </p>
              </div>

              {/* 台塑家 & 全支付 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>⛽ 台塑家 / 全支付</span>
                  <span className="text-indigo-600 font-extrabold">3.0%</span>
                </div>
                <p className="text-slate-600 text-xs">
                  指定台塑、台亞、福懋加油站；全支付電子支付綁定專屬加碼。
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
