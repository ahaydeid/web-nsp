"use client";

import { Calendar, Users, Medal, ThumbsUp } from "lucide-react";
import { fredoka } from "@/app/fonts";
import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#fbfbfb] pt-15 pb-28 overflow-hidden">
      {/* Decorative big blob */}
      <svg className="absolute -top-20 -left-10 w-80 h-80 text-[#ffd1d1] opacity-70 blur-xl" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M45.2,-73.1C57.5,-65.9,65.8,-51.3,72.8,-36C79.7,-20.7,85.3,-4.7,83.2,9.6C81,23.9,71.2,36.5,60.2,48.4C49.2,60.2,36.9,71.4,22.6,75.8C8.4,80.2,-7.8,77.7,-23.1,72C-38.5,66.2,-53,57.2,-62.3,44.5C-71.6,31.8,-75.6,15.4,-74.3,0.7C-72.9,-14,-66.2,-28,-57.5,-38.9C-48.7,-49.8,-37.9,-57.6,-25.4,-65.5C-12.9,-73.5,1.4,-81.7,16.5,-82.2C31.6,-82.8,47.3,-75.3,45.2,-73.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-4 text-center relative">
        {/* TITLE */}
        <h1 className={`${fredoka.className} text-4xl sm:text-6xl font-semibold text-slate-800 leading-tight relative inline-block`}>
          Tentang{" "}
          <span className="relative text-[#ff0000]">
            New Smart People
            {/* organic underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#ff0000]" viewBox="0 0 200 20">
              <path fill="currentColor" d="M10,10 Q60,2 110,10 T190,10 Q160,18 110,10 T10,10Z" />
            </svg>
          </span>
        </h1>

        <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto">Lembaga kursus terlengkap dan terakreditasi <span className="text-red-500 font-bold text-xl">A</span> di Kota Serang.</p>

        <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto leading-relaxed">NSP (New Smart People) telah membantu puluhan ribu peserta meningkatkan kompetensi bahasa, komputer, dan keterampilan akademik sejak tahun 2010.</p>

        {/* BLOB HIGHLIGHTS */}
        <div className="mt-10 flex flex-wrap justify-center gap-12">
          <BlobItem icon={<Calendar className="w-8 h-8 text-blue-800" />} label="Berdiri Sejak" value="10 Desember 2010" />

          <BlobItem icon={<Users className="w-8 h-8 text-blue-800" />} label="Alumni" value="25.000+" />

          <BlobItem icon={<Medal className="w-8 h-8 text-blue-800" />} label="Akreditasi" value="A" />

          <BlobItem icon={<ThumbsUp className="w-8 h-8 text-blue-800" />} label="Predikat" value="Lembaga Terfavorit" />
        </div>

        {/* CTA */}
        <div className="mt-5 flex justify-center gap-8 text-lg">
          <a href="#sejarah" className={`${fredoka.className} text-red-400 hover:text-red-500 transition-colors`}>
            Lihat Sejarah
          </a>
          <a href="#visimisi" className={`${fredoka.className} text-red-400 hover:text-red-500 transition-colors`}>
            Lihat Visi & Misi
          </a>
        </div>
      </div>
    </section>
  );
}

interface BlobItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function BlobItem({ icon, label, value }: BlobItemProps) {
  return (
    <div className="relative w-40 h-40 flex flex-col items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#fff200]">
        <path
          fill="currentColor"
          d="M44.4,-63.6C58,-56.6,70.1,-46.1,77.1,-32.8C84,-19.6,85.9,-3.7,81.4,10.1C76.8,23.9,65.8,35.6,54.4,48.5C43,61.3,31.3,75.3,15.4,80.9C-0.4,86.4,-20.6,83.6,-36.6,74.8C-52.6,65.9,-64.4,51,-71.1,34.7C-77.8,18.4,-79.4,0.7,-74.1,-15.1C-68.8,-30.9,-56.6,-44.8,-43.1,-52.4C-29.7,-59.9,-14.8,-61,-0.2,-60.7C14.3,-60.3,28.5,-58.7,44.4,-63.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        {icon}
        <p className="text-xs text-blue-800 mt-1">{label}</p>
        <p className={`${fredoka.className} text-sm font-medium text-blue-800 mt-0.5`}>{value}</p>
      </div>
    </div>
  );
}
