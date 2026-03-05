"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get a Free Quote</h1>
            <p className="text-white/50 text-lg">
              Fill out the form and we'll get back to you within a few hours.
            </p>
          </div>

          {/* Emergency banner */}
          <div className="bg-red-600/20 border border-red-500/40 rounded-2xl p-4 mb-8 text-center">
            <p className="text-red-300 font-semibold">🚨 HVAC Emergency? Call us now: <span className="text-white">(555) 000-0000</span></p>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2">Request Received!</h2>
              <p className="text-white/50">We'll get back to you within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">First Name</label>
                  <input
                    name="firstName" value={form.firstName} onChange={handleChange} required
                    type="text" placeholder="John"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Last Name</label>
                  <input
                    name="lastName" value={form.lastName} onChange={handleChange} required
                    type="text" placeholder="Smith"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Email</label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required
                    type="email" placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    type="tel" placeholder="(555) 000-0000"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Service Needed</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="" className="bg-black">Select a service</option>
                  <option value="AC Installation" className="bg-black">AC Installation</option>
                  <option value="AC Repair" className="bg-black">AC Repair</option>
                  <option value="Heating Repair" className="bg-black">Heating Repair</option>
                  <option value="Heating Installation" className="bg-black">Heating Installation</option>
                  <option value="Maintenance Plan" className="bg-black">Maintenance Plan</option>
                  <option value="Emergency Service" className="bg-black">Emergency Service</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Describe the Issue</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={5} placeholder="Tell us what's going on with your system..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
              )}

              <button
                type="submit" disabled={status === "sending"}
                className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-lg transition-colors mt-2"
              >
                {status === "sending" ? "Sending..." : "Request a Quote"}
              </button>
            </form>
          )}

          <p className="text-center text-white/30 text-sm mt-8">
            Or email us at{" "}
            <a href="mailto:info@arcticairhvac.com" className="text-red-400 hover:text-red-300 transition-colors">
              info@arcticairhvac.com
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Arctic Air HVAC. All rights reserved.
      </footer>
    </main>
  );
}
