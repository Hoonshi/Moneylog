import { create } from 'zustand';

interface CalendarStore {
  selectedDate: string | null;
  currentMonth: string; // YYYY-MM
  setSelectedDate: (date: string | null) => void;
  setCurrentMonth: (month: string) => void;
  prevMonth: () => void;
  nextMonth: () => void;
}

export const useCalendarStore = create<CalendarStore>((set, get) => ({
  selectedDate: null,
  currentMonth: new Date().toISOString().slice(0, 7),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  setCurrentMonth: (currentMonth) => set({ currentMonth }),
  prevMonth: () => {
    const [year, month] = get().currentMonth.split('-').map(Number);
    const prev = new Date(year, month - 2);
    set({
      currentMonth: `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`,
    });
  },
  nextMonth: () => {
    const [year, month] = get().currentMonth.split('-').map(Number);
    const next = new Date(year, month);
    set({
      currentMonth: `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}`,
    });
  },
}));
