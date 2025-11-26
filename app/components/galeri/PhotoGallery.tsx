"use client";

import Image from "next/image";
import { fredoka } from "@/app/fonts";

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: "/img/imgplaceholder.png",
    alt: "Ruang kelas bahasa Inggris",
    caption: "Ruang Kelas Bahasa Inggris",
  },
  {
    id: 2,
    src: "/img/imgplaceholder.png",
    alt: "Suasana belajar di kelas",
    caption: "Suasana Belajar di Kelas",
  },
  {
    id: 3,
    src: "/img/imgplaceholder.png",
    alt: "Lab komputer NSP",
    caption: "Lab Komputer NSP",
  },
  {
    id: 4,
    src: "/img/imgplaceholder.png",
    alt: "Seminar dan workshop NSP",
    caption: "Seminar & Workshop NSP",
  },
  {
    id: 5,
    src: "/img/imgplaceholder.png",
    alt: "Kegiatan praktik outdoor",
    caption: "Holiday / Vacation Class",
  },
  {
    id: 6,
    src: "/img/imgplaceholder.png",
    alt: "Dokumentasi siswa NSP",
    caption: "Dokumentasi Siswa NSP",
  },
  {
    id: 7,
    src: "/img/imgplaceholder.png",
    alt: "Gedung NSP International",
    caption: "Kantor & Gedung NSP",
  },
  {
    id: 8,
    src: "/img/imgplaceholder.png",
    alt: "Pengajar NSP",
    caption: "Pengajar Profesional NSP",
  },
];

export default function PhotoGallery() {
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
          {photos.map((photo) => (
            <figure key={photo.id} className="group relative overflow-hidden rounded-2xl bg-slate-100/60 shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative w-full pt-[70%]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* Caption overlay */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 via-black/15 to-transparent px-4 pb-3 pt-8 text-xs sm:text-sm text-white">
                <span className="font-semibold">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
