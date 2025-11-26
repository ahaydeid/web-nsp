import { createClient } from "@/utils/supabase/server";
import { updateTestimonial } from "../../actions";
import PhotoPicker from "../PhotoPicker";
import EditWrapper from "../EditWrapper";

export default async function EditTestimonialPage(props: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await props.params;
  const id = Number(rawId);

  if (Number.isNaN(id)) {
    return <p className="text-red-500">Invalid ID.</p>;
  }

  const supabase = await createClient();

  const { data, error } = await supabase.from("testimonials").select("*").eq("id", id).single();

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Data tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg p-8">
      <h1 className="text-2xl font-semibold text-slate-800 mb-8">Edit Testimoni</h1>

      <EditWrapper action={updateTestimonial}>
        <input type="hidden" name="id" value={id} />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Nama</label>
          <input name="name" defaultValue={data.name} required className="w-full border border-slate-300 rounded-md px-3 py-2" />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Lokasi</label>
          <input name="location" defaultValue={data.location} required className="w-full border border-slate-300 rounded-md px-3 py-2" />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">Testimoni</label>
          <textarea name="text" defaultValue={data.text} rows={4} required className="w-full border border-slate-300 rounded-md px-3 py-2" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Foto Testimoni</label>
          <PhotoPicker initialPhoto={data.photo} />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium">Update</button>
      </EditWrapper>
    </div>
  );
}
