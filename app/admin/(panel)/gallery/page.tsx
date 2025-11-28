"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import AddGalleryModal from "./components/AddGalleryModal";
import EditGalleryModal from "./components/EditGalleryModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import SuccessAddModal from "../components/SuccessAddModal";
import SuccessEditModal from "../components/SuccessEditModal";
import SuccessDeleteModal from "../components/SuccessDeleteModal";
import Image from "next/image";

type Gallery = {
  id: number;
  type: "photo" | "video";
  src: string;
  alt: string | null;
  caption: string | null;
  created_at: string | null;
};

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return null;
  } catch {
    return null;
  }
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function GalleryPage() {
  const supabase = createClient();
  const [items, setItems] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editItem, setEditItem] = useState<Gallery | null>(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [showSuccessAdd, setShowSuccessAdd] = useState(false);
  const [showSuccessEdit, setShowSuccessEdit] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("gallery").select("*").order("id");
      if (data) setItems(data);
      setLoading(false);
    };
    load();
  }, [supabase]);

  async function handleDelete(id: number) {
    await supabase.from("gallery").delete().eq("id", id);

    setShowConfirmDelete(false);
    setShowSuccessDelete(true);

    const { data } = await supabase.from("gallery").select("*").order("id");
    if (data) setItems(data);
  }

  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Galeri</h1>
        <button onClick={() => setShowAdd(true)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          + Tambah Media
        </button>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 font-medium">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Preview</th>
              <th className="px-4 py-3">Tipe</th>
              <th className="px-4 py-3">Alt</th>
              <th className="px-4 py-3">Caption</th>
              <th className="px-4 py-3 text-center w-32">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  Belum ada data.
                </td>
              </tr>
            ) : (
              items.map((g, i) => (
                <tr key={g.id} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-slate-100/70`}>
                  <td className="px-4 py-3">{i + 1}</td>

                  <td className="px-4 py-3">
                    {g.type === "photo" ? (
                      <Image src={g.src?.trim() ? g.src : "/img/imgplaceholder.png"} alt={g.alt ?? ""} width={60} height={60} className="w-14 h-14 object-cover rounded" />
                    ) : (
                      (() => {
                        const thumb = getYouTubeThumbnail(g.src);
                        return thumb ? (
                          <Image src={thumb} alt={g.alt ?? "Video"} width={80} height={60} className="w-20 h-14 object-cover rounded" />
                        ) : (
                          <Image src="/img/imgplaceholder.png" alt="Video placeholder" width={80} height={60} className="w-20 h-14 object-cover rounded" />
                        );
                      })()
                    )}
                  </td>

                  <td className="px-4 py-3 text-slate-800">{g.type}</td>
                  <td className="px-4 py-3 text-slate-600">{g.alt}</td>
                  <td className="px-4 py-3 text-slate-600">{g.caption}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setEditItem(g);
                          setShowEdit(true);
                        }}
                        className="px-3 py-1 bg-sky-500 text-white rounded text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setDeleteId(g.id);
                          setShowConfirmDelete(true);
                        }}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddGalleryModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSuccess={() => {
          setShowAdd(false);
          setShowSuccessAdd(true);
        }}
      />

      <EditGalleryModal
        open={showEdit}
        item={editItem}
        onClose={() => setShowEdit(false)}
        onSuccess={() => {
          setShowEdit(false);
          setShowSuccessEdit(true);
        }}
      />

      <ConfirmDeleteModal open={showConfirmDelete} onClose={() => setShowConfirmDelete(false)} onConfirm={() => deleteId && handleDelete(deleteId)} />
      <SuccessAddModal open={showSuccessAdd} onClose={() => setShowSuccessAdd(false)} />
      <SuccessEditModal open={showSuccessEdit} onClose={() => setShowSuccessEdit(false)} />
      <SuccessDeleteModal open={showSuccessDelete} onClose={() => setShowSuccessDelete(false)} />
    </main>
  );
}
