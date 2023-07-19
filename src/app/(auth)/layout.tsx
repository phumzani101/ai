import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Auth",
  description: "AI Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
