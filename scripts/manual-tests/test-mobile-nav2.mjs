import { chromium } from "playwright";

async function inspectButton(page, label) {
  const btn = page.locator('button[aria-label="Open menu"]');
  const box = await btn.boundingBox();
  if (!box) return console.log(`${label}: no button box`);

  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  const info = await page.evaluate(({ cx, cy }) => {
    const chain = [];
    let el = document.elementFromPoint(cx, cy);
    while (el) {
      chain.push({
        tag: el.tagName,
        aria: el.getAttribute("aria-label"),
        class: el.className?.slice?.(0, 60) || "",
        pe: getComputedStyle(el).pointerEvents,
      });
      if (el.getAttribute("aria-label") === "Open menu") break;
      el = el.parentElement;
    }
    return { chain, hitsButton: chain.some((n) => n.aria === "Open menu") };
  }, { cx, cy });

  console.log(`${label}: hitsButton=${info.hitsButton}`, JSON.stringify(info.chain, null, 0));

  try {
    await btn.click({ timeout: 3000 });
    console.log(`${label}: normal click succeeded`);
  } catch (e) {
    console.log(`${label}: normal click FAILED:`, e.message.split("\n")[0]);
  }

  await page.waitForTimeout(500);
  const dialog = page.locator('[role="dialog"][aria-label="Navigation menu"]');
  console.log(`${label}: dialog visible:`, await dialog.isVisible());

  if (await dialog.isVisible()) {
    const box2 = await dialog.boundingBox();
    console.log(`${label}: dialog box:`, JSON.stringify(box2));
    const asideBox = await dialog.locator("aside").boundingBox();
    console.log(`${label}: aside box:`, JSON.stringify(asideBox));
  }

  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await inspectButton(page, "HOME");

await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
await inspectButton(page, "ABOUT");

await browser.close();
