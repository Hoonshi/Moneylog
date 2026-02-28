import monthlySummary from "@/apis/dashboard/monthlySummary";
import { dashboardKeys } from "@/lib/queryKey";
import { useQuery } from "@tanstack/react-query";

export default function useMonthlySummary(year: number, month: number) {
  return useQuery({
    queryKey: [{ ...dashboardKeys.monthlySummary(year, month) }],
    queryFn: () => monthlySummary(year, month),
  });
}
