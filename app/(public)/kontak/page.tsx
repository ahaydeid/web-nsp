"use client";

import ContactInfo from "@/app/(public)/components/kontak/ContactInfo";
import MapEmbed from "@/app/(public)/components/kontak/MapEmbed";
import FAQ from "@/app/(public)/components/kontak/FAQ";
import { fredoka } from "@/app/fonts";

export default function KontakPage() {
  return (
    <main className={`relative w-full py-24 px-6 overflow-hidden ${fredoka.className}`}>
      {/* === BLOBS BESAR – ORGANIK === */}
      <svg className="absolute -top-32 -left-20 w-96 h-96 text-red-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M41.1,-69.1C52.9,-60.7,60.3,-46.8,67.1,-32C73.8,-17.2,80,-1.6,79.5,14.2C79,30,71.8,46,60.4,57.4C49.1,68.8,33.7,75.6,18.6,78C3.6,80.3,-11.2,78.2,-24.5,72.4C-37.8,66.6,-49.6,57.2,-57.1,45.3C-64.6,33.4,-67.8,19,-69.5,3.7C-71.2,-11.7,-71.5,-27.9,-65,-41.1C-58.4,-54.4,-44.9,-64.6,-30.5,-71C-16,-77.4,-8,-80,-0.2,-79.7C7.6,-79.4,15.3,-76,41.1,-69.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg className="absolute top-1/3 -right-24 w-96 h-96 text-yellow-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M44.8,-72.7C59.3,-66.9,72,-53.4,74.2,-38.6C76.4,-23.7,68.1,-7.6,61.7,7.4C55.3,22.4,50.7,36.2,41.3,48.8C31.9,61.5,17.6,73.1,2,70.7C-13.6,68.2,-27.1,51.8,-39.2,38.7C-51.4,25.7,-62.2,16,-68.8,2.1C-75.4,-11.7,-77.8,-29.8,-69.6,-41.5C-61.5,-53.1,-42.8,-58.4,-26.4,-64.5C-10.1,-70.6,4,-77.6,18.2,-79.4C32.4,-81.2,46.7,-77.7,44.8,-72.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* HERO */}
      <section className="relative text-center max-w-3xl mx-auto">
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900 leading-tight">
          Hubungi <span className="text-red-400">New Smart People</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">Kami siap membantu Anda mendapatkan informasi kursus, pendaftaran, dan layanan lainnya.</p>
      </section>

      {/* CONTACT INFO */}
      <section className="relative mt-10">
        <ContactInfo />
      </section>

      {/* MAP */}
      <section className="relative mt-24">
        <MapEmbed />
      </section>

      {/* FAQ */}
      <section className="relative mt-24">
        <FAQ />
      </section>

      {/* CTA */}
      <section className="relative mt-32 text-center py-20">
        {/* BLOBS */}
        <svg className="absolute -top-16 -left-20 w-64 h-64 text-red-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M41.1,-69.1C52.9,-60.7,60.3,-46.8,67.1,-32C73.8,-17.2,80,-1.6,79.5,14.2C79,30,71.8,46,60.4,57.4C49.1,68.8,33.7,75.6,18.6,78C3.6,80.3,-11.2,78.2,-24.5,72.4C-37.8,66.6,-49.6,57.2,-57.1,45.3C-64.6,33.4,-67.8,19,-69.5,3.7C-71.2,-11.7,-71.5,-27.9,-65,-41.1C-58.4,-54.4,-44.9,-64.6,-30.5,-71C-16,-77.4,-8,-80,-0.2,-79.7C7.6,-79.4,15.3,-76,41.1,-69.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg className="absolute -bottom-20 -right-20 w-72 h-72 text-yellow-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M44.8,-72.7C59.3,-66.9,72,-53.4,74.2,-38.6C76.4,-23.7,68.1,-7.6,61.7,7.4C55.3,22.4,50.7,36.2,41.3,48.8C31.9,61.5,17.6,73.1,2,70.7C-13.6,68.2,-27.1,51.8,-39.2,38.7C-51.4,25.7,-62.2,16,-68.8,2.1C-75.4,-11.7,-77.8,-29.8,-69.6,-41.5C-61.5,-53.1,-42.8,-58.4,-26.4,-64.5C-10.1,-70.6,4,-77.6,18.2,-79.4C32.4,-81.2,46.7,-77.7,44.8,-72.7Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* CONTENT */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative z-10">Butuh Informasi Lebih Lanjut?</h2>

        <p className="mt-4 text-gray-600 text-lg relative z-10 max-w-xl mx-auto">Tim kami siap membantu Anda untuk konsultasi program, pendaftaran, dan kebutuhan belajar lainnya.</p>

        <div className="mt-10 flex justify-center gap-4 relative z-10">
          {/* WA BUTTON */}
          <a href="https://wa.me/6287774276111" className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.84 11.84 0 0012 0a11.94 11.94 0 00-10.26 17.9L0 24l6.3-1.64A11.93 11.93 0 0012 24a11.94 11.94 0 008.48-20.52zM12 22a9.93 9.93 0 01-5.06-1.4l-.36-.21-3.74.97 1-3.64-.24-.38A9.92 9.92 0 1112 22zm5.4-7.4c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07-1.27-.47-2.42-1.5a9.17 9.17 0 01-1.7-2.1c-.18-.3 0-.46.13-.61l.37-.42c.15-.15.22-.3.3-.45a.54.54 0 00-.03-.52c-.07-.15-.67-1.62-.92-2.22s-.5-.5-.67-.5h-.57a1.1 1.1 0 00-.8.37A3.34 3.34 0 006 10.3a5.82 5.82 0 001.23 3.03A13.76 13.76 0 0013 17s2.83-1 3.94-2.37c.55-.67.77-1.2.85-1.42s.1-.37-.15-.5z" />
            </svg>
            WhatsApp
          </a>

          {/* PROGRAM BUTTON */}
          <a href="/program" className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 hover:shadow-sm transition-all">
            <svg xmlns="www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19h16M4 5h16M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Lihat Program
          </a>
        </div>
      </section>
    </main>
  );
}
