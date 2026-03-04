"use client";

import { useDateStore } from "@/stores/dateStore";
import AddBudgetButton from "./addBudgetButton";

export default function BudgetHeader() {
  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);

  return (
    <header className="bg-white flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-100 shrink-0">
      <div>
        <h1 className="text-base lg:text-sm font-bold text-gray-900 lg:text-gray-800">
          예산 관리
        </h1>
        <p className="hidden lg:block text-xs text-gray-400 mt-0.5">
          {year}년 {month}월 카테고리별 예산
        </p>
      </div>
      <AddBudgetButton />
    </header>
  );
}
