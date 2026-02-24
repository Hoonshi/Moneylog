const CATEGORIES = [
  { icon: "🍽", name: "식비", count: 45 },
  { icon: "🚗", name: "교통", count: 23 },
  { icon: "🏠", name: "주거/공과금", count: 8 },
  { icon: "🎮", name: "여가/문화", count: 15 },
  { icon: "📦", name: "쇼핑", count: 12 },
  { icon: "💊", name: "의료/건강", count: 3 },
];

export function CategoryManager() {
  return (
    <div className="border border-gray-300 rounded-lg p-3">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
        카테고리 관리
      </span>
      <div className="mt-2 space-y-1.5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-gray-50"
          >
            <span>{cat.icon}</span>
            <span className="text-xs font-medium text-gray-700 flex-1">
              {cat.name}
            </span>
            <span className="text-xs text-gray-400">{cat.count}건</span>
            <span className="text-xs text-blue-500 cursor-pointer hover:text-blue-700">
              수정
            </span>
            <span className="text-xs text-red-400 cursor-pointer hover:text-red-600">
              삭제
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <div className="bg-main text-white px-2 py-1 text-xs rounded-md inline-flex cursor-pointer hover:bg-blue-600">
          + 카테고리 추가
        </div>
      </div>
    </div>
  );
}
