"use client";

import { useState } from "react";
import ProgramCard from "@/app/components/program/ProgramCard";
import ProgramModal from "@/app/components/program/ProgramModal";
import { fredoka } from "@/app/fonts";

export interface ProgramItem {
  id: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  lama: string;
  biaya: string;
  gambar: string;
  detail: string;
}

const programs: ProgramItem[] = [
  {
    id: 1,
    judul: "Bahasa Inggris Program Platinum",
    kategori: "Unggulan",
    deskripsi: "Mulai belajar pukul 09.00–12.00 setiap Senin–Sabtu.",
    lama: "6 bulan",
    biaya: "Rp 500.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail:
      "Program Platinum adalah program unggulan untuk peserta yang ingin belajar bahasa Inggris dengan intensitas tinggi. Setiap hari Senin hingga Sabtu, peserta belajar selama tiga jam per sesi. Materi dirancang untuk meningkatkan grammar, speaking, listening, dan writing.",
  },

  {
    id: 2,
    judul: "Bahasa Inggris Program Gold",
    kategori: "Fleksibel",
    deskripsi: "3×90 menit/minggu, jadwal fleksibel mengikuti peserta.",
    lama: "6 bulan",
    biaya: "Rp 400.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Program Gold memberikan fleksibilitas bagi peserta yang ingin belajar bahasa Inggris tanpa jadwal ketat. Materi meliputi speaking, grammar dasar, vocabulary dan latihan percakapan.",
  },

  {
    id: 3,
    judul: "Bahasa Inggris Program Silver",
    kategori: "Fleksibel",
    deskripsi: "2×90 menit/minggu, materi dasar hingga menengah.",
    lama: "6 bulan",
    biaya: "Rp 300.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Program Silver cocok untuk pemula dan siswa sekolah. Fokus pada grammar dasar, vocabulary, dan speaking ringan.",
  },

  {
    id: 4,
    judul: "Komputer – Ms Office",
    kategori: "Komputer",
    deskripsi: "Word, Excel, PowerPoint dari dasar hingga mahir.",
    lama: "2 bulan",
    biaya: "Rp 350.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Pelatihan komputer praktis untuk kebutuhan kerja dan sekolah. Peserta menguasai Word, Excel, dan PowerPoint melalui latihan nyata.",
  },

  {
    id: 5,
    judul: "AutoCAD 2D/3D",
    kategori: "Komputer",
    deskripsi: "Pelatihan AutoCAD untuk pemula hingga profesional.",
    lama: "2–3 bulan",
    biaya: "Rp 450.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Materi mencakup AutoCAD 2D dan 3D, cocok untuk teknik, arsitektur, dan desain proyek.",
  },

  {
    id: 6,
    judul: "Desain Grafis",
    kategori: "Komputer",
    deskripsi: "Belajar Photoshop, CorelDraw, dan Canva.",
    lama: "2 bulan",
    biaya: "Rp 350.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Peserta belajar editing foto, membuat poster, logo, banner, dan desain branding.",
  },

  {
    id: 7,
    judul: "Teknisi Laptop",
    kategori: "Komputer",
    deskripsi: "Dari dasar hingga mahir memperbaiki laptop.",
    lama: "2–4 bulan",
    biaya: "Rp 650.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Mempelajari instalasi, perbaikan software/hardware, bongkar pasang, perawatan, dan troubleshooting.",
  },

  {
    id: 8,
    judul: "Bimbel SD – SMP – SMA – Alumni",
    kategori: "Bimbingan Belajar",
    deskripsi: "Bimbel terstruktur untuk meningkatkan nilai sekolah.",
    lama: "Per semester",
    biaya: "Rp 450.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Program bimbel dengan kurikulum terstruktur, latihan soal, dan pembinaan intensif.",
  },

  {
    id: 9,
    judul: "Persiapan TOEFL",
    kategori: "Persiapan Ujian",
    deskripsi: "Latihan intensif menghadapi TOEFL.",
    lama: "2–3 bulan",
    biaya: "Rp 500.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Mencakup Listening, Structure, Reading, dan simulasi TOEFL setiap pekan.",
  },

  {
    id: 10,
    judul: "Bimbel Kedinasan",
    kategori: "Persiapan Ujian",
    deskripsi: "Latihan intensif seleksi sekolah kedinasan.",
    lama: "3 bulan",
    biaya: "Rp 600.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Materi SKD, TIU, TWK, TKP, psikotes, dan pembinaan mental.",
  },

  {
    id: 11,
    judul: "Bimbel CPNS",
    kategori: "Persiapan Ujian",
    deskripsi: "Latihan SKD lengkap dan simulasi CAT.",
    lama: "3 bulan",
    biaya: "Rp 600.000",
    gambar: "/img/imgplaceholder.png",
    detail: "Pembahasan soal SKD, tips mengerjakan cepat, dan simulasi CAT berkala.",
  },

  {
    id: 12,
    judul: "Bahasa Jepang",
    kategori: "Bahasa",
    deskripsi: "Program pemula hingga mahir, JLPT N5–N3.",
    lama: "3–6 bulan",
    biaya: "Rp 450.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Mempelajari hiragana, katakana, kanji dasar, grammar, dan percakapan.",
  },

  {
    id: 13,
    judul: "Bahasa Korea",
    kategori: "Bahasa",
    deskripsi: "Materi dasar hingga intermediate.",
    lama: "3–6 bulan",
    biaya: "Rp 450.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Hangul, percakapan umum, grammar dasar, dan latihan lisan.",
  },

  {
    id: 14,
    judul: "Bahasa Arab",
    kategori: "Bahasa",
    deskripsi: "Dasar membaca, menulis, dan percakapan.",
    lama: "3–6 bulan",
    biaya: "Rp 400.000/bulan",
    gambar: "/img/imgplaceholder.png",
    detail: "Pembelajaran dasar untuk komunikasi sehari-hari dan pemahaman kitab.",
  },
];

export default function ProgramPage() {
  const [selected, setSelected] = useState<ProgramItem | null>(null);

  return (
    <main className={`relative w-full py-20 px-20 bg-white overflow-hidden ${fredoka.className}`}>
      {/* === BLOB SELURUH HALAMAN === */}
      {/* KIRI ATAS */}
      <svg className="absolute -top-24 -left-20 w-72 h-72 text-red-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M39.4,-63.6C53.4,-56.7,67.2,-47.5,74.9,-34.9C82.6,-22.2,84.2,-6.2,81.9,9.2C79.6,24.7,73.5,39.6,63.4,51.6C53.3,63.5,39.2,72.6,25.2,76.8C11.2,81.1,-2.7,80.5,-15.6,75.5C-28.6,70.5,-40.6,61.2,-51.1,50.2C-61.6,39.3,-70.7,26.6,-72.7,12.4C-74.7,-1.7,-69.7,-17.5,-61.2,-29.5C-52.8,-41.5,-40.8,-49.7,-28.7,-58.3C-16.6,-66.9,-8.3,-75.9,3.7,-82C15.8,-88.1,31.6,-91,39.4,-63.6Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ... BLOB LAIN TETAP SAMA ... */}

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mx-auto">
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Program Kursus <span className="text-red-400">New Smart People</span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg">Pilihan program lengkap sesuai brosur resmi NSP International.</p>

          {/* Garis warna */}
          <div className="flex justify-center mt-4">
            <svg width="140" height="12" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
              <path d="M0 10 C 40 0, 60 20, 100 10 S 160 0, 200 10" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item) => (
            <ProgramCard key={item.id} program={item} onClick={() => setSelected(item)} />
          ))}
        </div>

        {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
      </div>
    </main>
  );
}
