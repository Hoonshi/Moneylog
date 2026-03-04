import { z } from "zod";

export const transactionSchema = z.object({
  type: z.enum(["expense", "income"]),
  amount: z
    .number({ error: "금액을 입력해주세요." })
    .positive("금액을 입력해주세요."),
  title: z.string().min(1, "내용을 입력해주세요."),
  date: z.string().min(1, "날짜를 입력해주세요."),
  memo: z.string().optional(),
  category_id: z.string().min(1, "카테고리를 선택해주세요."),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
