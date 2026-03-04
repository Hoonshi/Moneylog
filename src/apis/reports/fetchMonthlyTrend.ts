import { createClient } from "@/lib/supabase/client";

export async function fetchMonthlyTrend(months: number = 6) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc("get_monthly_trend", {
    p_months: months,
  });

  if (error) throw error;
  return data;
}
