import { fetchDailyTotal } from "@/apis/calander/fetchDailyTotal";
import { calanderKey } from "@/lib/queryKey";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useFetchDailyTotal(year: number, month: number) {
  return useSuspenseQuery({
    queryKey: calanderKey.daily(year, month),
    queryFn: () => fetchDailyTotal(year, month),
  });
}
