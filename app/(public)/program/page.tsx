"use client";

import { useEffect, useState } from "react";
import ProgramCard from "@/app/(public)/components/program/ProgramCard";
import ProgramModal from "@/app/(public)/components/program/ProgramModal";
import { fredoka } from "@/app/fonts";
import { createClient } from "@/utils/supabase/client";

export interface ProgramItem {
  id: number;
  judul: string;
  kategori: string | null;
  deskripsi: string | null;
  lama: string | null;
  biaya: number | null;
  gambar: string | null;
  detail?: string | null;
}

export default function ProgramPage() {
  const supabase = createClient();
  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ProgramItem | null>(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("programs").select("*").order("id");

      if (data) setPrograms(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  return (
    <main className={`relative w-full py-20 px-20 bg-white overflow-hidden ${fredoka.className}`}>
      {/* BLOB dekorasi (TIDAK DIUBAH) */}
      <svg className="absolute -top-24 -left-20 w-72 h-72 text-red-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M39.4,-63.6C53.4,-56.7,67.2,-47.5,74.9,-34.9C82.6,-22.2,84.2,-6.2,81.9,9.2C79.6,24.7,73.5,39.6,63.4,51.6C53.3,63.5,39.2,72.6,25.2,76.8C11.2,81.1,-2.7,80.5,-15.6,75.5C-28.6,70.5,-40.6,61.2,-51.1,50.2C-61.6,39.3,-70.7,26.6,-72.7,12.4C-74.7,-1.7,-69.7,-17.5,-61.2,-29.5C-52.8,-41.5,-40.8,-49.7,-28.7,-58.3C-16.6,-66.9,-8.3,-75.9,3.7,-82C15.8,-88.1,31.6,-91,39.4,-63.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mx-auto">
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Program Kursus <span className="text-red-400">New Smart People</span>
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg">Pilihan program lengkap sesuai brosur resmi NSP International.</p>

          {/* garis dekor */}
          <div className="flex justify-center mt-4">
            <svg width="140" height="12" viewBox="0 0 200 20" className="text-red-500">
              <path d="M0 10 C 40 0, 60 20, 100 10 S 160 0, 200 10" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* GRID PROGRAM */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && Array.from({ length: 6 }).map((_, i) => <div key={i} className="w-full h-60 bg-slate-200 rounded-2xl animate-pulse" />)}

          {!loading && programs.map((item) => <ProgramCard key={item.id} program={item} onClick={() => setSelected(item)} />)}
        </div>

        {/* MODAL */}
        {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
      </div>
    </main>
  );
}
