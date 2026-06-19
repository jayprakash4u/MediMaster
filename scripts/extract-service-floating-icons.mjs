import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve("src");

const sources = [
  { file: "components/pages/services/seo/SEOHero.jsx", exportName: "seoFloatingIcons" },
  { file: "components/pages/services/digital-marketing/DigitalMarketingHero.jsx", exportName: "digitalMarketingFloatingIcons" },
  { file: "components/pages/services/content-writing/ContentWritingHero.jsx", exportName: "contentWritingFloatingIcons" },
  { file: "components/pages/services/app-development/AppDevelopmentHero.jsx", exportName: "appDevelopmentFloatingIcons" },
  { file: "components/pages/services/website-development/WebsiteDevHero.jsx", exportName: "websiteDevFloatingIcons" },
  { file: "components/pages/services/ui-ux/UIUXHero.jsx", exportName: "uiUxFloatingIcons" },
  { file: "components/pages/services/smm/SMMHero.jsx", exportName: "smmFloatingIcons" },
  { file: "components/pages/services/graphic-design/GraphicDesignHero.jsx", exportName: "graphicDesignFloatingIcons" },
  { file: "components/pages/services/ecommerce-solution/EcommerceHero.jsx", exportName: "ecommerceFloatingIcons" },
  { file: "components/pages/services/it-outsourcing/ITOutsourcingHero.jsx", exportName: "itOutsourcingFloatingIcons" },
  { file: "components/pages/services/server-management/ServerManagementHero.jsx", exportName: "serverManagementFloatingIcons" },
  { file: "components/pages/services/website-maintenance/WebsiteMaintenanceHero.jsx", exportName: "websiteMaintenanceFloatingIcons" },
  { file: "app/services/system-software-development/page.js", exportName: "systemSoftwareFloatingIcons" },
];

let output = "/**\n * Floating icon configs for service hero visuals.\n */\n\n";

for (const { file, exportName } of sources) {
  const gitPath = `src/${file.replace(/\\/g, "/")}`;
  let content;
  try {
    content = execSync(`git show HEAD:${gitPath}`, { encoding: "utf8" });
  } catch {
    content = fs.readFileSync(path.join(root, file), "utf8");
  }
  const match = content.match(/const floatingIcons = (\[[\s\S]*?\n\]);/);
  if (!match) {
    console.warn(`No floatingIcons found in ${file}`);
    continue;
  }
  output += `export const ${exportName} = ${match[1]};\n\n`;
}

fs.writeFileSync(path.join(root, "lib/service-floating-icons.js"), output);
console.log("Wrote src/lib/service-floating-icons.js");
