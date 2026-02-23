import { MobileShell } from '@/components/layout/mobile-shell';
import { MonthlyComparison } from './_components/monthly-comparison';
import { DailyTrendChart } from './_components/daily-trend-chart';
import { TopExpenses } from './_components/top-expenses';

const CATEGORY_BREAKDOWN = [
  { icon: '🍽', cat: '식비', amount: '₩647,000', pct: 35, color: 'bg-orange-400' },
  { icon: '🏠', cat: '주거', amount: '₩517,000', pct: 28, color: 'bg-blue-400'   },
  { icon: '🚗', cat: '교통', amount: '₩277,000', pct: 15, color: 'bg-green-400'  },
  { icon: '🎮', cat: '여가', amount: '₩221,000', pct: 12, color: 'bg-purple-400' },
  { icon: '📦', cat: '기타', amount: '₩185,000', pct: 10, color: 'bg-gray-400'   },
];

export default function ReportsPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="리포트"
        rightAction={
          <span className="text-xs font-bold text-gray-700">2025.02 ▾</span>
        }
      >
        <div className="space-y-4 pt-2">
          <MonthlyComparison />
          <DailyTrendChart />

          {/* Category Breakdown */}
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs font-bold text-gray-800 mb-3">카테고리별 지출</p>
            <div className="space-y-2.5">
              {CATEGORY_BREAKDOWN.map((item) => (
                <div key={item.cat}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-xs text-gray-700">{item.cat}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-800">{item.amount}</span>
                      <span className="text-[10px] text-gray-400">{item.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className={`${item.color} h-1.5 rounded-full`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TopExpenses />
        </div>
      </MobileShell>
    </div>
  );
}
