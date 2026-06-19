import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");

const replacements = [
  [/fill="#FBFCFD"/g, 'className="fill-gray-50"'],
  [/fill="#F8FAFC"/g, 'className="fill-slate-50"'],
  [/stroke="#14B8A6"/g, 'stroke="currentColor" className="text-teal-500"'],
  [/fill="#14B8A6"/g, 'fill="currentColor" className="text-teal-500"'],
  [/stroke="#0D9488"/g, 'stroke="currentColor" className="text-teal-600"'],
  [/fill="#0D9488"/g, 'fill="currentColor" className="text-teal-600"'],
  [/bg-\[#07112e\]/g, "bg-navy-950"],
  [/hover:bg-\[#0f2050\]/g, "hover:bg-navy-900"],
  [/bg-\[#1e4e8c\]/g, "bg-navy-600"],
  [/hover:bg-\[#163d70\]/g, "hover:bg-navy-700"],
  [/from-\[#0D9488\] to-\[#0F766E\]/g, "from-teal-600 to-teal-700"],
  [/text-\[#0F766E\]/g, "text-teal-700"],
  [/bg-\[#0F1F4D\]/g, "bg-navy-950"],
  [/style=\{\{\s*fontFamily:\s*FONT_FAMILY\.[^}]+\}\}/g, ""],
  [/style=\{\{\s*fontFamily:\s*['"]Georgia[^}]+\}\}/g, ""],
  [
    /className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"/g,
    'className="btn-primary px-8 py-4 font-bold"',
  ],
  [
    /className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-8 py-3\.5 text-sm font-bold text-white shadow-lg shadow-teal-500\/30 transition hover:bg-teal-400"/g,
    'className="btn-primary px-8 py-3.5 font-bold shadow-lg shadow-teal-500/30"',
  ],
  [
    /className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"/g,
    'className="input-field"',
  ],
  [/text-emerald-600/g, "text-teal-600"],
  [/text-emerald-400/g, "text-teal-400"],
  [/text-emerald-300/g, "text-teal-300"],
  [/bg-emerald-600/g, "bg-teal-600"],
  [/bg-emerald-500/g, "bg-teal-500"],
  [/bg-emerald-400/g, "bg-teal-400"],
  [/border-emerald-/g, "border-teal-"],
  [/hover:text-emerald-/g, "hover:text-teal-"],
  [/hover:bg-emerald-/g, "hover:bg-teal-"],
  [/from-emerald-/g, "from-teal-"],
  [/to-emerald-/g, "to-teal-"],
  [/bg-\[#E0532B\]/g, "bg-orange-500"],
  [/hover:bg-\[#C2411D\]/g, "hover:bg-orange-600"],
  [
    /className="w-full h-10 px-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500\/10 transition-all text-slate-700 bg-white"/g,
    'className="input-field"',
  ],
  [
    /className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500\/10 resize-none transition-all text-slate-700 bg-white"/g,
    'className="input-field resize-none"',
  ],
  [
    /className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500\/25"/g,
    'className="btn-primary w-full py-3"',
  ],
  [
    /className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-8 py-3 rounded-lg transition-colors duration-200"/g,
    'className="btn-secondary px-8 py-3 font-bold"',
  ],
  [
    /className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-2\.5 text-sm font-semibold text-slate-950 shadow-xl shadow-teal-400\/20 transition hover:bg-teal-300"/g,
    'className="btn-primary rounded-full px-6 py-2.5 shadow-xl shadow-teal-400/20"',
  ],
  [
    /className="inline-flex items-center justify-center rounded-full border border-white\/20 bg-white\/5 px-6 py-2\.5 text-sm font-semibold text-white\/90 transition hover:bg-white\/10"/g,
    'className="btn-secondary rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-white/90 hover:bg-white/10"',
  ],
  [/,\s*FONT_FAMILY(?=,|\s*\})/g, ""],
  [/FONT_FAMILY,\s*/g, ""],
  // Keep FONT_FAMILY when still referenced in file body
];

const heroWrappers = [
  {
    file: "components/pages/pharmacy-management/PharmacyHero.jsx",
    config: "pharmacyHero",
    orbit: "PharmacyOrbit",
    orbitPath: "@/components/pages/pharmacy-management/PharmacyOrbit",
  },
  {
    file: "components/pages/patient-management-system/PatientHero.jsx",
    config: "patientHero",
    orbit: "PatientOrbit",
    orbitPath: "@/components/pages/patient-management-system/PatientOrbit",
  },
  {
    file: "components/pages/pathology-management/PathologyHero.jsx",
    config: "pathologyHero",
    orbit: "PathologyStatic",
    orbitPath: "@/components/pages/pathology-management/PathologyStatic",
  },
  {
    file: "components/pages/dental-clinic-management/DentalHero.jsx",
    config: "dentalHero",
    orbit: "DentalOrbit",
    orbitPath: "@/components/pages/dental-clinic-management/DentalOrbit",
  },
  {
    file: "components/pages/polyclinic-management-system/PolyclinicHero.jsx",
    config: "polyclinicHero",
    orbit: "PolyclinicOrbit",
    orbitPath: "@/components/pages/polyclinic-management-system/PolyclinicOrbit",
  },
  {
    file: "components/pages/diagnostic-center-management-system/DiagnosticCenterHero.jsx",
    config: "diagnosticCenterHero",
    orbit: "DiagnosticCenterOrbit",
    orbitPath: "@/components/pages/diagnostic-center-management-system/DiagnosticCenterOrbit",
  },
  {
    file: "components/pages/medical-billing-system/BillingHero.jsx",
    config: "billingHero",
    orbit: "BillingOrbit",
    orbitPath: "@/components/pages/medical-billing-system/BillingOrbit",
  },
  {
    file: "components/pages/school-management-software/SchoolHero.jsx",
    config: "schoolHero",
    orbit: "SchoolOrbit",
    orbitPath: "@/components/pages/school-management-software/SchoolOrbit",
  },
  {
    file: "components/pages/account-master/AccountMasterHero.jsx",
    config: "accountMasterHero",
    orbit: "AccountMasterOrbit",
    orbitPath: "@/components/pages/account-master/AccountMasterOrbit",
  },
  {
    file: "components/pages/accounting-software/AccountingHero.jsx",
    config: "accountingHero",
    orbit: "AccountingOrbit",
    orbitPath: "@/components/pages/accounting-software/AccountingOrbit",
  },
  {
    file: "components/pages/medifit/MediFitHero.jsx",
    config: "medifitHero",
    orbit: "MediFitOrbit",
    orbitPath: "@/components/pages/medifit/MediFitOrbit",
  },
  {
    file: "components/pages/support-ticketing-system/SupportTicketingHero.jsx",
    config: "supportTicketingHero",
    orbit: "SupportTicketingOrbit",
    orbitPath: "@/components/pages/support-ticketing-system/SupportTicketingOrbit",
  },
  {
    file: "components/pages/work-nepal/WorkNepalHero.jsx",
    config: "workNepalHero",
    orbit: "WorkNepalOrbit",
    orbitPath: "@/components/pages/work-nepal/WorkNepalOrbit",
  },
];

const marketingWrappers = [
  { file: "components/pages/about/AboutHero.jsx", config: "aboutHero", name: "AboutHero" },
  { file: "components/pages/contact/ContactHero.jsx", config: "contactHero", name: "ContactHero" },
  { file: "components/pages/blog/BlogHero.jsx", config: "blogHero", name: "BlogHero" },
  { file: "components/pages/support/SupportHero.jsx", config: "supportHero", name: "SupportHero" },
  { file: "components/pages/clients/ClientsHero.jsx", config: "clientsHero", name: "ClientsHero" },
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?|tsx?|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let fileCount = 0;

for (const file of walk(root)) {
  if (file.includes(`${path.sep}ui${path.sep}`)) continue;
  if (file.includes(`${path.sep}lib${path.sep}`)) continue;
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(file, content);
    fileCount += 1;
  }
}

for (const { file, config, orbit, orbitPath } of heroWrappers) {
  const full = path.join(root, file);
  const name = path.basename(file, ".jsx");
  fs.writeFileSync(
    full,
    `import ProductHero from "@/components/ui/ProductHero";
import ${orbit} from "${orbitPath}";
import { ${config} } from "@/lib/product-heroes";

export default function ${name}() {
  return <ProductHero {...${config}} visual={<${orbit} />} />;
}
`
  );
}

for (const { file, config, name } of marketingWrappers) {
  const full = path.join(root, file);
  fs.writeFileSync(
    full,
    `import MarketingHero from "@/components/ui/MarketingHero";
import { ${config} } from "@/lib/marketing-heroes";

export default function ${name}() {
  return <MarketingHero {...${config}} />;
}
`
  );
}

console.log(`Token replacements in ${fileCount} files`);
console.log(`Updated ${heroWrappers.length} product heroes`);
console.log(`Updated ${marketingWrappers.length} marketing heroes`);
