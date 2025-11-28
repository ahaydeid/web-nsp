"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Gallery = {
  id: number;
  type: "photo" | "video";
  src: string;
  alt: string | null;
  caption: string | null;
  created_at: string | null;
};

type Props = {
  open: boolean;
  item: Gallery | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditGalleryModal({ open, item, onClose, onSuccess }: Props) {
  const supabase = createClient();

  const [type, setType] = useState<"photo" | "video">("photo");
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (!item) return;
    const id = requestAnimationFrame(() => {
      setType(item.type);
      setAlt(item.alt ?? "");
      setCaption(item.caption ?? "");
      setVideoSrc(item.type === "video" ? item.src : "");
    });
    return () => cancelAnimationFrame(id);
  }, [item]);

  async function submit() {
    if (!item) return;

    let src = item.src;

    if (type === "photo") {
      if (file) {
        const filename = `gallery/${Date.now()}-${file.name}`;
        const { error } = await supabase.storage.from("media").upload(filename, file);
        if (!error) {
          src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${filename}`;
        }
      }
    } else {
      const v = videoSrc.trim();
      if (v) src = v;
    }

    await supabase.from("gallery").update({ type, src, alt, caption }).eq("id", item.id);

    onSuccess();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? "bg-black/40 pointer-events-auto" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Media</h2>

        <div className="mb-4">
          <label className="text-sm">Tipe</label>
          <select value={type} onChange={(e) => setType(e.target.value as "photo" | "video")} className="w-full border rounded px-3 py-2 mt-1">
            <option value="photo">Foto</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-sm">Alt</label>
          <input className="w-full border rounded px-3 py-2 mt-1" value={alt} onChange={(e) => setAlt(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="text-sm">Caption</label>
          <textarea className="w-full border rounded px-3 py-2 mt-1" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>

        {type === "photo" ? (
          <div className="mb-6">
            <label className="text-sm">
              Upload Foto Baru <span className="text-slate-400">(opsional)</span>
            </label>
            <input key={type} type="file" accept={type === "photo" ? "image/*" : "video/*"} className="w-full mt-1" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
          </div>
        ) : (
          <div className="mb-6">
            <label className="text-sm">Link YouTube / Video</label>
            <input className="w-full border rounded px-3 py-2 mt-1" placeholder="https://www.youtube.com/watch?v=..." value={videoSrc} onChange={(e) => setVideoSrc(e.target.value)} />
          </div>
        )}

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
