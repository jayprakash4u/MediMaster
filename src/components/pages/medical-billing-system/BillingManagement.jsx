"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Automated claim generation and TPA reconciliation workflows",
  "GST-compliant invoicing with integrated hospital accounting",
  "Real-time revenue analytics, aging reports and collections",
  "Multi-channel billing — cash, insurance, credit, installments and online payments",
];

export default function BillingManagement() {
  return (
    <section className="section-shell w-full bg-white font-sans">
      <div className="product-intro-grid">
        <div className="lg:col-span-6 space-y-4 max-w-xl sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Revenue Cycle Management
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
            Smarter billing, claims <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-600">
              &amp; collections
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Automate invoicing, insurance claims, GST compliance, and revenue analytics with
            intelligent billing workflows built for modern healthcare operations.
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

          <div className="pt-6 flex gap-3">
            <Link
              href="#billing-trial"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 group transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET STARTED NOW</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </Link>
            <Link
              href="/contact?product=medical-billing-system"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 border border-teal-700 rounded-full px-5 py-2 hover:bg-teal-50 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center w-full pb-6 sm:pb-0">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-teal-400/10 to-navy-400/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-full max-w-full sm:max-w-[540px] aspect-[4/3] rounded-2xl border border-slate-200 sm:border-2 lg:border-4 lg:border-slate-100/80 bg-slate-50 shadow-2xl overflow-hidden group">
            <Image
              src="/products/medicalbilling.png"
              alt="MediMaster Medical Billing System Interface"
              width={840}
              height={600}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>

          <div
            className="relative mx-auto mt-4 max-w-[220px] sm:absolute sm:-bottom-6 sm:-left-4 sm:mx-0 sm:mt-0 md:-left-8 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-4 max-w-[220px] animate-bounce"
            style={{ animationDuration: "5s" }}
          >
            <div className="w-12 h-12 bg-emerald-50 text-teal-600 rounded-xl flex items-center justify-center font-black text-lg shadow-inner shrink-0">
              30%
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider leading-tight">
                Faster Claims
              </h4>
              <p className="text-xxs text-slate-400 font-medium mt-1 leading-tight">
                Reduced rejection & faster reimbursements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
