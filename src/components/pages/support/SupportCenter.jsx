import SectionHeader from "@/components/ui/SectionHeader";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export default function SupportCenter() {
  return (
    <section className="section-shell bg-gray-50/80 font-sans antialiased">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="left"
          eyebrow="Support Channels"
          title="How Can We"
          highlight="Help You?"
          description="Reach our team through email, phone, or WhatsApp. We typically respond within a few hours."
          className="mb-10 max-w-none"
        />
        {/* Primary Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Email Support Card */}
          <div className="card-surface flex flex-col items-center p-6 text-center sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 ring-4 ring-teal-50/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2.5">Email Support</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[40px]">
              Reach out via email anytime. Our team typically replies within a few hours.
            </p>
            <div className="w-full space-y-2 mb-6 text-sm border-t border-slate-50 pt-5">
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">
                  Sales
                </span>
                <a
                  href="mailto:sales@medimaster.com.np"
                  className="font-semibold tracking-wide text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                >
                  sales@medimaster.com.np
                </a>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">
                  Support
                </span>
                <a
                  href="mailto:support@medimaster.com.np"
                  className="font-semibold tracking-wide text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                >
                  support@medimaster.com.np
                </a>
              </div>
            </div>
            <div className="mt-auto w-full">
              <div className="text-xs text-slate-400 bg-slate-50 rounded-xl py-2 font-medium">
                Available 24/7
              </div>
            </div>
          </div>

          {/* Phone Support Card */}
          <div className="card-surface flex flex-col items-center p-6 text-center sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 ring-4 ring-teal-50/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2.5">Phone Support</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[40px]">
              Speak directly with our regional representatives for immediate onboarding help.
            </p>
            <div className="w-full space-y-2 mb-6 text-sm border-t border-slate-50 pt-5">
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">
                  Sales
                </span>
                <a
                  href="tel:+9779802109001"
                  className="font-semibold tracking-wide text-slate-700 hover:text-teal-600 transition-colors"
                >
                  +977-9802109001
                </a>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">
                  Support
                </span>
                <a
                  href="tel:+9779851005516"
                  className="font-semibold tracking-wide text-slate-700 hover:text-teal-600 transition-colors"
                >
                  +977-9851005516
                </a>
              </div>
            </div>
            <div className="mt-auto w-full">
              <div className="text-xs text-slate-400 bg-slate-50 rounded-xl py-2 font-medium">
                Available 24/7
              </div>
            </div>
          </div>

          {/* Live Chat Card */}
          <div className="card-surface flex flex-col items-center p-6 text-center sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 ring-4 ring-teal-50/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2.5">Live Chat Support</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[40px]">
              Chat instantly with an online agent for troubleshooting and instant answers.
            </p>
            <div className="w-full space-y-2 mb-6 text-sm border-t border-slate-50 pt-5">
              <div className="flex justify-between items-center px-2">
                <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">
                  Skype
                </span>
                <a
                  href="skype:support@medimaster.com.np?chat"
                  className="font-semibold tracking-wide text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                >
                  support@medimaster.com.np
                </a>
              </div>
            </div>
            <div className="mt-auto w-full">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-sm font-semibold tracking-wide py-3 rounded-xl transition-colors shadow-sm shadow-teal-600/10"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Balanced Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Submit Ticket Action Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg text-white flex flex-col sm:flex-row items-center justify-between gap-6 md:col-span-2">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-teal-400 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                  <rect width="8" height="4" x="8" y="2" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">
                Looking for a comprehensive technical diagnostic?
              </h3>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Submit an internal service ticket. Our engineering queue provides deep tracking
                updates for system anomalies.
              </p>
            </div>
            <div className="w-full sm:w-auto shrink-0">
              <a
                href="/support/ticket"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 text-sm font-bold tracking-wide px-8 py-3.5 rounded-xl transition-colors shadow-md"
              >
                Submit a Ticket
              </a>
            </div>
          </div>

          {/* Quick Context / SLA Card */}
          <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
            <h4 className="text-slate-800 font-bold text-base mb-1">Standard SLA Response</h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3">
              We try our best to address system incidents quickly:
            </p>
            <ul className="text-xs text-slate-600 font-medium space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>
                  Critical Failures: <strong className="text-slate-800">&lt; 1 Hour</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>
                  General Inquiries: <strong className="text-slate-800">&lt; 24 Hours</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
