import { MobileShell } from '@/components/layout/mobile-shell';
import { TransactionForm } from './_components/transaction-form';

export default function TransactionNewPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="새 거래"
        hideNav
        back
        rightAction={
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-500 text-white">
            저장
          </span>
        }
      >
        <TransactionForm />
      </MobileShell>
    </div>
  );
}
