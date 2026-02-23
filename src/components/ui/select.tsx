import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800',
        'bg-white focus:outline-none focus:ring-2 focus:ring-blue-500',
        className,
      )}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
