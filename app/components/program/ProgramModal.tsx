"use client";

import Image from "next/image";
import { ProgramItem } from "@/app/program/page";

interface Props {
  program: ProgramItem;
  onClose: () => void;
}

export default function ProgramModal({ program, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-999 p-4">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl">
          ×
        </button>

        {/* Image */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-red-100">
          <Image src={program.gambar} alt={program.judul} fill className="object-cover" />
        </div>

        <h2 className="mt-4 text-xl font-bold text-red-600">{program.judul}</h2>
        <p className="text-sm text-gray-500">{program.kategori}</p>

        <div className="mt-4 space-y-1 text-gray-700 text-sm">
          <p>
            <strong>Lama Program:</strong> {program.lama}
          </p>
          <p>
            <strong>Biaya:</strong> {program.biaya}
          </p>
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line">{program.detail}</p>

        <button onClick={onClose} className="mt-6 w-full rounded-lg bg-red-600 py-2 text-white font-semibold hover:bg-red-700 transition">
          Tutup
        </button>
      </div>
    </div>
  );
}
