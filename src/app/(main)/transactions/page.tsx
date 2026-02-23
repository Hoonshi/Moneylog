import { Search } from 'lucide-react';
import { MobileShell } from '@/components/layout/mobile-shell';
import { TransactionFilters } from './_components/transaction-filters';
import { TransactionList } from './_components/transaction-list';

export default function TransactionsPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="거래 내역"
        rightAction={<Search size={20} className="text-gray-500" />}
      >
        <div className="space-y-3 pt-2">
          <TransactionFilters />
          <TransactionList />
        </div>
      </MobileShell>
    </div>
  );
}
