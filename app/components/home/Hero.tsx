"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fredoka } from "@/app/fonts";
import { MapPin, Phone } from "lucide-react";

function AnimatedCount({ endValue, label }: { endValue: number; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const step = Math.ceil(endValue / 60);

          const interval = setInterval(() => {
            current += step;
            if (current >= endValue) {
              current = endValue;
              clearInterval(interval);
            }
            setValue(current);
          }, 15);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={ref}>
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>{value.toLocaleString()}+</p>
    </div>
  );
}
function AnimatedIcon({ label, value }: { label: string; value: string }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="text-center">
      <p className="text-xs text-gray-500">{label}</p>

      <div className={`flex flex-col items-center transition-all duration-300 ${animate ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <span className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>{value}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-red-50">
      {/* Soft accent blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-120 w-120 bg-blue-200/40 rounded-full blur-xl" />
        <div className="absolute right-15 bottom-15 h-120 w-120 bg-red-200 rounded-full blur-3xl" />
        {/* <div className="absolute left-1/2 top-1 h-110 w-110 bg-red-200/40 rounded-full blur-3xl -translate-x-1/2" /> */}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16 lg:flex lg:items-center lg:gap-14">
        {/* LEFT 60% */}
        <div className="flex-[0.6] space-y-6">
          <h1 className={`${fredoka.className} font-bold leading-tight text-gray-900 text-4xl sm:text-5xl`}>
            Belajar Jadi Lebih Mudah di{" "}
            <span className="text-red-600">
              {" "}
              New Smart <span className="text-yellow-300 text-outline">People</span>
            </span>
          </h1>

          <p className="text-gray-700 text-base leading-relaxed">Kursus Bahasa Inggris & Komputer yang ramah, menyenangkan, dan mendukung perkembangamu sejak hari pertama.</p>

          {/* Stats With Animation */}
          <div className="mt-20 flex items-center gap-10">
            {/* Alumni */}
            <div className="min-w-[100px] text-center">
              <AnimatedCount label="Alumni" endValue={25000} />
            </div>

            {/* Sejak */}
            <div className="text-center">
              <p className="text-xs text-gray-500">Sejak</p>
              <p className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>2010</p>
            </div>

            {/* Akreditasi */}
            <div className="text-center">
              <AnimatedIcon label="Akreditasi" value="A" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <Link href="#daftar" className="inline-flex items-center gap-2 rounded bg-white px-8 py-3 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gray-700 transition">
              <MapPin size={18} strokeWidth={2} />
              Lihat Alamat
            </Link>

            <Link href="tel:087774276111" className="inline-flex items-center gap-2 rounded-full bg-green-400 border text-white border-gray-200 px-7 py-3 text-sm font-semibold hover:bg-green-500 transition">
              <Phone size={18} strokeWidth={2} />
              Hubungi Kami
            </Link>
          </div>
        </div>
        {/* RIGHT 40% */}
        <div className="hidden lg:flex flex-[0.4] min-w-[320px] lg:mt-0">
          <div className="relative mx-auto w-full h-[520px] overflow-hidden rounded-md">
            {/* Image full cover parent */}
            <Image src="/img/imagebocil.png" alt="Siswa NSP sedang belajar" fill className="object-cover z-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
