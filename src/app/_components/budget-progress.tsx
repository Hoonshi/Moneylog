const budgets = [
  { icon: '🍽', cat: '식비', used: 42, total: 50, pct: 84 },
  { icon: '🚗', cat: '교통', used: 8.5, total: 10, pct: 85 },
  { icon: '🎮', cat: '여가', used: 18, total: 20, pct: 90 },
];

export function BudgetProgress() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold text-gray-800">예산 현황</p>
        <span className="text-[10px] text-blue-500">전체보기 →</span>
      </div>
      <div className="space-y-2.5">
        {budgets.map((b) => (
          <div key={b.cat}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{b.icon}</span>
                <span className="text-xs text-gray-700">{b.cat}</span>
              </div>
              <span className={`text-[10px] font-semibold ${b.pct > 80 ? 'text-red-500' : 'text-gray-500'}`}>
                {b.used}만 / {b.total}만
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${b.pct > 80 ? 'bg-red-400' : 'bg-blue-400'}`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
