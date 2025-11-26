"use client";

import { useActionState, useEffect, useState, useEffectEvent } from "react";
import SuccessEditModal from "@/app/admin/(panel)/components/SuccessEditModal";
import { useRouter } from "next/navigation";

interface ActionState {
  success: boolean;
  message?: string;
}

interface Props {
  children: React.ReactNode;
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
}

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function EditWrapper({ children, action }: Props) {
  const [state, dispatch] = useActionState(action, initialState);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSuccess = useEffectEvent(() => {
    setShowModal(true);
    const t = setTimeout(() => router.push("/admin/testimonials"), 1200);
    return () => clearTimeout(t);
  });

  useEffect(() => {
    if (state.success) handleSuccess();
  }, [state.success]);

  return (
    <>
      <SuccessEditModal open={showModal} onClose={() => router.push("/admin/testimonials")} />

      <form action={dispatch} className="space-y-6">
        {state.message && <p className="text-red-500 text-sm">{state.message}</p>}
        {children}
      </form>
    </>
  );
}
