const MOCK_DAY_TX = [
  { icon: '🍽', name: '스타벅스 강남점', cat: '식비', amount: '-₩6,500', neg: true },
];

interface DayDetailProps {
  day: number;
}

export function DayDetail({ day }: DayDetailProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-gray-500 mb-2">2월 {day}일 목요일</p>
      <div className="bg-white rounded-xl overflow-hidden">
        {MOCK_DAY_TX.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-sm">
              {tx.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-800">{tx.name}</p>
              <p className="text-[10px] text-gray-400">{tx.cat}</p>
            </div>
            <span className={`text-xs font-semibold ${tx.neg ? 'text-red-500' : 'text-blue-600'}`}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
