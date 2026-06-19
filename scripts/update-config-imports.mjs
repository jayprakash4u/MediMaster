import fs from "node:fs";
import path from "node:path";

const replacements = [
  ["@/config/site", "@/config/site"],
  ["@/config/constants", "@/config/constants"],
  ["@/config/products", "@/config/products"],
  ["@/config/heroes/marketing", "@/config/heroes/marketing"],
  ["@/config/heroes/product", "@/config/heroes/product"],
  ["@/config/heroes/service", "@/config/heroes/service"],
  ["@/config/heroes/floating-icons", "@/config/heroes/floating-icons"],
  ["@/config/sections/home", "@/config/sections/home"],
  ["@/config/sections/trials", "@/config/sections/trials"],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?|mjs)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let count = 0;
for (const root of ["src", "scripts"]) {
  for (const file of walk(root)) {
    let content = fs.readFileSync(file, "utf8");
    const original = content;
    for (const [from, to] of replacements) {
      content = content.replaceAll(from, to);
    }
    if (content !== original) {
      fs.writeFileSync(file, content);
      count += 1;
    }
  }
}

console.log(`Updated imports in ${count} files`);
