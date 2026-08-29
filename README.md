# 💳 CardRewardHub - 台灣信用卡回饋查詢與試算網頁

> 現代化、極速的純前端靜態信用卡回饋查詢與消費試算網站，已預先配置 GitHub Actions，可直接推上 GitHub 免費發布至 GitHub Pages！

---

## 🌟 功能亮點

- 🔍 **即時搜尋**：支援搜尋銀行名稱、信用卡名、通路特店（LINE Pay、街口、日本實體、Apple Pay、蝦皮、Uber Eats 等）。
- 🏷️ **熱門分類篩選**：國內無腦刷、行動支付、國外/日韓旅遊、網購電商、美食外送/叫車、交通加油、影音娛樂。
- 🧮 **回饋試算機**：輸入預計每月消費金額，系統自動試算各卡實領回饋並提示上限與門檻。
- ⚖️ **卡片多選對比**：最多支援 4 張卡片橫向並列對比（一般回饋、幣別、權益上限、年費條件）。
- 📱 **RWD 響應式現代 UI**：使用 Tailwind CSS 打造極簡流暢的操作介面，手機與電腦皆完美適配。
- ⚡ **純靜態架構**：零後端伺服器依賴，直接透過 GitHub Pages、Vercel 或 Cloudflare Pages 免費託管。

---

## 🚀 本地開發與執行

```bash
# 進入專案目錄
cd CreditCardRewards

# 啟動本地開發伺服器
npm run dev

# 建置靜態檔案
npm run build
```

---

## 🌐 如何推上 GitHub 並啟用 GitHub Pages

### 步驟 1：在本地建立 Git Commit

```bash
git init
git add .
git commit -m "feat: initial commit for credit card rewards hub"
```

### 步驟 2：關聯並推送到 GitHub Repo

```bash
git branch -M main
git remote add origin https://github.com/<你的帳號>/<你的Repo名稱>.git
git push -u origin main
```

### 步驟 3：在 GitHub 開啟 Pages

1. 前往 GitHub Repo 頁面，點選 **Settings** > **Pages**。
2. 在 **Build and deployment** 下方的 **Source** 選擇 **GitHub Actions**。
3. 只要推送程式碼至 `main` 分支，GitHub Actions 將會自動編譯並部署到你的專屬網址！

---

## 📝 如何新增或修改信用卡資料？

所有信用卡資料均維護於 `src/data/cards.ts`，資料格式清晰易讀：

```typescript
{
  id: 'cathay-cube',
  bank: '國泰世華',
  name: 'CUBE 卡',
  badge: '熱門神卡',
  colorGradient: 'from-amber-600 to-amber-900',
  annualFeeInfo: '申辦電子帳單享免年費',
  officialUrl: 'https://...',
  lastUpdated: '2025/2026 最新權益',
  generalDomesticRate: 0.3,
  generalOverseasRate: 0.3,
  currencyRewardType: '小樹點 (1點 = 1元)',
  highlights: ['切換 5 大權益享 3%~3.3% 小樹點無上限', ...],
  rewards: [
    {
      name: '趣旅行 - 海外實體/機票訂房',
      category: 'overseas',
      rate: 3.3,
      capText: '無上限',
      condition: '每日可於 App 切換一次權益方案',
      channels: ['海外實體消費', '機票', 'Agoda']
    }
  ],
  tips: ['每天晚上 23:59 前切換權益即可！']
}
```

---

## 🛠️ 技術棧

- **框架**：React 19 + TypeScript + Vite
- **樣式**：Tailwind CSS v4
- **圖示**：Lucide React
- **部署**：GitHub Actions + GitHub Pages
