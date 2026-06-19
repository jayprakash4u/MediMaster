"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CardCompact } from "@/components/ui/Card";
import { CLIENTS, CLIENT_SECTORS } from "@/config/sections/clients";
import { cn } from "@/lib/cn";

const LOGO_BREAK_WORDS = [
  "Hospital",
  "Medical",
  "College",
  "Pharmacy",
  "Diagnostic",
  "Pathology",
  "Laboratory",
  "Center",
  "Labs",
  "Institute",
  "Sciences",
];

function splitLogoName(name) {
  for (const word of LOGO_BREAK_WORDS) {
    const index = name.indexOf(word);
    if (index > 0) {
      return [name.slice(0, index).trim(), name.slice(index).trim()];
    }
  }

  const words = name.split(" ");
  if (words.length <= 2) return [name];

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

function getLogoFontSize(name) {
  if (name.length <= 14) return 15;
  if (name.length <= 20) return 13;
  if (name.length <= 28) return 12;
  return 11;
}

function ClientLogoCard({ client }) {
  const lines = splitLogoName(client.name);
  const fontSize = getLogoFontSize(client.name);

  return (
    <CardCompact className="flex h-[76px] items-center justify-center px-3" title={client.name}>
      <div
        className="flex flex-col items-center text-center font-display font-bold leading-[1.15] tracking-tight"
        style={{ color: client.color, fontSize: `${fontSize}px` }}
      >
        {lines.map((line) => (
          <span key={line} className="block max-w-full px-1">
            {line}
          </span>
        ))}
      </div>
    </CardCompact>
  );
}

export default function ClientsGrid() {
  const [activeSector, setActiveSector] = useState("All");

  const filtered = useMemo(
    () =>
      activeSector === "All" ? CLIENTS : CLIENTS.filter((client) => client.sector === activeSector),
    [activeSector]
  );

  return (
    <section id="clients-grid" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Clients"
          title="Healthcare"
          highlight="partners"
          className="mb-6 max-w-xl"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {CLIENT_SECTORS.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setActiveSector(sector)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeSector === sector
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {sector}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((client) => (
            <ClientLogoCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
