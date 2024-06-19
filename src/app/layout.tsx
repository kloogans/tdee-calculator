import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What's My TDEE? | Calculate Your Total Daily Energy Expenditure",
  description:
    "Discover your Total Daily Energy Expenditure (TDEE) with our advanced calculator. Calculate your TDEE, ideal weight, and more with What's My TDEE?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col items-center justify-between px-2 bg-gradient-to-b from-indigo-600 to-indigo-500 overflow-x-hidden">
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
      </body>
    </html>
  );
}
