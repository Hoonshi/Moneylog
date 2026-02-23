const RECURRING = [
  { name: '월세',    amount: '₩450,000', cycle: '매월 1일'  },
  { name: '넷플릭스', amount: '₩17,000',  cycle: '매월 15일' },
  { name: '통신비',  amount: '₩65,000',  cycle: '매월 25일' },
];

export function RecurringManager() {
  return (
    <div className="border border-gray-300 rounded-lg p-3">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">반복 거래 관리</span>
      <div className="mt-2 space-y-1.5">
        {RECURRING.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-gray-50"
          >
            <span className="text-xs font-medium text-gray-700 flex-1">{item.name}</span>
            <span className="text-xs text-red-500">{item.amount}</span>
            <span className="text-xs text-gray-400">{item.cycle}</span>
            <span className="text-xs text-blue-500 cursor-pointer hover:text-blue-700">수정</span>
          </div>
        ))}
      </div>
    </div>
  );
}
