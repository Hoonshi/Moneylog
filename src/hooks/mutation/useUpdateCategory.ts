import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "@/apis/categories/updateCategory";
import { categoryKeys } from "@/lib/queryKey";
import toast from "react-hot-toast";

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      ...params
    }: {
      id: string;
      name: string;
      icon: string;
      type: "expense" | "income";
      color: string;
    }) => updateCategory(id, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: () => {
      toast.error("카테고리 수정에 실패하였습니다");
    },
  });
}
