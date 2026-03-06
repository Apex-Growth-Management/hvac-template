import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SanityLive } from "@/sanity/lib/live";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arctic Air HVAC | Heating & Cooling Experts",
  description: "Professional heating, cooling, and HVAC services. Available 24/7 for emergency repairs. Serving the local area with fast, reliable service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${oswald.variable} antialiased bg-black text-white`}>
        <Navbar />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
