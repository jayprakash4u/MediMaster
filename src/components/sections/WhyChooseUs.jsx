"use client";

import Image from "next/image";
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Users,
  Layers,
  Activity,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Care Teams",
    description:
      "Built for hospitals with workflows designed by healthcare operations experts.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric Operations",
    description:
      "Streamlines patient care from registration to discharge with clinical precision.",
  },
  {
    icon: Users,
    title: "Transparent Pricing",
    description:
      "Clear billing, insurance claims, and finance workflows for every department.",
  },
  {
    icon: Layers,
    title: "Modular Hospital Tools",
    description:
      "Flexible modules for OPD, pharmacy, lab, inventory, billing, and admin teams.",
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    description:
      "Live operational dashboards and customized reporting for hospital management.",
  },
  {
    icon: Clock,
    title: "24/7 Support & Security",
    description:
      "Data encryption and round-the-clock technical monitoring to keep your systems online.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-teal-50/40 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight text-left">
            Why to Choose Our System
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT SIDE: Image */}
          <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden">
            <Image
              src="/why to choose.jpg"
              alt="Why to choose our system"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT SIDE: 6 Points with Arrows (No Boxes) */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 group">
                  {/* Arrow Point Icon */}
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-teal-600 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Content Block */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors duration-200" />
                      <h3 className="text-base font-bold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
