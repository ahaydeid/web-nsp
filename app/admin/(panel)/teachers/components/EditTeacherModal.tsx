"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Teacher = {
  id: number;
  name: string;
  title: string | null;
  expertise: string | null;
  experience: string | null;
  photo: string | null;
  created_at: string | null;
};

type Props = {
  open: boolean;
  item: Teacher | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditTeacherModal({ open, item, onClose, onSuccess }: Props) {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    if (!item) return;

    const id = requestAnimationFrame(() => {
      setName(item.name);
      setTitle(item.title ?? "");
      setExpertise(item.expertise ?? "");
      setExperience(item.experience ?? "");
    });

    return () => cancelAnimationFrame(id);
  }, [item]);

  async function submit() {
    if (!item) return;

    let photoUrl = item.photo;

    if (photoFile) {
      const filename = `teachers/${Date.now()}-${photoFile.name}`;

      const { error: uploadError } = await supabase.storage.from("media").upload(filename, photoFile);

      if (!uploadError) {
        photoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${filename}`;
      }
    }

    await supabase
      .from("teachers")
      .update({
        name,
        title,
        expertise,
        experience,
        photo: photoUrl,
      })
      .eq("id", item.id);

    onSuccess();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Teacher</h2>

        <div className="mb-4">
          <label className="text-sm">Nama</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Title</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Expertise</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={expertise} onChange={(e) => setExpertise(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Experience</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="text-sm">
            Foto Baru <span className="text-slate-400">(opsional)</span>
          </label>
          <input type="file" accept="image/*" className="w-full mt-1" onChange={(e) => setPhotoFile(e.target.files ? e.target.files[0] : null)} />
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
