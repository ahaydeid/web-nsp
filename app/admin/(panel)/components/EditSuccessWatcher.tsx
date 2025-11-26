"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SuccessEditModal from "@/app/admin/(panel)/components/SuccessEditModal";

export default function EditSuccessWatcher() {
  const { pending } = useFormStatus();
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!pending && show) {
      const t = setTimeout(() => router.push("/admin/testimonials"), 1200);
      return () => clearTimeout(t);
    }
  }, [pending, show, router]);

  return (
    <>
      <SuccessEditModal open={!pending && show} onClose={() => router.push("/admin/testimonials")} />
      <button type="submit" onClick={() => setShow(true)} className="hidden"></button>
    </>
  );
}
