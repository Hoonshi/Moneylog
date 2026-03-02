import { fetchBudget } from "@/apis/budget/fetchBudget";
import { useSuspenseQuery } from "@tanstack/react-query";
import { budgetKeys } from "@/lib/queryKey";

export default function useBudget(year: number, month: number) {
  return useSuspenseQuery({
    queryKey: budgetKeys.list(year, month),
    queryFn: () => fetchBudget(year, month),
  });
}
