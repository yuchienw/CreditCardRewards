export interface ValidityStatus {
  status: 'valid' | 'expiring_soon' | 'expired';
  daysLeft: number;
  message: string;
  badgeLabel: string;
  badgeClass: string;
}

export function checkValidity(validUntilStr: string): ValidityStatus {
  try {
    // 支援 "YYYY/MM/DD" 或 "YYYY-MM-DD" 格式
    const parts = validUntilStr.split(/[/ -]/).map((p) => parseInt(p, 10));
    if (parts.length < 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
      return {
        status: 'valid',
        daysLeft: 999,
        message: `權益有效至：${validUntilStr}`,
        badgeLabel: '有效中',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      };
    }

    const expiryDate = new Date(parts[0], parts[1] - 1, parts[2], 23, 59, 59);
    const now = new Date();

    const diffTime = expiryDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) {
      return {
        status: 'expired',
        daysLeft,
        message: `🚨 警告：此通路權益已於 ${validUntilStr} 到期（已逾期 ${Math.abs(daysLeft)} 天）！發卡行可能已更換方案或調整回饋率，請務必點擊官方來源複查。`,
        badgeLabel: '⚠️ 權益已逾期',
        badgeClass: 'bg-rose-500 text-white font-bold animate-pulse shadow-xs',
      };
    } else if (daysLeft <= 30) {
      return {
        status: 'expiring_soon',
        daysLeft,
        message: `⏳ 提醒：此通路權益即將於 ${validUntilStr} 到期（僅剩 ${daysLeft} 天），請留意發卡行次期公告。`,
        badgeLabel: `⏳ 剩餘 ${daysLeft} 天到期`,
        badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 font-semibold',
      };
    } else {
      return {
        status: 'valid',
        daysLeft,
        message: `權益有效至：${validUntilStr}（還有 ${daysLeft} 天）`,
        badgeLabel: '有效中',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      };
    }
  } catch (e) {
    return {
      status: 'valid',
      daysLeft: 999,
      message: `權益有效至：${validUntilStr}`,
      badgeLabel: '有效中',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    };
  }
}
