import { MonthlyComparison } from "./_components/monthlyComparison";
import { DailyTrendChart } from "./_components/dailyTrendChart";
import { TopExpenses } from "./_components/topExpenses";
import ReportSummary from "./_components/reportSummary";
import MonthlyTrend from "./_components/monthlyTrendChart";
import ReportsHeader from "./_components/reportsHeader";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import {
  reportKeys,
  calanderKey,
  dashboardKeys,
  transactionKeys,
} from "@/lib/queryKey";
import { fetchMonthlyTrend } from "@/apis/reports/fetchMonthlyTrend";
import { fetchDailyTotal } from "@/apis/calander/fetchDailyTotal";
import monthlySummary from "@/apis/dashboard/monthlySummary";
import transactionList from "@/apis/transaction/transactionList";
import type { TransactionListParams } from "@/types/transaction";
import { DEFAULT_DASHBOARD_PARAMS } from "@/constants/transactionList";

export default async function ReportsPage() {
  const queryClient = getQueryClient();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const topTransactionParams: TransactionListParams = {
    filter: {
      type: "all",
      categoryId: null,
      startDate: `${year}-${String(month).padStart(2, "0")}-01`,
      endDate: `${year}-${String(month).padStart(2, "0")}-${new Date(year, month, 0).getDate()}`,
      search: "",
    },
    sort: { key: "date", direction: "desc" },
    page: 1,
    pageSize: 5,
  };

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: reportKeys.monthlyTrend(6),
      queryFn: () => fetchMonthlyTrend(6),
    }),
    queryClient.prefetchQuery({
      queryKey: [{ ...calanderKey.daily(year, month) }],
      queryFn: () => fetchDailyTotal(year, month),
    }),
    queryClient.prefetchQuery({
      queryKey: [{ ...dashboardKeys.monthlySummary(year, month) }],
      queryFn: () => monthlySummary(year, month),
    }),
    queryClient.prefetchQuery({
      queryKey: transactionKeys.list(topTransactionParams),
      queryFn: () => transactionList(topTransactionParams),
    }),
    queryClient.prefetchQuery({
      queryKey: transactionKeys.list(DEFAULT_DASHBOARD_PARAMS),
      queryFn: () => transactionList(DEFAULT_DASHBOARD_PARAMS),
    }),
  ]);

  return (
    <div className="h-full flex flex-col bg-gray-50 lg:bg-white">
      {/* 헤더 */}
      <ReportsHeader />

      <div className="flex-1 overflow-auto p-4 lg:p-5 pb-24 lg:pb-5">
        <div className="space-y-4">
          <HydrationBoundary state={dehydrate(queryClient)}>
            {/*  요약 */}
            <ReportSummary />

            {/* 차트 */}
            <MonthlyTrend />

            {/* 전월대비 */}
            <MonthlyComparison />

            {/* 일별 지출 추이 */}
            <DailyTrendChart />

            {/* 상위 지출 5개 */}
            <TopExpenses />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
}
