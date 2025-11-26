"use client";

import { useState, useTransition } from "react";
import ConfirmDeleteModal from "@/app/admin/(panel)/components/ConfirmDeleteModal";
import SuccessDeleteModal from "@/app/admin/(panel)/components/SuccessDeleteModal";
import { deleteTestimonial } from "./actions";

interface Props {
  id: number;
  name: string;
}

export default function DeleteButton({ id }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const submitDelete = () => {
    const form = document.getElementById(`delete-form-${id}`) as HTMLFormElement;
    form?.requestSubmit();
  };

  return (
    <>
      <button onClick={() => setShowConfirm(true)} disabled={isPending} className="text-white rounded bg-red-500 py-1 px-2 hover:text-red-600 text-sm disabled:opacity-50">
        Hapus
      </button>

      <ConfirmDeleteModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
          startTransition(() => {
            submitDelete();
            setShowConfirm(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 1500);
          });
        }}
      />

      <SuccessDeleteModal open={showSuccess} onClose={() => setShowSuccess(false)} />

      <form id={`delete-form-${id}`} action={deleteTestimonial} className="hidden">
        <input type="hidden" name="id" value={id} />
      </form>
    </>
  );
}
