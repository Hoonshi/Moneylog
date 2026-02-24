import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number; // 0–100
  className?: string;
  barClassName?: string;
}

export function Progress({ value, className, barClassName }: ProgressProps) {
  return (
    <div className={cn("w-full bg-gray-100 rounded-full h-2", className)}>
      <div
        className={cn(
          "h-2 rounded-full transition-all",
          barClassName ?? "bg-main",
        )}
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}
