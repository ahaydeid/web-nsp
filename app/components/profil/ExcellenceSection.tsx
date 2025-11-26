"use client";

import { fredoka } from "@/app/fonts";
import { Award, Globe, Users, Star, Building2, Clock, Briefcase, Coins, BookOpen, Sun, CalendarCheck, Sparkles, ShieldCheck, RefreshCw, MapPin, Timer, GraduationCap } from "lucide-react";

export default function ExcellenceSection() {
  const items = [
    { title: "Terakreditasi A", desc: "Mutu pendidikan yang telah diakui secara resmi.", icon: <Award className="w-7 h-7" /> },
    { title: "Sertifikat Nasional & Internasional", desc: "Diakui perusahaan dan institusi pendidikan.", icon: <Globe className="w-7 h-7" /> },
    { title: "Pengajar Profesional", desc: "Berpengalaman dan kompeten di bidangnya.", icon: <Users className="w-7 h-7" /> },
    { title: "Lembaga Berprestasi", desc: "Penghargaan IAF (2017).", icon: <Star className="w-7 h-7" /> },

    { title: "Fasilitas Lengkap", desc: "Full AC, WiFi, kursi stainless, ruang nyaman.", icon: <Building2 className="w-7 h-7" /> },
    { title: "Layanan PR 1×24 Jam", desc: "Koreksi tugas via WhatsApp.", icon: <Clock className="w-7 h-7" /> },
    { title: "Alumni Mudah Diterima Kerja", desc: "Banyak diterima di industri.", icon: <Briefcase className="w-7 h-7" /> },
    { title: "Biaya Terjangkau", desc: "Harga ekonomis, kualitas terjaga.", icon: <Coins className="w-7 h-7" /> },

    { title: "Jago Bahasa Inggris", desc: "Fokus speaking & confidence.", icon: <BookOpen className="w-7 h-7" /> },
    { title: "Holiday / Vacation Class", desc: "Outdoor fun learning.", icon: <Sun className="w-7 h-7" /> },
    { title: "Jadwal Fleksibel", desc: "Pagi, siang, sore, malam.", icon: <CalendarCheck className="w-7 h-7" /> },
    { title: "Metode Inovatif", desc: "Smart Digi, ESQ, Hypnotherapy.", icon: <Sparkles className="w-7 h-7" /> },

    { title: "Garansi Lulus", desc: "Uang kembali 100% jika gagal.", icon: <ShieldCheck className="w-7 h-7" /> },
    { title: "Garansi Mengulang", desc: "Boleh mengulang gratis.", icon: <RefreshCw className="w-7 h-7" /> },
    { title: "Lokasi Strategis", desc: "Mudah dijangkau dari mana saja.", icon: <MapPin className="w-7 h-7" /> },
    { title: "Jam Kerja Fleksibel", desc: "Tersedia untuk peserta & pengajar.", icon: <Timer className="w-7 h-7" /> },

    { title: "Alumni Menyebar Luas", desc: "25.000+ alumni di seluruh Indonesia.", icon: <GraduationCap className="w-7 h-7" /> },
  ];

  const blobs = [
    "M44.4,-63.6C58,-56.6,70.1,-46.1,77.1,-32.8C84,-19.6,85.9,-3.7,81.4,10.1C76.8,23.9,65.8,35.6,54.4,48.5C43,61.3,31.3,75.3,15.4,80.9C-0.4,86.4,-20.6,83.6,-36.6,74.8C-52.6,65.9,-64.4,51,-71.1,34.7C-77.8,18.4,-79.4,0.7,-74.1,-15.1C-68.8,-30.9,-56.6,-44.8,-43.1,-52.4C-29.7,-59.9,-14.8,-61,-0.2,-60.7C14.3,-60.3,28.5,-58.7,44.4,-63.6Z",
    "M42,-67.2C53.4,-60.5,61.7,-50.7,67.9,-39.7C74.1,-28.7,78.2,-16.4,79.2,-3.5C80.2,9.4,78.1,23,71.7,35.1C65.3,47.3,54.7,58.2,41.7,63.2C28.7,68.3,14.3,67.6,-0.9,69C-16.1,70.4,-32.3,73.8,-45.5,68.8C-58.7,63.7,-68.9,50.2,-74,36.1C-79.1,22,-79,7.4,-76.4,-5.6C-73.7,-18.6,-68.4,-30,-60.7,-38.4C-53,-46.8,-43,-52.3,-32.4,-60C-21.7,-67.8,-10.9,-77.9,0.3,-78.4C11.4,-78.9,22.9,-69.7,42,-67.2Z",
    "M39,-66.7C52.4,-60.4,65.6,-53.1,74,-41.8C82.4,-30.5,86,-15.3,84.4,-0.4C82.7,14.6,75.7,29.2,66.3,41.1C56.9,52.9,45.1,62.1,31.7,69.4C18.3,76.7,3.3,82.1,-10,82.5C-23.3,82.9,-35.9,78.2,-46.7,69.7C-57.5,61.2,-66.4,48.9,-70.7,35.2C-75,21.5,-74.7,6.3,-71.5,-7.6C-68.3,-21.4,-62.2,-33.8,-53.3,-44.1C-44.4,-54.3,-32.7,-62.3,-20.1,-69C-7.5,-75.7,6,-81,19.7,-80.3C33.4,-79.5,47.3,-72.9,39,-66.7Z",
  ];

  return (
    <div className="relative w-full py-24 px-[5%] mx-auto max-w-7xl text-slate-800 overflow-visible">
      <h2 className={`${fredoka.className} block text-center text-4xl sm:text-5xl font-semibold text-red-500`}>Mengapa Memilih NSP?</h2>

      <p className="mt-4 text-slate-700 text-center max-w-4xl mx-auto">NSP hadir dengan kualitas terbaik, fasilitas lengkap, pengajar profesional, serta berbagai keunggulan.</p>

      {/* GRID */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.title} className="relative p-4 flex items-start gap-4 overflow-visible">
            {/* Blob background item */}
            <svg className="absolute inset-0 w-full h-full text-yellow-200 opacity-60 -z-10" viewBox="0 0 200 200">
              <path fill="currentColor" d={blobs[i % blobs.length]} transform="translate(100 100)" />
            </svg>

            {item.icon}

            <div>
              <h3 className={`${fredoka.className} text-lg font-semibold`}>{item.title}</h3>
              <p className="text-slate-800 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
