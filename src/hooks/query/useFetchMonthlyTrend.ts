import { fetchMonthlyTrend } from "@/apis/reports/fetchMonthlyTrend";
import { useQuery } from "@tanstack/react-query";
import { reportKeys } from "@/lib/queryKey";

export default function useFetchMonthlyTrend(months: number = 6) {
  return useQuery({
    queryKey: [{ ...reportKeys.monthlyTrend(months) }],
    queryFn: () => fetchMonthlyTrend(months),
  });
}
