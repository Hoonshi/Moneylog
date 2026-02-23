import { MobileShell } from '@/components/layout/mobile-shell';
import { BudgetOverview } from './_components/budget-overview';
import { BudgetCard } from './_components/budget-card';

const BUDGETS = [
  { icon: '🍽', cat: '식비',       used: 420000, total: 500000, color: 'bg-orange-400' },
  { icon: '🏠', cat: '주거/공과금', used: 450000, total: 500000, color: 'bg-blue-400'   },
  { icon: '🚗', cat: '교통',       used: 85000,  total: 100000, color: 'bg-green-400'  },
  { icon: '🎮', cat: '여가/문화',  used: 180000, total: 200000, color: 'bg-purple-400' },
  { icon: '📦', cat: '쇼핑',       used: 95000,  total: 300000, color: 'bg-pink-400'   },
  { icon: '💊', cat: '의료/건강',  used: 0,      total: 100000, color: 'bg-teal-400'   },
];

export default function BudgetPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="예산 관리"
        subtitle="2025년 2월"
        rightAction={
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-500 text-white">
            + 추가
          </span>
        }
      >
        <div className="space-y-4 pt-2">
          <BudgetOverview />
          <div className="space-y-2.5">
            {BUDGETS.map((b) => (
              <BudgetCard key={b.cat} {...b} />
            ))}
          </div>
        </div>
      </MobileShell>
    </div>
  );
}
