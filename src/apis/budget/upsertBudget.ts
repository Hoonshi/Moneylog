import { createClient } from "@/lib/supabase/client";
import { BudgetUpsertParams } from "@/types/budget";

// 있으면 수정, 없으면 추가 -> upsert
export async function upsertBudget(params: BudgetUpsertParams) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("budgets")
    .upsert(params)
    .select()
    .single();

  if (error) throw error;
  return data;
}
