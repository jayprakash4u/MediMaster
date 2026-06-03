"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Zap, Users } from "lucide-react";

export default function FeatureHighlight() {
  const features = [
    { icon: CheckCircle2, text: "Enterprise-grade security" },
    { icon: Shield, text: "HIPAA compliant" },
    { icon: Zap, text: "Real-time integrations" },
    { icon: Users, text: "Multi-user access" },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
                <span className="text-sm font-semibold text-teal-700">
                  Why Choose MediMaster
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Built for Modern{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-navy-600">
                  Healthcare
                </span>{" "}
                Providers
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Experience an integrated hospital management system that
                combines cutting-edge technology with healthcare expertise to
                streamline every aspect of your operations.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((Feature, index) => {
                const Icon = Feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-navy-100 group-hover:from-teal-200 group-hover:to-navy-200 transition-colors">
                      <Icon
                        className="text-teal-600 group-hover:text-teal-700"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-lg font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                      {Feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-1 transition-all duration-300">
                Schedule Demo Today
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-teal-500/10 to-navy-500/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/managment feature.png"
                alt="Management Features"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-navy-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-500 rounded-full opacity-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
