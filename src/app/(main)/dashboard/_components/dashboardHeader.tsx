"use client";

import DateButton from "@/components/ui/dateButton";
import { useDateStore } from "@/stores/dateStore";

export default function DashboardHeader() {
  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);

  return (
    <header className="bg-white flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-100 shrink-0">
      <div>
        <h1 className="text-base lg:text-sm font-bold text-gray-900 lg:text-gray-800">
          대시보드
        </h1>
        <p className="hidden lg:block text-xs text-gray-400 mt-0.5">
          {year}년 {month}월 재무 현황
        </p>
      </div>
      <DateButton />
    </header>
  );
}
