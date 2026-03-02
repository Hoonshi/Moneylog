import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "@/apis/categories/createCategory";
import { categoryKeys } from "@/lib/queryKey";
import toast from "react-hot-toast";

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: () => {
      toast.error("카테고리 생성에 실패하였습니다");
    },
  });
}
