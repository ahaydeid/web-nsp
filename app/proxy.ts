import { type NextRequest, NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get: (name: string) => {
        return request.cookies.get(name)?.value;
      },
      set: (name: string, value: string, options: CookieOptions) => {
        response.cookies.set({
          name,
          value,
          ...options,
        });
      },
      remove: (name: string, options: CookieOptions) => {
        response.cookies.set({
          name,
          value: "",
          ...options,
        });
      },
    },
  });
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (isAdminRoute && !isLoginPage) {
    const { data } = await supabase.auth.getUser();

    // jika tidak ada user
    if (!data.user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}
