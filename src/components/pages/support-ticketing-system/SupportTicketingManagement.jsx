"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Intelligent ticket creation, routing, and escalation workflows",
  "Multi-channel support via email, chat, WhatsApp, and phone",
  "SLA tracking with real-time alerts and performance dashboards",
  "Knowledge base and self-service portal for faster resolution",
];

export default function SupportTicketingManagement() {
  return (
    <section className="section-shell w-full bg-white font-sans">
      <div className="product-intro-grid">
        <div className="lg:col-span-6 space-y-4 max-w-xl sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Customer Service Platform
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
            Everything you need for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-600">
              Support Ticketing System
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Intelligent support ticketing with automated workflows, multi-channel inbox, SLA
            tracking, and customer satisfaction management. Manage every support interaction — from
            creation to resolution — with one unified platform.
          </p>

          <div className="pt-4 space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="mt-0.5 text-teal-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <p className="text-slate-700 font-semibold text-sm md:text-base leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="#support-trial"
              className="product-cta group hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET STARTED NOW</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center w-full pb-6 sm:pb-0">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-teal-400/10 to-navy-400/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-full max-w-full sm:max-w-[540px] aspect-[4/3] rounded-2xl border border-slate-200 sm:border-2 lg:border-4 lg:border-slate-100/80 bg-slate-50 shadow-2xl overflow-hidden group">
            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
              <Image
                src="/products/ticketing mgmnt.jpg"
                alt="Support Ticketing System"
                fill
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
