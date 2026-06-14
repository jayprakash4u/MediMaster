"use client";

import Link from "next/link";
import WorkNepalOrbit from "@/components/pages/work-nepal/WorkNepalOrbit";

export default function WorkNepalHero() {
  WorkNepalHero.propTypes = {};
  return (
    <section className="relative bg-navy-950 py-16 md:py-20 overflow-visible">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 1) 100%), url('/home/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <span className="inline-block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Job Marketplace
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Find Your Next <span className="text-teal-400">Dream Job</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
            Nepal&apos;s trusted job platform connecting top employers with talented professionals.
            Explore verified listings and advance your career.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://worknp.com/"
              className="inline-block px-8 py-4 bg-transparent border border-slate-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Browse Jobs
            </Link>
          </div>
        </div>

        {/* Work Nepal Orbit Visualization */}
        <div className="relative h-[320px] md:h-[340px] w-full flex justify-center items-center -mt-4">
          <div className="w-full max-w-[340px] h-full">
            <WorkNepalOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
