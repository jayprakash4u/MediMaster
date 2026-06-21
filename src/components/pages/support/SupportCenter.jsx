import { Mail, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { SUPPORT_CHANNELS, SUPPORT_SLA, SUPPORT_STATS } from "@/config/sections/support";

const CHANNEL_ICONS = {
  email: Mail,
  phone: Phone,
  chat: MessageCircle,
};

function SupportChannelCard({ channel }) {
  const Icon = CHANNEL_ICONS[channel.id];

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300 hover:shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-teal-500/15 bg-teal-500/10 text-teal-600">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>

      <h3 className="text-base font-bold text-slate-900">{channel.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{channel.description}</p>

      <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
        {channel.links.map((link) => (
          <li key={link.label}>
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
              {link.label}
            </p>
            <a
              href={link.href}
              className="mt-0.5 block text-sm font-semibold text-slate-900 transition-colors hover:text-teal-600"
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>

      {channel.action ? (
        <div className="mt-5 pt-1">
          <Button href={channel.action.href} variant="primary" className="w-full">
            {channel.action.label}
          </Button>
        </div>
      ) : null}
    </article>
  );
}

export default function SupportCenter() {
  return (
    <section id="support-channels" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Support Channels"
          title="How can we"
          highlight="help you?"
          description="Reach our team by email, phone, or live chat. We're here when you need us."
          className="mb-8 max-w-2xl"
        />

        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-slate-200 py-5">
          {SUPPORT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SUPPORT_CHANNELS.map((channel) => (
            <SupportChannelCard key={channel.id} channel={channel} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Response times</h3>
            <p className="mt-1 text-sm text-slate-600">
              Our standard service levels for support requests.
            </p>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT_SLA.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2.5 text-sm last:border-0 last:pb-0"
                >
                  <span className="text-slate-600">{item.label}</span>
                  <span className="shrink-0 font-semibold text-slate-900">{item.response}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">Need technical help?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              For detailed issues, reach out with your facility name and a brief description. Our
              engineering team will follow up with tracking updates.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="secondary">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
