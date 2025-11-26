import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* ===== BACKGROUND BLOBS (NON-BLUR) ===== */}
      <svg className="absolute -top-24 -left-10 w-72 h-72 text-yellow-200 opacity-50 pointer-events-none -z-10" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M44.8,-72.7C59.3,-66.9,72,-53.4,74.2,-38.6C76.4,-23.7,68.1,-7.6,61.7,7.4C55.3,22.4,50.7,36.2,41.3,48.8C31.9,61.5,17.6,73.1,2,70.7C-13.6,68.2,-27.1,51.8,-39.2,38.7C-51.4,25.7,-62.2,16,-68.8,2.1C-75.4,-11.7,-77.8,-29.8,-69.6,-41.5C-61.5,-53.1,-42.8,-58.4,-26.4,-64.5C-10.1,-70.6,4,-77.6,18.2,-79.4C32.4,-81.2,46.7,-77.7,44.8,-72.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg className="absolute top-1/3 -right-16 w-72 h-72 text-red-300 opacity-40 pointer-events-none -z-10" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M41.1,-69.1C52.9,-60.7,60.3,-46.8,67.1,-32C73.8,-17.2,80,-1.6,79.5,14.2C79,30,71.8,46,60.4,57.4C49.1,68.8,33.7,75.6,18.6,78C3.6,80.3,-11.2,78.2,-24.5,72.4C-37.8,66.6,-49.6,57.2,-57.1,45.3C-64.6,33.4,-67.8,19,-69.5,3.7C-71.2,-11.7,-71.5,-27.9,-65,-41.1C-58.4,-54.4,-44.9,-64.6,-30.5,-71C-16,-77.4,-8,-80,-0.2,-79.7C7.6,-79.4,15.3,-76,41.1,-69.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg className="absolute bottom-0 left-1/4 w-64 h-64 text-yellow-300 opacity-40 pointer-events-none -z-10" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M39.4,-63.6C53.4,-56.7,67.2,-47.5,74.9,-34.9C82.6,-22.2,84.2,-6.2,81.9,9.2C79.6,24.7,73.5,39.6,63.4,51.6C53.3,63.5,39.2,72.6,25.2,76.8C11.2,81.1,-2.7,80.5,-15.6,75.5C-28.6,70.5,-40.6,61.2,-51.1,50.2C-61.6,39.3,-70.7,26.6,-72.7,12.4C-74.7,-1.7,-69.7,-17.5,-61.2,-29.5C-52.8,-41.5,-40.8,-49.7,-28.7,-58.3C-16.6,-66.9,-8.3,-75.9,3.7,-82C15.8,-88.1,31.6,-91,39.4,-63.6Z"
          transform="translate(100 100)"
        />
      </svg>
      {/* ===== END BLOBS ===== */}
      <div className="border-gray-200 border-2 mt-15 max-w-4xl mx-auto" />

      <h2 className="text-3xl font-bold text-center text-blue-900 pt-20">Informasi Kontak</h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* === CARD 1 === */}
        <div className="group border border-gray-100 hover:bg-red-400 rounded-xl p-8 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:z-20">
          <MapPin className="text-gray-900 mb-3 transition-colors group-hover:text-white" />
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-white">Alamat</h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed transition-colors group-hover:text-white">Jl. Raya Takttakan Perum Pondok Takttakan Indah Blok BE No.14–15, Drangong, Kota Serang, Banten 42162</p>
        </div>

        {/* === CARD 2 === */}
        <div className="group border border-gray-100 hover:bg-red-400 rounded-xl p-8 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:z-20">
          <Phone className="text-gray-900 mb-3 transition-colors group-hover:text-white" />
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-white">Telepon / WhatsApp</h3>
          <p className="mt-3 text-gray-600 text-sm transition-colors group-hover:text-white">
            08777 4276 111 <br />
            0812 8888 3657
          </p>
        </div>

        {/* === CARD 3 === */}
        <div className="group border border-gray-100 hover:bg-red-400 rounded-xl p-8 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:z-20">
          <Mail className="text-gray-900 mb-3 transition-colors group-hover:text-white" />
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-white">Email</h3>
          <p className="mt-3 text-gray-600 text-sm transition-colors group-hover:text-white">admin@nsp-international.com</p>
        </div>

        {/* === CARD 4 === */}
        <div className="group border border-gray-100 hover:bg-red-400 rounded-xl p-8 relative sm:col-span-2 lg:col-span-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:z-20">
          <Clock className="text-gray-900 mb-3 transition-colors group-hover:text-white" />
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-white">Jam Operasional</h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed transition-colors group-hover:text-white">
            Senin–Jumat: 08.00–17.00 <br />
            Sabtu: 08.00–14.00 <br />
            Minggu & Libur Nasional: Tutup
          </p>
        </div>
      </div>
    </div>
  );
}
