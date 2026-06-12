"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    label: "EMR / EHR",
    badge: "Reduce documentation time by up to 40%",
    heading: "Electronic Medical & Health Records",
    description:
      "Customizable digital case sheets tailored for every specialty. Doctors instantly access complete patient history, digital prescriptions, lab/radiology results, clinical notes, and full visit timeline — all from any device. Built-in drug interaction alerts, searchable drug dictionary, and seamless integration with pharmacy, lab, and billing for faster, error-free clinical documentation in your HMS.",
    points: [
      "Specialty-wise customizable EMR templates",
      "Digital prescriptions with real-time drug interaction & allergy alerts",
      "Integrated lab results, radiology reports & complete patient timeline",
      "Cloud-based access from any device",
    ],
    cta: { label: "Explore EMR Features", href: "/features/emr" },
  },
  {
    label: "Appointments",
    badge: "Reduce no-shows by up to 35%",
    heading: "Smart Appointment Scheduling",
    description:
      "Allow patients to book, reschedule, or cancel appointments online 24/7. Doctors and staff get real-time calendar views, automated reminders, and waitlist management — eliminating scheduling conflicts and reducing administrative overhead.",
    points: [
      "Online & walk-in appointment booking",
      "Automated SMS & email reminders",
      "Doctor-wise availability & slot management",
      "Integrated with billing and EMR on confirmation",
    ],
    cta: { label: "Explore Appointment Features", href: "/features/appointments" },
  },
  {
    label: "Billing",
    badge: "Faster billing, fewer errors",
    heading: "Integrated Billing & Payments",
    description:
      "Generate accurate invoices, manage insurance claims, and process payments seamlessly. Every transaction is linked to the patient record, eliminating double entry and ensuring complete financial transparency across departments.",
    points: [
      "Auto-populated bills from EMR & pharmacy",
      "Insurance & TPA claim management",
      "Detailed financial reports & audit trails",
      "Multiple payment modes including online",
    ],
    cta: { label: "Explore Billing Features", href: "/features/billing" },
  },
  {
    label: "Pharmacy",
    badge: "Zero stock-outs, zero wastage",
    heading: "Pharmacy Management System",
    description:
      "Keep track of every medicine prescribed and dispensed. Manage inventory levels, set reorder points, and generate purchase orders automatically. Full integration with EMR ensures prescriptions flow directly to the pharmacy counter.",
    points: [
      "Direct prescription intake from EMR",
      "Real-time stock tracking & expiry alerts",
      "Automated reorder & purchase order generation",
      "Detailed dispensing history per patient",
    ],
    cta: { label: "Explore Pharmacy Features", href: "/features/pharmacy" },
  },
  {
    label: "LIMS / Lab",
    badge: "Faster results, fewer delays",
    heading: "Laboratory Information Management",
    description:
      "Manage test orders, sample collection, processing, and result delivery in one place. Lab reports are instantly available to doctors and patients, reducing turnaround time and eliminating paper-based errors.",
    points: [
      "Barcode-based sample tracking",
      "Auto result delivery to EMR & patient portal",
      "Configurable test panels & reference ranges",
      "Integrated billing on test order",
    ],
    cta: { label: "Explore Lab Features", href: "/features/lab" },
  },
  {
    label: "Telemedicine",
    badge: "Care from anywhere",
    heading: "Telemedicine & Virtual Consultations",
    description:
      "Enable doctors to consult with patients remotely via secure video calls. Digital prescriptions, notes, and follow-up scheduling happen within the same platform — no third-party apps needed.",
    points: [
      "HD video consultations with in-app chat",
      "Digital prescriptions post-consultation",
      "Integrated payment & appointment flow",
      "Complete consultation history in EMR",
    ],
    cta: { label: "Explore Telemedicine Features", href: "/features/telemedicine" },
  },
  {
    label: "IVR Booking",
    badge: "24/7 automated booking",
    heading: "IVR-Based Appointment Booking",
    description:
      "Patients can book appointments via a simple phone call without needing internet access or a smartphone. The IVR system captures patient details, preferred doctor, and time slot automatically.",
    points: [
      "Automated voice-guided booking flow",
      "Multi-language IVR support",
      "Instant confirmation SMS after booking",
      "Synced directly with appointment calendar",
    ],
    cta: { label: "Explore IVR Features", href: "/features/ivr" },
  },
  {
    label: "Inventory",
    badge: "Full control over hospital supplies",
    heading: "Hospital Inventory Management",
    description:
      "Track every asset, consumable, and supply across departments in real time. Set minimum stock levels, generate purchase requests, and maintain audit-ready records of all inventory movements.",
    points: [
      "Department-wise stock tracking",
      "Low stock alerts & auto purchase requests",
      "Vendor management & GRN processing",
      "Complete item-level audit trail",
    ],
    cta: { label: "Explore Inventory Features", href: "/features/inventory" },
  },
];

export default function PlatformFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 10" className="w-8 h-3" fill="none">
              <path d="M0 5h20" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="5" r="2" fill="#0D9488" />
            </svg>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            Platform Features
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-[1.12] text-slate-900 text-center"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Everything Your Hospital Needs —{" "}
          <span className="text-teal-700">In One Platform</span>
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Every module is connected. Data flows automatically between appointments,
          EMR, billing, pharmacy and labs — no manual re-entry, no data silos.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === i
                  ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — image placeholder */}
          <div className="rounded-2xl bg-white border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[420px]">
            <div className="text-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm font-medium">Image goes here</p>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex flex-col gap-5">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {active.badge}
            </span>

            {/* Heading */}
            <h3
              className="text-3xl font-bold text-gray-900 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {active.heading}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed text-justify">
              {active.description}
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mt-1">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l4.5 4.5 9-9" />
                    </svg>
                  </span>
                  <span className="text-base text-gray-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-2">
              <Link
                href={active.cta.href}
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l4 4-4 4M8 12h8"/>
                </svg>
                {active.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
