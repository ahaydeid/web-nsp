"use client";

import { fredoka } from "@/app/fonts";

export default function VisionMissionSection() {
  return (
    <div id="visimisi" className="relative w-full py-24 px-4 max-w-5xl mx-auto text-slate-800 overflow-hidden z-0">
        {/* RANDOM ORGANIC BACKGROUNDS – FIX KONTRAS */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <svg className="absolute bottom-16 right-1/3 w-48 h-48 text-[#ffff2c] opacity-50" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M42.6,-68.5C54.7,-59.6,62.8,-46.7,71,-32.9C79.1,-19.1,87.3,-4.5,86.4,10.4C85.6,25.4,75.7,40.7,63.1,52.3C50.5,63.9,35.2,71.9,19.6,75.6C4.1,79.3,-12,78.7,-25.4,72.6C-38.9,66.6,-49.7,55,-59.8,42C-69.8,29,-79.1,14.5,-80.2,-1.1C-81.4,-16.6,-74.4,-33.2,-64.2,-45.2C-54,-57.2,-40.7,-64.7,-27.2,-72.8C-13.7,-80.9,1.4,-89.7,16.5,-82.2C31.6,-74.7,47.3,-62,42.6,-68.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <h2 className={`${fredoka.className} relative text-4xl sm:text-5xl font-semibold text-center text-yellow-500 inline-block`}>
          Visi & Misi NSP
          <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-3 text-[#FFC1DA]" viewBox="0 0 200 20">
            <path fill="currentColor" d="M10,10 Q60,2 110,10 T190,10 Q160,18 110,10 T10,10Z" />
          </svg>
        </h2>

        {/* VISI */}
        <div className="mt-14 relative">
          <svg className="absolute -left-10 top-0 w-48 h-48 text-[#FFD6E8] opacity-60 -z-10" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M42,-67.2C53.4,-60.5,61.7,-50.7,67.9,-39.7C74.1,-28.7,78.2,-16.4,79.2,-3.5C80.2,9.4,78.1,23,71.7,35.1C65.3,47.3,54.7,58.2,41.7,63.2C28.7,68.3,14.3,67.6,-0.9,69C-16.1,70.4,-32.3,73.8,-45.5,68.8C-58.7,63.7,-68.9,50.2,-74,36.1C-79.1,22,-79,7.4,-76.4,-5.6C-73.7,-18.6,-68.4,-30,-60.7,-38.4C-53,-46.8,-43,-52.3,-32.4,-60C-21.7,-67.8,-10.9,-77.9,0.3,-78.4C11.4,-78.9,22.9,-69.7,42,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <h3 className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>Visi</h3>

          <p className="mt-4 text-slate-600 leading-relaxed">Menjadi lembaga kursus dan pelatihan terdepan yang melahirkan generasi berkarakter, kompeten, dan siap bersaing di tingkat nasional maupun internasional.</p>
        </div>

        {/* MISI */}
        <div className="mt-14 relative">
          <svg className="absolute right-0 -top-5 w-48 h-48 text-[#fd0404] opacity-70 -z-10" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M48,-64.5C60.8,-56.9,68.5,-41.8,70.7,-26.7C72.9,-11.7,69.6,3.2,64.2,16.3C58.7,29.5,51,40.8,41.1,52.8C31.3,64.9,19.2,77.6,4.2,80.3C-10.8,82.9,-21.6,75.5,-33.6,67.6C-45.5,59.7,-58.6,51.2,-63.8,39.8C-69.1,28.4,-66.5,14.2,-65.5,0.5C-64.6,-13.1,-65.3,-26.1,-59.9,-34.4C-54.6,-42.8,-43.4,-46.4,-32.5,-54.3C-21.5,-62.2,-10.7,-74.4,2.1,-77.5C14.8,-80.7,29.7,-75,48,-64.5Z"
              transform="translate(100 100)"
            />
          </svg>

          <h3 className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>Misi</h3>

          <ul className="mt-5 space-y-3 text-slate-600 leading-relaxed list-disc pl-5">
            <li>Menyelenggarakan program kursus berkualitas dengan materi yang relevan dan up-to-date.</li>
            <li>Menghadirkan pengajar profesional yang berpengalaman dan berdedikasi.</li>
            <li>Memberikan pelayanan terbaik dengan suasana belajar yang nyaman dan kondusif.</li>
            <li>Membantu peserta mencapai tujuan akademik dan karier melalui pembelajaran yang terstruktur.</li>
            <li>Menanamkan nilai kejujuran, kedisiplinan, dan semangat belajar sepanjang hayat.</li>
          </ul>
        </div>
    </div>
  );
}
