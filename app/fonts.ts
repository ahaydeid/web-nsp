import { Fredoka, Poppins, Geist, Geist_Mono } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const geistSans = Geist({
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
});
