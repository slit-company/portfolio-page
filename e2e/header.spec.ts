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

test.describe("team mint header", () => {
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
    const cultureLabel = nav.getByRole("button", { name: "조직문화" });
    await expect(page.getByRole("button", { name: "더보기" })).toHaveCount(0);

    const headerBox = await requireBox(header, "desktop header");
    expect(headerBox.height).toBeGreaterThanOrEqual(47);
    expect(headerBox.height).toBeLessThanOrEqual(49);

    const logoBox = await requireBox(
      page.getByAltText("teammint").first(),
      "desktop logo",
    );
    expect(logoBox.x).toBeGreaterThanOrEqual(10);
    expect(logoBox.x).toBeLessThanOrEqual(14);
    expect(logoBox.width).toBeGreaterThanOrEqual(160);
    expect(logoBox.width).toBeLessThanOrEqual(170);

    const navBox = await requireBox(nav, "desktop nav");
    expect(navBox.x).toBeGreaterThanOrEqual(187);
    expect(navBox.x).toBeLessThanOrEqual(189);
    expect(navBox.width).toBeGreaterThanOrEqual(1090);
    expect(navBox.width).toBeLessThanOrEqual(1100);

    const labels = [
      "회사소개",
      "조직문화",
      "민트 라이프",
      "합류 여정",
      "채용 공고",
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
    await cultureLabel.hover();

    const submenu = page.getByRole("region", { name: "하위 메뉴" });
    await expect(submenu).toBeVisible();
    await expect(cultureLabel).toHaveCSS("color", "rgb(55, 53, 47)");
    const cultureRadius = await cultureLabel.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).borderTopLeftRadius),
    );
    expect(cultureRadius).toBe(0);
    await expect(
      submenu.getByRole("link", { name: "일을 대하는 우리의 태도" }),
    ).toBeVisible();
    await expect(
      submenu.getByRole("link", { name: "팀민트 컬처덱" }),
    ).toBeVisible();

    const submenuBox = await requireBox(submenu, "submenu strip");
    expect(submenuBox.y).toBeGreaterThanOrEqual(47);
    expect(submenuBox.y).toBeLessThanOrEqual(49);
    expect(submenuBox.height).toBeGreaterThanOrEqual(102);
    expect(submenuBox.height).toBeLessThanOrEqual(106);

    const cultureChild = submenu.getByRole("link", {
      name: "일을 대하는 우리의 태도",
    });
    await cultureChild.hover();
    await expect(cultureChild).toHaveCSS(
      "background-color",
      "rgb(245, 245, 245)",
    );

    await nav.getByRole("button", { name: "민트 라이프" }).hover();
    await expect(
      submenu.getByRole("link", { name: "구성원 인터뷰" }),
    ).toBeVisible();
    await expect(
      submenu.getByRole("link", { name: "팀민트 라이프" }),
    ).toBeVisible();

    await nav.getByRole("link", { name: "합류 여정" }).hover();
    await expect(submenu).toBeHidden();

    await nav.getByRole("link", { name: "채용 공고" }).hover();
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
    const cultureLabel = nav.getByRole("button", { name: "조직문화" });
    const submenu = page.getByRole("region", { name: "하위 메뉴" });

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "팀민트 채용페이지 홈" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(nav.getByRole("link", { name: "회사소개" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(cultureLabel).toBeFocused();
    await expect(submenu).toBeVisible();
    const firstChild = submenu.getByRole("link", {
      name: "일을 대하는 우리의 태도",
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
      .toBe("조직문화");

    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.textContent?.trim()),
      )
      .toBe("조직문화");

    await page.keyboard.press("Space");
    await expect(submenu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.textContent?.trim()),
      )
      .toBe("조직문화");

    await page.keyboard.press("Enter");
    await expect(submenu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(submenu).toBeHidden();

    const lifeLabel = nav.getByRole("button", { name: "민트 라이프" });
    await lifeLabel.hover();
    await expect(submenu).toBeVisible();
    await page.mouse.move(20, 240);
    await expect(submenu).toBeHidden();
    await expect(lifeLabel).toHaveCSS("color", "rgb(55, 53, 47)");

    await cultureLabel.press("Space");
    await expect(submenu).toBeVisible();
    await firstChild.click();
    await expect(page.locator("h1").first()).toContainText(
      "일을 대하는 우리의 태도",
    );
  });

  test("mobile drawer exposes nav", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only drawer");
    await page.goto("/");
    await page.getByRole("button", { name: "메뉴 열기" }).click();
    const drawer = page.getByRole("dialog");
    await expect(drawer.getByRole("link", { name: "합류 여정" })).toBeVisible();
    await page.screenshot({ path: `${evidenceDir}/mobile-drawer.png` });
    await drawer.getByRole("link", { name: "채용 공고" }).click();
    await expect(drawer).toBeHidden();
    await expect(page.locator("h1").first()).toContainText("채용 중인 포지션");
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
      page.getByAltText("teammint").first(),
      "tablet logo",
    );
    const buttonBox = await requireBox(menuButton, "tablet menu button");
    expect(logoBox.x + logoBox.width).toBeLessThan(buttonBox.x);

    await menuButton.click();
    const drawer = page.getByRole("dialog");
    await expect(drawer.getByRole("link", { name: "합류 여정" })).toBeVisible();
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
      page.getByAltText("teammint").first(),
      "narrow desktop logo",
    );
    const companyBox = await requireBox(
      nav.getByText("회사소개", { exact: true }),
      "narrow desktop first nav item",
    );
    expect(logoBox.x + logoBox.width).toBeLessThan(companyBox.x);

    await nav.getByText("조직문화", { exact: true }).hover();
    const firstChild = page
      .getByRole("region", { name: "하위 메뉴" })
      .getByRole("link", { name: "일을 대하는 우리의 태도" });
    await expect(firstChild).toBeVisible();

    const hasBadOverflow = await firstChild.evaluate(
      (element) =>
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight + 2,
    );
    expect(hasBadOverflow).toBe(false);
  });
});
