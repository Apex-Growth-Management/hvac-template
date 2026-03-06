import Link from "next/link";
import Image from "next/image";
import { Snowflake, Flame, Wrench, AlertCircle } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";

const serviceIcons = [Snowflake, Flame, Wrench, AlertCircle];

const defaultServices = [
  { title: "AC Installation", description: "New system installs done right the first time. We size and install units for maximum efficiency." },
  { title: "Heating Repair", description: "Furnace or heat pump not working? We diagnose and fix all makes and models fast." },
  { title: "Maintenance Plans", description: "Regular tune-ups keep your system running longer and your energy bills lower." },
  { title: "24/7 Emergency", description: "HVAC emergencies don't wait. Neither do we. Call anytime, day or night." },
];

const defaultStats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,000+", label: "Jobs Completed" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default async function Home() {
  const [{ data: settings }, { data: sanityServices }, { data: sanityStats }] = await Promise.all([
    sanityFetch({ query: `*[_type == "siteSettings" && _id == "siteSettings"][0]` }),
    sanityFetch({ query: `*[_type == "service"] | order(order asc)` }),
    sanityFetch({ query: `*[_type == "stat"] | order(order asc)` }),
  ]);

  const companyName = settings?.companyName || "Arctic Air HVAC";
  const badge = settings?.badgeText || "24/7 Emergency Service Available";
  const heroTitle = settings?.heroTitle || "Heating & Cooling";
  const heroSubtitle = settings?.heroSubtitle || "Arctic Air HVAC provides fast, reliable heating and cooling services for homes and businesses. Licensed, insured, and available around the clock.";
  const phone = settings?.phone || "(555) 000-0000";
  const address = settings?.address || "Your City, ST 00000";

  const services = sanityServices?.length ? sanityServices : defaultServices;
  const stats = sanityStats?.length ? sanityStats : defaultStats;

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80&fit=crop" alt="HVAC technician at work" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="inline-block bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            {badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-6 max-w-3xl text-white">
            {heroTitle}<br />
            <span className="text-red-500">You Can Count On.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get a Free Quote</Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s: { value: string; label: string }) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From installs to emergency repairs — we handle it all.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc: { title: string; description: string }, i: number) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div key={svc.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-red-300 hover:bg-red-50 transition-all">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-red-600 hover:text-red-500 font-medium transition-colors">See all services →</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop" alt="HVAC unit" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose {companyName}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { title: "Licensed & Insured", desc: "All our technicians are fully licensed, certified, and insured for your peace of mind." },
              { title: "Upfront Pricing", desc: "No hidden fees. We give you a clear price before any work begins." },
              { title: "Fast Response", desc: "Most calls are answered same day. Emergencies get priority response." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop" alt="HVAC repair work" fill className="object-cover" />
          </div>
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Local Technicians.<br /><span className="text-red-600">Real Results.</span></h2>
            <p className="text-gray-600 leading-relaxed mb-4">Every technician on our team is NATE-certified, background checked, and trained to handle any HVAC system on the market. When we show up, we fix it right the first time.</p>
            <p className="text-gray-600 leading-relaxed mb-8">We&apos;ve been serving this community for over 15 years and we plan to be here for 15 more.</p>
            <Link href="/about" className="text-red-600 hover:text-red-500 font-medium transition-colors">Learn more about us →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80&fit=crop" alt="Thermostat" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need HVAC service<br /><span className="text-red-500">right now?</span></h2>
          <p className="text-white/60 text-lg mb-10">We&apos;re available 24/7 for emergency repairs. Get a free quote today.</p>
          <Link href="/contact" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors">Contact Us</Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <p className="font-bold text-lg"><span className="text-red-600">{companyName}</span></p>
            <p className="text-gray-400 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-gray-600 transition-colors">{phone}</a>
            <span className="hidden sm:inline text-gray-200">·</span>
            <span>{address}</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
