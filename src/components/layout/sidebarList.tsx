"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarList({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs transition-colors ${
        active
          ? "bg-gray-100 text-gray-500 font-semibold [&>svg]:stroke-[2.5]"
          : "text-gray-500 hover:bg-gray-100 [&>svg]:stroke-[1.8]"
      }`}
    >
      {children}
    </Link>
  );
}
