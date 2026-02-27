import {
  ChevronDown,
  Utensils,
  Home,
  Car,
  Gamepad2,
  Package,
} from "lucide-react";
import type { ElementType } from "react";
import { MonthlyComparison } from "./_components/monthlyComparison";
import { DailyTrendChart } from "./_components/dailyTrendChart";
import { TopExpenses } from "./_components/topExpenses";
import ReportSummary from "./_components/reportSummary";
import MonthlyTrend from "./_components/monthlyTrend";

const CATEGORY_BREAKDOWN: {
  Icon: ElementType;
  cat: string;
  amount: string;
  pct: number;
  color: string;
}[] = [
  {
    Icon: Utensils,
    cat: "식비",
    amount: "₩647,000",
    pct: 35,
    color: "bg-orange-400",
  },
  {
    Icon: Home,
    cat: "주거",
    amount: "₩517,000",
    pct: 28,
    color: "bg-blue-400",
  },
  {
    Icon: Car,
    cat: "교통",
    amount: "₩277,000",
    pct: 15,
    color: "bg-green-400",
  },
  {
    Icon: Gamepad2,
    cat: "여가",
    amount: "₩221,000",
    pct: 12,
    color: "bg-purple-400",
  },
  {
    Icon: Package,
    cat: "기타",
    amount: "₩185,000",
    pct: 10,
    color: "bg-gray-400",
  },
];

export default function ReportsPage() {
  return (
    <div className="h-full flex flex-col bg-gray-50 lg:bg-white">
      <header className="bg-white flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-100 shrink-0">
        <div>
          <h1 className="text-base lg:text-sm font-bold text-gray-900 lg:text-gray-800">
            리포트
          </h1>
          <p className="hidden lg:block text-xs text-gray-400 mt-0.5">
            월간 재무 분석
          </p>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-600 border border-gray-200 rounded-md px-2.5 py-1.5 hover:bg-gray-50">
          2025년 2월 <ChevronDown size={13} className="text-gray-400" />
        </button>
      </header>
      <div className="flex-1 overflow-auto p-4 lg:p-5 pb-24 lg:pb-5">
        <div className="space-y-4">
          {/* 맨위 요약 */}
          <ReportSummary />

          {/* 차트 */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
              월별 추이
            </p>
            <div className="h-56">
              <MonthlyTrend />
            </div>
          </div>

          <MonthlyComparison />
          <DailyTrendChart />

          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
              주요 지출 항목
            </p>
            <TopExpenses />
          </div>
        </div>
      </div>
    </div>
  );
}
