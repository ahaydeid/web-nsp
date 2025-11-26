"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Aditya Rachman",
    location: "Pandeglang",
    text: "Alhamdulillah berkat ikut bimbingan TOEFL di NSP saya bisa kuliah di Malaya University Malaysia, sukses terus buat temen-temen yang kursus di sana jangan ragu untuk join di NSP.",
  },
  {
    name: "Syarifudin",
    location: "Serang",
    text: "NSP mantapp!, saya bersyukur dengan kursus di NSP program Bahasa Inggris dan Komputer saya bisa kerja di Jepang, sertifikatnya diakui internasional. Sukses terus buat NSP.",
  },
  {
    name: "Nada Cahyatama",
    location: "Serang",
    text: "Top markotop, kursus di NSP saya cuma 2 bulan tapi bisa dapat kuliah gratis di UT program LPDP. Nilai TOEFL saya jadi besar, I love NSP.",
  },
  {
    name: "Ngadino",
    location: "Cilegon",
    text: "Sebelum jadi PNS, saya kursus komputer di NSP dua bulan udah bisa. Alhamdulillah sekarang saya kerja di Provinsi, komputernya lancar sekarang mah. NSP memang paling okeeee kalo di Banten brooo.",
  },
  {
    name: "Putri",
    location: "Pandeglang",
    text: "Saya ikut bimbel di NSP, ikut lomba O2SN saya jadi juara. Makasih Mr dan Miss yang ada di NSP.",
  },
  {
    name: "Novi",
    location: "Pandeglang",
    text: "Kalo saran saya ade-ade mending ambil kursus di NSP program platinum, satu bulan aja kerasa bingit ini lidah jadi pengen ngomong bahasa Inggris terus entah kenapa?",
  },
];

// 🔥 FIX: supaya jumlahnya SELALU genap
const fixedTestimonials = testimonials.length % 2 === 0 ? testimonials : [...testimonials, testimonials[0]];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // ⭐ FIX UTAMA: itemsPerSlide responsif (mobile = 1, desktop = 2)
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 2);
    };

    handleResize(); // pertama kali
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hitung total slide berdasarkan itemsPerSlide
  const totalSlides = Math.ceil(fixedTestimonials.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-linear-to-b from-white to-red-50/30 relative overflow-hidden">
      <svg width="0" height="0">
        <clipPath id="nspTestimonialCard" clipPathUnits="objectBoundingBox">
          <path d="M0.08,0.02 C0.18,0,0.26,0,0.30,0 H0.80 C0.92,0,1,0.08,1,0.22 V0.80 C1,0.93,0.92,1,0.78,1 H0.22 C0.10,1,0,0.93,0,0.80 V0.28 C0,0.16,0.03,0.08,0.08,0.02" />
        </clipPath>
      </svg>

      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm font-semibold text-red-600">Our Testimonials</p>
        <h2 className={`${fredoka.className} text-3xl sm:text-4xl font-bold text-slate-900 mt-1`}>Apa Kata Alumni NSP?</h2>
        <div className="mx-auto mt-1 h-1 w-28 bg-linear-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full" />
        <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">Cerita nyata dari alumni NSP — dari TOEFL, komputer, hingga prestasi sekolah dan karier.</p>

        {/* SLIDER GRID */}
        <div className="relative mt-12 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-900 ease-[cubic-bezier(.45,.15,.15,1)]"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, groupIndex) => (
              <div key={groupIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-4">
                {fixedTestimonials.slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide).map((t, i) => (
                  <article key={i} className="relative bg-[#ffe6f4] border border-red-300/70 shadow-sm px-8 py-12 text-left min-h-[420px]" style={{ clipPath: "url(#nspTestimonialCard)" }}>
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center">
                        <div className="h-18 w-18 rounded-full border-[3px] border-dashed border-red-500 flex items-center justify-center overflow-hidden">
                          <Image src="/img/profil-placeholder.png" alt={t.name} width={96} height={96} className="h-16 w-16 object-cover rounded-full" />
                        </div>
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-[#36195f] leading-tight`}>{t.name}</h3>
                        <p className="mt-2 text-sm font-semibold text-red-600">Alumni NSP • {t.location}</p>

                        <div className="mt-3 flex gap-1 text-pink-500 text-lg">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 h-px w-full bg-red-300/70" />
                    <p className={`${fredoka.className} mt-6 text-base leading-relaxed text-[#e01976]`}>“{t.text}”</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* DOT NAV */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-red-500 scale-110" : "bg-red-200"}`} aria-label={`Tampilkan testimoni ke-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
