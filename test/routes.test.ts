import { describe, expect, it } from "vitest";
import { pages } from "@/content/pages";
import { navItems, siteRoutes } from "@/content/routes";

describe("route registry", () => {
  it("contains the seven public nav routes", () => {
    expect(siteRoutes.map((route) => route.path)).toEqual([
      "/",
      "/33adb7f5-8f0a-80b3-b007-ed62e129524f",
      "/33adb7f5-8f0a-803c-a1f9-f1bda51e20f0",
      "/2d2db7f5-8f0a-81e9-9167-e4de7443173a",
      "/2d2db7f5-8f0a-8134-9535-f3e577a4dfdc",
      "/33adb7f5-8f0a-8028-861d-e8d7fbaf52bd",
      "/2d2db7f5-8f0a-81b7-b5b6-d7f08537b507",
    ]);
  });

  it("has content for every route", () => {
    expect(pages).toHaveLength(siteRoutes.length);
    for (const route of siteRoutes) {
      const page = pages.find((candidate) => candidate.path === route.path);
      expect(page?.title).toBe(route.title);
      expect(page?.sections.length).toBeGreaterThan(0);
    }
  });

  it("keeps navigation data shared and complete", () => {
    const navLabels = navItems.map((item) => item.label);
    expect(navLabels).toEqual([
      "회사소개",
      "조직문화",
      "민트 라이프",
      "합류 여정",
      "채용 공고",
    ]);
    expect(
      navItems.flatMap((item) => item.children ?? []).map((item) => item.label),
    ).toContain("구성원 인터뷰");
  });
});
