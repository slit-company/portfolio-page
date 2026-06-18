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

export const logoUrl =
  "https://oopy.lazyrockets.com/api/rest/cdn/image/019b4f3c-9a2b-710e-acc4-6bbb3463e633.png";

export const faviconUrl =
  "https://oopy.lazyrockets.com/api/rest/cdn/image/019b6e32-8e6d-746d-9f1e-618cc0a84777.jpeg";

export const ogImageUrl =
  "https://oopy.lazyrockets.com/api/rest/cdn/image/019b6e36-8be1-7489-bb18-b87c4cc94141.png";

export const callChatUrl =
  "https://form.asana.com/?k=Ee6rHztOyxsJXGpU5Ypnrg&d=1202834674314617";

export const siteRoutes = [
  { key: "home", path: routePaths.home, title: "팀민트 채용페이지" },
  { key: "about", path: routePaths.about, title: "팀민트 소개" },
  {
    key: "culture",
    path: routePaths.culture,
    title: "일을 대하는 우리의 태도",
  },
  { key: "interviews", path: routePaths.interviews, title: "구성원 인터뷰" },
  { key: "life", path: routePaths.life, title: "팀민트 라이프" },
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
    label: "조직문화",
    children: [
      { label: "일을 대하는 우리의 태도", href: routePaths.culture },
      {
        label: "팀민트 컬처덱",
        href: "https://drive.google.com/file/d/1Pr2n6i2PPHl0FP3vwPN-Olpcx3fHCtac/view?usp=sharing",
        external: true,
      },
    ],
  },
  {
    label: "민트 라이프",
    children: [
      { label: "구성원 인터뷰", href: routePaths.interviews },
      { label: "팀민트 라이프", href: routePaths.life },
    ],
  },
  { label: "합류 여정", href: routePaths.journey },
  { label: "채용 공고", href: routePaths.careers },
];
