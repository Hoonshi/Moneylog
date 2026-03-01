import { createClient } from "@/lib/supabase/client";
import { TransactionType } from "@/types/database";

export default async function fetchReportCategories(type?: TransactionType) {
  const supabase = createClient();

  let query = supabase.from("categories").select("*").order("sort_order");

  if (type) query = query.eq("type", type);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}
