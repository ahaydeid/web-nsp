export default function MapEmbed() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Blob */}
      <svg className="absolute -top-10 -left-10 w-56 h-56 text-yellow-200 opacity-40 pointer-events-none" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M44.8,-72.7C59.3,-66.9,72,-53.4,74.2,-38.6C76.4,-23.7,68.1,-7.6,61.7,7.4C55.3,22.4,50.7,36.2,41.3,48.8C31.9,61.5,17.6,73.1,2,70.7C-13.6,68.2,-27.1,51.8,-39.2,38.7C-51.4,25.7,-62.2,16,-68.8,2.1C-75.4,-11.7,-77.8,-29.8,-69.6,-41.5C-61.5,-53.1,-42.8,-58.4,-26.4,-64.5C-10.1,-70.6,4,-77.6,18.2,-79.4C32.4,-81.2,46.7,-77.7,44.8,-72.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <h2 className="text-3xl font-bold text-center text-gray-900">Lokasi NSP International</h2>

      <div className="mt-8 shadow rounded-lg overflow-hidden relative z-10">
        <iframe src="https://www.google.com/maps?q=-6.106782,106.124673&z=16&output=embed" className="w-full h-120 border-0" loading="lazy"></iframe>
      </div>
    </div>
  );
}
