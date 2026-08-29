# 💳 刷卡決策小幫手 (Credit Card Rewards Assistant)

> **專為「國泰世華 CUBE 卡 🆚 台新 Richart 卡」量身打造的個人化即時刷卡決策工具。**  
> 以**通路與店家為核心**，自動依據生日月份、週末平日、會員等級與支付工具，秒算最優刷卡方案與回饋率！

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.2-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square&logo=github)

---

## 🎯 為什麼做這個工具？

市面上許多信用卡推薦網站多以「卡片」為主體，但在結帳的當下，我們真正需要的資訊是：
> **「我現在在『詹記』/『adidas』/『PlayStation』/『新光三越』，我到底該掏哪張卡？該在 App 裡切換成什麼權益方案？」**

本專案將複雜的銀行權益條款轉化為直覺的**「一鍵查通路 ➔ 自動判定卡片 ➔ 提示切換方案」**流程，省去手動翻閱銀行落落長特約商店名單的麻煩。

---

## ✨ 核心特色與亮點

### 1. 🔍 通路導向（Merchant-First）精準決策
- 點選常用通路快捷按鈕或輸入任何店家關鍵字（如 `50嵐`、`PlayStation`、`adidas`、`新光三越`、`全聯` 等）。
- 畫面自動平滑滑動（Smooth Scroll）至決策結果卡片，直接告訴你：
  - 🏆 **該刷哪一張卡**（國泰 CUBE 卡 或 台新 Richart 卡）
  - ⚙️ **App 該切換的方案**（如【Chill 刷】、【玩數位】、【Pay 著刷】、【慶生月】等）
  - 💰 **實質回饋率**（最高達 10.0%）

### 2. ⚡ 聰明刷法情境通道（Category-Aware Pathways）
依據通路性質自動生成多情境最佳攻略，絕不誤帶不相關建議：
- 🎂 **生日月 ＋ 百貨專櫃**：CUBE 卡切換【慶生月】享最高 **10.0%** 小樹點。
- 🏢 **新光三越專櫃**：開啟【台新 Pay】綁 Richart 卡享 **3.8%** 台新 Point。
- 🛍️ **SOGO / 遠百 / 微風 / 101 / Outlet**：CUBE【樂饗購】**3.3%** 或 Richart【大筆刷】**3.3%**。
- 🔥 **熱門火鍋/手搖飲**：Richart 卡切換【Chill 刷】享 **10.0%** 神回饋。
- 📲 **LINE Pay 行動支付**：店家支援 LINE Pay 時，Richart 卡【Pay 著刷】保底 **2.3%**。
- 🌴 **週末假日實體刷**：Richart 卡【假日刷】全通路 **2.0%** 無腦刷。
- 💻 **線上軟體 / AI 訂閱**（如 Notion、ChatGPT）：自動提示海外 1.5% 交易手續費換算，實質淨賺約 **1.8%**。

### 3. 👑 動態情境即時切換
- **CUBE 會員等級**：一鍵切換 `Level 1 (2.0%)`、`Level 2 帳戶扣繳 (3.0%)`、`Level 3 VIP (3.3%)`。
- **8 月生日當月**：一鍵開啟/關閉壽星特店 10% 加碼。
- **週末假日 / 平日**：自動連動台新假日刷 2.0% 與平日 1.0% 一般消費。

### 4. 🚨 權益時效監控與逾期 Popup 彈窗警報
- 系統自動比對權益有效期限（`validUntil`）：
  - 🔴 **逾期警報**：自動彈出 **Popup 攔截視窗** 與紅色閃爍警報，提供官方來源連結查核最新公告，防止誤刷過期方案。
  - 🟡 **即將到期提醒**：30 天內即將到期時顯示倒數黃色標籤。

### 5. 🛡️ 支援任意自訂店家一般消費自動回退
- 搜尋任何未在特約名單中的私房小店、診所或早餐店，自動歸類為「國內一般消費」，推薦週末刷 Richart (2.0%) 或平日刷 Richart (1.0%)。

### 6. 🚀 便捷置頂懸浮按鈕（Back to Search）
- 瀏覽結果時右下角自動浮現 `🔍 回搜尋框 ↑` 按鈕，點擊後平滑滾動回頂端並**自動聚焦輸入框**。

---

## 📚 雙卡官方權益參考來源 (Verified Sources)

本專案所有特店與趴數皆 100% 依據銀行官方公告資料建置：

1. **台新銀行 Richart 卡（2026 官方 7+1 大刷權益）**：
   - 官方活動頁：[https://mkp.taishinbank.com.tw/.../WM_20251216135624463/index.html](https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html)
   - 方案包含：`Chill 刷 (10%)`、`Pay 著刷 (3.8%/2.3%)`、`天天刷 (3.3%)`、`大筆刷 (3.3%)`、`好饗刷 (3.3%)`、`數趣刷 (3.3%)`、`玩旅刷 (3.3%)`、`假日刷 (2.0%)`。
2. **國泰世華銀行 CUBE 卡（官方權益與特約清單）**：
   - 官方主頁：[https://www.cathay-cube.com.tw/.../cards/cube](https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube)
   - 特約商戶完整清單：[https://www.cathay-cube.com.tw/.../cards/cube-list](https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list)
   - 方案包含：`玩數位`、`樂饗購`、`趣旅行`、`集精選`、`日本賞 (3.5%)`、`慶生月 (10%)`、`全支付`、`台塑家` 等。

---

## 🛠️ 技術架構

- **前端框架**：[React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **構建工具**：[Vite](https://vitejs.dev/)
- **樣式庫**：[Tailwind CSS v4](https://tailwindcss.com/)
- **圖示庫**：[Lucide React](https://lucide.dev/)
- **CI/CD**：GitHub Actions（自動構建並部屬至 GitHub Pages）

---

## 💻 本地開發與啟動

### 1. 安裝依賴套件
```bash
npm install
```

### 2. 啟動本地開發伺服器
```bash
npm run dev
```
瀏覽器開啟 `http://localhost:5173` 即可使用。

### 3. 生產環境構建
```bash
npm run build
```
構建產物將輸出至 `dist/` 目錄。

---

## 📝 資料維護與更新 SOP

如需新增店家或更新過期權益，只需編輯 [`src/data/merchants.ts`](src/data/merchants.ts)：

```ts
{
  id: 'my-store',
  name: '店家名稱',
  category: 'department_fashion',
  categoryLabel: '百貨 & 服飾',
  tags: ['關鍵字1', '關鍵字2'],
  validUntil: '2026/12/31', // 方案到期日 (系統自動監控)
  lastVerifiedAt: '2026/08/29', // 最後查核日期
  officialSourceUrl: '官方活動網址',
  cube: {
    scheme: 'dining',
    schemeName: '樂饗購',
    rate: 3.3,
  },
  richart: {
    scheme: 'chill',
    schemeName: 'Chill 刷',
    rate: 10.0,
    isChillSpecial: true,
  },
  tips: '刷卡實用建議說明...'
}
```

---

## 📋 使用者需求與系統規範

本專案完整的個人化需求、決策邏輯、日期自動判定、100% 單一通路條目標準與維護規範，詳見：
👉 [**使用者需求與系統規格書 (USER_SPECIFICATION.md)**](USER_SPECIFICATION.md)

---

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 開源授權，歡迎自由修改與自用。

