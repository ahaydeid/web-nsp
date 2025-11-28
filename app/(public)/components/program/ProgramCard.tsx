"use client";

import Image from "next/image";
import { ProgramItem } from "@/app/(public)/program/page";
import { Coins, Timer } from "lucide-react";

interface Props {
  program: ProgramItem;
  onClick: () => void;
}

export default function ProgramCard({ program, onClick }: Props) {
  return (
    <div onClick={onClick} className="group border border-gray-100 cursor-pointer rounded-3xl bg-white transition-all duration-300 overflow-hidden hover:bg-red-600 hover:shadow-lg relative">
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -bottom-10 -right-10 w-44 h-44 text-red-500 opacity-50 transition-all duration-300 group-hover:opacity-30" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M39.4,-63.6C53.4,-56.7,67.2,-47.5,74.9,-34.9C82.6,-22.2,84.2,-6.2,81.9,9.2C79.6,24.7,73.5,39.6,63.4,51.6C53.3,63.5,39.2,72.6,25.2,76.8C11.2,81.1,-2.7,80.5,-15.6,75.5C-28.6,70.5,-40.6,61.2,-51.1,50.2C-61.6,39.3,-70.7,26.6,-72.7,12.4C-74.7,-1.7,-69.7,-17.5,-61.2,-29.5C-52.8,-41.5,-40.8,-49.7,-28.7,-58.3C-16.6,-66.9,-8.3,-75.9,3.7,-82C15.8,-88.1,31.6,-91,39.4,-63.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image src={program.gambar?.trim() ? program.gambar : "/img/imgplaceholder.png"} alt={program.judul} fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75" />
      </div>

      {/* CONTENT */}
      <div className="p-5 transition-colors duration-300 group-hover:text-white">
        <span className="inline-flex px-2 py-1 text-xs bg-gray-50 border border-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-white group-hover:text-red-700">{program.kategori}</span>

        <h3 className="mt-3 text-lg font-bold text-gray-900 transition-all duration-300 group-hover:text-white">{program.judul}</h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed transition-all duration-300 group-hover:text-red-50">{program.deskripsi}</p>

        {/* INFO */}
        <div className="mt-4 text-sm text-slate-800 space-y-1 transition-all duration-300 group-hover:text-red-100">
          <p className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-gray-900 group-hover:text-yellow-300" />
            <span>
              <span className="font-semibold text-gray-900 group-hover:text-yellow-300">Lama:</span> {program.lama}
            </span>
          </p>

          <p className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-gray-900 group-hover:text-yellow-300" />
            <span>
              <span className="font-semibold text-gray-900 group-hover:text-yellow-300">Biaya:</span> {program.biaya}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
