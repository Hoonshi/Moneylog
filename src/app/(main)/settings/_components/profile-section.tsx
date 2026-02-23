export function ProfileSection() {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-3">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl shrink-0">
        👤
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-800">홍길동</p>
        <p className="text-[11px] text-gray-400">user@email.com</p>
      </div>
      <span className="text-xs text-gray-400">›</span>
    </div>
  );
}
