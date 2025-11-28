"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fredoka } from "@/app/fonts";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const pathname = usePathname();

  // Handle animation state
  useEffect(() => {
    let rafId: number | null = null;
    rafId = requestAnimationFrame(() => {
      setAnimateMenu(!!mobileMenu);
    });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [mobileMenu]);

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
        <button className="lg:hidden text-gray-700 transition-transform duration-300" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6 transform rotate-0 transition-transform duration-300" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className={`lg:hidden fixed inset-x-0 top-full z-50 border-t border-gray-200 bg-white px-4 pb-4 transition-all duration-300 transform ${animateMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}>
          <Link href="/" className={`${fredoka.className} block py-2 text-gray-700`}>
            Beranda
          </Link>

          {/* Mobile Profile */}
          <div className="mt-2">
            <button onClick={() => setOpenProfile(!openProfile)} className={`${fredoka.className} w-full flex items-center justify-between text-left py-2 text-gray-700`}>
              <span>Profile</span>
              {openProfile ? <ChevronDown className="w-5 h-5 transform transition-transform duration-300" /> : <ChevronRight className="w-5 h-5 transform transition-transform duration-300" />}
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
            <Link href="/kontak" className={`${fredoka.className} block py-2 text-gray-700`}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
