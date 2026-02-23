interface CalendarCellProps {
  day: number;
  isToday?: boolean;
  data?: { income?: number; expense?: number };
  onClick?: () => void;
}

export function CalendarCell({ day, isToday, data, onClick }: CalendarCellProps) {
  return (
    <div
      onClick={onClick}
      className={`h-11 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
        isToday ? 'bg-blue-500 text-white' : ''
      }`}
    >
      <span className={`text-[11px] ${isToday ? 'font-bold' : 'text-gray-700'}`}>
        {day}
      </span>
      {data && (
        <span
          className={`text-[8px] font-medium mt-0.5 ${
            isToday
              ? 'text-blue-100'
              : data.income
                ? 'text-blue-500'
                : 'text-red-400'
          }`}
        >
          {data.income ? `+${data.income}` : `-${data.expense}`}
        </span>
      )}
    </div>
  );
}
