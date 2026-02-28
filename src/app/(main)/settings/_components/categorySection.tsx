"use client";

import { CategoryRow } from "@/types/database";
import { SettingsModal } from "./modals/modalIngredients";
import { CategoryCreateModal } from "./modals/categoryCreateModal";
import { CategoryItem } from "./categoryItem";
import { useCategories } from "@/hooks/query/useCategories";

export function CategorySection() {
  const { data: categoryData } = useCategories();

  return (
    <div className="border border-gray-200 rounded-lg p-3">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
        카테고리 관리
      </span>
      <div className="mt-2 space-y-1.5">
        {categoryData?.map((category: CategoryRow) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="mt-2">
        <SettingsModal.Root>
          <SettingsModal.Trigger>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-main text-white cursor-pointer">
              + 카테고리 추가
            </span>
          </SettingsModal.Trigger>
          <SettingsModal.Portal title="카테고리 추가">
            <CategoryCreateModal />
          </SettingsModal.Portal>
        </SettingsModal.Root>
      </div>
    </div>
  );
}
