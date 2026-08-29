# 📋 信用卡權益資料維護與官方查核指引

> 本專案為自用純前端靜態刷卡決策工具。為確保資料準確且及時，請參考以下官方出處查核點與手動更新 SOP。

---

## 🔗 發卡銀行官方公告出處清單

每次銀行調整權益（通常為每季或每年 1/1、7/1）時，可至以下官方連結查核：

| 銀行 / 卡片 | 官方來源名稱 | 官方查核連結 | 目前時效週期 |
| :--- | :--- | :--- | :--- |
| **國泰世華 CUBE 卡** | CUBE 卡 權益與特約商店總覽 | [國泰世華官網 CUBE 權益頁](https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/) | 2026/12/31 |
| **國泰 CUBE (慶生月)** | 當月壽星 10% 特店加碼名單 | [國泰世華慶生月專區](https://www.cathaybk.com.tw/cathaybk/personal/credit-card/cards/cube/birthday/) | 每月 1 號更新 |
| **台新銀行 Richart 卡** | Richart 卡 最新權益公告 | [台新官網信用卡權益專區](https://www.taishinbank.com.tw/TSB/personal/credit/intro/overview/cg021/card001/) | 2026/12/31 |
| **台新 Richart Life** | 台新 Point 點數折抵規範 | [Richart 官方網頁](https://richart.tw/) | 常態機制 |

---

## 🛠️ 如何更新或新增通路資料？

所有通路資料存放於：
📁 `src/data/merchants.ts`

### 1. 修改既有店家回饋或時效
搜尋該店家的 `id` 或名稱，修改 `rate`、`schemeName`、`validUntil` 或 `note`：
```typescript
{
  id: 'playstation',
  name: 'PlayStation (PSN / PS Store)',
  validUntil: '2026/12/31',        // 權益有效期限
  lastVerifiedAt: '2026/08/29',    // 上次查核日期
  cube: {
    scheme: 'digital',
    schemeName: '玩數位 (或慶生月)',
    rate: 3.3,
    isBirthdaySpecial: true,       // 標記是否為壽星 10% 加碼特店
  },
  richart: {
    scheme: 'digital_fun',
    schemeName: '數趣刷',
    rate: 3.3,
  }
}
```

### 2. 新增常去愛店（自訂店家）
直接在 `src/data/merchants.ts` 的陣列中加入新物件：
```typescript
{
  id: 'custom-shop',
  name: '新店家名稱',
  category: 'dining_delivery', // 分類：game_stream | mobile_pay | ecommerce | dining_delivery | travel_traffic | grocery_convenience | department_fashion | general
  categoryLabel: '外送 & 餐飲',
  tags: ['關鍵字1', '關鍵字2'],
  validUntil: '2026/12/31',
  lastVerifiedAt: '2026/08/29',
  officialSourceUrl: 'https://...',
  cube: {
    scheme: 'dining',
    schemeName: '樂饗購',
    rate: 3.3,
    note: '切換樂饗購'
  },
  richart: {
    scheme: 'pay',
    schemeName: 'Pay著刷 (LINE Pay)',
    rate: 2.3,
    payMethod: 'line_pay',
    note: 'LINE Pay 2.3%'
  },
  tips: '這家店結帳時請切換 CUBE 樂饗購！'
}
```

---

## 🚀 更新後推送到 GitHub 即可自動發布

```bash
git add .
git commit -m "update: 2026 latest credit card merchant rewards"
git push
```
GitHub Actions 會在 30 秒內自動建置並更新至 GitHub Pages 網址！
