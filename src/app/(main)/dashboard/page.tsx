import DashboardSummary from "./_components/dashboardSummary";
import DashboardChart from "./_components/dashboardChart";
import DashboardTransactionList from "./_components/dashboardTransactionList";
import DashboardHeader from "./_components/dashboardHeader";

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col bg-gray-50 lg:bg-white">
      {/* 대시보드헤더 */}
      <DashboardHeader />

      <div className="flex-1 overflow-auto p-4 lg:p-5 pb-24 lg:pb-5">
        <div className="space-y-4">
          {/* 요약 카드 */}
          <DashboardSummary />
          {/* 차트 및 카테고리*/}
          <DashboardChart />
          {/*최근거래내역*/}
          <DashboardTransactionList />
        </div>{" "}
      </div>
    </div>
  );
}
