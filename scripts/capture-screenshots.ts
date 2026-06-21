import { mkdirSync } from "node:fs";
import { chromium, type ViewportSize } from "@playwright/test";
import { routePaths } from "../src/content/routes";

const outputDir =
  process.env.VISUAL_OUTPUT_DIR ??
  ".omo/ulw-loop/019ed03b-2e60-7142-929b-f4e3f6c45f65/evidence/screenshots";

const routes = [
  ["root", routePaths.home],
  ["awards", routePaths.awards],
  ["interviews", routePaths.interviews],
  ["life", routePaths.life],
  ["careers", routePaths.careers],
] satisfies readonly (readonly [string, string])[];

const viewports = [
  ["desktop", { width: 1440, height: 1200 }],
  ["mobile", { width: 390, height: 1000 }],
] satisfies readonly (readonly [string, ViewportSize])[];

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3000";

mkdirSync(outputDir, { recursive: true });

async function main() {
  const browser = await chromium.launch();
  try {
    for (const [viewportName, viewport] of viewports) {
      const page = await browser.newPage({ viewport });
      for (const [name, path] of routes) {
        await page.goto(new URL(path, baseUrl).toString(), {
          waitUntil: "networkidle",
        });
        await page.waitForTimeout(900);
        await page.screenshot({
          path: `${outputDir}/${name}-${viewportName}.png`,
          fullPage: false,
        });
        console.log(`${name}-${viewportName}`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
