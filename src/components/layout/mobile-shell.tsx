import { MobileNav } from "./mobile-nav";

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
      <div className="bg-white px-4 pt-3 pb-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          {back && <span className="text-gray-400 text-sm">← </span>}
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
