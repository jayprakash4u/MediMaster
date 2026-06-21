/**
 * Central config barrel — import from @/config or specific modules.
 *
 * Structure:
 *   config/site.js, constants.js, products.js
 *   config/heroes/   — marketing, product, service, floating-icons
 *   config/sections/ — trials, clients, support, etc.
 *
 * Design tokens & utilities stay in src/lib/ (typography, fonts, cn).
 */

export { SITE } from "./site";
export { NAV_LINKS, COMPANY } from "./constants";
export { products, slugify } from "./products";

export * from "./heroes/marketing";
export * from "./heroes/product";
export * from "./heroes/service";
export * from "./heroes/floating-icons";

export * from "./sections/trials";
export * from "./sections/clients";
export * from "./sections/support";
export * from "./sections/portfolio";
export * from "./sections/contact";
export * from "./sections/blog";
export * from "./sections/website-development";
export * from "./sections/service-pages";
