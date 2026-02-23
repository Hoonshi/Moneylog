import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'income' | 'expense';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-gray-100 text-gray-700',
        variant === 'income'  && 'bg-blue-50 text-blue-600',
        variant === 'expense' && 'bg-red-50 text-red-600',
        className,
      )}
    >
      {children}
    </span>
  );
}
