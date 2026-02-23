export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen bg-gray-50 overflow-hidden">{children}</div>;
}
