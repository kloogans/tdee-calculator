import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const seo = {
  title: "What's My TDEE? | Calculate Your Total Daily Energy Expenditure",
  description:
    "Discover your Total Daily Energy Expenditure (TDEE) with our advanced calculator. Calculate your TDEE, ideal weight, and more with What's My TDEE?",
  url: "https://whatsmytdee.com",
  image: "https://bulkbuddy.s3.amazonaws.com/WMTDEE-seo-image.jpg",
};

export const metadata: Metadata = {
  title: "What's My TDEE? | Calculate Your Total Daily Energy Expenditure",

  openGraph: {
    title: seo.title,
    description: seo.description,
    siteName: seo.title,
    url: seo.url,
    locale: "en_US",
    images: seo.image,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: "@kloogans",
    images: [seo.image],
  },
  metadataBase: new URL(seo.url),
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col items-center justify-between md:px-2 bg-gradient-to-b from-indigo-600 to-indigo-500 overflow-x-hidden">
          <NavBar />
          {children}
          <Footer />

          <svg
            className=" absolute w-[200%] h-full top-0 left-0 z-[0] mix-blend-multiply"
            viewBox="0 0 250 250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="3.59"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect width="5000%" height="4000%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        <Analytics debug={false} />
      </body>
    </html>
  );
}
