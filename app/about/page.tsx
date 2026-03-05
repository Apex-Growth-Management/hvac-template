import Link from "next/link";

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
    <main className="bg-black text-white pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-red-500">Arctic Air</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We've been keeping homes and businesses comfortable for over 15 years. Locally owned, locally operated — we treat every customer like a neighbor.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-400">Our Story</h2>
          <div className="text-white/60 leading-relaxed space-y-4 text-lg">
            <p>
              Arctic Air HVAC was founded with a simple mission: provide honest, reliable HVAC service at a fair price. No upsells, no scare tactics — just quality work done right.
            </p>
            <p>
              We started as a two-man operation and have grown into a full team of certified technicians serving hundreds of customers across the area. But we've never lost the small-business values that got us here.
            </p>
            <p>
              When you call Arctic Air, you get a real person, a real technician at your door, and real results.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-red-500/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-red-400 mb-2">{v.title}</h3>
                <p className="text-white/50 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
        <p className="text-white/50 mb-8">Get a free quote today — no obligation.</p>
        <Link
          href="/contact"
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Get a Free Quote
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Arctic Air HVAC. All rights reserved.
      </footer>
    </main>
  );
}
