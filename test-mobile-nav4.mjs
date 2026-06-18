import { chromium, devices } from "playwright";

const iPhone = devices["iPhone 13"];
const browser = await chromium.launch();
const page = await browser.newPage({ ...iPhone });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.locator('button[aria-label="Open menu"]').click();
await page.waitForTimeout(600);

const dialog = page.locator('[role="dialog"][aria-label="Navigation menu"]');
console.log("dialog open:", await dialog.isVisible());

// Test X close button (in aside header, NOT in data-lenis-prevent nav)
const xBtn = dialog.locator('aside button[aria-label="Close menu"]');
try {
  await xBtn.click({ timeout: 3000 });
  console.log("X close: succeeded, dialog closed:", !(await dialog.isVisible()));
} catch (e) {
  console.log("X close: FAILED -", e.message.split("\n")[0]);
}

// Reopen
await page.locator('button[aria-label="Open menu"]').click();
await page.waitForTimeout(600);

// Test About link
const aboutLink = dialog.locator('nav a', { hasText: "About" });
try {
  await aboutLink.click({ timeout: 3000 });
  await page.waitForTimeout(800);
  console.log("About link: navigated to", page.url());
} catch (e) {
  console.log("About link: FAILED -", e.message.split("\n")[0]);
}

await browser.close();
