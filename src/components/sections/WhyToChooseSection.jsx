import { Shield, Clock, CalendarDays, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Shield,
    headline: "Patient Safety",
    text: "Advanced protocols and smart alerts keep every patient record secure and error-free.",
    theme: "teal",
  },
  {
    id: 2,
    icon: Clock,
    headline: "Real-Time Access",
    text: "Instant access to patient data, appointments, and reports anytime, anywhere.",
    theme: "orange",
  },
  {
    id: 3,
    icon: CalendarDays,
    headline: "Smart Scheduling",
    text: "Automated appointment management that reduces no-shows and optimizes clinic flow.",
    theme: "blue",
  },
  {
    id: 4,
    icon: BarChart3,
    headline: "Analytics & Reports",
    text: "Powerful dashboards and insights to drive data-backed clinical decisions.",
    theme: "lime",
  },
];

const themeStyles = {
  teal: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
  orange: {
    bg: "bg-white",
    border: "border-slate-100",
    iconBg: "bg-slate-50",
    iconColor: "text-slate-700",
    line: "bg-slate-500",
    title: "text-slate-900",
    desc: "text-slate-600",
  },
  blue: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
  lime: {
    bg: "bg-white",
    border: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    line: "bg-teal-500",
    title: "text-teal-900",
    desc: "text-slate-600",
  },
};

function FeatureCard({ feature }) {
  const { icon: Icon, headline, text, theme } = feature;
  const styles = themeStyles[theme];

  return (
    <div
      className={`h-full flex flex-col gap-3 p-6 md:p-7 ${styles.bg} border ${styles.border}`}
    >
      <div
        className={`w-11 h-11 flex items-center justify-center rounded-lg ${styles.iconBg}`}
      >
        <Icon size={24} className={styles.iconColor} strokeWidth={1.5} />
      </div>
      <div className={`w-9 h-0.5 ${styles.line}`} />
      <p
        className={`text-xs font-bold tracking-widest uppercase font-sans ${styles.title}`}
      >
        {headline}
      </p>
      <p className={`text-sm leading-relaxed ${styles.desc}`}>{text}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── MOBILE LAYOUT (< md) ── */}
        <div className="flex flex-col gap-0 md:hidden">
          {/* Headline block */}
          <div className="flex flex-col items-start justify-center px-6 py-10 bg-white border border-slate-100">
            <h2 className="leading-none mb-3">
              <span className="block text-xl font-light text-gray-900 tracking-tight">
                WHY
              </span>
              <span className="block text-3xl font-black text-gray-900 tracking-tighter">
                CHOOSE
              </span>
              <span className="block text-3xl font-black text-teal-600 tracking-tighter">
                MEDIMASTER?
              </span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Every day we work hard to make healthcare management smarter,
              faster, and better for you.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src="/whlytochooseimag.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Feature cards — 2 column grid on mobile */}
          <div className="grid grid-cols-2">
            {features.map((feature) => (
              <div key={feature.id} className="border border-slate-100">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLET LAYOUT (md → lg) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-0">
          {/* Headline */}
          <div className="flex flex-col items-start justify-center px-8 py-10 bg-white border border-slate-100 col-span-2">
            <h2 className="leading-none mb-3">
              <span className="block text-2xl font-light text-gray-900 tracking-tight">
                WHY
              </span>
              <span className="block text-3xl font-black text-gray-900 tracking-tighter">
                CHOOSE
              </span>
              <span className="block text-3xl font-black text-teal-600 tracking-tighter">
                MEDIMASTER?
              </span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Every day we work hard to make healthcare management smarter,
              faster, and better for you.
            </p>
          </div>

          {/* Image full width */}
          <div className="relative col-span-2 h-64 overflow-hidden">
            <Image
              src="/whlytochooseimag.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 4 feature cards in 2-col grid */}
          {features.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* ── DESKTOP LAYOUT (≥ lg) ── */}
        <div
          className="hidden lg:grid grid-cols-4"
          style={{ gridTemplateRows: "1fr 1fr" }}
        >
          {/* Row 1, Col 1 — Patient Safety */}
          <div className="row-start-1 col-start-1">
            <FeatureCard feature={features[0]} />
          </div>

          {/* Col 2, spans both rows — Image */}
          <div className="row-start-1 row-span-2 col-start-2 relative overflow-hidden">
            <Image
              src="/whlytochooseimag.jpg"
              alt="Why Choose MediMaster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Row 1, Col 3–4 — Headline */}
          <div className="row-start-1 col-start-3 col-span-2 flex flex-col items-end justify-center px-8 py-10 bg-white">
            <h2 className="text-right leading-none mb-3">
              <span className="block text-2xl font-light text-gray-900 tracking-tight">
                WHY
              </span>
              <span className="block text-3xl font-black text-gray-900 tracking-tighter">
                CHOOSE
              </span>
              <span className="block text-3xl font-black text-teal-600 tracking-tighter">
                MEDIMASTER?
              </span>
            </h2>
            <p className="text-sm text-gray-500 text-right leading-relaxed max-w-[220px]">
              Every day we work hard to make healthcare management smarter,
              faster, and better for you.
            </p>
          </div>

          {/* Row 2, Col 1 — Real-Time Access */}
          <div className="row-start-2 col-start-1">
            <FeatureCard feature={features[1]} />
          </div>

          {/* Row 2, Col 3 — Smart Scheduling */}
          <div className="row-start-2 col-start-3">
            <FeatureCard feature={features[2]} />
          </div>

          {/* Row 2, Col 4 — Analytics */}
          <div className="row-start-2 col-start-4">
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
