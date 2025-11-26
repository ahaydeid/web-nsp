"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageSquareQuote, BookOpen, Image as ImageIcon, Users, Layers, Star, HelpCircle, LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  return (
    <aside
      className={`sticky top-0 h-screen bg-white shadow-sm transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"} flex flex-col`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && <h2 className="text-lg font-bold text-red-600">NSP Admin</h2>}
        <button onClick={() => setCollapsed((prev) => !prev)} className="p-1 rounded hover:bg-gray-100" aria-label="Toggle sidebar">
          {collapsed ? <Menu size={22} /> : <X size={22} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto py-4">
        <SidebarItem collapsed={collapsed} href="/admin" icon={<Star size={20} />} label="Dashboard" />
        <SidebarItem collapsed={collapsed} href="/admin/testimonials" icon={<MessageSquareQuote size={20} />} label="Testimoni" />
        <SidebarItem collapsed={collapsed} href="/admin/programs" icon={<BookOpen size={20} />} label="Program" />
        <SidebarItem collapsed={collapsed} href="/admin/gallery" icon={<ImageIcon size={20} />} label="Galeri" />
        <SidebarItem collapsed={collapsed} href="/admin/teachers" icon={<Users size={20} />} label="Tim Pengajar" />
        <SidebarItem collapsed={collapsed} href="/admin/visi-misi" icon={<Layers size={20} />} label="Visi & Misi" />
        <SidebarItem collapsed={collapsed} href="/admin/faq" icon={<HelpCircle size={20} />} label="FAQ" />
      </nav>

      {/* LOGOUT */}
      <button onClick={handleLogout} className="m-4 flex items-center gap-3 p-2 rounded text-red-600 hover:bg-red-50 transition">
        <LogOut size={20} />
        {!collapsed && <span>Logout</span>}
      </button>
    </aside>
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

function SidebarItem({ href, icon, label, collapsed }: SidebarItemProps) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
