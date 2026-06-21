import type { NavItem, RouteKey } from "@/content/types";

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  interviews: "/work",
  life: "/how-we-work",
  careers: "/careers",
  awards: "/awards",
};

export const logoUrl = "";

export const faviconUrl = "/favicon.ico";

export const ogImageUrl = "/window.svg";

export const callChatUrl = "/contact";

export const siteRoutes = [
  { key: "home", path: routePaths.home, title: "SLIT" },
  {
    key: "interviews",
    path: routePaths.interviews,
    title: "프로젝트 사례",
  },
  { key: "life", path: routePaths.life, title: "일하는 방식" },
  { key: "awards", path: routePaths.awards, title: "수상" },
] satisfies readonly {
  readonly key: RouteKey;
  readonly path: string;
  readonly title: string;
}[];

export const navItems: readonly NavItem[] = [
  { label: "SLIT 소개", href: routePaths.home },
  { label: "프로젝트 사례", href: routePaths.interviews },
  { label: "일하는 방식", href: routePaths.life },
  { label: "수상", href: routePaths.awards },
  { label: "문의하기", href: callChatUrl },
];
