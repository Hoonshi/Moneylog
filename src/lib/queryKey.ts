import type { TransactionListParams } from "@/types/transaction";

export const transactionKeys = {
  //전체 키
  all: ["transactions"] as const,
  //거래 목록 키
  lists: () => [...transactionKeys.all, "list"] as const,
  list: (params: TransactionListParams) =>
    [...transactionKeys.lists(), params] as const,
  //거래 상세 키
  details: () => [...transactionKeys.all, "detail"] as const,
  detail: (id: string) => [...transactionKeys.details(), id] as const,
};

export const categoryKeys = {
  all: ["categories"] as const,
  list: (type?: string) => [...categoryKeys.all, type] as const,
};
