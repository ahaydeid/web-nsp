import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "../fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "New Smart People",
    template: "%s | NSP International",
  },
  description: "Website resmi NSP International Kota Serang — kursus bahasa Inggris, komputer, bimbel, dan persiapan ujian terbaik.",
  keywords: ["Kursus Serang", "Les Serang", "Kursus Bahasa Serang", "Kursus Komputer Serang", "Bimbel Serang", "New Smart People Serang"],
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.className} antialiased`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
