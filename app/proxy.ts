import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();

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

  // Biarkan halaman login lewat
  if (path.startsWith("/admin/login")) return response;

  // Autentikasi untuk semua halaman admin kecuali login
  if (path.startsWith("/admin")) {
    const { data } = await supabase.auth.getUser();

    // Tidak ada user -> redirect ke login
    if (!data.user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}
