import { fetchMonthlyTrend } from "@/apis/reports/fetchMonthlyTrend";
import { useSuspenseQuery } from "@tanstack/react-query";
import { reportKeys } from "@/lib/queryKey";

export default function useFetchMonthlyTrend(months: number = 6) {
  return useSuspenseQuery({
    queryKey: reportKeys.monthlyTrend(months),
    queryFn: () => fetchMonthlyTrend(months),
  });
}
