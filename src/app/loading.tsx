export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 bg-main rounded-xl flex items-center justify-center text-white font-bold text-lg animate-pulse">
          ₩
        </div>
        <p className="text-xs text-gray-400">불러오는 중...</p>
      </div>
    </div>
  );
}
