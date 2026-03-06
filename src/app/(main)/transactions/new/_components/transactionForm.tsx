"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useCreateTransaction } from "@/hooks/mutation/useCreateTransaction";
import { useUpdateTransaction } from "@/hooks/mutation/useUpdateTransaction";
import { useCategories } from "@/hooks/query/useCategories";
import {
  TransactionFormValues,
  transactionSchema,
} from "@/schema/transactionSchema";
import { TransactionFormProps } from "@/types/transaction";

export default function TransactionForm({
  initialValues,
  transactionId,
}: TransactionFormProps = {}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: initialValues?.type ?? "expense",
      amount: initialValues?.amount,
      title: initialValues?.title ?? "",
      date: initialValues?.date ?? "",
      memo: initialValues?.memo ?? "",
      category_id: initialValues?.category_id ?? "",
    },
  });

  const type = watch("type");
  const selectedCat = watch("category_id");

  const { data: categories } = useCategories(type);

  const { mutate: mutateCreate } = useCreateTransaction({
    formReset: () => reset(),
  });
  const { mutate: mutateUpdate } = useUpdateTransaction();

  const onSubmit = (data: TransactionFormValues) => {
    if (transactionId) {
      mutateUpdate(
        { id: transactionId, ...data },
        { onSuccess: () => router.back() },
      );
    } else {
      mutateCreate(data);
    }
  };

  return (
    <form
      id="transaction-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 pt-2"
    >
      {/* Type Toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        <button
          type="button"
          onClick={() => {
            setValue("type", "expense");
            setValue("category_id", "");
          }}
          className={`cursor-pointer flex-1 py-2.5 text-center text-xs font-bold rounded-lg transition-colors ${
            type === "expense"
              ? "bg-white text-red-500 shadow-sm"
              : "text-gray-400"
          }`}
        >
          지출
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("type", "income");
            setValue("category_id", "");
          }}
          className={`cursor-pointer flex-1 py-2.5 text-center text-xs font-medium rounded-lg transition-colors ${
            type === "income"
              ? "bg-white text-blue-500 shadow-sm"
              : "text-gray-400"
          }`}
        >
          수입
        </button>
      </div>

      {/* 금액 */}
      <div className="text-center py-4">
        <label className="text-[11px] text-gray-400 mb-2">금액</label>
        <div className="flex items-center justify-center gap-1">
          <span className="text-2xl text-gray-300 font-light">₩</span>
          <input
            type="number"
            className="text-3xl font-bold text-gray-800 w-46 text-center outline-none"
            placeholder="0"
            {...register("amount", { valueAsNumber: true })}
          />
        </div>
        {errors.amount && (
          <p className="text-[10px] text-red-500 mt-3 ml-3">
            {errors.amount.message}
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl divide-y divide-gray-200">
        {/* 내용 */}
        <div className="flex items-center px-4 py-3.5">
          <span className="text-xs text-gray-500 w-16">내용</span>
          <input
            type="text"
            placeholder="예: 스타벅스, 월급..."
            className="text-xs text-gray-700 flex-1 outline-none placeholder:text-gray-300"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-[10px] text-red-500 mt-1 ml-16">
              {errors.title.message}
            </p>
          )}
        </div>
        {/* 날짜 */}
        <div className="flex items-center px-4 py-3.5">
          <span className="text-xs text-gray-500 w-16">날짜</span>
          <input
            type="date"
            className="text-xs text-gray-700 flex-1 outline-none"
            {...register("date")}
          />
          <ChevronDown size={13} className="text-gray-400" />
          {errors.date && (
            <p className="text-[10px] text-red-500 mt-1 ml-16">
              {errors.date.message}
            </p>
          )}
        </div>
        {/* 카테고리 */}
        <div className="px-4 py-3.5">
          <span className="text-xs text-gray-500 block mb-2.5">카테고리</span>
          <div className="flex flex-wrap gap-2">
            {categories?.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setValue("category_id", cat.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] border ${
                  selectedCat === cat.id
                    ? "border-blue-400 bg-blue-50 text-blue-600 font-medium"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          {errors.category_id && (
            <p className="text-[10px] text-red-500 mt-3">
              {errors.category_id.message}
            </p>
          )}
        </div>
        {/* 메모 */}
        <div className="px-4 py-3.5">
          <span className="text-xs text-gray-500 block mb-1.5">메모</span>
          <input
            type="text"
            placeholder="메모를 입력하세요..."
            className="text-xs text-gray-700 w-full outline-none placeholder:text-gray-300"
            {...register("memo")}
          />
        </div>
      </div>
    </form>
  );
}
