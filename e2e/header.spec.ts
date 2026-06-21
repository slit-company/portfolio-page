import { expect, type Locator, test } from "@playwright/test";

async function requireBox(locator: Locator, name: string) {
  const box = await locator.boundingBox();
  expect(box, `${name} bounding box`).not.toBeNull();
  if (!box) {
    throw new Error(`${name} did not have a rendered bounding box`);
  }
  return box;
}

test.describe("SLIT header", () => {
  test("desktop header follows the flat five-column reference layout", async ({
    page,
    isMobile,
  }, testInfo) => {
    test.skip(
      isMobile || testInfo.project.name !== "desktop",
      "desktop-only header layout",
    );
    await page.goto("/");
    const header = page.locator("header").first();
    const nav = page.getByRole("navigation", { name: "주요 메뉴" });
    const workLabel = nav.getByRole("button", { name: "일하는 방식" });
    await expect(
      page.getByRole("button", { exact: true, name: "더보기" }),
    ).toHaveCount(0);

    const headerBox = await requireBox(header, "desktop header");
    expect(headerBox.height).toBeGreaterThanOrEqual(47);
    expect(headerBox.height).toBeLessThanOrEqual(49);

    const logoLink = page
      .getByRole("link", { name: "SLIT Portfolio 홈" })
      .first();
    const logoBox = await requireBox(logoLink, "desktop logo block");
    expect(logoBox.x).toBeGreaterThanOrEqual(0);
    expect(logoBox.x).toBeLessThanOrEqual(1);
    expect(logoBox.width).toBeGreaterThanOrEqual(186);
    expect(logoBox.width).toBeLessThanOrEqual(190);
    const logoImage = logoLink.locator('img[src="/slit_logo.svg"]');
    await expect(logoImage).toBeVisible();
    const logoImageBox = await requireBox(logoImage, "SLIT logo mark");
    expect(logoImageBox.x).toBeGreaterThanOrEqual(10);
    expect(logoImageBox.x).toBeLessThanOrEqual(14);
    expect(logoImageBox.height).toBeGreaterThanOrEqual(38);
    expect(logoImageBox.height).toBeLessThanOrEqual(42);

    const navBox = await requireBox(nav, "desktop nav");
    expect(navBox.x).toBeGreaterThanOrEqual(187);
    expect(navBox.x).toBeLessThanOrEqual(189);
    expect(navBox.width).toBeGreaterThanOrEqual(1090);
    expect(navBox.width).toBeLessThanOrEqual(1100);

    const labels = [
      "SLIT 소개",
      "프로젝트 사례",
      "일하는 방식",
      "적용 분야",
      "문의하기",
    ];
    const centers: number[] = [];
    for (const label of labels) {
      const box = await requireBox(
        nav.getByText(label, { exact: true }),
        `${label} nav item`,
      );
      centers.push(box.x + box.width / 2);
    }
    const gaps: number[] = [];
    for (let index = 1; index < centers.length; index += 1) {
      const previous = centers[index - 1];
      const current = centers[index];
      if (previous === undefined || current === undefined) {
        throw new Error("missing nav item center");
      }
      gaps.push(current - previous);
    }
    for (const gap of gaps) {
      expect(gap).toBeGreaterThanOrEqual(216);
      expect(gap).toBeLessThanOrEqual(222);
    }

    await expect(page.getByRole("region", { name: "하위 메뉴" })).toBeHidden();
    await workLabel.hover();

    const submenu = page.getByRole("region", { name: "하위 메뉴" });
    await expect(submenu).toBeVisible();
    await expect(workLabel).toHaveCSS("color", "rgb(55, 53, 47)");
    const cultureRadius = await workLabel.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).borderTopLeftRadius),
    );
    expect(cultureRadius).toBe(0);
    await expect(
      submenu.getByRole("link", { name: "프로젝트 원칙" }),
    ).toBeVisible();
    await expect(
      submenu.getByRole("link", { name: "운영 시스템 구축 방식" }),
    ).toBeVisible();
    await expect
      .poll(async () => (await submenu.boundingBox())?.y ?? 0)
      .toBeGreaterThanOrEqual(46.5);

    const submenuBox = await requireBox(submenu, "submenu strip");
    expect(submenuBox.y).toBeGreaterThanOrEqual(46.5);
    expect(submenuBox.y).toBeLessThanOrEqual(49);
    expect(submenuBox.height).toBeGreaterThanOrEqual(102);
    expect(submenuBox.height).toBeLessThanOrEqual(106);

    await nav.getByRole("link", { name: "문의하기" }).hover();
    await expect(submenu).toBeHidden();
  });

  test("desktop submenu keyboard and close states stay usable", async ({
    page,
    isMobile,
  }, testInfo) => {
    test.skip(
      isMobile || testInfo.project.name !== "desktop",
      "desktop-only submenu",
    );
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "주요 메뉴" });
    const workLabel = nav.getByRole("button", { name: "일하는 방식" });
    const submenu = page.getByRole("region", { name: "하위 메뉴" });

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "SLIT Portfolio 홈" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(nav.getByRole("link", { name: "SLIT 소개" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(
      nav.getByRole("button", { name: "프로젝트 사례" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(workLabel).toBeFocused();
    await workLabel.hover();
    await expect(submenu).toBeVisible();
    const firstChild = submenu.getByRole("link", {
      name: "프로젝트 원칙",
    });
    await expect(firstChild).toBeVisible();
    await expect(firstChild).toHaveAttribute(
      "href",
      "/33adb7f5-8f0a-803c-a1f9-f1bda51e20f0",
    );
    await firstChild.focus();
    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.textContent?.trim()),
      )
      .toBe("일하는 방식");

    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.textContent?.trim()),
      )
      .toBe("일하는 방식");

    await page.keyboard.press("Space");
    await expect(submenu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.textContent?.trim()),
      )
      .toBe("일하는 방식");

    await page.keyboard.press("Enter");
    await expect(submenu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();

    const projectLabel = nav.getByRole("button", { name: "프로젝트 사례" });
    await projectLabel.hover();
    await expect(submenu).toBeVisible();
    await page.mouse.move(20, 240);
    await expect(submenu).toBeHidden();
    await expect(projectLabel).toHaveCSS("color", "rgb(55, 53, 47)");

    await workLabel.press("Space");
    await expect(submenu).toBeVisible();
    await firstChild.click();
    await expect(page.locator("h1").first()).toContainText("프로젝트 원칙");
  });
});
