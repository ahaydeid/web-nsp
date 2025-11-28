"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

type Props = { open: boolean; onClose: () => void; onSuccess: () => void };

export default function AddVisiMisiModal({ open, onClose, onSuccess }: Props) {
  const supabase = createClient();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    await supabase.from("visi_misi").insert([{ name, description: desc }]);
    setLoading(false);
    onSuccess();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Tambah Visi / Misi</h2>

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
          <button onClick={submit} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded">
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
