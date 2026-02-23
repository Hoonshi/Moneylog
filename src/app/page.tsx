import { MobileShell } from '@/components/layout/mobile-shell';
import { SummaryCards } from './_components/summary-cards';
import { CategoryBreakdown } from './_components/category-breakdown';
import { BudgetProgress } from './_components/budget-progress';
import { RecentTransactions } from './_components/recent-transactions';

export default function DashboardPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="MoneyLog"
        subtitle="2025년 2월"
        rightAction={<span className="text-xl">🔔</span>}
      >
        <div className="space-y-4 pt-2">
          <SummaryCards />
          <BudgetProgress />
          <CategoryBreakdown />
          <RecentTransactions />
        </div>
      </MobileShell>
    </div>
  );
}
