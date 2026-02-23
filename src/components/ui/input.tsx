import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800',
        'placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        className,
      )}
      {...props}
    />
  );
}
