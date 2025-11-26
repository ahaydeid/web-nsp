"use client";

import { Puzzle, AlignLeft, Users, Smile } from "lucide-react";
import { fredoka } from "@/app/fonts";
import React from "react";

const features = [
  {
    icon: <Puzzle size={58} strokeWidth={1.5} className="text-pink-600" />,
    title: "Smart Learning & Fun",
    desc: "Belajar jadi menyenangkan dengan pendekatan interaktif dan penuh kreativitas.",
    quote: "Kami memadukan pembelajaran cerdas dan permainan edukatif agar kamu semangat belajar setiap hari.",
  },
  {
    icon: <AlignLeft size={58} strokeWidth={1.5} className="text-pink-600" />,
    title: "All-in-One Learning Path",
    desc: "Program lengkap dari dasar hingga mahir, dirancang untuk setiap tahap perkembangan.",
    quote: "Belajar dari mengenal huruf hingga memahami konsep dalam jalur yang terstruktur.",
  },
  {
    icon: <Users size={58} strokeWidth={1.5} className="text-pink-600" />,
    title: "Certified & Caring Teachers",
    desc: "Instruktur profesional yang bukan hanya ahli, tetapi juga peduli.",
    quote: "Guru kami siap membimbing dengan hati, menciptakan suasana belajar yang suportif.",
  },
  {
    icon: <Smile size={58} strokeWidth={1.5} className="text-pink-600" />,
    title: "Student Wellbeing",
    desc: "Kami peduli pada kenyamanan dan kesehatan emosional peserta.",
    quote: "Bimbingan dan ruang aman kami hadirkan agar peserta tumbuh percaya diri.",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-red-50">
      {/* ClipPath definisi wajib inline */}
      <svg width="0" height="0">
        <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
          <path d="M0.12,0 C0.05,0.12 0,0.26 0,0.41 V0.83 C0,0.94 0.06,1 0.18,1 H0.82 C0.94,1 1,0.94 1,0.83 V0.22 C1,0.09 0.93,0 0.8,0 H0.28 C0.21,0 0.16,0.02 0.12,0.07" />
        </clipPath>
      </svg>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-slate-900`}>Keunggulan Belajar di NSP</h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">Dibuat untuk memberikan pengalaman belajar yang menyenangkan, modern, dan efektif.</p>

        {/* Kartu 4 kolom */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className={`group relative bg-white border border-pink-100 shadow-md px-6 pb-8 pt-12 flex flex-col items-center text-center transition-all duration-300 ease-out hover:shadow-xl hover:border-3 hover:bg-red-500 hover:border-pink-300 hover:-translate-y-1`}
              style={{ clipPath: "url(#cardClip)" }}
            >
              {/* Ikon */}
              <div className="mb-4">
                {React.cloneElement(item.icon, {
                  className: "text-pink-600 transition-colors duration-300 group-hover:text-white",
                  stroke: "currentColor",
                })}
              </div>

              {/* Judul */}
              <h3 className={`${fredoka.className} text-lg font-semibold text-slate-900 group-hover:text-white`}>{item.title}</h3>

              {/* Deskripsi */}
              <p className="mt-2 text-sm text-slate-600 group-hover:text-white">{item.desc}</p>

              {/* Quote */}
              <p className="mt-4 text-sm text-pink-600 font-medium leading-relaxed group-hover:text-white">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
