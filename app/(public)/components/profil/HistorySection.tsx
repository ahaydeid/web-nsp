"use client";

import { fredoka } from "@/app/fonts";

export default function HistorySection() {
  return (
    <div id="sejarah" className="w-full py-20 px-4 mx-auto max-w-5xl text-slate-800">
      <h2 className={`${fredoka.className} text-4xl sm:text-5xl font-semibold text-center text-gray-900 relative inline-block`}>
        Sejarah NSP
        <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-3 text-[#FFC1DA]" viewBox="0 0 200 20">
          <path fill="currentColor" d="M10,10 Q60,2 110,10 T190,10 Q160,18 110,10 T10,10Z" />
        </svg>
      </h2>

      <div className="mt-14 space-y-6 text-slate-600 leading-relaxed text-base">
        <p>
          Lembaga Pendidikan NSP berdiri pada <strong>10 Desember 2010</strong> di Kota Serang, Banten. Sejak awal berdiri, NSP berkomitmen untuk menghadirkan kursus berkualitas dengan biaya yang terjangkau agar dapat diakses oleh
          masyarakat luas.
        </p>

        <p>
          Selama lebih dari dua dekade, NSP telah memiliki lebih dari <strong>25.000 alumni</strong> yang tersebar di seluruh Indonesia dan luar negeri. Para peserta berasal dari berbagai latar belakang — pelajar, mahasiswa, karyawan,
          hingga profesional yang ingin meningkatkan kompetensi.
        </p>

        <p>
          Seiring perkembangan dunia pendidikan, NSP terus memperluas program kursusnya, mulai dari bahasa Inggris, komputer, bimbingan belajar, hingga persiapan ujian. NSP juga meraih berbagai pengakuan, termasuk{" "}
          <strong>International Achievement Foundation (2017)</strong>, sebagai lembaga berprestasi.
        </p>
      </div>
    </div>
  );
}
