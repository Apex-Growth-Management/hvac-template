import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description: "Arctic Air HVAC has served the community for 15+ years. Licensed, NATE-certified, and committed to honest HVAC service at a fair price.",
  openGraph: {
    title: "About Arctic Air HVAC",
    description: "Locally owned and operated for 15+ years. NATE-certified technicians committed to honest service and real results.",
  },
};

const values = [
  {
    title: "Honest Pricing",
    description: "We give you a clear quote before any work starts. No surprises on the final bill.",
  },
  {
    title: "Certified Technicians",
    description: "Every tech on our team is licensed, NATE-certified, and background checked.",
  },
  {
    title: "Fast Response",
    description: "We know HVAC problems can't wait. We aim to be at your door same day.",
  },
  {
    title: "Guaranteed Work",
    description: "We stand behind everything we do. If something isn't right, we'll fix it.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112c4e4c50?w=1920&q=80&fit=crop"
          alt="HVAC technician"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/75" />
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              About <span className="text-red-500">Arctic Air</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              We&apos;ve been keeping homes and businesses comfortable for over 15 years. Locally owned, locally operated — we treat every customer like a neighbor.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">Our Story</h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                <p>
                  Arctic Air HVAC was founded with a simple mission: provide honest, reliable HVAC service at a fair price. No upsells, no scare tactics — just quality work done right.
                </p>
                <p>
                  We started as a two-man operation and have grown into a full team of certified technicians serving hundreds of customers across the area. But we&apos;ve never lost the small-business values that got us here.
                </p>
                <p>
                  When you call Arctic Air, you get a real person, a real technician at your door, and real results.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80&fit=crop"
                alt="Technician working"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="border border-gray-200 bg-white rounded-2xl p-6 hover:border-red-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width photo quote */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567974497852-36e8cd46d34e?w=1920&q=80&fit=crop"
          alt="HVAC equipment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
          <FadeIn>
            <p className="text-2xl md:text-4xl font-extrabold text-center max-w-xl px-6 text-white">
              &ldquo;Fix it right. <span className="text-red-500">Fix it once.</span>&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
          <p className="text-gray-500 mb-8">Get a free quote today — no obligation.</p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
          >
            Get a Free Quote
          </Link>
        </FadeIn>
      </section>

      <footer className="border-t border-gray-200 py-10 px-6 bg-white pb-24 md:pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <p className="font-bold text-lg"><span className="text-red-600">Arctic Air</span><span className="text-gray-900"> HVAC</span></p>
            <p className="text-gray-400 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
            <a href="tel:5550000000" className="hover:text-gray-600 transition-colors">(555) 000-0000</a>
            <span className="hidden sm:inline text-gray-200">·</span>
            <span>Your City, ST 00000</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="/services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="/about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="/contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
