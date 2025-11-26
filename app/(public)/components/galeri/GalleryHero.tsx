"use client";

import { fredoka } from "@/app/fonts";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-red-50 via-white to-purple-50/60 py-20">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-red-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <h1 className={`${fredoka.className} text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>Galeri NSP International</h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Dokumentasi kegiatan, ruang kelas, event, seminar, dan testimoni video.</p>
        <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Di halaman ini, Anda dapat melihat berbagai dokumentasi kegiatan pembelajaran di NSP. Mulai dari suasana kelas, fasilitas, kegiatan belajar luar ruangan, hingga testimoni alumni dalam bentuk video.
        </p>

        {/* Tiny navigation buttons */}
        <div className="mt-8 flex justify-center gap-4 text-sm">
          <a href="#foto" className="rounded-full bg-red-500 px-5 py-2 font-semibold text-white shadow-md shadow-red-200/80 hover:bg-red-600 transition">
            Lihat Foto
          </a>
          <a href="#video" className="rounded-full border border-red-300 px-5 py-2 font-semibold text-red-600 bg-white/80 backdrop-blur hover:bg-red-50 transition">
            Lihat Video
          </a>
        </div>
      </div>
    </section>
  );
}
