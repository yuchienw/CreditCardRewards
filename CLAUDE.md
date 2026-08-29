# 🧠 專案核心開發規範與記憶 (Claude Code & AI Assistant Memory)

> 請直接參閱本專案的核心規格書與 Antigravity 記憶檔案：
> - 👉 [**`GEMINI.md` (完整核心記憶與 AI 開發鐵律)**](GEMINI.md)
> - 👉 [**`USER_SPECIFICATION.md` (使用者需求規格書)**](USER_SPECIFICATION.md)

---

## 📌 唯一權威官方資料源 (Single Source of Truth)
- **國泰 CUBE 卡官方權益網址（一律以此頁面為唯一標準）**：
  `https://www.cathay-cube.com.tw/cathaybk/personal/product/credit-card/cards/cube-list?Cub_ProjectCode=DBB4100001`
  - 涵蓋所有官方方案：`玩數位`、`樂饗購`、`趣旅行`、`集精選`、`慶生月`、`台塑家`、`全支付`、`固定回饋`。
- **台新 Richart 卡官方權益網址（一律以此頁面為唯一標準）**：
  `https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20251216135624463/index.html?gad_campaignid=22054035743`
  - 涵蓋所有官方方案：`Chill 刷 (10%/5%/3.3%)`、`Pay 著刷 (3.8%/2.3%)`、`天天刷 (3.3%)`、`大筆刷 (3.3%)`、`好饗刷 (3.3%)`、`數趣刷 (3.3%)`、`玩旅刷 (3.3%)`、`假日刷 (2.0%)`。

## 📌 開發鐵律重點摘要：
1. **官方權益通路 100% 完整全收錄（絕無遺漏）**：只要有出現在台新 Richart 卡或國泰 CUBE 卡官方公告中的通路，一律必須全部收錄於系統資料庫中，AI 必須主動連網查核，嚴禁要求使用者手動列出。
2. **通路導向（Merchant-First）**：以店家為核心，判定雙卡勝出者與 App 方案。
3. **100% 通路獨立條目**：嚴格禁止斜線 `/` 合併多個店家，所有品牌與分店各自獨立。
3. **慶生月 10% 嚴格判定**：限 PlayStation、任天堂、合作百貨、PASTAIO、橘色、教父牛排、Smith & Wollensky、貓下去、晶華、王品牛排、夏慕尼。速食與一般餐飲（KFC、麥當勞等）絕對不給 10%。
4. **系統即時日期自動判定**：自動判斷週末 2% / 平日 1% 與 8 月壽星月。
5. **UI 互動**：情境切換列常駐置頂（Sticky Header）、選取後自動滑動到結果、右下角回搜尋框置頂按鈕。
