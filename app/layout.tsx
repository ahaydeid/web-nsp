// app/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://web-nsp.vercel.app"),
  title: {
    default: "NSP International",
    template: "%s | NSP International",
  },
  description: "NSP International (New Smart People) adalah lembaga kursus bahasa Inggris, komputer, bimbel, dan persiapan ujian yang berlokasi di Kota Serang.",
  keywords: ["Kursus Serang", "Kursus Bahasa Inggris Serang", "Kursus Komputer Serang", "Bimbel Serang", "Les Inggris Serang", "Pelatihan kerja Serang", "NSP International Serang"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NSP International – Kursus Bahasa & Komputer di Kota Serang",
    description: "Lembaga kursus di Kota Serang: Bahasa Inggris, komputer, bimbel sekolah, TOEFL, CPNS, dan kedinasan dengan pengajar berpengalaman.",
    url: "https://web-nsp.vercel.app",
    siteName: "NSP International",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
