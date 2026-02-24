import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { transactionKeys } from "@/lib/queryKey";
import type { TransactionInsert, TransactionRow } from "@/types/database";

export function useCreateTransaction() {
  const supabase = createClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTransaction: TransactionInsert) => {
      const { data, error } = await supabase
        .from("transactions")
        .insert(newTransaction)
        .select()
        .single();

      if (error) throw error;
      return data as TransactionRow;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.lists() });
    },
  });
}
