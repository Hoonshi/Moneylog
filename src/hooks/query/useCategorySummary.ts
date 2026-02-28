import categorySummary from "@/apis/dashboard/categorySummary";
import { useQuery } from "@tanstack/react-query";
import { categoryKeys } from "@/lib/queryKey";

export default function useCategorySummary(year: number, month: number) {
  return useQuery({
    queryKey: [{ ...categoryKeys.categorySummary(year, month) }],
    queryFn: () => categorySummary(year, month),
  });
}
