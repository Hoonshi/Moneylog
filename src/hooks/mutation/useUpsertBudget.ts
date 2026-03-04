import { upsertBudget } from "@/apis/budget/upsertBudget";
import { budgetKeys } from "@/lib/queryKey";
import { BudgetUpsertParams } from "@/types/budget";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpsertBudget() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (param: BudgetUpsertParams) => upsertBudget(param),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: budgetKeys.all });
    },
    onError: () => {
      toast.error("예산 저장에 실패하였습니다");
    },
  });
}
