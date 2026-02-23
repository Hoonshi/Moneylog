"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const navItems = [
  { href: ROUTES.HOME, icon: "📊", label: "대시보드" },
  { href: ROUTES.TRANSACTIONS, icon: "💳", label: "거래 내역" },
  { href: ROUTES.BUDGET, icon: "🎯", label: "예산 관리" },
  { href: ROUTES.CALENDAR, icon: "📅", label: "캘린더" },
  { href: ROUTES.REPORTS, icon: "📈", label: "리포트" },
  { href: ROUTES.SETTINGS, icon: "⚙️", label: "설정" },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col h-full flex-shrink-0">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
            ₩
          </div>
          <span className="font-bold text-sm text-gray-800">MoneyLog</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 space-y-0.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs transition-colors ${
              isActive(item.href)
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0" />
          <span className="text-xs text-gray-500 truncate">홍길동</span>
        </div>
      </div>
    </div>
  );
}
