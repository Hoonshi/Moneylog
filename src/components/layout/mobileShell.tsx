import { ChevronLeft } from "lucide-react";
import { MobileNav } from "./mobileNav";
import Link from "next/link";

interface MobileShellProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  hideNav?: boolean;
  back?: boolean;
}

export function MobileShell({
  children,
  title,
  subtitle,
  rightAction,
  hideNav,
  back,
}: MobileShellProps) {
  return (
    <div className="relative w-full h-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1">
          <Link href="/transactions">
            {back && <ChevronLeft size={18} className="text-gray-400 -ml-1" />}
          </Link>
          <div>
            <h1 className="text-base font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-[11px] text-gray-400 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 pb-24">{children}</div>

      {/* Bottom Nav */}
      {!hideNav && <MobileNav />}
    </div>
  );
}
