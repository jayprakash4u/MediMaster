"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  FileText,
  Package,
  Pill,
  CreditCard,
  Building2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Calendar,
    title: "OPD & Appointments",
    description:
      "Smart scheduling with doctor availability, patient queue management, and automated reminders.",
    color: "#14B8A6",
  },
  {
    icon: FileText,
    title: "Electronic Health Records",
    description:
      "Complete digital patient records with prescription history, lab results, and treatment plans.",
    color: "#06B6D4",
  },
  {
    icon: Package,
    title: "Pharmacy & Inventory",
    description:
      "Real-time stock tracking, expiry alerts, automated reordering, and supplier management.",
    color: "#3B66E2",
  },
  {
    icon: Pill,
    title: "Pathology & Lab",
    description:
      "Sample tracking, test automation, report generation, and equipment integration.",
    color: "#06B6D4",
  },
  {
    icon: CreditCard,
    title: "Billing & Insurance",
    description:
      "Automated invoicing, claim processing, payment plans, and financial reporting.",
    color: "#14B8A6",
  },
  {
    icon: Building2,
    title: "Multi-Branch Ops",
    description:
      "Centralized management across locations with role-based access control.",
    color: "#3B66E2",
  },
];

const stats = [
  { value: "200+", label: "Features & Modules", icon: Zap },
  { value: "50+", label: "Hospital Deployments", icon: Building2 },
  { value: "99.9%", label: "System Uptime", icon: ShieldCheck },
  { value: "24/7", label: "Support Available", icon: Clock },
];

function FeatureCard({ icon: Icon, title, description, color, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: color }}
      />

      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}15`, color: color }}
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>

      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(90deg, ${color}, transparent)`,
          width: "0%",
          groupHover: { width: "100%" },
        }}
      />
    </div>
  );
}

export default function HMSFeaturesGrid() {
  const sectionRef = useRef(null);

  return (
    <div className="bg-white">
      {/* Features Grid Section */}
      <section className="py-20 md:py-28 px-6" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
              <span className="text-sm font-semibold text-teal-700">
                Core Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Comprehensive Hospital Management{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                All-in-One
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Six core modules designed to streamline every aspect of hospital
              operations, from patient care to finance management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full mx-auto mb-6 bg-gradient-to-br from-teal-50 to-blue-50 group-hover:from-teal-100 group-hover:to-blue-100 transition-colors">
                    <StatIcon
                      className="text-teal-600 group-hover:text-blue-600 transition-colors"
                      size={32}
                    />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Hospital Operations?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join 50+ hospitals already using MediMaster to streamline
            operations, reduce costs, and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Request Live Demo
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-bold rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
