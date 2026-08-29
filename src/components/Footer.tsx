import React from 'react';
import { ShieldAlert, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-base">
              <span className="p-1 rounded bg-indigo-600 text-white">💳</span>
              <span>CardRewardHub 信用卡神卡指南</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              專為台灣消費者設計的現代化信用卡回饋查詢與試算工具。隨時掌握各大銀行最新權益，買東西刷對卡、回饋拿好拿滿！
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">聲明與注意事項</h4>
            <div className="flex items-start space-x-2 text-slate-400 text-[11px] leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                本站所有信用卡回饋率、活動期間及消費上限僅供參考，各項優惠以各發卡銀行最新公告與權益條款為準。請謹慎理財，信用至上。
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">開源與部署</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              本專案為純前端靜態網站架構，可直接一鍵推上 GitHub Repository 並透過 GitHub Pages 進行免費託管發布。
            </p>
            <div className="flex items-center space-x-4 text-slate-300">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-1 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <div>© {new Date().getFullYear()} CardRewardHub. All rights reserved.</div>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for Smart Shoppers in Taiwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

