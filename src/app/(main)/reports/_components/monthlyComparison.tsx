"use client";

import useMonthlySummary from "@/hooks/query/useMonthlySummary";
import { useDateStore } from "@/stores/dateStore";

export function MonthlyComparison() {
  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;

  const { data: current } = useMonthlySummary(year, month);
  const { data: previous } = useMonthlySummary(prevYear, prevMonth);

  // 수입 변화
  const incomeChange = (current.income ?? 0) - (previous.income ?? 0);
  const incomeChangeRate = previous.income
    ? Math.round((incomeChange / previous.income) * 100)
    : 0;

  // 지출 변화
  const expenseChange = (current.expense ?? 0) - (previous.expense ?? 0);
  const expenseChangeRate = previous.expense
    ? Math.round((expenseChange / previous.expense) * 100)
    : 0;

  // 저축률
  const savingsRate = current.income
    ? Math.round(((current.income - current.expense) / current.income) * 100)
    : 0;

  const prevSavingsRate = previous.income
    ? Math.round(((previous.income - previous.expense) / previous.income) * 100)
    : 0;

  const savingsRateChange = Math.max(savingsRate - prevSavingsRate, 0);

  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-md font-bold text-gray-800 mb-3">전월 대비</p>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-[#e7f5ff] rounded-lg p-2.5">
          <p className="text-[12px] text-gray-800">수입</p>
          <p className="text-md font-semibold text-gray-800 mt-0.5">
            {incomeChange}원
          </p>
          <p
            className="text-[10px]"
            style={{ color: incomeChangeRate >= 0 ? "#4dabf7" : "#ff8787" }}
          >
            {incomeChangeRate >= 0 ? "▲" : "▼"} {incomeChangeRate}%
          </p>
        </div>
        <div className="bg-[#fff4e6] rounded-lg p-2.5">
          <p className="text-[12px] text-gray-800">지출</p>
          <p className="text-md font-semibold text-gray-800 mt-0.5">
            {expenseChange}원
          </p>
          <p
            className="text-[10px]"
            style={{ color: expenseChangeRate >= 0 ? "#4dabf7" : "#ff8787" }}
          >
            {expenseChangeRate >= 0 ? "▲" : "▼"} {expenseChangeRate}%
          </p>
        </div>
        <div className="bg-[#ebfbee] rounded-lg p-2.5">
          <p className="text-[12px] text-gray-800">저축률</p>
          <p className="text-md font-semibold text-gray-800 mt-0.5">
            {savingsRate}%
          </p>
          <p
            className="text-[10px]"
            style={{ color: savingsRateChange >= 0 ? "#4dabf7" : "#ff8787" }}
          >
            {savingsRateChange >= 0 ? "▲" : "▼"} {savingsRateChange}%p
          </p>
        </div>
      </div>
    </div>
  );
}
