"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { HEADING } from "@/lib/typography";

const CONTACTS = [
  {
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    label: "Location",
    value: " Kathmandu, Nepal",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "+977 98-76543210",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "hel***@servicesplus.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section-shell bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          align="left"
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Have a project in mind? Let's discuss how we can help you achieve your goals."
          className="mb-12 max-w-xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {CONTACTS.map((c) => (
              <div
                key={c.label}
                className="card-surface flex items-start gap-4 p-4 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-deepNavy-50 text-deepNavy-600">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={c.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-0.5 text-slate-500">
                    {c.label}
                  </p>
                  <p className="text-sm text-slate-700">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="card-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-slate-500">
                Working Hours
              </p>
              <div className="space-y-1 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Sun – Fri</span>
                  <span className="font-medium">7:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-teal-600 font-semibold">
                  <span>Emergency</span>
                  <span className="font-bold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          <form
            className="card-surface p-7"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            <h3 className={`${HEADING.h4} mb-5 text-deepNavy-800`}>Send a Message</h3>
            <div className="space-y-4">
              {[
                { label: "Full Name", type: "text", k: "name", ph: "Your full name" },
                { label: "Phone", type: "tel", k: "phone", ph: "+977 …" },
                { label: "Email", type: "email", k: "email", ph: "you***@email.com" },
              ].map((f) => (
                <div key={f.k}>
                  <label className="block text-xs font-semibold mb-1.5 text-slate-700">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.k]}
                    onChange={set(f.k)}
                    className="input-field"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={set("message")}
                  className="input-field resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full py-3">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
