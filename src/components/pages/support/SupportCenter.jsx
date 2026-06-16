"use client";

import React from "react";

const supportCards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email Support",
    desc: "Mail us at below email ids. We will get back to you soon.",
    details: [
      { label: "Sales:", value: "sales@medimaster.com.np", isLink: true },
      { label: "Support:", value: "support@medimaster.com.np", isLink: true },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.48 5.48l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.42z" />
      </svg>
    ),
    title: "Phone Support",
    desc: "Call us at below number. We will be happy to hear you.",
    details: [
      { label: "Sales:", value: "+977-9802109001", isLink: false },
      { label: "Support:", value: "+977-9851005516", isLink: false },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Live Support",
    desc: "Chat with one of our representative.",
    details: [{ label: "Skype:", value: "support@medimaster.com.np", isLink: true }],
    action: { label: "Chat Now", href: "#" },
  },
];

export default function SupportCenter() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#fafafa] font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10 tracking-tight">
          Support Center
        </h2>

        {/* Support Banner Image */}
        <div className="rounded-2xl mb-10 overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl h-[240px] sm:h-[300px] rounded-xl overflow-hidden">
            <img src="/supportrt.jpg" alt="Support" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ── Top Grid Row: 3 balanced primary columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {supportCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-slate-100 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
                {card.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[240px] mb-5">
                {card.desc}
              </p>

              {/* Context Detail Lines */}
              <div className="w-full text-center space-y-1.5 mb-6 text-xs sm:text-sm">
                {card.details.map((item, idx) => (
                  <p key={idx} className="text-slate-500 font-medium">
                    <span className="text-slate-700 font-bold mr-1">{item.label}</span>
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-teal-600 hover:underline tracking-wide"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 tracking-wide">{item.value}</span>
                    )}
                  </p>
                ))}
              </div>

              {/* Action Button Container */}
              {card.action ? (
                <div className="mt-auto w-full pt-1">
                  <a
                    href={card.action.href}
                    className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs font-bold tracking-wide px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    {card.action.label}
                  </a>
                </div>
              ) : (
                /* Empty placeholder space to maintain vertical height consistency across all cards */
                <div className="h-[38px] mt-auto hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom Layout Row: Submit Ticket Card ── */}
        <div className="max-w-md mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-200 md:col-start-1">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0d9488"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Submit Ticket</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[240px] mb-6">
              The fastest way to resolve your issue.
            </p>

            <div className="mt-auto w-full">
              <a
                href="/support/ticket"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs font-bold tracking-wide px-6 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Submit Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
