"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  initialPhoto: string | null;
}

export default function PhotoPicker({ initialPhoto }: Props) {
  const [preview, setPreview] = useState<string | null>(initialPhoto);

  return (
    <div className="space-y-2">
      {preview ? <Image src={preview} alt="Preview" width={96} height={96} className="w-24 h-24 rounded-full object-cover border border-slate-300" /> : <div className="w-24 h-24 bg-slate-200 rounded-full" />}

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const url = URL.createObjectURL(file);
          setPreview(url);
        }}
        className="block w-full text-sm text-slate-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:bg-red-600 file:text-white
          hover:file:bg-red-700"
      />
    </div>
  );
}
