"use client";

import { fredoka } from "@/app/fonts";

interface VideoItem {
  title: string;
  caption: string;
  src: string;
}

const videos: VideoItem[] = [
  {
    title: "Testimoni Alumni",
    caption: "Cerita langsung dari alumni NSP tentang pengalaman belajar.",
    src: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Cuplikan Kegiatan Belajar",
    caption: "Suasana kelas dan kegiatan pembelajaran di NSP.",
    src: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Event & Seminar NSP",
    caption: "Dokumentasi seminar dan workshop yang diselenggarakan NSP.",
    src: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    title: "Program Unggulan NSP",
    caption: "Highlight berbagai program unggulan yang ada di NSP.",
    src: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

export default function VideoGallery() {
  return (
    <section id="video" className="bg-white py-20 px-4" aria-labelledby="video-heading">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="video-heading" className={`${fredoka.className} text-2xl sm:text-3xl font-bold text-slate-900`}>
            Galeri Video / Testimoni YouTube
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Beberapa testimoni alumni, cuplikan kegiatan belajar, dan dokumentasi event NSP dalam bentuk video.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <article key={video.title} className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="absolute inset-0 h-full w-full rounded-2xl"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <h3 className={`${fredoka.className} text-base sm:text-lg font-semibold text-slate-900`}>{video.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600">{video.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
