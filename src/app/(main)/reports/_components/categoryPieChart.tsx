const SEGMENTS = [
  { pct: 35, offset: 0,  color: '#f97316', label: '식비 35%',  bg: 'bg-orange-400' },
  { pct: 28, offset: 35, color: '#3b82f6', label: '주거 28%',  bg: 'bg-blue-400'   },
  { pct: 15, offset: 63, color: '#22c55e', label: '교통 15%',  bg: 'bg-green-400'  },
  { pct: 12, offset: 78, color: '#a855f7', label: '여가 12%',  bg: 'bg-purple-400' },
  { pct: 10, offset: 90, color: '#6b7280', label: '기타 10%',  bg: 'bg-gray-400'   },
];

export function CategoryPieChart() {
  return (
    <div className="border border-gray-300 rounded-lg p-3">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
        카테고리별 지출 비율
      </span>
      <div className="mt-3 flex items-center justify-center">
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 100 100" className="w-28 h-28 -rotate-90">
            {SEGMENTS.map((s, i) => (
              <circle
                key={i}
                cx="50" cy="50" r="40"
                fill="none"
                stroke={s.color}
                strokeWidth="20"
                strokeDasharray={`${s.pct * 2.51} ${251.2 - s.pct * 2.51}`}
                strokeDashoffset={`${-s.offset * 2.51}`}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {SEGMENTS.map((s) => (
          <div key={s.label} className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${s.bg}`} />
            <span className="text-xs text-gray-500">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
