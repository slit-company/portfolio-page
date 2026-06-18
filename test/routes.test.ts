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

  it("keeps SLIT navigation data shared and complete", () => {
    const navLabels = navItems.map((item) => item.label);
    expect(navLabels).toEqual([
      "회사소개",
      "일하는 방식",
      "프로젝트",
      "합류 여정",
      "채용 공고",
    ]);
    expect(
      navItems.flatMap((item) => item.children ?? []).map((item) => item.label),
    ).toContain("프로젝트 포트폴리오");
  });

  it("replaces the public recruiting shell with SLIT portfolio content", () => {
    const allText = JSON.stringify({ navItems, pages, siteRoutes });

    expect(allText).toContain("SLIT");
    expect(allText).toContain("Recova");
    expect(allText).toContain("Neural Arcade");
    expect(allText).toContain("d8d / lilmgenius");
    expect(allText).toContain("자세히 보기");
    expect(allText).not.toMatch(
      /팀민트|TEAM MINT|team-mint|ReFit|Mix|호치민|퍼포먼스 마케터|Refresh People|people@team-mint\.io/,
    );
  });
});
