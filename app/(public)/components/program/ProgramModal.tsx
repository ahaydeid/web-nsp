"use client";

import Image from "next/image";
import { ProgramItem } from "@/app/(public)/program/page";

interface Props {
  program: ProgramItem;
  onClose: () => void;
}

export default function ProgramModal({ program, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-999 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-xl relative overflow-hidden">

        {/* IMAGE FULL + scroll if tall */}
        <div className="w-full max-h-[65vh] overflow-y-auto relative">
          <Image
            src={program.gambar ?? "/img/imgplaceholder.png"}
            alt={program.judul}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="px-4 pb-4">
          <h2 className="mt-4 text-xl font-bold text-red-600">{program.judul}</h2>
          <p className="text-sm text-gray-500">{program.kategori}</p>

          <div className="mt-4 space-y-1 text-gray-700 text-sm">
            <p><strong>Lama Program:</strong> {program.lama}</p>
            <p><strong>Biaya:</strong> {program.biaya}</p>
          </div>

          <p className="mt-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {program.detail ?? program.deskripsi}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full text-sm rounded bg-gray-50 py-1 text-gray-900 border border-gray-100 hover:bg-gray-200 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
