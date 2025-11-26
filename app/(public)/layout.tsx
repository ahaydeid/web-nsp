import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "../fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "New Smart People",
  description: "New Smart People - Official Website",
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
