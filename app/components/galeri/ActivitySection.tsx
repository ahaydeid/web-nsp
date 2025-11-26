"use client";

import { fredoka } from "@/app/fonts";
import { BookOpen, Trees, Mic, PenLine, Laptop, GraduationCap, LucideIcon } from "lucide-react";

interface ActivityItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const activities: ActivityItem[] = [
  {
    title: "Kegiatan Belajar di Ruang Kelas",
    description: "Proses pembelajaran interaktif dengan metode yang menyenangkan dan terstruktur.",
    icon: BookOpen,
  },
  {
    title: "Praktik Conversation Outdoor",
    description: "Holiday / Vacation Class untuk melatih speaking dalam suasana santai di luar ruangan.",
    icon: Trees,
  },
  {
    title: "Seminar & Workshop",
    description: "Kegiatan seminar, pelatihan, dan workshop untuk pengembangan ilmu dan wawasan.",
    icon: Mic,
  },
  {
    title: "Kegiatan Bimbel",
    description: "Bimbingan belajar untuk siswa sekolah dengan fokus pada pemahaman konsep.",
    icon: PenLine,
  },
  {
    title: "Pelatihan Komputer",
    description: "Pelatihan komputer praktis mulai dari dasar hingga keperluan kerja profesional.",
    icon: Laptop,
  },
  {
    title: "Event Kelulusan & Sertifikat",
    description: "Momen kelulusan, pembagian sertifikat, dan apresiasi terhadap pencapaian peserta.",
    icon: GraduationCap,
  },
];

export default function ActivitySection() {
  return (
    <section className="relative py-20 px-4 bg-white" aria-labelledby="kegiatan-heading">
      {/* --- ORGANIC BLOBS BACKGROUND (RED + YELLOW) --- */}
      {/* Blob Merah (kiri atas) */}
      <svg className="absolute -top-20 -left-20 opacity-40 blur-2xl" width="300" height="300" viewBox="0 0 200 200">
        <path
          fill="#fecaca" // soft red-pink
          d="M44.4,-75.4C57.7,-66,68.8,-53.6,75.5,-39.5C82.2,-25.3,84.5,-9.5,81.7,5.5C78.8,20.5,70.7,34.7,60.4,47.1C50.1,59.4,37.7,69.8,23.5,74.4C9.3,79,-6.7,77.8,-22,73.3C-37.2,68.7,-51.7,60.8,-63.5,49.1C-75.4,37.3,-84.6,21.6,-86.8,4.3C-89,-12.9,-84.2,-31.8,-74.7,-46.6C-65.2,-61.3,-51,-71.9,-35.3,-79.6C-19.6,-87.4,-9.8,-92.3,2,-95.4C13.8,-98.5,27.6,-99.8,44.4,-75.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob Kuning (kanan bawah) */}
      <svg className="absolute bottom-0 right-0 opacity-40 blur-2xl" width="300" height="300" viewBox="0 0 200 200">
        <path
          fill="#fef08a" // soft yellow
          d="M37.3,-65.9C48.3,-57.3,57.7,-48.2,64.2,-37C70.7,-25.8,74.3,-12.9,74.7,0.1C75.2,13.1,72.5,26.2,66.3,38C60.1,49.9,50.4,60.4,38.6,67.5C26.7,74.5,13.4,78,0.1,77.8C-13.2,77.5,-26.3,73.4,-38.3,66.3C-50.3,59.3,-61.2,49.4,-69.5,37.5C-77.9,25.7,-83.7,12.8,-84.1,-0.2C-84.5,-13.1,-79.6,-26.3,-72.1,-37.8C-64.6,-49.3,-54.5,-59.2,-42.5,-67.6C-30.6,-75.9,-15.3,-82.9,-1.4,-79.6C12.4,-76.2,24.9,-62.4,37.3,-65.9Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* --- CONTENT --- */}
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="kegiatan-heading" className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-slate-900`}>
            Kegiatan Belajar & Event NSP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Berbagai kegiatan pembelajaran dan event di NSP dirancang untuk membangun pengalaman belajar yang menyenangkan dan bermakna.</p>
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl bg-white/80 px-6 py-6 shadow-gray-200 backdrop-blur-sm hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={2} />
                  </div>

                  <h3 className={`${fredoka.className} text-base sm:text-lg font-semibold text-slate-900`}>{item.title}</h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
