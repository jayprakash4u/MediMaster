import { chromium } from "playwright";

async function testPage(page, url, label) {
  await page.goto(url, { waitUntil: "networkidle" });
  const btn = page.locator('button[aria-label="Open menu"]');
  console.log(`${label}: button visible:`, await btn.isVisible());
  const box = await btn.boundingBox();
  console.log(`${label}: button box:`, JSON.stringify(box));

  if (box) {
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    const el = await page.evaluate(
      ({ cx, cy }) => {
        const e = document.elementFromPoint(cx, cy);
        return e
          ? {
              tag: e.tagName,
              class: e.className?.slice?.(0, 80),
              aria: e.getAttribute("aria-label"),
            }
          : null;
      },
      { cx, cy }
    );
    console.log(`${label}: element at point:`, JSON.stringify(el));
  }

  await btn.click({ force: true });
  await page.waitForTimeout(600);

  const dialog = page.locator('[role="dialog"][aria-label="Navigation menu"]');
  const visible = await dialog.isVisible();
  console.log(`${label}: dialog visible:`, visible);

  if (visible) {
    const aside = dialog.locator("aside");
    const styles = await aside.evaluate((el) => {
      const s = getComputedStyle(el);
      return { transform: s.transform, opacity: s.opacity, visibility: s.visibility };
    });
    console.log(`${label}: aside styles:`, JSON.stringify(styles));
    const menuItems = await dialog.locator("nav a, nav button").count();
    console.log(`${label}: menu item count:`, menuItems);
  }

  // close for next test
  const closeBtn = page.locator('button[aria-label="Close menu"]').first();
  if (await closeBtn.isVisible()) await closeBtn.click();
  await page.waitForTimeout(400);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

try {
  await testPage(page, "http://localhost:3000", "HOME");
  await testPage(page, "http://localhost:3000/about", "ABOUT");
} finally {
  await browser.close();
}
