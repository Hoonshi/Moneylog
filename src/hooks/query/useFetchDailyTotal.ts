import { fetchDailyTotal } from "@/apis/calander/fetchDailyTotal";
import { calanderKey } from "@/lib/queryKey";
import { useQuery } from "@tanstack/react-query";

export default function useFetchDailyTotal(year: number, month: number) {
  return useQuery({
    queryKey: [{ ...calanderKey.daily(year, month) }],
    queryFn: () => fetchDailyTotal(year, month),
  });
}
