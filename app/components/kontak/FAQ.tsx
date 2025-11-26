"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    q: "Bagaimana cara mendaftar di NSP?",
    a: "Anda dapat datang langsung ke kantor NSP dengan membawa fotokopi KTP/KK atau kartu pelajar.",
  },
  {
    q: "Berapa biaya kursus?",
    a: "Biaya bervariasi tergantung program. Informasi lebih lengkap tersedia saat pendaftaran.",
  },
  {
    q: "Kapan jadwal kursus dimulai?",
    a: "Jadwal berbeda sesuai program. Konsultasikan dengan admin saat pendaftaran.",
  },
  {
    q: "Apa persyaratan peserta?",
    a: "KTP/KK atau kartu pelajar untuk peserta sekolah.",
  },
  {
    q: "Apakah ada program fleksibel?",
    a: "Ya, NSP memiliki Program Gold & Silver dengan pilihan waktu yang fleksibel.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Blob kecil */}
      <svg className="absolute -top-10 -left-14 w-32 h-32 text-yellow-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M44.8,-72.7C59.3,-66.9,72,-53.4,74.2,-38.6C76.4,-23.7,68.1,-7.6,61.7,7.4C55.3,22.4,50.7,36.2,41.3,48.8C31.9,61.5,17.6,73.1,2,70.7C-13.6,68.2,-27.1,51.8,-39.2,38.7C-51.4,25.7,-62.2,16,-68.8,2.1C-75.4,-11.7,-77.8,-29.8,-69.6,-41.5C-61.5,-53.1,-42.8,-58.4,-26.4,-64.5C-10.1,-70.6,4,-77.6,18.2,-79.4C32.4,-81.2,46.7,-77.7,44.8,-72.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">FAQ (Pertanyaan Umum)</h2>

      <div className="space-y-4 relative z-10">
        {faqList.map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded p-4 cursor-pointer transition hover:shadow-sm" onClick={() => setOpen(open === i ? null : i)}>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-900 font-semibold">{item.q}</h3>
              <ChevronDown className={`text-gray-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </div>

            {open === i && <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
