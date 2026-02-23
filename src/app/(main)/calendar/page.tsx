import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MobileShell } from '@/components/layout/mobile-shell';
import { CalendarGrid } from './_components/calendar-grid';

export default function CalendarPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell
        title="캘린더"
        rightAction={
          <div className="flex items-center gap-1">
            <ChevronLeft size={16} className="text-gray-400" />
            <span className="text-xs font-bold text-gray-700">2025.02</span>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        }
      >
        <div className="space-y-3 pt-2">
          <CalendarGrid />
        </div>
      </MobileShell>
    </div>
  );
}
