import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/33adb7f5-8f0a-80b3-b007-ed62e129524f",
  "/33adb7f5-8f0a-803c-a1f9-f1bda51e20f0",
  "/2d2db7f5-8f0a-81e9-9167-e4de7443173a",
  "/2d2db7f5-8f0a-81e9-9167-e4de7443173a/recova",
  "/2d2db7f5-8f0a-8134-9535-f3e577a4dfdc",
] satisfies readonly string[];

test.describe("SLIT company portfolio site", () => {
  for (const route of routes) {
    test(`renders ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(
        page.getByRole("link", { name: "SLIT Portfolio 홈" }).first(),
      ).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator("body")).not.toContainText("Deploy Now");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
    });
  }

  test("scroll progress and back-to-top control work", async ({ page }) => {
    await page.goto("/");
    const backToTop = page.locator('button[aria-label="맨 위로"]');
    await expect(page.getByRole("button", { name: "맨 위로" })).toHaveCount(0);
    await expect(backToTop).toHaveAttribute("aria-hidden", "true");
    await expect(backToTop).toHaveAttribute("tabindex", "-1");

    await page.evaluate(() => {
      window.scrollTo({ top: 900, behavior: "instant" });
      window.dispatchEvent(new Event("scroll"));
    });
    await expect
      .poll(() =>
        page.evaluate(() =>
          Number(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--scroll-progress",
            ),
          ),
        ),
      )
      .toBeGreaterThan(0);
    await expect(page.getByRole("button", { name: "맨 위로" })).toBeVisible();
    await expect(backToTop).toHaveAttribute("aria-hidden", "false");
    await backToTop.focus();
    await page.keyboard.press("Enter");
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(20);
  });

  test("project portfolio cards open a blog-style case page", async ({
    page,
  }) => {
    await page.goto("/2d2db7f5-8f0a-81e9-9167-e4de7443173a");

    await page.locator('a[href$="/recova"]').first().click();

    await expect(page).toHaveURL(/\/recova$/);
    await expect(page.getByRole("heading", { name: "Recova" })).toBeVisible();
    await expect(page.locator("body")).toContainText("핵심 증거");
    await expect(page.locator("body")).toContainText("문제");
    await expect(page.locator("body")).toContainText("남은 결과");
  });

  test("unknown route renders the not-found surface", async ({ page }) => {
    const response = await page.goto("/not-a-real-slit-page");

    expect(response?.status()).toBe(404);
    await expect(page.locator("body")).toContainText("404");
    await expect(page.locator("body")).not.toContainText("Deploy Now");
  });
});
