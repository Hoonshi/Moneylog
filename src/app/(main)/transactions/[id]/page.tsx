import { MobileShell } from '@/components/layout/mobile-shell';
import { TransactionDetail } from './_components/transaction-detail';

export default function TransactionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="거래 상세"
        hideNav
        back
        rightAction={
          <div className="flex gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600">수정</span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600">삭제</span>
          </div>
        }
      >
        <TransactionDetail id={params.id} />
      </MobileShell>
    </div>
  );
}
