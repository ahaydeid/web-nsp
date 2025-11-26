import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import DeleteButton from "./DeleteButton";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  photo: string | null;
}

export default async function TestimonialListPage() {
  const supabase = await createClient();

  const { data } = await supabase.from("testimonials").select("*").order("id", { ascending: false });

  const testimonials: Testimonial[] = data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-800">Kelola Testimoni</h1>

        <Link href="/admin/testimonials/new" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          + Tambah Testimoni
        </Link>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 font-medium">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Foto</th>
              <th className="px-4 py-3">Lokasi</th>
              <th className="px-4 py-3">Testimoni</th>
              <th className="px-4 py-3 w-32 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.map((t, i) => (
              <tr key={t.id} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-slate-100/70`}>
                <td className="px-4 py-3 text-slate-800">{i + 1}</td>

                <td className="px-4 py-3 text-slate-800">{t.name}</td>

                <td className="px-4 py-3">
                  <Image src={t.photo || "/img/profil-placeholder.png"} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                </td>

                <td className="px-4 py-3 text-slate-600">{t.location}</td>

                <td className="px-4 py-3 text-slate-600 max-w-lg leading-relaxed">{t.text}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-4">
                    <Link href={`/admin/testimonials/edit/${t.id}`} className="text-white rounded bg-sky-500 py-1 px-2 hover:text-blue-700 text-sm">
                      Edit
                    </Link>

                    <DeleteButton id={t.id} name={t.name} />
                  </div>
                </td>
              </tr>
            ))}

            {testimonials.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  Belum ada testimoni.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
