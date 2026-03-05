import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
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
      <body className={`${geist.variable} antialiased bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
