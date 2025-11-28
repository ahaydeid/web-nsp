"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  description: string;
  updated_at: string | null;
};

type Props = {
  open: boolean;
  item: Item | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditVisiMisiModal({ open, item, onClose, onSuccess }: Props) {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  // isi data saat modal dibuka
  useEffect(() => {
    if (!item) return;

    const id = requestAnimationFrame(() => {
      setName(item.name);
      setDesc(item.description);
    });

    return () => cancelAnimationFrame(id);
  }, [item]);

  async function submit() {
    if (!item) return;

    setLoading(true);

    await supabase
      .from("visi_misi")
      .update({
        name,
        description: desc,
        updated_at: new Date().toISOString(),
      })
      .eq("id", item.id);

    setLoading(false);
    onSuccess(); // memicu modal sukses edit
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Visi / Misi</h2>

        <div className="mb-4">
          <label className="text-sm">Nama</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="mb-6">
          <label className="text-sm">Deskripsi</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Batal
          </button>
          <button onClick={submit} disabled={loading} className="px-4 py-2 bg-sky-600 text-white rounded">
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
}
