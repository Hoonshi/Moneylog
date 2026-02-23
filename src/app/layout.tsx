import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MoneyLog',
  description: '나만의 똑똑한 가계부',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
