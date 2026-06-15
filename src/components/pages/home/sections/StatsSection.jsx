"use client";
import { useEffect, useRef, useState } from "react";
import {
  HospitalIcon,
  PatientsIcon,
  PharmacyIcon,
  LabTestIcon,
  DentalIcon,
  UptimeIcon,
} from "./stats-icons";

const stats = [
  { Icon: HospitalIcon, value: 248, suffix: "+", label: "Hospitals Onboarded", accent: "blue" },
  { Icon: PatientsIcon, value: 94200, suffix: "+", label: "Patients Managed", accent: "green" },
  { Icon: PharmacyIcon, value: 512, suffix: "+", label: "Pharmacy Units", accent: "teal" },
  { Icon: LabTestIcon, value: 38700, suffix: "+", label: "Lab Tests Processed", accent: "amber" },
  { Icon: DentalIcon, value: 126, suffix: "+", label: "Dental Clinics", accent: "blue" },
  { Icon: UptimeIcon, value: 99.7, suffix: "%", label: "System Uptime", accent: "green" },
];

function StatItem({ Icon, value, suffix, label, accent, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }
    let startTime = null;
    const isDecimal = !Number.isInteger(value);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * value;
      setCount(isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, started]);

  const display = !Number.isInteger(value) ? count.toFixed(1) : count.toLocaleString();

  const accentMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    teal: "text-teal-400",
    amber: "text-amber-400",
  };

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Icon className="w-16 h-16" />
      <p className="text-xl md:text-2xl font-bold text-white">
        {display}
        <span className={accentMap[accent] || "text-teal-400"}>{suffix}</span>
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-gray-900 py-12 md:py-16 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
