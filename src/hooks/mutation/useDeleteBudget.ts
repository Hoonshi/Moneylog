import { deleteBudget } from "@/apis/budget/deleteBudget";
import { budgetKeys } from "@/lib/queryKey";
import { useDateStore } from "@/stores/dateStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteBudget() {
  const queryClient = useQueryClient();
  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);

  return useMutation({
    mutationFn: (id: string) => deleteBudget(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: budgetKeys.list(year, month) });
    },
  });
}
