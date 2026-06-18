"use client";

import Image from "next/image";

const features = [
  {
    title: "A Partner You Can Trust",
    body: "MediMaster isn't just a software provider – we're your reliable partner in managing your medical practice. Our local support team understands the unique challenges of healthcare industry and is here to help every step of the way.",
  },
  {
    title: "Top-Tier Security",
    body: "Your data is our priority. MediMaster complies with healthcare regulations and is ISO27001, ensuring patient data remains secure and confidential at all times.",
  },
  {
    title: "Affordable Pricing for Every Practice",
    body: "We offer flexible pricing plans designed to suit practices of all sizes. Start with what you need, and scale as your practice grows.",
  },
];

export default function WhyGoodX() {
  return (
    <section className="bg-[#f0f2f5] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ── LEFT: Image ── */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src="/home/whygoodximg.jpg"
              alt="Why GoodX - MediMaster"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* ── RIGHT: Copy ── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Medical Practices Love <span className="text-teal-600">MediMaster</span>
          </h2>

          <ul className="flex flex-col gap-7 m-0 p-0 list-none">
            {features.map((f) => (
              <li key={f.title} className="flex flex-col gap-1.5">
                <h3 className="text-teal-600 font-semibold text-lg leading-snug">{f.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{f.body}</p>
              </li>
            ))}
          </ul>

          <div>
            {/* Change: Added w-full sm:w-auto and text-center for perfect mobile button layout */}
            <a
              href="#demo"
              className="inline-block bg-[#1e4e8c] hover:bg-[#163d70] active:bg-[#0f2d56] text-white text-sm font-bold tracking-widest uppercase px-8 py-4 rounded transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
