import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { categoryKeys } from "@/lib/queryKey";
import type { TransactionType } from "@/types/database";

export function useCategories(type?: TransactionType) {
  const supabase = createClient();

  return useQuery({
    queryKey: categoryKeys.list(type),
    queryFn: async () => {
      let query = supabase.from("categories").select("*").order("sort_order");

      if (type) query = query.eq("type", type);

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}
