import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Supabase SSR auth
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get: (name) => request.cookies.get(name)?.value,
      set: (name, value, options) => {
        response.cookies.set({ name, value, ...options });
      },
      remove: (name, options) => {
        response.cookies.set({ name, value: "", ...options });
      },
    },
  });

  const path = request.nextUrl.pathname;

  // Izinkan halaman login
  if (path === "/admin/login" || path.startsWith("/admin/login/")) {
    return response;
  }

  // PROTECT ADMIN PANEL
  // Semua path yang berada dalam admin/(panel) ada di URL sebagai /admin/*
  // jadi kita cukup cek: jika path dimulai /admin dan bukan login
  if (path.startsWith("/admin")) {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}
