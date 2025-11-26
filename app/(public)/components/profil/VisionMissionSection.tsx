"use client";

import { useEffect, useState } from "react";
import { fredoka } from "@/app/fonts";
import { createClient } from "@/utils/supabase/client";

interface VisiMisi {
  id: number;
  name: string;
  description: string;
}

export default function VisionMissionSection() {
  const [visi, setVisi] = useState<string>("");
  const [misi, setMisi] = useState<VisiMisi[]>([]);

  useEffect(() => {
    const supabase = createClient();

    const load = async () => {
      const { data } = await supabase.from("visi_misi").select("id, name, description").order("id", { ascending: true });

      if (!data) return;

      const visiRow = data.find((v) => v.name.toLowerCase() === "visi");
      const misiRows = data.filter((v) => v.name.toLowerCase() === "misi");

      setVisi(visiRow?.description ?? "");
      setMisi(misiRows);
    };

    load();
  }, []);

  return (
    <div id="visimisi" className="relative w-full py-24 px-4 max-w-5xl mx-auto text-slate-800 overflow-hidden z-0">
      <h2 className={`${fredoka.className} relative text-4xl sm:text-5xl font-semibold text-center text-yellow-500 inline-block`}>
        Visi & Misi NSP
        <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-3 text-[#FFC1DA]" viewBox="0 0 200 20">
          <path fill="currentColor" d="M10,10 Q60,2 110,10 T190,10 Q160,18 110,10 T10,10Z" />
        </svg>
      </h2>

      {/* VISI */}
      <div className="mt-14 relative">
        <h3 className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>Visi</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">{visi}</p>
      </div>

      {/* MISI */}
      <div className="mt-14 relative">
        <h3 className={`${fredoka.className} text-2xl font-semibold text-gray-700`}>Misi</h3>

        <ul className="mt-5 space-y-3 text-slate-600 leading-relaxed list-disc pl-5">
          {misi.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
