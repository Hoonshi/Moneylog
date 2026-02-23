const bars = [65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 60, 72];

export function MonthlyChart() {
  return (
    <div className="col-span-3 border border-gray-300 rounded-lg p-3">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
        월별 수입/지출 추이
      </span>
      <div className="mt-3 h-36 flex items-end gap-1.5 px-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col gap-0.5">
            <div className="bg-blue-200 rounded-sm" style={{ height: `${h}%` }} />
            <div className="bg-red-200 rounded-sm" style={{ height: `${h * 0.6}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
