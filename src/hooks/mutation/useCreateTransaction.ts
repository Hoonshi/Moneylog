import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  transactionKeys,
  dashboardKeys,
  budgetKeys,
  categoryKeys,
  reportKeys,
} from "@/lib/queryKey";
import type { TransactionInsert } from "@/types/database";
import createTransaction from "@/apis/transaction/createTransaction";
import { useDateStore } from "@/stores/dateStore";
import toast from "react-hot-toast";

export function useCreateTransaction({
  formReset,
}: {
  formReset?: () => void;
}) {
  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTransaction: TransactionInsert) =>
      createTransaction(newTransaction),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.lists() });
      queryClient.invalidateQueries({ queryKey: dashboardKeys.all });
      queryClient.invalidateQueries({ queryKey: budgetKeys.list(year, month) });
      queryClient.invalidateQueries({ queryKey: reportKeys.all });
      queryClient.invalidateQueries({ queryKey: categoryKeys.categorySummary(year, month) });
      formReset?.();
    },
    onError: () => {
      toast.error("거래 생성에 실패하였습니다");
    },
  });
}
