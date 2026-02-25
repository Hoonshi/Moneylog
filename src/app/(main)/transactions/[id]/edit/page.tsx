import { MobileShell } from "@/components/layout/mobileShell";
import Link from "next/link";
import TransactionEditLoader from "./_components/transactionEditLoader";

export default async function TransactionEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="h-full">
      {/* Mobile */}
      <div className="h-full lg:hidden">
        <MobileShell
          title="거래 수정"
          hideNav
          back
          rightAction={
            <button
              type="submit"
              form="transaction-form"
              className="cursor-pointer px-2.5 py-1 rounded-full text-[11px] font-medium bg-main text-white"
            >
              저장
            </button>
          }
        >
          <TransactionEditLoader id={id} />
        </MobileShell>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-col h-full bg-white">
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-sm font-bold text-gray-800">거래 수정</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              거래 정보를 수정하세요
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/transactions/${id}`}
              className="cursor-pointer text-xs text-gray-500 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50"
            >
              취소
            </Link>
            <button
              type="submit"
              form="transaction-form"
              className="cursor-pointer text-xs text-white bg-main rounded-md px-3 py-1.5 hover:bg-blue-600"
            >
              저장
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-5">
          <div className="max-w-lg mx-auto">
            <TransactionEditLoader id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
