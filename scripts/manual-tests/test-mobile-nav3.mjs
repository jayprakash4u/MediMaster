import { chromium, devices } from "playwright";

async function testAtScroll(page, label, scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(300);

  const btn = page.locator('button[aria-label="Open menu"]');
  const visible = await btn.isVisible();
  const box = await btn.boundingBox();
  if (!box) {
    console.log(`${label} scroll=${scrollY}: button not found`);
    return;
  }

  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  const hit = await page.evaluate(({ cx, cy }) => {
    let el = document.elementFromPoint(cx, cy);
    while (el && el.getAttribute?.("aria-label") !== "Open menu") el = el.parentElement;
    return Boolean(el);
  }, { cx, cy });

  await btn.click();
  await page.waitForTimeout(500);
  const dialogOpen = await page.locator('[role="dialog"]').isVisible();
  console.log(`${label} scroll=${scrollY}: hit=${hit} dialog=${dialogOpen}`);

  if (dialogOpen) await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
}

const iPhone = devices["iPhone 13"];
const browser = await chromium.launch();
const context = await browser.newContext({ ...iPhone });
const page = await context.newPage();

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
for (const y of [0, 200, 500, 1000, 2000]) {
  await testAtScroll(page, "HOME-iPhone", y);
}

await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
for (const y of [0, 500, 1000]) {
  await testAtScroll(page, "ABOUT-iPhone", y);
}

await browser.close();
