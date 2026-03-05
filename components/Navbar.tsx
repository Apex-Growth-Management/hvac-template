"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-red-600">Arctic</span>
          <span className="text-gray-900"> Air HVAC</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/contact" className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full transition-colors">
            Call Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full text-center transition-colors">
            Call Now
          </Link>
        </div>
      )}
    </nav>
  );
}
