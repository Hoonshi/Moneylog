export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return `₩${amount.toLocaleString('ko-KR')}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
}

export function getMonthLabel(monthStr: string): string {
  const [year, month] = monthStr.split('-');
  return `${year}년 ${Number(month)}월`;
}
