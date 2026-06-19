import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HospitalSoftwareSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-[65%] aspect-[3/4] rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <Image src="/hospital/hms-doctor-2.jpg" alt="Back" fill className="object-cover" />
          </div>

          <div className="absolute bottom-0 right-4 w-[68%] aspect-[1/1] rounded-2xl border border-slate-200 shadow-xl overflow-hidden z-10">
            <Image src="/hospital/hms-doctor-1.jpg" alt="Front" fill className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-teal-500"></span>
            <span className="text-xs font-semibold tracking-wider text-teal-600">
              The most complete hospital software
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
            The only software you&apos;ll ever need to run your hospital
          </h2>

          <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed max-w-xl">
            Hospital Management Software allows you to control all the organizational aspects of a
            hospital practice: whether it is OPD, IPD, appointments, pharmacy, laboratory, bed
            management, portals for doctors, patients and staff, electronic medical billing,
            accounting, HR and Payroll.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-none transition-colors duration-200">
              Discover All Features
            </button>
            <Link
              href="#hms-trial"
              className="inline-block border border-[#1e1e1e] hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-none transition-colors duration-200"
            >
              Try For Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
