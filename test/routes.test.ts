import { describe, expect, it } from "vitest";
import { pages } from "@/content/pages";
import {
  getProjectCaseBySlug,
  getProjectCasePath,
  projectCases,
} from "@/content/project-cases";
import { navItems, siteRoutes } from "@/content/routes";

describe("route registry", () => {
  it("contains the five public AX routes", () => {
    expect(siteRoutes.map((route) => route.path)).toEqual([
      "/",
      "/33adb7f5-8f0a-80b3-b007-ed62e129524f",
      "/33adb7f5-8f0a-803c-a1f9-f1bda51e20f0",
      "/2d2db7f5-8f0a-81e9-9167-e4de7443173a",
      "/2d2db7f5-8f0a-8134-9535-f3e577a4dfdc",
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
      "SLIT 소개",
      "프로젝트 사례",
      "일하는 방식",
      "적용 분야",
      "문의하기",
    ]);
    expect(
      navItems.flatMap((item) => item.children ?? []).map((item) => item.label),
    ).toContain("프로젝트 사례 전체");
  });

  it("replaces the public shell with SLIT portfolio content", () => {
    const allText = JSON.stringify({ navItems, pages, siteRoutes });

    expect(allText).toContain("SLIT");
    expect(allText).toContain("Recova");
    expect(allText).toContain("Neural Arcade");
    expect(allText).toContain("d8d / lilmgenius");
    expect(allText).toContain("업무흐름");
    expect(allText).toContain("운영 시스템");
    expect(allText).not.toContain("케이스 읽기");
    expect(allText).not.toMatch(
      /팀민트|TEAM MINT|team-mint|ReFit|Mix|호치민|퍼포먼스 마케터|Refresh People|people@team-mint\.io/,
    );
  });

  it("keeps hiring copy out of the AX-facing pages", () => {
    const allPageText = JSON.stringify(pages);

    expect(allPageText).not.toMatch(
      /채용|지원자|디자이너가 합류|초기 디자이너를 찾/,
    );
  });

  it("builds blog-style project case paths under the portfolio page", () => {
    expect(projectCases).toHaveLength(9);
    expect(getProjectCasePath("recova")).toBe(
      "/2d2db7f5-8f0a-81e9-9167-e4de7443173a/recova",
    );
    expect(getProjectCaseBySlug("neural-arcade-ax")?.title).toBe(
      "Neural Arcade 개발·콘텐츠 자동화",
    );

    for (const project of projectCases) {
      expect(["flagship", "major", "expanding"]).toContain(project.tier);
      expect(project.summaryBoxes.length).toBeGreaterThanOrEqual(3);
      expect(project.sections.length).toBeGreaterThanOrEqual(3);
      expect(project.summary.length).toBeGreaterThanOrEqual(2);
      expect(project.results.length).toBeGreaterThanOrEqual(3);
    }
    expect(
      projectCases.filter((project) => project.tier === "flagship"),
    ).toHaveLength(1);
  });
});
