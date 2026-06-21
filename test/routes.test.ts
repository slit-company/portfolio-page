import { describe, expect, it } from "vitest";
import { getPageByPath, pages } from "@/content/pages";
import {
  getProjectCaseBySlug,
  getProjectCasePath,
  projectCases,
} from "@/content/project-cases";
import { navItems, siteRoutes } from "@/content/routes";

describe("route registry", () => {
  it("contains the public AX routes with clean slugs", () => {
    expect(siteRoutes.map((route) => route.path)).toEqual([
      "/",
      "/work",
      "/how-we-work",
      "/awards",
    ]);
  });

  it("has content for every route", () => {
    for (const route of siteRoutes) {
      const page = getPageByPath(route.path);
      expect(page, `page for ${route.path}`).toBeDefined();
      expect(page?.title, `title for ${route.path}`).toBeTruthy();
      const hasContent =
        (page?.sections.length ?? 0) > 0 ||
        (page?.projectCases?.length ?? 0) > 0;
      expect(hasContent, `content for ${route.path}`).toBe(true);
    }
  });

  it("keeps SLIT navigation data shared and complete", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "SLIT 소개",
      "프로젝트 사례",
      "일하는 방식",
      "수상",
      "문의하기",
    ]);
    expect(navItems.map((item) => item.href)).toEqual([
      "/",
      "/work",
      "/how-we-work",
      "/awards",
      "/contact",
    ]);
  });

  it("replaces the public shell with SLIT portfolio content", () => {
    const allText = JSON.stringify({ navItems, pages, siteRoutes });

    expect(allText).toContain("SLIT");
    expect(allText).toContain("Recova");
    expect(allText).toContain("Neural Arcade");
    expect(allText).toContain("d8d");
    expect(allText).toContain("업무흐름");
    expect(allText).toContain("가짜 노동");
    expect(allText).not.toContain("케이스 읽기");
    expect(allText).not.toMatch(
      /팀민트|TEAM MINT|team-mint|ReFit|Mix|호치민|퍼포먼스 마케터|Refresh People|people@team-mint\.io/,
    );
  });

  it("keeps hiring copy out of the AX-facing pages", () => {
    const axPages = pages.filter((page) => page.key !== "careers");
    const allPageText = JSON.stringify(axPages);

    expect(allPageText).not.toMatch(
      /채용|지원자|디자이너가 합류|초기 디자이너를 찾/,
    );
  });

  it("builds clean-slug project case paths under the portfolio page", () => {
    const expectedSlugs = [
      "recova",
      "lawtalk",
      "outsome",
      "artwizard",
      "neural-arcade",
      "peopet",
      "spec",
      "anyon",
      "content",
    ];
    expect(projectCases).toHaveLength(expectedSlugs.length);
    expect(projectCases.map((project) => project.slug)).toEqual(expectedSlugs);

    expect(getProjectCasePath("recova")).toBe("/work/recova");
    expect(getProjectCaseBySlug("neural-arcade")?.title).toBe(
      "Neural Arcade 개발·콘텐츠 자동화",
    );

    const blockKinds = new Set(["paragraph", "subheading", "bullets"]);
    for (const project of projectCases) {
      expect(["flagship", "major", "expanding"]).toContain(project.tier);
      expect(project.headline.length).toBeGreaterThan(0);
      expect(project.intro?.length ?? 0).toBeGreaterThanOrEqual(1);
      expect(project.resultTiles.length).toBeGreaterThanOrEqual(3);
      expect(project.sections.length).toBeGreaterThanOrEqual(2);
      for (const section of project.sections) {
        expect(section.title.length).toBeGreaterThan(0);
        expect(section.blocks.length).toBeGreaterThan(0);
        for (const block of section.blocks) {
          expect(blockKinds.has(block.kind)).toBe(true);
        }
      }
    }
    expect(
      projectCases.filter((project) => project.tier === "flagship"),
    ).toHaveLength(1);
  });
});
