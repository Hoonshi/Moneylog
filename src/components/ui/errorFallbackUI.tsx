import { FallbackProps } from "react-error-boundary";

export function ErrorFallbackUI({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-100 flex flex-col items-center justify-center gap-6 p-8 bg-white border border-red-100 rounded-xl mt-8 shadow-sm text-black">
      <div className="text-center space-y-4">
        <div className="text-6xl animate-bounce">💣</div>
        <h2 className="text-2xl font-bold text-gray-800">
          문제가 발생했습니다.
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          일시적인 네트워크 오류로 정보를 불러오지 못했습니다. 잠시 후
          다시시도해 주세요.
        </p>
      </div>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2.5 bg-[#ff8787] text-white font-medium rounded-lg hover:bg-[#ff6b6b] transition-colors shadow-md"
      >
        다시 시도하기
      </button>
    </div>
  );
}
