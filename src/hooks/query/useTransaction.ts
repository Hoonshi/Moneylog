import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { transactionKeys } from "@/lib/queryKey";
import type { Transaction } from "@/types/transaction";

export function useTransaction(id: string) {
  const supabase = createClient();

  return useQuery({
    queryKey: transactionKeys.detail(id),
    queryFn: async (): Promise<Transaction> => {
      const { data, error } = await supabase
        .from("transactions")
        .select(
          `
          *,
          category:categories(name, icon, color)
        `,
        )
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Transaction;
    },
    enabled: !!id,
  });
}
