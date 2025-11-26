import { createClient } from "@/utils/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const userEmail = data.user?.email ?? "Admin";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
      <p className="text-gray-600 mb-6">
        Selamat datang, <span className="font-semibold">{userEmail}</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <DashboardCard title="Testimoni" href="/admin/testimonials" />
        <DashboardCard title="Program" href="/admin/programs" />
        <DashboardCard title="Galeri" href="/admin/gallery" />
      </div>
    </div>
  );
}

function DashboardCard({ title, href }: { title: string; href: string }) {
  return (
    <a href={href} className="bg-white p-6 rounded-xl hover:shadow-sm transition block">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">Kelola data {title.toLowerCase()}.</p>
    </a>
  );
}
