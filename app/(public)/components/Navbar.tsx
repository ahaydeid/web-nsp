"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fredoka } from "@/app/fonts";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 py-2 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* LEFT: Logo */}
        <Link href="/" className={`${fredoka.className} text-xl font-bold text-red-500`}>
          New Smart People
        </Link>

        {/* RIGHT: Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">
          <Link href="/" className={`${fredoka.className} ${pathname === "/" ? "font-bold text-red-600" : "text-gray-700"} hover:text-red-600 transition`}>
            Beranda
          </Link>

          {/* PROFILE DROPDOWN */}
          <div className="relative" onMouseEnter={() => setOpenProfile(true)} onMouseLeave={() => setOpenProfile(false)}>
            <button className={`${fredoka.className} flex items-center gap-1 ${["/profil/tentang-kami", "/profil/galeri"].includes(pathname) ? "font-bold text-red-600" : "text-gray-700"} hover:text-red-600 transition`}>
              Profile
              <ChevronDown className="w-4 h-4" />
            </button>

            {openProfile && (
              <div className="absolute left-0 w-40 rounded-md border border-gray-200 bg-white shadow-sm">
                <Link href="/profil/tentang-kami" className={`${fredoka.className} block px-4 py-2 text-sm ${pathname === "/profil/tentang-kami" ? "font-bold text-red-600" : "text-gray-600"} hover:bg-gray-100`}>
                  Tentang Kami
                </Link>
                <Link href="/profil/galeri" className={`${fredoka.className} block px-4 py-2 text-sm ${pathname === "/profil/galeri" ? "font-bold text-red-600" : "text-gray-600"} hover:bg-gray-100`}>
                  Galeri Foto
                </Link>
              </div>
            )}
          </div>

          <Link href="/program" className={`${fredoka.className} ${pathname === "/program" ? "font-bold text-red-600" : "text-gray-700"} hover:text-red-600 transition`}>
            Program
          </Link>

          {/* KONTAK */}
          <div>
            <Link href="/kontak" className={`${fredoka.className} flex items-center gap-1 transition ${pathname === "/kontak" ? "font-bold text-red-600" : "text-gray-700"} hover:text-red-600`}>
              Kontak
            </Link>
          </div>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pb-4">
          <Link href="/" className={`${fredoka.className} block py-2 text-gray-700`}>
            Beranda
          </Link>

          {/* Mobile Profile */}
          <div className="mt-2">
            <button onClick={() => setOpenProfile(!openProfile)} className={`${fredoka.className} w-full text-left py-2 text-gray-700`}>
              Profile ▾
            </button>

            {openProfile && (
              <div className="ml-3 border-l border-gray-200">
                <Link href="/profil/tentang-kami" className={`${fredoka.className} block py-2 pl-3 text-gray-600`}>
                  Tentang Kami
                </Link>
                <Link href="/profil/galeri" className={`${fredoka.className} block py-2 pl-3 text-gray-600`}>
                  Galeri Foto
                </Link>
              </div>
            )}
          </div>

          <Link href="/program" className={`${fredoka.className} block py-2 text-gray-700`}>
            Program
          </Link>

          {/* Mobile Kontak */}
          <div className="mt-2">
            <Link href="/kontak" className={`${fredoka.className} block w-full text-left py-2 text-gray-700`}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
