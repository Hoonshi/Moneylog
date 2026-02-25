"use client";

import { useRouter } from "next/navigation";
import { useDeleteTransaction } from "@/hooks/mutation/useDeleteTransaction";

export default function DetailUpdateDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const { mutate: mutateDelete } = useDeleteTransaction();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => router.push(`/transactions/${id}/edit`)}
        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600"
      >
        수정
      </button>
      <button
        onClick={() => mutateDelete(id)}
        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600"
      >
        삭제
      </button>
    </div>
  );
}
