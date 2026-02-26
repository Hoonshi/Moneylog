import categorySummary from "@/apis/dashboard/categorySummary";
import { useQuery } from "@tanstack/react-query";

export default function useCategorySummary(year: number, month: number) {
  return useQuery({
    queryKey: ["categorySummary"],
    queryFn: () => categorySummary(year, month),
  });
}
