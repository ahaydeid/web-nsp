"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Program = {
  id: number;
  judul: string;
  kategori: string | null;
  deskripsi: string | null;
  lama: string | null;
  biaya: number | null;
  gambar: string | null;
  created_at: string | null;
};

type Props = { open: boolean; item: Program | null; onClose: () => void; onSuccess: () => void };

export default function EditProgramModal({ open, item, onClose, onSuccess }: Props) {
  const supabase = createClient();

  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [lama, setLama] = useState("");
  const [biaya, setBiaya] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!item) return;
    const id = requestAnimationFrame(() => {
      setJudul(item.judul);
      setKategori(item.kategori ?? "");
      setDeskripsi(item.deskripsi ?? "");
      setLama(item.lama ?? "");
      setBiaya(item.biaya ? String(item.biaya) : "");
    });
    return () => cancelAnimationFrame(id);
  }, [item]);

  async function submit() {
    if (!item) return;

    let gambar = item.gambar;

    if (file) {
      const filename = `programs/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from("media").upload(filename, file);

      if (!error) {
        gambar = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${filename}`;
      }
    }

    await supabase
      .from("programs")
      .update({
        judul,
        kategori,
        deskripsi,
        lama,
        biaya: biaya ? Number(biaya) : null,
        gambar,
      })
      .eq("id", item.id);

    onSuccess();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Program</h2>

        <div className="mb-4">
          <label className="text-sm">Judul</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={judul} onChange={(e) => setJudul(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Kategori</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={kategori} onChange={(e) => setKategori(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Lama</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={lama} onChange={(e) => setLama(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Biaya</label>
          <input type="number" className="w-full border rounded px-3 py-2 mt-1" value={biaya} onChange={(e) => setBiaya(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Deskripsi</label>
          <textarea className="w-full border rounded px-3 py-2 mt-1" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="text-sm">Gambar Baru (opsional)</label>
          <input key={kategori} type="file" accept="image/*" className="w-full mt-1" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Batal
          </button>
          <button onClick={submit} className="px-4 py-2 bg-sky-600 text-white rounded">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
