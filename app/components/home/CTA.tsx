// app/components/home/CTA.tsx
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="daftar" aria-labelledby="cta-heading" className="py-16 bg-linear-to-b from-blue-50 to-blue-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr,1.4fr] lg:items-start">
          {/* Left — CTA Text */}
          <div>
            <h2 id="cta-heading" className="text-3xl border-t pt-10 border-gray-200 font-semibold text-gray-900 leading-snug sm:text-4xl">
              Siap Jadi Bagian Dari <span className="underline decoration-wavy decoration-red-400">25.000+ Alumni NSP</span>?
            </h2>

            <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-lg">
              Bergabunglah dengan NSP – New Smart People. Kami menyediakan pembelajaran bahasa Inggris dan komputer yang ramah, menyenangkan, dan dipandu instruktur berpengalaman untuk membantu Anda berkembang.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link href="/kontak" className="inline-flex items-center gap-2 rounded bg-white px-8 py-3 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gray-700 transition">
                <MapPin size={18} strokeWidth={2} />
                Lihat Alamat
              </Link>

              <Link href="https://wa.me/6281288883657" className="inline-flex items-center gap-2 rounded-full bg-green-400 border text-white border-gray-200 px-7 py-3 text-sm font-semibold hover:bg-green-500 transition">
                <Phone size={18} strokeWidth={2} />
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Right — Contact Card */}
          <div className="rounded border border-gray-200 bg-gray-50 p-6 hover:shadow">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Kontak & Alamat NSP</h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">Jl. Raya Takttakan Perum Pondok Takttakan Indah Blok BE No.14–15, Drangong, Kota Serang, Banten 42162</p>

            <dl className="mt-4 space-y-3 text-sm text-gray-800">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="min-w-14 opacity-70">Telp</dt>
                <dd>
                  <a href="tel:087774276111" className="hover:underline">
                    08777 4276 111
                  </a>{" "}
                  /{" "}
                  <a href="tel:081288883657" className="hover:underline">
                    0812 8888 3657
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
