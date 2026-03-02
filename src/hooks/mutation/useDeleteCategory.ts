import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "@/apis/categories/deleteCategory";
import { categoryKeys } from "@/lib/queryKey";
import toast from "react-hot-toast";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: () => {
      toast.error("카테고리 삭제에 실패하였습니다");
    },
  });
}
