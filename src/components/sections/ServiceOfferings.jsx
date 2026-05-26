"use client";
import Link from "next/link";
import Image from "next/image";
import { CloudHmsIcon, BrowserIcon, LabIcon, MobileIcon, InvoiceIcon, BranchIcon, ReportIcon, ClientIcon, AnalyticsIcon, SmsIcon } from "./hmsIcons";

const servicePoints = [
  {
    icon: "cloud",
    title: "Cloud-based HMS",
    description: "Simple yet comprehensive — no server setup needed.",
  },
  {
    icon: "browser",
    title: "Browser-only access",
    description: "Zero installation. Works from any browser instantly.",
  },
  {
    icon: "flask",
    title: "Multi-lab & pharmacy",
    description: "Built for pathology, radiology, and independent pharmacies.",
  },
  {
    icon: "mobile",
    title: "Android & iOS apps",
    description: "Native apps for phones, tablets, and iPads.",
  },
  {
    icon: "printer",
    title: "Custom invoicing",
    description: "Print reports & invoices with your own branding.",
  },
  {
    icon: "building",
    title: "Multi-branch management",
    description: "Manage all branches remotely from anywhere in the world.",
  },
  {
    icon: "file",
    title: "Patient reports",
    description: "Detailed prescriptions with customizable printing options.",
  },
  {
    icon: "users",
    title: "Client relations",
    description: "Simplified interactions that boost customer satisfaction.",
  },
  {
    icon: "chart",
    title: "Business analytics",
    description: "Track staff performance, trends, and forecasts on-demand.",
  },
  {
    icon: "sms",
    title: "Automated SMS",
    description: "Auto-communication at every step of the healthcare process.",
  },
];

const icons = {
  cloud: <CloudHmsIcon />,
  browser: <BrowserIcon />,
  flask: <LabIcon />,
  mobile: <MobileIcon />,
  printer: <InvoiceIcon />,
  building: <BranchIcon />,
  file: <ReportIcon />,
  users: <ClientIcon />,
  chart: <AnalyticsIcon />,
  sms: <SmsIcon />,
};

export default function ServiceOfferings() {
  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-300 rounded-full px-3 py-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-teal-700 text-xs font-semibold tracking-widest uppercase">
              Software products &amp; service offerings
            </span>
          </span>
          <h2 className="text-3xl font-semibold text-slate-800 leading-snug">
            Everything your facility needs,{" "}
            <span className="text-teal-500">in one platform</span>
          </h2>
          <p className="text-teal-600 font-medium text-base mt-1">MediMaster</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
{/* Left — 2-col feature grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {servicePoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-gray-200 hover:border-teal-400 rounded-lg px-3 py-2.5 transition-colors duration-150"
                >
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-md bg-teal-50 flex items-center justify-center">
                    {icons[pt.icon]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 leading-tight">
                      {pt.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/learn-more"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-150 shadow-sm"
              >
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="text-sm text-teal-600 font-medium underline underline-offset-4 hover:text-teal-500 transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right — image placeholder card */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="h-1 w-full bg-teal-400" />

{/* Screenshot */}
               <div className="relative h-64">
                 <Image
                   src="/medimasterscreenshot.png"
                   alt="MediMaster Platform Screenshot"
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
               </div>

              <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs text-slate-500">
                    Live cloud platform
                  </span>
                </div>
                <span className="text-xs text-slate-400 bg-slate-100 rounded-full px-3 py-0.5">
                  v3.0 · 2025
                </span>
              </div>
            </div>

            {/* Info strip */}
            <div className="mt-3 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">
                  100% cloud — no installation
                </p>
                <p className="text-xs text-slate-400">
                  Any browser, any device, anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
