import { createClient } from "@/lib/supabase/client";

export default async function monthlySummary(year: number, month: number) {
  const supabase = createClient();

  const { data, error } = await supabase.rpc("get_monthly_summary", {
    p_year: year,
    p_month: month,
  });

  if (error) throw error;
  return data;
}
