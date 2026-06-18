import { mkdirSync, writeFileSync } from "node:fs";
import { chromium, type Locator } from "@playwright/test";

const outputDir =
  process.env.HEADER_HOVER_OUTPUT_DIR ??
  ".omo/ulw-loop/header-hover-fidelity-20260617/evidence/after";
const baseUrl = process.env.HEADER_HOVER_BASE_URL ?? "http://127.0.0.1:3000";
const capturePath = process.env.HEADER_HOVER_PATH ?? "/";

const labels = [
  "조직문화",
  "민트 라이프",
  "합류 여정",
  "채용 공고",
] satisfies readonly string[];

type BoxMetric = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

type RowMetric = BoxMetric & {
  readonly ariaExpanded: string | null;
  readonly backgroundColor: string;
  readonly borderRadius: string;
  readonly color: string;
  readonly tag: string;
  readonly text: string;
};

type HoverMetric = {
  readonly activeLabel: string;
  readonly nav: BoxMetric & { readonly columnWidth: number };
  readonly region: BoxMetric;
  readonly rows: readonly RowMetric[];
};

mkdirSync(outputDir, { recursive: true });

async function requireBox(locator: Locator, name: string) {
  const box = await locator.boundingBox();
  if (!box) {
    throw new Error(`${name} did not have a rendered bounding box`);
  }
  return {
    x: Math.round(box.x),
    y: Math.round(box.y),
    width: Math.round(box.width),
    height: Math.round(box.height),
  };
}

async function main() {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    await page.goto(new URL(capturePath, baseUrl).toString(), {
      waitUntil: "networkidle",
    });

    const nav = page.getByRole("navigation", { name: "주요 메뉴" });
    const metrics: HoverMetric[] = [];

    for (const label of labels) {
      await nav.getByText(label, { exact: true }).hover();
      await page.waitForTimeout(260);

      const region = page.getByRole("region", { name: "하위 메뉴" });
      await region.waitFor({ state: "visible" });
      await page.screenshot({
        path: `${outputDir}/header-hover-${label}.png`,
        clip: { x: 0, y: 0, width: 1440, height: 320 },
      });

      const navBox = await requireBox(nav, "desktop nav");
      const regionBox = await requireBox(region, "mega menu");
      const rows = await page.evaluate((activeLabel) => {
        const navRoot = document.querySelector('nav[aria-label="주요 메뉴"]');
        const active = Array.from(
          navRoot?.querySelectorAll<HTMLElement>("a,button") ?? [],
        ).find((element) => element.textContent?.trim() === activeLabel);
        const menu = document.querySelector("#desktop-mega-menu");
        const elements = [
          active,
          ...Array.from(menu?.querySelectorAll<HTMLElement>("a") ?? []),
        ].filter((element): element is HTMLElement => Boolean(element));

        return elements.map((element) => {
          const box = element.getBoundingClientRect();
          const style = getComputedStyle(element);

          return {
            ariaExpanded: element.getAttribute("aria-expanded"),
            backgroundColor: style.backgroundColor,
            borderRadius: style.borderTopLeftRadius,
            color: style.color,
            height: Math.round(box.height),
            tag: element.tagName,
            text: element.textContent?.trim() ?? "",
            width: Math.round(box.width),
            x: Math.round(box.x),
            y: Math.round(box.y),
          };
        });
      }, label);

      metrics.push({
        activeLabel: label,
        nav: { ...navBox, columnWidth: Math.round(navBox.width / 5) },
        region: regionBox,
        rows,
      });
      if (label === "조직문화") {
        await region
          .getByRole("link", { name: "일을 대하는 우리의 태도" })
          .hover();
        await page.waitForTimeout(160);
        await page.screenshot({
          path: `${outputDir}/header-hover-culture-child.png`,
          clip: { x: 0, y: 0, width: 1440, height: 320 },
        });
      }
      console.log(`captured ${label}`);
    }

    writeFileSync(
      `${outputDir}/header-hover-metrics.json`,
      `${JSON.stringify(metrics, null, 2)}\n`,
    );
    await page.close();
  } finally {
    await browser.close();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
