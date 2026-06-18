"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type AnchorHTMLAttributes, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logoUrl, navItems } from "@/content/routes";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/utils";

export { DesktopNav } from "@/components/site-desktop-nav";

type NavAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly current?: boolean;
  readonly item: NavItem;
  readonly mobile?: boolean;
};

const NavAnchor = forwardRef<HTMLAnchorElement, NavAnchorProps>(
  function NavAnchor(
    { className, current = false, item, mobile = false, ...props },
    ref,
  ) {
    const anchorClassName = cn(
      "font-bold no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(32_120_220/0.22)]",
      mobile
        ? "flex min-h-11 items-center border-l-2 border-transparent px-5 text-[15px] leading-6"
        : "text-[16px]",
      mobile && current
        ? "border-[var(--tm-text)] bg-[var(--tm-nav-active-bg)] text-[var(--tm-text)]"
        : undefined,
      !mobile && current
        ? "bg-[var(--tm-nav-active-bg)] text-[var(--tm-nav-accent)]"
        : undefined,
      !current ? "text-inherit hover:bg-[var(--tm-nav-hover-bg)]" : undefined,
      className,
    );

    if (!item.href) {
      return (
        <span
          className={cn(
            "font-bold",
            mobile
              ? "flex min-h-11 items-center px-5 text-[15px] leading-6"
              : "text-[16px]",
          )}
        >
          {item.label}
        </span>
      );
    }

    if (item.external) {
      return (
        <a
          aria-current={current ? "page" : undefined}
          className={anchorClassName}
          href={item.href}
          ref={ref}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        aria-current={current ? "page" : undefined}
        className={anchorClassName}
        href={item.href}
        ref={ref}
        {...props}
      >
        {item.label}
      </Link>
    );
  },
);

function isInternalCurrent(item: NavItem, pathname: string) {
  if (item.href && !item.external && item.href === pathname) {
    return true;
  }

  return (
    item.children?.some(
      (child) => child.href && !child.external && child.href === pathname,
    ) ?? false
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="ml-auto flex items-center min-[800px]:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-label="메뉴 열기"
            className="h-11 w-11 rounded-md bg-transparent shadow-none hover:bg-[var(--tm-nav-hover-bg)]"
            size="icon"
            variant="ghost"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-[82vw] max-w-[340px] gap-0 overflow-y-auto border-l border-[var(--tm-border)] bg-[var(--tm-header-surface)] p-0 text-[var(--tm-text)] shadow-none"
          showCloseButton={false}
          side="right"
        >
          <SheetHeader className="h-12 justify-center border-b border-[rgb(55_53_47/0.09)] px-4 py-0">
            <SheetTitle>
              <Image
                alt="teammint"
                className="object-contain"
                height={22}
                src={logoUrl}
                style={{ height: "22px", width: "134px" }}
                unoptimized
                width={134}
              />
            </SheetTitle>
            <SheetClose asChild>
              <Button
                aria-label="메뉴 닫기"
                className="absolute top-0 right-0 h-12 w-12 rounded-none bg-transparent text-[var(--tm-text)] shadow-none hover:bg-[var(--tm-nav-hover-bg)]"
                size="icon"
                variant="ghost"
              >
                <X className="size-5" />
              </Button>
            </SheetClose>
          </SheetHeader>
          <nav aria-label="모바일 메뉴" className="flex flex-col py-2">
            {navItems.map((item) => (
              <div
                className="border-b border-[rgb(55_53_47/0.08)] py-1 last:border-b-0"
                key={item.label}
              >
                {item.children ? (
                  <div>
                    <p className="px-5 py-3 text-[15px] font-bold leading-6 text-[var(--tm-text)]">
                      {item.label}
                    </p>
                    <div className="pb-1">
                      {item.children.map((child) => (
                        <SheetClose asChild key={child.label}>
                          <NavAnchor
                            className="min-h-10 pl-8 text-[14px] font-medium"
                            current={isInternalCurrent(child, pathname)}
                            item={child}
                            mobile
                          />
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ) : (
                  <SheetClose asChild>
                    <NavAnchor
                      current={isInternalCurrent(item, pathname)}
                      item={item}
                      mobile
                    />
                  </SheetClose>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
