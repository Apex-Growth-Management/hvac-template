import Link from "next/link";
import Image from "next/image";

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
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80&fit=crop"
          alt="HVAC technician at work"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
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

      {/* Why Us — with background photo */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop"
          alt="HVAC unit"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Arctic Air?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { title: "Licensed & Insured", desc: "All our technicians are fully licensed, certified, and insured for your peace of mind." },
              { title: "Upfront Pricing", desc: "No hidden fees. We give you a clear price before any work begins." },
              { title: "Fast Response", desc: "Most calls are answered same day. Emergencies get priority response." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technician photo section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop"
              alt="HVAC repair work"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Local Technicians.<br />
              <span className="text-red-500">Real Results.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Every technician on our team is NATE-certified, background checked, and trained to handle any HVAC system on the market. When we show up, we fix it right the first time.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              We've been serving this community for over 15 years and we plan to be here for 15 more.
            </p>
            <Link href="/about" className="text-red-400 hover:text-red-300 font-medium transition-colors">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80&fit=crop"
          alt="Thermostat"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need HVAC service<br />
            <span className="text-red-500">right now?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            We&apos;re available 24/7 for emergency repairs. Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Arctic Air HVAC. All rights reserved.
      </footer>
    </main>
  );
}
