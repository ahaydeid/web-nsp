"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import sharp from "sharp";

//  UPDATE — hapus foto lama, compress jpg, upload baru
export async function updateTestimonial(_prevState: { success: boolean; message?: string }, formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));

  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const text = formData.get("text") as string;
  const file = formData.get("photo") as File | null;

  const { data: oldData } = await supabase.from("testimonials").select("photo").eq("id", id).single();

  let photoUrl: string | null = null;

  if (file && file.size > 0) {
    const valid = ["image/jpeg", "image/jpg", "image/png"];
    if (!valid.includes(file.type)) {
      return { success: false, message: "Foto harus JPG / JPEG / PNG" };
    }

    if (oldData?.photo) {
      const oldPath = oldData.photo.split("/media/")[1];
      if (oldPath) await supabase.storage.from("media").remove([oldPath]);
    }

    const compressed = await compressImageJpg(file);
    const fileName = `testimonials/${Date.now()}.jpg`;

    const { error: uploadError } = await supabase.storage.from("media").upload(fileName, compressed, {
      contentType: "image/jpeg",
      upsert: true,
    });

    if (uploadError) return { success: false, message: uploadError.message };

    const { data: urlData } = supabase.storage.from("media").getPublicUrl(fileName);
    photoUrl = urlData.publicUrl;
  }

  const { error } = await supabase
    .from("testimonials")
    .update({
      name,
      location,
      text,
      ...(photoUrl ? { photo: photoUrl } : {}),
    })
    .eq("id", id);

  if (error) return { success: false, message: error.message };

  revalidatePath("/admin/testimonials");
  return { success: true };
}

//  HELPER: COMPRESS JPG 200KB
async function compressImageJpg(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Kompres kualitas turun otomatis sampai < 200kb
  let quality = 80;
  let output = await sharp(buffer).jpeg({ quality }).toBuffer();

  while (output.length > 200_000 && quality > 30) {
    quality -= 10;
    output = await sharp(buffer).jpeg({ quality }).toBuffer();
  }

  return output;
}

//  CREATE — compress jpg, upload 200KB, simpan

export async function createTestimonial(_prev: { success: boolean; message?: string }, formData: FormData): Promise<{ success: boolean; message?: string }> {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const text = formData.get("text") as string;
  const file = formData.get("photo") as File | null;

  let photoUrl: string | null = null;

  if (file && file.size > 0) {
    const valid = ["image/jpeg", "image/jpg", "image/png"];
    if (!valid.includes(file.type)) {
      return { success: false, message: "Foto harus JPG / JPEG / PNG" };
    }

    const compressed = await compressImageJpg(file);
    const fileName = `testimonials/${Date.now()}.jpg`;

    const { error: uploadError } = await supabase.storage.from("media").upload(fileName, compressed, { contentType: "image/jpeg" });

    if (uploadError) return { success: false, message: uploadError.message };

    const { data: urlData } = supabase.storage.from("media").getPublicUrl(fileName);
    photoUrl = urlData.publicUrl;
  }

  const { error } = await supabase.from("testimonials").insert({
    name,
    location,
    text,
    photo: photoUrl,
  });

  if (error) return { success: false, message: error.message };

  revalidatePath("/admin/testimonials");
  return { success: true };
}

//  DELETE — hapus Data dari tabel dan storage

export async function deleteTestimonial(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));

  const { data: oldData } = await supabase.from("testimonials").select("photo").eq("id", id).single();

  await supabase.from("testimonials").delete().eq("id", id);

  if (oldData?.photo) {
    const path = oldData.photo.split("/media/")[1];
    if (path) {
      await supabase.storage.from("media").remove([path]);
    }
  }

  revalidatePath("/admin/testimonials");
}
