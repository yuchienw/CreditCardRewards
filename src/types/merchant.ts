export type CubeScheme = 
  | 'digital'      // 玩數位 (3.3%)
  | 'dining'       // 樂饗購 (3.3%)
  | 'travel'       // 趣旅行 (3.3%)
  | 'selected'     // 集精選 (2.0% ~ 3.0%)
  | 'japan'        // 日本賞 (3.5%)
  | 'birthday'     // 慶生月 (最高 10.0%)
  | 'general';     // 一般消費 (0.3%)

export type RichartScheme = 
  | 'digital_fun'  // 數趣刷 (3.3%)
  | 'pay'          // Pay著刷 (台新Pay 3.8% / LINE Pay & 全盈 2.3%)
  | 'weekend'      // 假日刷 (2.0%)
  | 'travel'       // 好行刷 / 出國刷 (3.0% ~ 5.0%)
  | 'general';     // 平日一般 (0.5% ~ 1.0%)

export interface CubeDetail {
  scheme: CubeScheme;
  schemeName: string;
  rate: number;
  validUntil?: string;
  note?: string;
  isBirthdaySpecial?: boolean; // 是否為慶生月加碼 (如 10%)
}

export interface RichartDetail {
  scheme: RichartScheme;
  schemeName: string;
  rate: number;
  validUntil?: string;
  payMethod?: 'any' | 'taishin_pay' | 'line_pay' | 'general';
  note?: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: 'game_stream' | 'mobile_pay' | 'ecommerce' | 'dining_delivery' | 'travel_traffic' | 'grocery_convenience' | 'department_fashion' | 'general';
  categoryLabel: string;
  tags: string[];
  cube: CubeDetail;
  richart: RichartDetail;
  richartAltPay?: RichartDetail;
  validUntil: string; // 權益時效，例如 "2026/12/31"
  lastVerifiedAt: string; // 上次人工/官方查核日期
  officialSourceUrl?: string; // 官方權益出處連結
  tips?: string;
}

export interface UserContext {
  birthMonth: number; // 使用者生日月份 (1~12)，預設 8
  isCurrentMonthBirthday: boolean; // 目前是否為生日月
  isWeekend: boolean; // 是否為假日/週末 (觸發台新假日刷 2%)
  selectedPayMethod: 'all' | 'taishin_pay' | 'line_pay' | 'card'; // 偏好的支付方式
}

export interface BestCardResult {
  merchant: Merchant;
  winnerCard: 'cube' | 'richart' | 'tie';
  winnerRate: number;
  winnerSchemeName: string;
  winnerNote: string;
  validUntil: string;
  runnerUpCard?: 'cube' | 'richart';
  runnerUpRate?: number;
  runnerUpSchemeName?: string;
  runnerUpNote?: string;
}
