"use client";

import Image from "next/image";
import { fredoka } from "@/app/fonts";

interface Teacher {
  name: string;
  title: string;
  expertise: string;
  experience: string;
}

export default function TeachersSection() {
  const teachers: Teacher[] = [
    {
      name: "Budi Setiawan, M.Pd",
      title: "Spesialis Bahasa Inggris & TOEFL",
      expertise: "Bahasa Inggris, TOEFL",
      experience: "Berpengalaman mengajar lebih dari 10 tahun.",
    },
    {
      name: "Rina Kurnia, S.Kom",
      title: "Spesialis Komputer & Desain Grafis",
      expertise: "Komputer, Desain Grafis",
      experience: "Mengajar komputer profesional sejak 2012.",
    },
    {
      name: "Ahmad Fauzi, M.Pd",
      title: "Bimbingan Belajar & Persiapan Tes",
      expertise: "Bimbel, Tes Akademik",
      experience: "Berpengalaman membimbing peserta mencapai target nilai.",
    },
  ];

  const blobs = [
    "M44.4,-63.6C58,-56.6,70.1,-46.1,77.1,-32.8C84,-19.6,85.9,-3.7,81.4,10.1C76.8,23.9,65.8,35.6,54.4,48.5C43,61.3,31.3,75.3,15.4,80.9C-0.4,86.4,-20.6,83.6,-36.6,74.8C-52.6,65.9,-64.4,51,-71.1,34.7C-77.8,18.4,-79.4,0.7,-74.1,-15.1C-68.8,-30.9,-56.6,-44.8,-43.1,-52.4C-29.7,-59.9,-14.8,-61,-0.2,-60.7C14.3,-60.3,28.5,-58.7,44.4,-63.6Z",
    "M42,-67.2C53.4,-60.5,61.7,-50.7,67.9,-39.7C74.1,-28.7,78.2,-16.4,79.2,-3.5C80.2,9.4,78.1,23,71.7,35.1C65.3,47.3,54.7,58.2,41.7,63.2C28.7,68.3,14.3,67.6,-0.9,69C-16.1,70.4,-32.3,73.8,-45.5,68.8C-58.7,63.7,-68.9,50.2,-74,36.1C-79.1,22,-79,7.4,-76.4,-5.6C-73.7,-18.6,-68.4,-30,-60.7,-38.4C-53,-46.8,-43,-52.3,-32.4,-60C-21.7,-67.8,-10.9,-77.9,0.3,-78.4C11.4,-78.9,22.9,-69.7,42,-67.2Z",
    "M39,-66.7C52.4,-60.4,65.6,-53.1,74,-41.8C82.4,-30.5,86,-15.3,84.4,-0.4C82.7,14.6,75.7,29.2,66.3,41.1C56.9,52.9,45.1,62.1,31.7,69.4C18.3,76.7,3.3,82.1,-10,82.5C-23.3,82.9,-35.9,78.2,-46.7,69.7C-57.5,61.2,-66.4,48.9,-70.7,35.2C-75,21.5,-74.7,6.3,-71.5,-7.6C-68.3,-21.4,-62.2,-33.8,-53.3,-44.1C-44.4,-54.3,-32.7,-62.3,-20.1,-69C-7.5,-75.7,6,-81,19.7,-80.3C33.4,-79.5,47.3,-72.9,39,-66.7Z",
  ];

  return (
    <div className="relative w-full py-24 px-4 mx-auto max-w-6xl text-slate-800 overflow-hidden">
      <h2 className={`${fredoka.className} relative block text-4xl sm:text-5xl font-semibold text-center text-yellow-500`}>
        Tim Pengajar NSP
        <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-3 text-[#FFC1DA]" viewBox="0 0 200 20">
          <path fill="currentColor" d="M10,10 Q60,2 110,10 T190,10 Q160,18 110,10 T10,10Z" />
        </svg>
      </h2>

      <p className="mt-4 text-slate-600 text-center max-w-3xl mx-auto">Di balik keberhasilan ribuan alumni NSP, terdapat tim pengajar yang kompeten, berpengalaman, dan berdedikasi.</p>

      {/* INFINITE CAROUSEL */}
      <div className="relative w-full overflow-hidden mt-16">
        <div className="flex gap-12 animate-slide">
          {teachers.concat(teachers).map((t, i) => (
            <div key={t.name + i} className="shrink-0 w-[300px] sm:w-[320px] lg:w-[340px]">
              <div className="relative w-full flex flex-col items-center text-center px-6 pt-10 pb-12">
                <svg className="absolute inset-0 w-full h-full text-[#FFD6E8] opacity-70 -z-10" viewBox="0 0 200 200">
                  <path fill="currentColor" d={blobs[i % blobs.length]} transform="translate(100 100)" />
                </svg>

                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image src="/img/profil-placeholder.png" alt={t.name} fill className="object-cover" />
                </div>

                <h3 className={`${fredoka.className} mt-4 text-xl font-semibold text-red-500`}>{t.name}</h3>
                <p className="text-slate-700 font-medium">{t.title}</p>

                <p className="mt-3 text-slate-600 text-sm">
                  <strong>Bidang:</strong> {t.expertise}
                </p>

                <p className="mt-1 text-slate-500 text-sm">{t.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          width: max-content;
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
