import { Dashboard } from "@/app/(main)/dashboard/_components/dashboard";
import DashboardHeader from "./_components/dashboardHeader";

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col bg-gray-50 lg:bg-white">
      <DashboardHeader />
      <div className="flex-1 overflow-auto p-4 lg:p-5 pb-24 lg:pb-5">
        <Dashboard />
      </div>
    </div>
  );
}
