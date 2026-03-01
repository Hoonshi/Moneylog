import { fetchBudget } from "@/apis/budget/fetchBudget";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useBudget(year: number, month: number) {
  return useSuspenseQuery({
    queryKey: ["budget", year, month],
    queryFn: () => fetchBudget(year, month),
  });
}
