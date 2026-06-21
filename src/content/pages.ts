import { awardsPage, homePage } from "@/content/page-data/company";
import { careersPage } from "@/content/page-data/hiring";
import { interviewsPage, lifePage } from "@/content/page-data/people";
import type { PageContent } from "@/content/types";

export const pages = [
  homePage,
  interviewsPage,
  lifePage,
  careersPage,
  awardsPage,
] satisfies readonly PageContent[];

export function getPageByPath(pathname: string): PageContent | undefined {
  return pages.find((page) => page.path === pathname);
}
