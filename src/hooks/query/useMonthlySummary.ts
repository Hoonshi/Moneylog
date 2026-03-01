import monthlySummary from "@/apis/dashboard/monthlySummary";
import { dashboardKeys } from "@/lib/queryKey";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useMonthlySummary(year: number, month: number) {
  return useSuspenseQuery({
    queryKey: dashboardKeys.monthlySummary(year, month),
    queryFn: () => monthlySummary(year, month),
  });
}
