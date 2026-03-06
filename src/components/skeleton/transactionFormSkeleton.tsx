export function TransactionFormSkeleton() {
  return (
    <div className="space-y-5 pt-2 animate-pulse">
      {/* Type Toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        <div className="flex-1 py-2.5 bg-white rounded-lg shadow-sm" />
        <div className="flex-1 py-2.5 rounded-lg" />
      </div>
      {/* 금액 */}
      <div className="text-center py-4">
        <div className="h-2 w-8 bg-gray-200 rounded mx-auto mb-3" />
        <div className="h-8 w-32 bg-gray-200 rounded mx-auto" />
      </div>
      {/* 폼 필드 카드 */}
      <div className="bg-white rounded-xl divide-y divide-gray-200">
        <div className="flex items-center px-4 py-3.5">
          <div className="h-3 w-10 bg-gray-200 rounded mr-4" />
          <div className="h-3 w-32 bg-gray-100 rounded" />
        </div>
        <div className="flex items-center px-4 py-3.5">
          <div className="h-3 w-10 bg-gray-200 rounded mr-4" />
          <div className="h-3 w-28 bg-gray-100 rounded" />
        </div>
        <div className="px-4 py-3.5">
          <div className="h-3 w-14 bg-gray-200 rounded mb-2.5" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-7 w-16 bg-gray-100 rounded-full" />
            ))}
          </div>
        </div>
        <div className="px-4 py-3.5">
          <div className="h-3 w-10 bg-gray-200 rounded mb-1.5" />
          <div className="h-3 w-40 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}
