import { create } from 'zustand';

interface FilterStore {
  type: 'all' | 'income' | 'expense';
  categoryId: string | null;
  search: string;
  sortBy: 'date' | 'amount';
  sortOrder: 'desc' | 'asc';
  setType: (type: FilterStore['type']) => void;
  setCategoryId: (id: string | null) => void;
  setSearch: (q: string) => void;
  setSortBy: (by: FilterStore['sortBy']) => void;
  setSortOrder: (order: FilterStore['sortOrder']) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  type: 'all',
  categoryId: null,
  search: '',
  sortBy: 'date',
  sortOrder: 'desc',
  setType: (type) => set({ type }),
  setCategoryId: (categoryId) => set({ categoryId }),
  setSearch: (search) => set({ search }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  reset: () =>
    set({ type: 'all', categoryId: null, search: '', sortBy: 'date', sortOrder: 'desc' }),
}));
