"use client";

import { useEffect, useState, useEffectEvent } from "react";
import Image from "next/image";
import { fredoka } from "@/app/fonts";
import { createClient } from "@/utils/supabase/client";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  photo: string | null;
}

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const supabase = createClient();

    const load = async () => {
      const { data } = await supabase.from("testimonials").select("name, location, text, photo").order("id", { ascending: false });

      setItems(data ?? []);
    };

    load();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasItems = items.length > 0;
  const fixed = hasItems ? (items.length % 2 === 0 ? items : [...items, items[0]]) : [];

  const totalSlides = hasItems ? Math.ceil(fixed.length / itemsPerSlide) : 1;

  useEffect(() => {
    if (!hasItems || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6500);

    return () => clearInterval(timer);
  }, [hasItems, totalSlides]);

  const resetIndex = useEffectEvent(() => {
    setIndex(0);
  });

  useEffect(() => {
    if (!hasItems) resetIndex();
  }, [hasItems]);

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

        <div className="relative mt-12 w-full overflow-hidden">
          <div className="flex transition-transform duration-900 ease-[cubic-bezier(.45,.15,.15,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
            {hasItems &&
              Array.from({ length: totalSlides }).map((_, groupIndex) => (
                <div key={groupIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-4">
                  {fixed.slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide).map((t, i) => (
                    <article key={`${groupIndex}-${i}-${t.name}`} className="relative bg-[#ffe6f4] border border-red-300/70 shadow-sm px-8 py-12 text-left min-h-[420px]" style={{ clipPath: "url(#nspTestimonialCard)" }}>
                      <div className="flex items-start gap-4">
                        <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center">
                          <div className="h-18 w-18 rounded-full border-[3px] border-dashed border-red-500 flex items-center justify-center overflow-hidden">
                            <Image src={t.photo || "/img/profil-placeholder.png"} alt={t.name} width={96} height={96} className="h-16 w-16 object-cover rounded-full" />
                          </div>
                        </div>

                        <div className="flex-1 pt-1">
                          <h3 className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-[#36195f] leading-tight`}>{t.name}</h3>
                          <p className="mt-2 text-sm font-semibold text-red-600">{t.location}</p>

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

        {hasItems && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-red-500 scale-110" : "bg-red-200"}`} aria-label={`Tampilkan testimoni ke-${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
