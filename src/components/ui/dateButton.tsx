"use client";

import { useDateStore } from "@/stores/dateStore";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DateButton() {
  const { year, month, goToPrev, goToNext } = useDateStore();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={goToPrev}
        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer"
      >
        <ChevronLeft size={14} className="text-gray-500" />
      </button>
      <span className="text-xs font-bold text-gray-700">
        {year}년 {month}월
      </span>
      <button
        onClick={goToNext}
        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer"
      >
        <ChevronRight size={14} className="text-gray-500" />
      </button>
    </div>
  );
}
