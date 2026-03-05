import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "❄️",
    title: "AC Installation & Replacement",
    description: "Whether you're building new or replacing an old unit, we install all major brands with precision. We'll help you choose the right size and efficiency rating for your home or business.",
    features: ["All major brands", "Proper load sizing", "Warranty included", "Same-week installs"],
  },
  {
    icon: "🔥",
    title: "Heating Repair & Installation",
    description: "Furnaces, heat pumps, boilers — we service them all. When your heat goes out, we respond fast to get your home warm again.",
    features: ["Furnace repair", "Heat pump service", "Boiler repair", "Emergency response"],
  },
  {
    icon: "🌡️",
    title: "AC Repair",
    description: "Is your AC not cooling? Making strange noises? We diagnose and fix all AC problems quickly, so you're not stuck in the heat.",
    features: ["All makes & models", "Refrigerant recharge", "Electrical diagnosis", "Same-day service"],
  },
  {
    icon: "🔧",
    title: "Maintenance Plans",
    description: "Regular maintenance keeps your system running efficiently, extends its lifespan, and helps you avoid costly emergency repairs. Our plans cover spring and fall tune-ups.",
    features: ["Spring AC tune-up", "Fall heating tune-up", "Filter replacement", "Priority scheduling"],
  },
  {
    icon: "💨",
    title: "Indoor Air Quality",
    description: "Breathe cleaner air at home. We install air purifiers, humidifiers, dehumidifiers, and UV light systems to improve the air quality inside your home.",
    features: ["Air purifiers", "Humidifiers", "UV light systems", "Duct cleaning"],
  },
  {
    icon: "🚨",
    title: "24/7 Emergency Service",
    description: "HVAC emergencies happen at the worst times. We're available around the clock, every day of the year — including weekends and holidays.",
    features: ["Available 24/7", "Fast response", "No after-hours upcharge", "All emergencies"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      {/* Hero banner */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop"
          alt="HVAC service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">Our Services</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Complete heating and cooling solutions for homes and businesses.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 hover:border-red-500/40 transition-colors"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">{s.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="bg-red-600/20 border border-red-500/30 text-red-300 text-sm px-3 py-1 rounded-full"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4">Ready to schedule service?</h3>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Arctic Air HVAC. All rights reserved.
      </footer>
    </main>
  );
}
