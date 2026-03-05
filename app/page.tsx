import Link from "next/link";

const services = [
  {
    icon: "❄️",
    title: "AC Installation",
    description: "New system installs done right the first time. We size and install units for maximum efficiency.",
  },
  {
    icon: "🔥",
    title: "Heating Repair",
    description: "Furnace or heat pump not working? We diagnose and fix all makes and models fast.",
  },
  {
    icon: "🔧",
    title: "Maintenance Plans",
    description: "Regular tune-ups keep your system running longer and your energy bills lower.",
  },
  {
    icon: "🚨",
    title: "24/7 Emergency",
    description: "HVAC emergencies don't wait. Neither do we. Call anytime, day or night.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,000+", label: "Jobs Completed" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="inline-block bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            24/7 Emergency Service Available
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-6 max-w-3xl">
            Heating &<br />Cooling<br />
            <span className="text-red-500">You Can Count On.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10">
            Arctic Air HVAC provides fast, reliable heating and cooling services for homes and businesses. Licensed, insured, and available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-red-500 mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              From installs to emergency repairs — we handle it all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 hover:bg-red-600/5 transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-red-400 hover:text-red-300 font-medium transition-colors">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Arctic Air?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { title: "Licensed & Insured", desc: "All our technicians are fully licensed, certified, and insured for your peace of mind." },
              { title: "Upfront Pricing", desc: "No hidden fees. We give you a clear price before any work begins." },
              { title: "Fast Response", desc: "Most calls are answered same day. Emergencies get priority response." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need HVAC service<br />
            <span className="text-red-500">right now?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            We're available 24/7 for emergency repairs. Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Arctic Air HVAC. All rights reserved.
      </footer>
    </main>
  );
}
