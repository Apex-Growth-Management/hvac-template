"use client";

import { Phone, AlertCircle } from "lucide-react";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-gray-200 bg-white shadow-lg">
      <a
        href="tel:5550000000"
        className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 text-sm transition-colors"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 text-sm transition-colors"
      >
        <AlertCircle className="w-4 h-4" /> Get a Quote
      </a>
    </div>
  );
}
