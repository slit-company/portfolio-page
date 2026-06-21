import { aboutPage, culturePage, homePage } from "@/content/page-data/company";
import { interviewsPage, lifePage } from "@/content/page-data/people";
import type { PageContent } from "@/content/types";

export const pages = [
  homePage,
  aboutPage,
  culturePage,
  interviewsPage,
  lifePage,
] satisfies readonly PageContent[];

export function getPageByPath(pathname: string): PageContent | undefined {
  return pages.find((page) => page.path === pathname);
}
