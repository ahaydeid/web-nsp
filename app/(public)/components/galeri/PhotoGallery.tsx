"use client";

import Image from "next/image";
import { fredoka } from "@/app/fonts";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface PhotoItem {
  id: number;
  src: string;
  alt: string | null;
  caption: string | null;
}

export default function PhotoGallery() {
  const supabase = createClient();
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("gallery").select("id, src, alt, caption").eq("type", "photo").order("id");

      if (data) setPhotos(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  return (
    <section id="foto" className="bg-white py-20 px-4" aria-labelledby="galeri-foto-heading">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="galeri-foto-heading" className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-slate-900`}>
            Galeri Foto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Dokumentasi kegiatan, fasilitas, dan suasana belajar di NSP International.</p>
        </div>

        {/* Photo grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-60 w-full bg-slate-200 rounded-2xl animate-pulse" />)}

          {!loading && photos.length === 0 && (
            <figure className="group relative overflow-hidden rounded-2xl bg-slate-100/60 shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative w-full pt-[70%]">
                <Image src="/img/imgplaceholder.png" alt="Foto placeholder" fill className="absolute inset-0 h-full w-full object-cover" />
              </div>

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 via-black/15 to-transparent px-4 pb-3 pt-8 text-xs sm:text-sm text-white">
                <span className="font-semibold">Belum ada foto</span>
              </figcaption>
            </figure>
          )}

          {!loading &&
            photos.length > 0 &&
            photos.map((photo) => (
              <figure key={photo.id} className="group relative overflow-hidden rounded-2xl bg-slate-100/60 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative w-full pt-[70%]">
                  <Image src={photo.src ?? "/img/imgplaceholder.png"} alt={photo.alt ?? ""} fill className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                </div>

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 via-black/15 to-transparent px-4 pb-3 pt-8 text-xs sm:text-sm text-white">
                  <span className="font-semibold">{photo.caption ?? "Foto"}</span>
                </figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
}
