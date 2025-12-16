import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Playfair_Display, Rye } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["700", "900"],
//   variable: "--font-playfair",
// });

// const rye = Rye({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-rye",
// });

export const metadata: Metadata = {
  title: "Portfolio - Harish",
  description: "Portfolio built with Next.js & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
