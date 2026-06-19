"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { HEADING, BODY, TEXT_COLOR } from "@/lib/typography";

const COUNTRIES = [
  { value: "NP", label: "Nepal" },
  { value: "IN", label: "India" },
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "AE", label: "United Arab Emirates" },
];

export default function TrialRequestSection({
  id,
  sectionEyebrow,
  sectionTitle,
  sectionHighlight,
  panelTitle,
  panelDescription,
  benefits = [],
  formTitle,
  formDescription,
  orgFieldName = "organizationName",
  orgFieldPlaceholder = "Organization Name*",
  submitLabel = "Get Started",
  panelVariant = "teal",
  maxWidth = "max-w-5xl",
  showSectionHeader = false,
  quoteHref = "#quote",
}) {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    [orgFieldName]: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const isNavy = panelVariant === "navy";

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-navy-950 px-4 py-16 sm:px-12 md:py-24 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-1/4 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-teal-600 to-transparent blur-3xl" />
      </div>

      <div className={cn("relative z-10 mx-auto", maxWidth)}>
        {showSectionHeader ? (
          <SectionHeader
            eyebrow={sectionEyebrow}
            title={sectionTitle}
            highlight={sectionHighlight}
            theme="dark"
            className="mb-12"
          />
        ) : null}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div
              className={cn(
                "flex flex-col justify-between p-8 text-white sm:p-10 md:col-span-5",
                isNavy ? "bg-navy-950" : "bg-gradient-to-b from-teal-600 to-teal-700"
              )}
            >
              <div>
                <h2 className={`${HEADING.h3} uppercase text-white`}>{panelTitle}</h2>
                <p
                  className={cn(
                    "mb-7 mt-5",
                    BODY.small,
                    isNavy ? "text-slate-300" : "text-teal-50/90"
                  )}
                >
                  {panelDescription}
                </p>
                <ul className="m-0 mb-8 list-none space-y-4 p-0">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-start gap-3 text-xs font-bold uppercase tracking-wider sm:text-sm",
                        isNavy ? "text-slate-100" : "text-teal-50"
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          isNavy ? "text-teal-400" : "text-teal-200"
                        )}
                        strokeWidth={3}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cn(
                  "flex flex-col items-center gap-4 border-t pt-5 sm:flex-row sm:justify-start",
                  isNavy ? "border-slate-700" : "border-teal-400/30"
                )}
              >
                <button
                  type="button"
                  className="btn-primary w-full px-5 py-3 text-xs uppercase tracking-wider sm:w-auto"
                >
                  Try For Free
                </button>
                <a
                  href={quoteHref}
                  className={cn(
                    "py-2 text-xs font-bold uppercase tracking-wider underline underline-offset-4 transition-colors",
                    isNavy ? "text-white hover:text-teal-400" : "text-white hover:text-teal-200"
                  )}
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-8 sm:p-10 md:col-span-7 lg:p-12">
              <h3 className={`${HEADING.h3} uppercase ${TEXT_COLOR.primary}`}>{formTitle}</h3>
              <p className={cn("mb-7 mt-2", BODY.small, TEXT_COLOR.secondary)}>{formDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name={orgFieldName}
                    required
                    placeholder={orgFieldPlaceholder}
                    value={formData[orgFieldName]}
                    onChange={handleChange}
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Work Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone/WhatsApp*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="input-field cursor-pointer appearance-none"
                  >
                    <option value="" disabled hidden>
                      Select Country*
                    </option>
                    {COUNTRIES.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-3">
                  <button
                    type="submit"
                    className="btn-secondary w-full py-4 text-xs uppercase tracking-widest"
                  >
                    {submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
