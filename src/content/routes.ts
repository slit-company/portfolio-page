import type { NavItem, RouteKey } from "@/content/types";

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  about: "/33adb7f5-8f0a-80b3-b007-ed62e129524f",
  culture: "/33adb7f5-8f0a-803c-a1f9-f1bda51e20f0",
  interviews: "/2d2db7f5-8f0a-81e9-9167-e4de7443173a",
  life: "/2d2db7f5-8f0a-8134-9535-f3e577a4dfdc",
  journey: "/33adb7f5-8f0a-8028-861d-e8d7fbaf52bd",
  careers: "/2d2db7f5-8f0a-81b7-b5b6-d7f08537b507",
};

export const logoUrl = "";

export const faviconUrl = "/favicon.ico";

export const ogImageUrl = "/window.svg";

export const callChatUrl = "/#application";

export const siteRoutes = [
  { key: "home", path: routePaths.home, title: "SLIT" },
  { key: "about", path: routePaths.about, title: "SLIT 소개" },
  {
    key: "culture",
    path: routePaths.culture,
    title: "프로젝트 원칙",
  },
  {
    key: "interviews",
    path: routePaths.interviews,
    title: "프로젝트 사례",
  },
  { key: "life", path: routePaths.life, title: "일하는 방식" },
] satisfies readonly {
  readonly key: RouteKey;
  readonly path: string;
  readonly title: string;
}[];

export const navItems: readonly NavItem[] = [
  { label: "SLIT 소개", href: routePaths.about },
  {
    label: "프로젝트 사례",
    children: [
      { label: "프로젝트 사례 전체", href: routePaths.interviews },
      { label: "Recova flagship PoC", href: `${routePaths.interviews}/recova` },
    ],
  },
  {
    label: "일하는 방식",
    children: [
      { label: "프로젝트 원칙", href: routePaths.culture },
      {
        label: "운영 시스템 구축 방식",
        href: routePaths.life,
      },
    ],
  },
  {
    label: "적용 분야",
    children: [
      { label: "법률·금융 업무흐름", href: routePaths.interviews },
      { label: "운영·전시·콘텐츠", href: routePaths.interviews },
    ],
  },
  { label: "문의하기", href: callChatUrl },
];
