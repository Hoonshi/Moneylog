import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer",
        variant === "primary" && "bg-main text-white hover:bg-blue-600",
        variant === "secondary" &&
          "bg-gray-100 text-gray-700 hover:bg-gray-200",
        variant === "ghost" && "text-gray-700 hover:bg-gray-100",
        variant === "destructive" && "bg-red-500 text-white hover:bg-red-600",
        size === "sm" && "px-2 py-1 text-xs",
        size === "md" && "px-3 py-1.5 text-sm",
        size === "lg" && "px-4 py-2 text-base",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
