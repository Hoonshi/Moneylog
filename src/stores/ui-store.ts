import { create } from 'zustand';

interface UiStore {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isSidebarCollapsed: false,
  isDarkMode: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  toggleDarkMode: () =>
    set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
