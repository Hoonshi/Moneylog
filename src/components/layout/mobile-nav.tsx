'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const tabs = [
  { href: ROUTES.HOME,             icon: '📊', label: '홈'     },
  { href: ROUTES.TRANSACTIONS,     icon: '💳', label: '내역'   },
  { href: ROUTES.TRANSACTION_NEW,  icon: '➕', label: '',       isCenter: true },
  { href: ROUTES.BUDGET,           icon: '🎯', label: '예산'   },
  { href: ROUTES.SETTINGS,         icon: '⚙️', label: '더보기' },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pb-1 pt-1.5 flex items-end justify-around z-50">
      {tabs.map((tab) =>
        tab.isCenter ? (
          <Link
            key={tab.href}
            href={tab.href}
            className="w-12 h-12 -mt-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg shadow-blue-200"
          >
            {tab.icon}
          </Link>
        ) : (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 ${
              isActive(tab.href) ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span className="text-[10px]">{tab.label}</span>
          </Link>
        ),
      )}
    </div>
  );
}
