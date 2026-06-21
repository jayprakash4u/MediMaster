"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_CHANNELS, CONTACT_STATS, WORKING_HOURS } from "@/config/sections/contact";

const CHANNEL_ICONS = {
  email: Mail,
  phone: Phone,
  office: MapPin,
};

function ContactInfo() {
  return (
    <div className="space-y-6">
      {CONTACT_CHANNELS.map((channel) => {
        const Icon = CHANNEL_ICONS[channel.id];

        return (
          <div key={channel.id}>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/15 bg-teal-500/10 text-teal-600">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{channel.title}</h3>
            </div>
            <ul className="space-y-2 pl-11">
              {channel.links.map((link) => (
                <li key={link.label}>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    {link.label}
                  </p>
                  {link.href.startsWith("#") ? (
                    <p className="text-sm font-semibold text-slate-800">{link.value}</p>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600"
                    >
                      {link.value}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600">
            <Clock className="h-4 w-4" strokeWidth={2} />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Working hours</h3>
        </div>
        <ul className="space-y-2 pl-11">
          {WORKING_HOURS.map((row) => (
            <li key={row.days} className="flex items-center justify-between gap-4 text-sm">
              <span className={row.highlight ? "font-semibold text-teal-700" : "text-slate-600"}>
                {row.days}
              </span>
              <span
                className={row.highlight ? "font-bold text-teal-700" : "font-medium text-slate-900"}
              >
                {row.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <section id="contact-form" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Get in Touch"
          title="Send us a"
          highlight="message"
          description="Share your requirements and our team will get back to you within one business day."
          className="mb-8 max-w-2xl"
        />

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-slate-200 py-5">
          {CONTACT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />

          <form
            className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            <h3 className="text-lg font-bold text-slate-900">Contact form</h3>
            <p className="mt-1 text-sm text-slate-600">
              Fill in your details and we will respond shortly.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+977 …"
                  value={form.phone}
                  onChange={set("phone")}
                  className="input-field"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={set("email")}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={set("message")}
                  className="input-field resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
