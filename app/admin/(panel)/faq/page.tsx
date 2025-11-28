"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import AddFaqModal from "./components/AddFaqModal";
import EditFaqModal from "./components/EditFaqModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import SuccessAddModal from "../components/SuccessAddModal";
import SuccessEditModal from "../components/SuccessEditModal";
import SuccessDeleteModal from "../components/SuccessDeleteModal";

type Faq = {
  id: number;
  question: string;
  answer: string;
  created_at: string | null;
};

export default function FaqPage() {
  const supabase = createClient();

  const [items, setItems] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editItem, setEditItem] = useState<Faq | null>(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [showSuccessAdd, setShowSuccessAdd] = useState(false);
  const [showSuccessEdit, setShowSuccessEdit] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("faqs").select("*").order("id");
      if (data) setItems(data);
      setLoading(false);
    };
    load();
  }, [supabase]);

  async function handleDelete(id: number) {
    await supabase.from("faqs").delete().eq("id", id);
    setShowConfirmDelete(false);
    setShowSuccessDelete(true);

    const { data } = await supabase.from("faqs").select("*").order("id");
    if (data) setItems(data);
  }

  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">FAQ</h1>

        <button onClick={() => setShowAdd(true)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          + Tambah FAQ
        </button>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 font-medium">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Pertanyaan</th>
              <th className="px-4 py-3">Jawaban</th>
              <th className="px-4 py-3 text-center w-32">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                  Belum ada FAQ.
                </td>
              </tr>
            ) : (
              items.map((f, i) => (
                <tr key={f.id} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-slate-100/70`}>
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 text-slate-800 max-w-xl">{f.question}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-xl">{f.answer}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setEditItem(f);
                          setShowEdit(true);
                        }}
                        className="px-3 py-1 bg-sky-500 text-white rounded text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setDeleteId(f.id);
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
      <AddFaqModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSuccess={() => {
          setShowAdd(false);
          setShowSuccessAdd(true);
        }}
      />

      <EditFaqModal
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
