"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

// GGG Icons GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
const HospitalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);
const PathologyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);
const PharmacyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// GGG Data GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
const BILLING_TERMS = ["Monthly", "3 Months", "6 Months", "12 Months"];

const PACKAGES = [
  {
    id: "hospital",
    label: "Hospital Package",
    labelStyle: "bg-navy-500/10 text-navy-400 border border-navy-500/20",
    icon: <HospitalIcon />,
    title: "Complete control over your hospital operations.",
    description:
      "A full suite of hospital management modules covering every department G from admissions and billing to finance, inventory and campaigns.",
    stats: [
      { value: "12+", label: "Modules" },
      { value: "4", label: "Billing terms" },
      { value: "GP", label: "Users" },
    ],
    features: [
      "Dashboard & operations control",
      "Billing, patient, client and report management",
      "Store, finance, account and system workflows",
      "Campaign & PDF editor support",
    ],
    billingLabel: "Flexible billing terms",
    sideNote: {
      heading: "Why hospital teams choose this",
      body: "Centralised workflows mean every department G OPD, IPD, pharmacy, lab, and finance G operates from a single connected system with real-time visibility.",
    },
    reverse: false,
  },
  {
    id: "pathology",
    label: "Pathology Package",
    labelStyle: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
    icon: <PathologyIcon />,
    title: "End-to-end lab automation and reporting.",
    description:
      "Purpose-built for diagnostic labs G from sample collection and test tracking through to outsourcing, analysis and controlled report printing.",
    stats: [
      { value: "8+", label: "Lab modules" },
      { value: "3", label: "Print tiers" },
      { value: "500", label: "Max reports/mo" },
    ],
    features: [
      "Pathology dashboard & sample collection",
      "Investigation, test-wise invoices and to-do workflows",
      "Lab setup, outsourcing and analysis reports",
      "Print quota management for patient reports",
    ],
    billingLabel: "Subscription windows",
    printPackages: [
      { tier: "Basic", details: "Up to 100 patient reports / month" },
      { tier: "Standard", details: "Up to 250 patient reports / month" },
      { tier: "Premium", details: "Up to 500 patient reports / month" },
    ],
    reverse: true,
  },
  {
    id: "pharmacy",
    label: "Pharmacy Package",
    labelStyle: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
    icon: <PharmacyIcon />,
    title: "Inventory and stock control built for pharmacy.",
    description:
      "From purchase orders and supplier management to real-time stock analysis G complete visibility across every product, category and department.",
    stats: [
      { value: "6+", label: "Modules" },
      { value: "4", label: "Billing terms" },
      { value: "GP", label: "Products" },
    ],
    features: [
      "Store dashboard, stock issue and purchase flows",
      "Product setup, category, supplier, department and unit control",
      "Stock summary, issue and purchase reporting",
      "Centralized inventory visibility and reorder control",
    ],
    billingLabel: "Choose your term",
    sideNote: {
      heading: "Why pharmacy teams choose this",
      body: "Track every product from purchase to dispensing with automated reorder alerts, supplier ledgers, and department-wise stock allocation G all in one dashboard.",
    },
    reverse: false,
  },
];

// GGG Sub-components GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-center">
      <span className="text-2xl font-black text-teal-400 leading-none">{value}</span>
      <span className="text-xxs text-slate-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

StatBadge.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function BillingTermsCard({ label }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <p className="text-xxs font-bold uppercase tracking-[0.2em] text-teal-400/80 mb-3">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {BILLING_TERMS.map((term) => (
          <div
            key={term}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-center text-xs font-medium text-slate-300"
          >
            {term}
          </div>
        ))}
      </div>
    </div>
  );
}

BillingTermsCard.propTypes = {
  label: PropTypes.string.isRequired,
};

function PrintPackagesCard({ packages }) {
  return (
    <div className="bg-teal-950/30 border border-teal-500/15 rounded-2xl p-5">
      <p className="text-xxs font-bold uppercase tracking-[0.2em] text-teal-400/80 mb-3">
        Report Printing Packages
      </p>
      <div className="flex flex-col gap-2">
        {packages.map((pkg) => (
          <div
            key={pkg.tier}
            className="flex items-center justify-between bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-3"
          >
            <div>
              <p className="text-xs font-bold text-white">{pkg.tier}</p>
              <p className="text-xxs text-slate-500 mt-0.5">{pkg.details}</p>
            </div>
            <span className="text-xxs font-bold uppercase tracking-wider bg-teal-900/60 text-teal-400 border border-teal-700/30 rounded px-2 py-0.5">
              Quota
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

PrintPackagesCard.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

function SideNote({ heading, body }) {
  return (
    <div className="bg-slate-950 border border-slate-800/60 rounded-2xl p-5">
      <p className="text-xxs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">{heading}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
    </div>
  );
}

SideNote.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

// GGG Package Row GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function PackageRow({ plan }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%" },
      }
    );
  }, []);

  const left = (
    <div className="flex flex-col justify-center">
      <span
        className={`inline-flex items-center gap-2 text-xxs font-bold uppercase tracking-[0.15em] rounded-lg px-3 py-1.5 mb-6 w-fit ${plan.labelStyle}`}
      >
        {plan.icon}
        {plan.label}
      </span>

      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
        {plan.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>

      <div className="grid grid-cols-3 gap-3 mb-7">
        {plan.stats.map((s) => (
          <StatBadge key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <ul className="flex flex-col gap-3 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold rounded-xl px-6 py-3 transition-colors duration-200">
          Get {plan.id.charAt(0).toUpperCase() + plan.id.slice(1)} plan
        </button>
        <button className="text-sm text-slate-500 hover:text-slate-300 underline underline-offset-4 transition-colors duration-200">
          View full features
        </button>
      </div>
    </div>
  );

  const right = (
    <div className="flex flex-col gap-4">
      <BillingTermsCard label={plan.billingLabel} />
      {plan.printPackages && <PrintPackagesCard packages={plan.printPackages} />}
      {plan.sideNote && <SideNote heading={plan.sideNote.heading} body={plan.sideNote.body} />}
    </div>
  );

  return (
    <div ref={rowRef} className="py-16 md:py-20 border-b border-slate-900 last:border-b-0">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${plan.reverse ? "lg:[direction:rtl]" : ""}`}
      >
        <div className={plan.reverse ? "lg:[direction:ltr]" : ""}>{left}</div>
        <div className={plan.reverse ? "lg:[direction:ltr]" : ""}>{right}</div>
      </div>
    </div>
  );
}

PackageRow.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelStyle: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    billingLabel: PropTypes.string.isRequired,
    printPackages: PropTypes.arrayOf(PropTypes.shape({})),
    sideNote: PropTypes.shape({
      heading: PropTypes.string,
      body: PropTypes.string,
    }),
    reverse: PropTypes.bool.isRequired,
  }).isRequired,
};

// GGG Main Export GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
export default function PackageSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          headerRef={headerRef}
          theme="dark"
          eyebrow="Package Plans"
          title="Choose the"
          highlight="MediMaster"
          description="Modular access by subscription term for hospital, pathology and pharmacy operations — monthly, quarterly, semi-annual, and annual."
          className="pt-20 pb-8"
        >
          Choose the <span className="text-teal-400">MediMaster</span> package built for your team.
        </SectionHeader>

        <div className="flex items-center justify-center gap-2 pb-14 flex-wrap">
          {PACKAGES.map((p) => (
            <a
              key={p.id}
              href={`#pkg-${p.id}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 rounded-full px-4 py-2 transition-all duration-200"
            >
              {p.icon}
              {p.label}
            </a>
          ))}
        </div>

        <div className="h-px bg-slate-900" />

        {/* Package rows */}
        {PACKAGES.map((plan) => (
          <div key={plan.id} id={`pkg-${plan.id}`}>
            <PackageRow plan={plan} />
          </div>
        ))}
      </div>
    </section>
  );
}
