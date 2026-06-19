"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { BODY, HEADING, TEXT_COLOR } from "@/lib/typography";

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

export default function WhyMediMaster() {
  return (
    <section className="bg-gray-100 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="w-full flex-shrink-0 lg:w-1/2">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/home/whygoodximg.jpg"
              alt="Why Choose MediMaster"
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <h2 className={`${HEADING.display} ${TEXT_COLOR.primary}`}>
            Why Medical Practices Love <span className={TEXT_COLOR.teal}>MediMaster</span>
          </h2>

          <ul className="m-0 flex list-none flex-col gap-7 p-0">
            {features.map((f) => (
              <li key={f.title} className="flex flex-col gap-1.5">
                <h3 className={`text-lg font-semibold leading-snug ${TEXT_COLOR.teal}`}>
                  {f.title}
                </h3>
                <p className={`${BODY.base} ${TEXT_COLOR.muted}`}>{f.body}</p>
              </li>
            ))}
          </ul>

          <div>
            <Button
              href="#demo"
              variant="secondary"
              className="w-full uppercase tracking-widest sm:w-auto"
            >
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
