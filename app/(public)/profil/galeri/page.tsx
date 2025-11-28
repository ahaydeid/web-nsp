import GalleryHero from "@/app/(public)/components/galeri/GalleryHero";
import PhotoGallery from "@/app/(public)/components/galeri/PhotoGallery";
import ActivitySection from "@/app/(public)/components/galeri/ActivitySection";
import VideoGallery from "@/app/(public)/components/galeri/VideoGallery";
import { fredoka } from "@/app/fonts";

export const metadata = {
  title: "Galeri Foto & Video NSP Serang",
  description: "Dokumentasi kegiatan belajar, fasilitas, event, dan aktivitas siswa di NSP International Serang.",
  alternates: { canonical: "/profil/galeri" },
};

export default function GaleriPage() {
  return (
    <main className="w-full flex flex-col">
      <GalleryHero />
      <PhotoGallery />
      <VideoGallery />
      <ActivitySection />

      {/* CTA Penutup */}
      <section className="bg-linear-to-b from-white via-red-50/60 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-slate-900`}>Ingin Melihat Lebih Banyak?</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">NSP International terus berkembang dan menghadirkan suasana belajar yang menyenangkan, modern, dan berkualitas bagi seluruh peserta.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <a href="/program" className="rounded-full bg-red-500 px-6 py-2 font-semibold text-white shadow-md shadow-red-200/80 hover:bg-red-600 transition">
              Lihat Program Kursus
            </a>
            <a href="/kontak" className="rounded-full border border-red-300 px-6 py-2 font-semibold text-red-600 bg-white/70 backdrop-blur hover:bg-red-50 transition">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
