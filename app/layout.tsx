import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-manrope" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "Diko Auto Repair | Auto Repair & Smog Check in San Diego's Midway District | (619) 220-0007",
  description:
    "Honest auto repair and state-certified smog checks at 4009 Hicock St, San Diego. Engine, electrical, brakes, diagnostics and import repair from owner-mechanic Diko. Open Saturdays. 4.8 stars from 69 Google reviews. Call (619) 220-0007.",
  openGraph: {
    title: "Diko Auto Repair | Smog Check & Auto Repair in San Diego",
    description: "Owner-mechanic Diko: honest diagnosis, fair prices, Saturday hours. Call (619) 220-0007.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${manrope.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
