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

export const callChatUrl = "#application";

export const siteRoutes = [
  { key: "home", path: routePaths.home, title: "SLIT Portfolio" },
  { key: "about", path: routePaths.about, title: "SLIT 소개" },
  {
    key: "culture",
    path: routePaths.culture,
    title: "일을 대하는 우리의 태도",
  },
  {
    key: "interviews",
    path: routePaths.interviews,
    title: "프로젝트 포트폴리오",
  },
  { key: "life", path: routePaths.life, title: "일하는 환경" },
  { key: "journey", path: routePaths.journey, title: "합류여정" },
  { key: "careers", path: routePaths.careers, title: "채용 중인 포지션" },
] satisfies readonly {
  readonly key: RouteKey;
  readonly path: string;
  readonly title: string;
}[];

export const navItems: readonly NavItem[] = [
  { label: "회사소개", href: routePaths.about },
  {
    label: "일하는 방식",
    children: [
      { label: "일을 대하는 우리의 태도", href: routePaths.culture },
      {
        label: "일하는 환경",
        href: routePaths.life,
      },
    ],
  },
  {
    label: "프로젝트",
    children: [
      { label: "프로젝트 포트폴리오", href: routePaths.interviews },
      { label: "Recova와 실적", href: routePaths.about },
    ],
  },
  { label: "합류 여정", href: routePaths.journey },
  { label: "채용 공고", href: routePaths.careers },
];
