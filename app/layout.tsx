import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NSP International",
  description: "Website NSP International",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
