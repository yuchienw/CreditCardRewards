# 🧠 專案核心開發規範與記憶 (Claude Code & AI Assistant Memory)

> 請直接參閱本專案的核心規格書與 Antigravity 記憶檔案：
> - 👉 [**`GEMINI.md` (完整核心記憶與 AI 開發鐵律)**](GEMINI.md)
> - 👉 [**`USER_SPECIFICATION.md` (使用者需求規格書)**](USER_SPECIFICATION.md)

---

## 📌 唯一權威官方資料源 (Single Source of Truth)
- **國泰 CUBE 卡官方權益網址（一律以此頁面為唯一標準）**：
  `https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list?Cub_ProjectCode=DBB4100001&gad_source=1&gad_campaignid=22687071549&gbraid=0AAAAACsfCOOY1aD1c_lekS9-QCefh3cFm&gclid=Cj0KCQjwhsrUBhDxARIsAN3AQSelfZNceCpvCYaa4bzK2VOgZ9UtbGkRBOtg4pyW7Rk3IxegRzP8Ks0aAlA9EALw_wcB`
  - 涵蓋所有官方方案：`玩數位`、`樂饗購`、`趣旅行`、`集精選`、`慶生月`、`台塑家`、`全支付`、`固定回饋`。
- **台新 Richart 卡官方權益網址（一律以此頁面為唯一標準）**：
  `https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html?gad_campaignid=22054035743&gbraid=0AAAAABhSXuTBDqAoQ-2IZKdcB7rUR5pY_`
  - 涵蓋所有官方方案：`Chill 刷 (10%/5%/3.3%)`、`Pay 著刷 (3.8%/2.3%)`、`天天刷 (3.3%)`、`大筆刷 (3.3%)`、`好饗刷 (3.3%)`、`數趣刷 (3.3%)`、`玩旅刷 (3.3%)`、`假日刷 (2.0%)`。

## 📌 開發鐵律與部署規範重點摘要：
1. **官方權益通路 100% 完整全收錄（絕無遺漏）**：只要有出現在台新 Richart 卡或國泰 CUBE 卡官方公告中的通路，一律必須全部收錄於系統資料庫中。
2. **通路排序一律依中文筆畫與字母排序**：使用 `localeCompare('zh-Hant')` 排序。
3. **100% 通路獨立條目**：嚴格禁止斜線 `/` 合併多個店家，所有品牌與分店各自獨立。
4. **慶生月 10% 嚴格判定**：限官方簽約名店（新光三越、PASTAIO、橘色、教父、晶華、王品牛排等）。一般百貨與速食嚴禁給予 10%。
5. **程式碼更新與 GitHub Pages 同步**：
   - 每次修改完成後必須執行 `npm run build && git push origin main && npm run deploy`。
   - 線上正式網址：`https://yuchienw.github.io/CreditCardRewards/`。
