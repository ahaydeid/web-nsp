import { createTestimonial } from "../actions";
import AddWrapper from "./AddWrapper";
import PhotoPicker from "../edit/PhotoPicker";

export default function NewTestimonialPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg p-8">
      <h1 className="text-2xl font-semibold text-slate-800 mb-8">Tambah Testimoni</h1>

      <AddWrapper action={createTestimonial}>
        {/* NAMA */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Nama</label>
          <input name="name" required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:border-red-500 focus:ring-red-400" />
        </div>

        {/* LOKASI */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Lokasi</label>
          <input name="location" required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:border-red-500 focus:ring-red-400" />
        </div>

        {/* TESTIMONI */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Testimoni</label>
          <textarea name="text" required rows={4} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:border-red-500 focus:ring-red-400" />
        </div>

        {/* FOTO */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Foto Testimoni</label>
          <PhotoPicker initialPhoto={null} />
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-medium">Simpan</button>
      </AddWrapper>
    </div>
  );
}
