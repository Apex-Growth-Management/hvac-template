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
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get a Free Quote</h1>
            <p className="text-gray-500 text-lg">
              Fill out the form and we&apos;ll get back to you within a few hours.
            </p>
          </div>

          {/* Emergency banner */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8 text-center">
            <p className="text-red-700 font-semibold">HVAC Emergency? Call us now: <span className="text-gray-900">(555) 000-0000</span></p>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Request Received!</h2>
              <p className="text-gray-500">We&apos;ll get back to you within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">First Name</label>
                  <input
                    name="firstName" value={form.firstName} onChange={handleChange} required
                    type="text" placeholder="John"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Last Name</label>
                  <input
                    name="lastName" value={form.lastName} onChange={handleChange} required
                    type="text" placeholder="Smith"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Email</label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required
                    type="email" placeholder="john@example.com"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    type="tel" placeholder="(555) 000-0000"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Service Needed</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="Heating Repair">Heating Repair</option>
                  <option value="Heating Installation">Heating Installation</option>
                  <option value="Maintenance Plan">Maintenance Plan</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Describe the Issue</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={5} placeholder="Tell us what's going on with your system..."
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
              )}

              <button
                type="submit" disabled={status === "sending"}
                className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-lg transition-colors mt-2"
              >
                {status === "sending" ? "Sending..." : "Request a Quote"}
              </button>
            </form>
          )}

          <p className="text-center text-gray-400 text-sm mt-8">
            Or email us at{" "}
            <a href="mailto:info@arcticairhvac.com" className="text-red-600 hover:text-red-500 transition-colors">
              info@arcticairhvac.com
            </a>
          </p>
        </div>
      </section>
      <footer className="border-t border-gray-200 py-10 px-6 bg-white">
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
