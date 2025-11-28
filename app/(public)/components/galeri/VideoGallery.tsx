"use client";

import { fredoka } from "@/app/fonts";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface VideoItem {
  id: number;
  src: string;
  alt: string | null;
  caption: string | null;
}

function toEmbed(url: string): string {
  try {
    const u = new URL(url);

    // youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/watch?v=VIDEO_ID
    if (u.searchParams.get("v")) {
      const id = u.searchParams.get("v")!;
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/shorts/VIDEO_ID
    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/")[2];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url; // already embed or unsupported format
  } catch {
    return url;
  }
}

export default function VideoGallery() {
  const supabase = createClient();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("gallery").select("id, src, alt, caption").eq("type", "video").order("id");

      if (data) setVideos(data);
      setLoading(false);
    }

    load();
  }, [supabase]);

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
          {/* Loading skeleton */}
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="w-full h-56 rounded-2xl bg-slate-200" />
                <div className="h-4 w-40 bg-slate-200 rounded" />
                <div className="h-4 w-60 bg-slate-200 rounded" />
              </div>
            ))}

          {!loading &&
            videos.map((video) => (
              <article key={video.id} className="space-y-3">
                <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                  <div className="relative w-full pt-[56.25%]">
                    <iframe
                      src={toEmbed(video.src)}
                      title={video.alt ?? "Video"}
                      className="absolute inset-0 h-full w-full rounded-2xl"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div>
                  <h3 className={`${fredoka.className} text-base sm:text-lg font-semibold text-slate-900`}>{video.alt ?? "Video"}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{video.caption}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
