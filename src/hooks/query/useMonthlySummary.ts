import monthlySummary from "@/apis/dashboard/monthlySummary";
import { useQuery } from "@tanstack/react-query";

export default function useMonthlySummary(year: number, month: number) {
  return useQuery({
    queryKey: ["monthlySummary"],
    queryFn: () => monthlySummary(year, month),
  });
}
