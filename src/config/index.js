/**
 * Central config barrel — import from @/config or specific modules.
 *
 * Structure:
 *   config/site.js, constants.js, products.js
 *   config/heroes/   — marketing, product, service, floating-icons
 *   config/sections/ — home, trials
 *
 * Design tokens & utilities stay in src/lib/ (typography, fonts, cn, colors).
 */

export { SITE } from "./site";
export { NAV_LINKS, COMPANY } from "./constants";
export { products, slugify } from "./products";

export * from "./heroes/marketing";
export * from "./heroes/product";
export * from "./heroes/service";
export * from "./heroes/floating-icons";

export * from "./sections/home";
export * from "./sections/trials";
