import type { Merchant, UserContext, BestCardResult } from '../types/merchant';

export function evaluateBestCard(merchant: Merchant, context: UserContext): BestCardResult {
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

  // 3. 判定勝出者
  if (cubeRate > richartRate) {
    return {
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
    return {
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
    return {
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
}
