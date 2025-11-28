"use client";

import Image from "next/image";
import { fredoka } from "@/app/fonts";
import { CheckCircle } from "lucide-react";

const listLeft = ["Kursus Bahasa Inggris", "Kursus Komputer", "TOEFL Preparation", "Program Anak & Remaja"];

const listRight = ["Instruktur Berpengalaman", "Kelas Fleksibel", "Ratusan Testimoni Alumni", "Kurikulum Terstruktur"];

export default function ShortProfile() {
  return (
    <div>
      <section aria-labelledby="short-profile-heading" className="py-20 bg-white relative">
        <div className="mx-auto max-w-6xl flex flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          {/* LEFT — IMAGE */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md">
              {/* Inline clipPath (must be inline) */}
              <svg width="0" height="0">
                <clipPath id="nspClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.02,0.25 C0.02,0.05 0.15,0 0.32,0 H0.78 C0.92,0 1,0.07 1,0.18 V0.82 C1,0.93 0.93,1 0.78,1 H0.23 C0.12,1 0.02,0.94 0.02,0.82 Z" />
                </clipPath>
              </svg>

              <div
                className="relative overflow-hidden"
                style={{
                  width: "100%",
                  height: "340px",
                  clipPath: "url(#nspClip)",
                }}
              >
                <Image src="/img/gedung-nsp.png" alt="Suasana belajar NSP" fill className="object-cover" />
              </div>

              <div className="pointer-events-none absolute -bottom-8 left-1/2 w-3/4 -translate-x-1/2 rounded-full bg-red-200/40 blur-2xl" />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="flex-1 space-y-6">
            {/* Title */}
            <div>
              <h2 id="short-profile-heading" className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-blue-900`}>
                Tentang NSP
              </h2>

              <svg width="230" height="15" viewBox="0 0 320 12" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                <path d="M0 6 C40 0, 80 12, 120 6 S200 0, 240 6 S280 12, 320 6" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className={`${fredoka.className} text-slate-700 leading-relaxed text-[1.05rem]`}>
              NSP berdiri sejak <span className="text-red-600 font-semibold">10 Desember 2010</span>
              {" "}dan hingga kini telah meluluskan lebih dari
              <span className="text-red-600 font-semibold"> 25.000 alumni</span>. Selama lebih dari dua dekade, NSP terus berkembang menjadi salah satu lembaga kursus terpercaya yang dikenal karena pendekatannya yang ramah, profesional, dan
              mampu menjawab kebutuhan belajar masyarakat Indonesia di berbagai daerah, baik dalam bidang Bahasa Inggris maupun Komputer.
            </p>

            <p className={`${fredoka.className} text-slate-700 leading-relaxed text-[1.05rem]`}>
              Dengan program kursus yang lengkap, metode pembelajaran yang mudah dipahami, serta pengajar yang berpengalaman di bidangnya, NSP berkomitmen menghadirkan suasana belajar yang modern dan menyenangkan. Setiap kelas dirancang
              agar peserta bukan hanya menguasai materi, tetapi juga mendapatkan pengalaman belajar yang praktis, relevan, dan bermanfaat untuk karier maupun pendidikan mereka di masa depan.
            </p>

            {/* Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <ul className="space-y-3">
                {listLeft.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-red-500" />
                    <span className={`${fredoka.className} text-slate-700 text-[0.95rem]`}>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {listRight.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-red-500" />
                    <span className={`${fredoka.className} text-slate-700 text-[0.95rem]`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
