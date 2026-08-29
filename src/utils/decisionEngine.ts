import type { Merchant, UserContext, BestCardResult } from '../types/merchant';

export interface StrategyPathway {
  icon: string;
  title: string;
  condition: string;
  recommendedCard: 'cube' | 'richart';
  cardName: string;
  schemeName: string;
  rate: number;
  highlightText: string;
  note: string;
}

export interface EnhancedDecisionResult extends BestCardResult {
  pathways: StrategyPathway[];
}

export function evaluateBestCard(merchant: Merchant, context: UserContext): EnhancedDecisionResult {
  // 1. 計算國泰 CUBE 卡在該條件下的實際回饋率
  let cubeRate = merchant.cube.rate;
  let cubeSchemeName = merchant.cube.schemeName;
  let cubeNote = merchant.cube.note || '';

  // 根據 CUBE 會員等級調整回饋率 (Level 1: 2.0%, Level 2: 3.0%, Level 3: 3.3%)
  if (!merchant.cube.isBirthdaySpecial && merchant.cube.scheme !== 'japan' && merchant.cube.scheme !== 'general') {
    if (context.cubeLevel === 'level1') {
      cubeRate = 2.0;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 1: 2%)`;
      cubeNote = '目前為 CUBE Level 1 一般卡友（2% 小樹點），開立帳戶扣繳可升級至 Level 2 (3%)！';
    } else if (context.cubeLevel === 'level2') {
      cubeRate = 3.0;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 2: 3%)`;
      cubeNote = '目前為 CUBE Level 2（帳戶自動扣繳享 3% 小樹點）';
    } else if (context.cubeLevel === 'level3') {
      cubeRate = 3.3;
      cubeSchemeName = `${merchant.cube.schemeName} (Level 3 VIP: 3.3%)`;
      cubeNote = '目前為 CUBE Level 3（財富管理貴賓 VIP 享 3.3% 小樹點）';
    }
  }

  // 慶生月 10% 判斷
  if (context.isCurrentMonthBirthday && merchant.cube.isBirthdaySpecial) {
    cubeRate = 10.0;
    cubeSchemeName = '慶生月 (生日特店專屬)';
    cubeNote = `🎂 ${context.birthMonth}月壽星專屬！切換「慶生月」享 10% 小樹點加碼！`;
  }

  // 2. 計算台新 Richart 卡在該條件下的實際回饋率
  let richartRate = merchant.richart.rate;
  let richartSchemeName = merchant.richart.schemeName;
  let richartNote = merchant.richart.note || '';

  // 假日刷情境
  if (merchant.richart.scheme === 'weekend') {
    if (context.isWeekend) {
      richartRate = 2.0;
      richartSchemeName = '假日刷 (週末六日)';
      richartNote = '週末假日全通路一般消費享 2.0% 台新 Point！';
    } else {
      richartRate = 1.0;
      richartSchemeName = '平日一般消費';
      richartNote = '平日一般消費 1.0% (基礎 0.5% + 扣繳加碼 0.5%)';
    }
  }

  // 3. 計算該商家的多情境刷法攻略 (Pathways / Strategies)
  const pathways: StrategyPathway[] = [];

  // 攻略 A: 百貨專櫃 + 生日月 (10.0%)
  pathways.push({
    icon: '🎂',
    title: '生日當月 ＋ 百貨專櫃門市結帳',
    condition: '門市位於新光三越、SOGO、遠東百貨、微風、台北101且為壽星月份',
    recommendedCard: 'cube',
    cardName: '國泰 CUBE 卡',
    schemeName: '慶生月',
    rate: 10.0,
    highlightText: '最高 10.0% 小樹點',
    note: '若該品牌設櫃於指定合作百貨，生日當月切換 CUBE「慶生月」特店方案最高享 10% 小樹點！'
  });

  // 攻略 B: 新光三越專櫃 (3.8% 台新Pay)
  pathways.push({
    icon: '🏢',
    title: '若在「新光三越」專櫃門市結帳',
    condition: '使用台新 Pay 或 skm pay 結帳',
    recommendedCard: 'richart',
    cardName: '台新 Richart 卡',
    schemeName: 'Pay 著刷 (台新Pay 3.8%)',
    rate: 3.8,
    highlightText: '3.8% 台新 Point',
    note: '在新光三越各分館專櫃，打開「台新 Pay」綁 Richart 刷結帳直接拿滿 3.8%！'
  });

  // 攻略 C: SOGO / 遠百 / 微風 / 101 專櫃日常 (3.3%)
  pathways.push({
    icon: '🛍️',
    title: '若在「SOGO / 遠東百貨 / 微風 / 101」專櫃結帳',
    condition: '一般直刷或 Apple Pay / Google 錢包',
    recommendedCard: 'cube',
    cardName: 'CUBE 卡 / Richart 卡',
    schemeName: 'CUBE 樂饗購 (3.3%) / Richart 大筆刷 (3.3%)',
    rate: 3.3,
    highlightText: '3.3% 回饋',
    note: '平日在 SOGO、遠百、微風、101 購物，刷 CUBE「樂饗購」或 Richart「大筆刷」均享 3.3%！'
  });

  // 攻略 D: 綁定 LINE Pay 行動支付結帳 (2.3%)
  pathways.push({
    icon: '📲',
    title: '店家支援 LINE Pay 掃碼結帳',
    condition: '使用 LINE Pay 綁定信用卡付款',
    recommendedCard: 'richart',
    cardName: '台新 Richart 卡',
    schemeName: 'Pay 著刷 (LINE Pay)',
    rate: 2.3,
    highlightText: '2.3% 台新 Point',
    note: '只要店家支援 LINE Pay，改用 Richart 卡切換「Pay 著刷」保底享有 2.3%！'
  });

  // 攻略 E: 週末六日結帳 (2.0%)
  pathways.push({
    icon: '🌴',
    title: '選在週末六日結帳（獨立街邊店 / 官方網站）',
    condition: '週六或週日消費',
    recommendedCard: 'richart',
    cardName: '台新 Richart 卡',
    schemeName: '假日刷',
    rate: 2.0,
    highlightText: '2.0% 台新 Point',
    note: '獨立門市或官網直刷，選在週六週日刷 Richart 卡切換「假日刷」，全通路享 2.0% 無腦回饋！'
  });

  // 4. 判定勝出者
  let baseResult: BestCardResult;

  if (cubeRate > richartRate) {
    baseResult = {
      merchant,
      winnerCard: 'cube',
      winnerRate: cubeRate,
      winnerSchemeName: cubeSchemeName,
      winnerNote: cubeNote,
      validUntil: merchant.validUntil,
      runnerUpCard: 'richart',
      runnerUpRate: richartRate,
      runnerUpSchemeName: richartSchemeName,
      runnerUpNote: richartNote,
    };
  } else if (richartRate > cubeRate) {
    baseResult = {
      merchant,
      winnerCard: 'richart',
      winnerRate: richartRate,
      winnerSchemeName: richartSchemeName,
      winnerNote: richartNote,
      validUntil: merchant.validUntil,
      runnerUpCard: 'cube',
      runnerUpRate: cubeRate,
      runnerUpSchemeName: cubeSchemeName,
      runnerUpNote: cubeNote,
    };
  } else {
    baseResult = {
      merchant,
      winnerCard: 'tie',
      winnerRate: cubeRate,
      winnerSchemeName: `雙卡皆享 ${cubeRate}% (CUBE: ${cubeSchemeName} / 台新: ${richartSchemeName})`,
      winnerNote: cubeNote || richartNote,
      validUntil: merchant.validUntil,
      runnerUpCard: undefined,
      runnerUpRate: richartRate,
      runnerUpSchemeName: richartSchemeName,
      runnerUpNote: richartNote,
    };
  }

  return {
    ...baseResult,
    pathways,
  };
}
