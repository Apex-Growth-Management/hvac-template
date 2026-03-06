import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Snowflake, Flame, Wrench, AlertCircle, Shield, BadgeCheck, Clock, ThumbsUp, Star, Phone } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Arctic Air HVAC | Heating & Cooling Experts",
  description: "Professional heating, cooling, and HVAC services. Available 24/7 for emergency repairs. Serving the local area with fast, reliable service.",
  openGraph: {
    title: "Arctic Air HVAC | Heating & Cooling Experts",
    description: "Fast, reliable HVAC service 24/7. Licensed technicians, upfront pricing, same-day availability.",
  },
};

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

const trust = [
  { Icon: Shield, label: "Licensed & Insured" },
  { Icon: BadgeCheck, label: "NATE Certified" },
  { Icon: Clock, label: "Same-Day Service" },
  { Icon: ThumbsUp, label: "Upfront Pricing" },
];

const howItWorks = [
  { step: "01", title: "Call or Request Online", desc: "Reach out by phone or fill out our quick quote form. We'll confirm availability and get you scheduled." },
  { step: "02", title: "We Diagnose the Issue", desc: "A licensed technician arrives on time, assesses your system, and explains the problem clearly before any work begins." },
  { step: "03", title: "Transparent Quote", desc: "We give you a flat, upfront price — no hidden fees. You approve it before we pick up a single tool." },
  { step: "04", title: "Fast, Clean Repair", desc: "We fix the problem right the first time and leave your space cleaner than we found it. Guaranteed." },
];

const testimonials = [
  {
    name: "Mike D.",
    text: "AC went out on the hottest day of the year. Arctic Air was at my door within two hours. Incredibly professional and the price was fair. Will never call anyone else.",
    stars: 5,
  },
  {
    name: "Tanya R.",
    text: "Signed up for their maintenance plan last year and my energy bill dropped noticeably. The techs are always on time and take the time to explain what they're doing.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Honest, fast, and reasonably priced. They found the issue in under 20 minutes and had it fixed within the hour. Highly recommend.",
    stars: 5,
  },
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
        <Image
          src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=1920&q=80&fit=crop"
          alt="HVAC technician at work"
          fill
          className="object-cover object-center"
          priority
        />
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
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badge strip */}
      <section className="bg-red-600 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
          {trust.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white text-sm font-semibold">
              <Icon className="w-4 h-4 text-red-200" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s: { value: string; label: string }, i: number) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">From installs to emergency repairs — we handle it all.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc: { title: string; description: string }, i: number) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <FadeIn key={svc.title} delay={(i % 4) * 100}>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-red-300 hover:bg-red-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                See all services →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">From first call to finished job — here&apos;s what to expect.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 100}>
                <div className="relative">
                  <div className="text-6xl font-extrabold text-red-100 mb-4 leading-none">{step}</div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567974497852-36e8cd46d34e?w=1920&q=80&fit=crop"
          alt="HVAC unit"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <FadeIn>
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose {companyName}?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { title: "Licensed & Insured", desc: "All our technicians are fully licensed, certified, and insured for your peace of mind." },
              { title: "Upfront Pricing", desc: "No hidden fees. We give you a clear price before any work begins." },
              { title: "Fast Response", desc: "Most calls are answered same day. Emergencies get priority response." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80&fit=crop"
                alt="HVAC repair work"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div>
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Technicians.<br />
                <span className="text-red-600">Real Results.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every technician on our team is NATE-certified, background checked, and trained to handle any HVAC system on the market. When we show up, we fix it right the first time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&apos;ve been serving this community for over 15 years and we plan to be here for 15 more.
              </p>
              <Link
                href="/about"
                className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
              >
                Learn More About Us →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Reviews</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">What Customers Say</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((r, i) => (
              <FadeIn key={r.name} delay={i * 120}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.stars }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-white/40 text-sm font-semibold">— {r.name}</p>
                </div>
              </FadeIn>
            ))}
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
        <FadeIn>
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need HVAC service<br />
              <span className="text-red-500">right now?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              We&apos;re available 24/7 for emergency repairs. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30"
              >
                <Phone className="w-5 h-5" /> {phone}
              </a>
              <Link
                href="/contact"
                className="inline-block border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-gray-200 py-10 px-6 bg-white pb-24 md:pb-10">
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
