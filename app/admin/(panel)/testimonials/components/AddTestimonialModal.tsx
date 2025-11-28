"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

type Props = { open: boolean; onClose: () => void; onSuccess: () => void };

export default function AddTestimonialModal({ open, onClose, onSuccess }: Props) {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);

    let photo: string | null = null;

    if (file) {
      const filename = `testimonials/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from("media").upload(filename, file);

      if (!error) {
        photo = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${filename}`;
      }
    }

    await supabase.from("testimonials").insert([{ name, location, text, photo }]);

    setLoading(false);
    onSuccess();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Tambah Testimoni</h2>

        <div className="mb-4">
          <label className="text-sm">Nama</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Lokasi</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Testimoni</label>
          <textarea className="w-full border rounded px-3 py-2 mt-1" value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="text-sm">Foto</label>
          <input key={name} type="file" accept="image/*" className="w-full mt-1" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Batal
          </button>
          <button disabled={loading} onClick={submit} className="px-4 py-2 bg-red-600 text-white rounded">
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
