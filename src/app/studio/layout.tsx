export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="fixed inset-0 z-[100] min-h-screen bg-white">{children}</div>;
}
