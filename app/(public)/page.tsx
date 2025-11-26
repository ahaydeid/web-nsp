"use client";

import Hero from "./components/home/Hero";
import ShortProfile from "./components/home/ShortProfile";
import Programs from "./components/home/Programs";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-pink-50 via-white to-purple-50 text-slate-900">
      <Hero />
      <div suppressHydrationWarning>
        <ShortProfile />
      </div>
      <Programs />
      <Testimonials />
      <CTA />
    </main>
  );
}
