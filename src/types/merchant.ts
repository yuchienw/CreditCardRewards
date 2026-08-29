export type CubeScheme = 
  | 'digital'      // 玩數位 (3.0% ~ 3.3%)
  | 'dining'       // 樂饗購 (3.0% ~ 3.3%)
  | 'travel'       // 趣旅行 (3.0% ~ 3.3%)
  | 'selected'     // 集精選 (2.0% ~ 3.0%)
  | 'japan'        // 日本賞 (3.5%)
  | 'birthday'     // 慶生月 (最高 10.0%)
  | 'pxpay'        // 全支付 / 來支付
  | 'formosa'      // 台塑家
  | 'fixed'        // 固定回饋 (1.2% / 2.5%)
  | 'general';     // 一般消費 (0.3%)

export type RichartScheme = 
  | 'pay'          // Pay 著刷 (台新Pay 3.8% / LINE Pay 2.3%)
  | 'everyday'     // 天天刷 (超商/量販/交通/加油 3.3%)
  | 'big_spend'    // 大筆刷 (百貨/Outlet/時尚 3.3%)
  | 'dining'       // 好饗刷 (全台餐飲/外送平台 3.3%)
  | 'digital_fun'  // 數趣刷 (網購/遊戲PlayStation/串流/AI 3.3%)
  | 'travel'       // 玩旅刷 (海外消費/航空/訂房 3.3%)
  | 'weekend'      // 假日刷 (週末六日全通路 2.0%)
  | 'chill'        // Chill 刷 (指定手搖/熱門餐廳 10.0%)
  | 'general';     // 平日一般 (0.5% ~ 1.0%)

export interface SchemeOption {
  schemeName: string;
  rate: number;
  note?: string;
  isSpecial?: boolean; // 如生日月 10% 或 Chill 刷 10%
  condition?: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: 'game_stream' | 'mobile_pay' | 'ecommerce' | 'dining_delivery' | 'travel_traffic' | 'grocery_convenience' | 'department_fashion' | 'general';
  categoryLabel: string;
  tags: string[];
  validUntil: string;
  lastVerifiedAt: string;
  officialSourceUrl?: string;
  cube: {
    scheme: CubeScheme;
    schemeName: string;
    rate: number; // Level 2 (3.0%) 或 Level 3 (3.3%)
    isBirthdaySpecial?: boolean; // 生日月 10%
    note?: string;
  };
  richart: {
    scheme: RichartScheme;
    schemeName: string;
    rate: number;
    isChillSpecial?: boolean; // Chill 刷 10%
    payMethod?: 'any' | 'taishin_pay' | 'line_pay' | 'general';
    note?: string;
  };
  tips?: string;
}

export interface UserContext {
  birthMonth: number;
  isCurrentMonthBirthday: boolean;
  isWeekend: boolean;
  cubeLevel: 'level2' | 'level3'; // Level 2 享 3.0%, Level 3 (VIP) 享 3.3%
  selectedPayMethod: 'all' | 'taishin_pay' | 'line_pay' | 'card';
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
