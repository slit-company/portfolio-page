"use client";

import {
  ArrowUp,
  BookOpenText,
  Home,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DesktopNav } from "@/components/site-desktop-nav";
import { MobileNav } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { callChatUrl, logoUrl, routePaths } from "@/content/routes";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  readonly children: React.ReactNode;
  readonly showCta?: boolean;
};

export function SiteShell({ children, showCta = false }: SiteShellProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(progress),
      );
      setShowBackToTop(scrollTop > 360);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[rgb(55,53,47)]">
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left scale-x-[var(--scroll-progress,0)] bg-[rgb(154,226,196)]" />
      <header className="sticky top-0 z-50 flex h-12 w-full items-center border-b border-[rgb(55_53_47/0.09)] bg-white px-0">
        <Link
          aria-label="팀민트 채용페이지 홈"
          className="flex h-12 w-[188px] flex-none items-center pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(55_53_47/0.18)]"
          href={routePaths.home}
        >
          <Image
            alt="teammint"
            className="object-contain"
            height={20}
            priority
            src={logoUrl}
            style={{ height: "20px", width: "165px" }}
            unoptimized
            width={165}
          />
        </Link>
        <DesktopNav />
        <MobileNav />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="더보기 메뉴 열기"
              className="ml-auto hidden h-12 w-12 flex-none rounded-none bg-transparent text-[var(--tm-text)] shadow-none hover:bg-[var(--tm-nav-hover-bg)] min-[800px]:inline-flex"
              size="icon"
              type="button"
              variant="ghost"
            >
              <MoreHorizontal className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 min-w-56 rounded-none border border-[rgb(55_53_47/0.09)] bg-[var(--tm-nav-panel-bg)] p-1 text-[var(--tm-text)] shadow-none ring-0"
            sideOffset={0}
          >
            <DropdownMenuItem asChild className="rounded-none px-3 py-2.5">
              <Link href={routePaths.home}>
                <Home className="size-4" />
                팀민트 채용페이지
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="rounded-none px-3 py-2.5">
              <a
                href="https://drive.google.com/file/d/1Pr2n6i2PPHl0FP3vwPN-Olpcx3fHCtac/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <BookOpenText className="size-4" />
                팀민트 컬처덱
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="rounded-none px-3 py-2.5">
              <a href={callChatUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                10분 콜챗 신청하기
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
      {showCta ? (
        <a
          className="fixed bottom-4 left-6 right-6 z-50 flex h-12 items-center justify-center rounded-lg bg-black px-6 text-center text-base font-bold text-white shadow-[0_4px_18px_rgba(0,0,0,0.18)] no-underline md:left-1/2 md:right-auto md:w-[908px] md:-translate-x-1/2"
          href={callChatUrl}
          target="_blank"
          rel="noreferrer"
        >
          10분 콜챗 신청하기
        </a>
      ) : null}
      <Button
        aria-label="맨 위로"
        aria-hidden={!showBackToTop}
        className={cn(
          "fixed left-4 z-50 h-10 w-10 rounded-full border border-white/50 bg-[rgb(38,38,38)] text-white shadow-[0_2px_10px_rgba(0,0,0,0.24)] transition-all hover:bg-black md:bottom-5",
          showCta ? "bottom-20" : "bottom-5",
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0",
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="icon"
        tabIndex={showBackToTop ? 0 : -1}
        type="button"
      >
        <ArrowUp className="size-4" />
      </Button>
    </div>
  );
}
