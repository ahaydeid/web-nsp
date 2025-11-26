import AboutHero from "@/app/(public)/components/profil/AboutHero";
import HistorySection from "@/app/(public)/components/profil/HistorySection";
import VisionMissionSection from "@/app/(public)/components/profil/VisionMissionSection";
import ValuesCultureSection from "@/app/(public)/components/profil/ValuesCultureSection";
import TeachersSection from "@/app/(public)/components/profil/TeachersSection";
import ExcellenceSection from "@/app/(public)/components/profil/ExcellenceSection";

export default function TentangKamiPage() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero */}
      <section>
        <AboutHero />
      </section>

      {/* Sejarah */}
      <section className="">
        <HistorySection />
      </section>

      {/* Visi Misi */}
      <section className="bg-[#fefff2]">
        <VisionMissionSection />
      </section>

      {/* Nilai & Budaya */}
      <section className="">
        <ValuesCultureSection />
      </section>

      {/* Tim Pengajar */}
      <section className="bg-[#fefff2]">
        <TeachersSection />
      </section>

      {/* Keunggulan NSP */}
      <section className="">
        <ExcellenceSection />
      </section>

      {/* Penutup / Navigasi */}
      <footer className="bg-gray-100 py-12 text-center text-sm text-gray-600">
        <div className="flex flex-col gap-2">
          <a href="/program" className="text-red-500 hover:text-red-700 font-medium">
            Lihat Program Kursus
          </a>
          <a href="/galeri" className="text-red-500 hover:text-red-700 font-medium">
            Lihat Galeri Foto & Video
          </a>
          <a href="/kontak" className="text-red-500 hover:text-red-700 font-medium">
            Hubungi Kami
          </a>
        </div>
      </footer>
    </main>
  );
}
