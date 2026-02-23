'use client';

export function TransactionFilters() {
  return (
    <div className="flex gap-2">
      {['전체', '수입', '지출'].map((tab, i) => (
        <span
          key={tab}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            i === 0 ? 'bg-blue-500 text-white' : 'bg-white text-gray-500 border border-gray-200'
          }`}
        >
          {tab}
        </span>
      ))}
      <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-gray-500 border border-gray-200 ml-auto">
        카테고리 ▾
      </span>
    </div>
  );
}
