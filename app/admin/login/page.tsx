"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-6 text-center">Login Admin</h1>

        {errorMsg && <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" className="w-full border rounded px-3 py-2 mt-1" required placeholder="admin@example.com" />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium">Password</label>
          <input name="password" type="password" className="w-full border rounded px-3 py-2 mt-1" required placeholder="••••••••" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          {loading ? "Memproses..." : "Login"}
        </button>
      </form>
    </main>
  );
}
