import { mkdirSync } from "node:fs";
import { expect, type Locator, test } from "@playwright/test";

const evidenceDir = ".omo/ulw-loop/header-nav-redesign-20260618/evidence/after";

mkdirSync(evidenceDir, { recursive: true });

async function requireBox(locator: Locator, name: string) {
  const box = await locator.boundingBox();
  expect(box, `${name} bounding box`).not.toBeNull();
  if (!box) {
    throw new Error(`${name} did not have a rendered bounding box`);
  }
  return box;
}

test.describe("SLIT responsive header", () => {
  test("mobile drawer exposes nav", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only drawer");
    await page.goto("/");
    await page.getByRole("button", { name: "메뉴 열기" }).focus();
    await page.keyboard.press("Enter");
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByText("일하는 방식", { exact: true })).toBeVisible();
    await page.screenshot({ path: `${evidenceDir}/mobile-drawer.png` });
    await drawer.getByRole("link", { name: "문의하기" }).click();
    await expect(drawer).toBeHidden();
    await expect(page.locator("main").first()).toContainText("SLIT");
  });

  test("tablet header uses mobile drawer without desktop overlap", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "tablet", "tablet-only breakpoint");
    await page.goto("/");

    const desktopNav = page.getByRole("navigation", { name: "주요 메뉴" });
    const menuButton = page.getByRole("button", { name: "메뉴 열기" });

    await expect(desktopNav).toBeHidden();
    await expect(menuButton).toBeVisible();

    const logoBox = await requireBox(
      page.getByRole("link", { name: "SLIT Portfolio 홈" }).first(),
      "tablet logo",
    );
    const buttonBox = await requireBox(menuButton, "tablet menu button");
    expect(logoBox.x + logoBox.width).toBeLessThan(buttonBox.x);

    await menuButton.focus();
    await page.keyboard.press("Enter");
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByText("일하는 방식", { exact: true })).toBeVisible();
  });

  test("narrow desktop header keeps nav and submenu unclipped", async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name !== "narrow-desktop",
      "narrow-desktop-only breakpoint",
    );
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "주요 메뉴" });
    await expect(nav).toBeVisible();

    const logoBox = await requireBox(
      page.getByRole("link", { name: "SLIT Portfolio 홈" }).first(),
      "narrow desktop logo",
    );
    const companyBox = await requireBox(
      nav.getByText("SLIT 소개", { exact: true }),
      "narrow desktop first nav item",
    );
    expect(logoBox.x + logoBox.width).toBeLessThan(companyBox.x);

    const workLink = nav.getByText("일하는 방식", { exact: true });
    await workLink.hover();
    await expect(workLink).toBeVisible();

    const hasBadOverflow = await workLink.evaluate(
      (element) =>
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight + 2,
    );
    expect(hasBadOverflow).toBe(false);
  });
});
