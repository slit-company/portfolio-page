"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { navItems } from "@/content/routes";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/utils";

function SubmenuAnchor({ item }: { readonly item: NavItem }) {
  const className =
    "tm-oopy-nav-font flex min-h-10 w-full min-w-0 items-center justify-center rounded-none px-2 py-1 text-center text-[15px] font-medium leading-5 text-[var(--tm-text)] no-underline transition-colors duration-150 break-keep hover:bg-[rgb(245,245,245)] focus-visible:bg-[rgb(245,245,245)] focus-visible:outline-none";

  if (!item.href) {
    return <span className={className}>{item.label}</span>;
  }

  if (item.external) {
    return (
      <a
        className={className}
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  );
}

function TopNavItem({
  active,
  item,
  onActivate,
  onFocusActivate,
  setControlRef,
}: {
  readonly active: boolean;
  readonly item: NavItem;
  readonly onActivate: () => void;
  readonly onFocusActivate: () => void;
  readonly setControlRef: (
    element: HTMLAnchorElement | HTMLButtonElement | null,
  ) => void;
}) {
  const hasPanel = Boolean(item.children?.length);
  const className =
    "group tm-oopy-nav-font inline-flex h-12 w-full items-center justify-center bg-transparent px-2 text-center text-[17px] font-bold leading-none text-[var(--tm-text)] no-underline transition-colors duration-150 hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[rgb(55_53_47/0.18)]";
  const labelClassName = cn(
    "relative inline-flex items-center after:pointer-events-none after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--tm-text)] after:transition-transform after:duration-150 after:ease-out group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100",
    active ? "after:scale-x-100" : undefined,
  );
  const label = <span className={labelClassName}>{item.label}</span>;

  if (!item.href) {
    return (
      <button
        aria-controls={hasPanel ? "desktop-submenu-strip" : undefined}
        aria-expanded={hasPanel ? active : undefined}
        aria-haspopup={hasPanel ? "menu" : undefined}
        className={className}
        onClick={onActivate}
        onFocus={onFocusActivate}
        onMouseEnter={onActivate}
        ref={setControlRef}
        type="button"
      >
        {label}
      </button>
    );
  }

  if (item.external) {
    return (
      <a
        className={className}
        href={item.href}
        onFocus={onFocusActivate}
        onMouseEnter={onActivate}
        ref={setControlRef}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      className={className}
      href={item.href}
      onFocus={onFocusActivate}
      onMouseEnter={onActivate}
      ref={setControlRef}
    >
      {label}
    </Link>
  );
}

export function DesktopNav() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const controlRefs = useRef(
    new Map<string, HTMLAnchorElement | HTMLButtonElement>(),
  );
  const skipNextFocusActivation = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = navItems.findIndex((item) => item.label === activeLabel);
  const activeItem = activeIndex >= 0 ? navItems[activeIndex] : undefined;
  const submenuChildren = activeItem?.children ?? [];
  const closeMenu = () => setActiveLabel(null);
  const activateOnFocus = (label: string) => {
    if (skipNextFocusActivation.current) {
      return;
    }
    setActiveLabel(label);
  };
  const restoreFocus = (label: string | null) => {
    if (!label) {
      return;
    }
    skipNextFocusActivation.current = true;
    window.requestAnimationFrame(() => {
      controlRefs.current.get(label)?.focus();
      window.requestAnimationFrame(() => {
        skipNextFocusActivation.current = false;
      });
    });
  };

  return (
    <nav
      aria-label="주요 메뉴"
      className="relative hidden h-full w-[calc(100vw-345px)] flex-none min-[800px]:block"
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          event.currentTarget.contains(event.relatedTarget)
        ) {
          return;
        }
        closeMenu();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          const labelToRestore = activeLabel;
          closeMenu();
          restoreFocus(labelToRestore);
        }
      }}
      onMouseLeave={closeMenu}
    >
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => (
          <TopNavItem
            active={activeLabel === item.label}
            item={item}
            key={item.label}
            onActivate={() => setActiveLabel(item.label)}
            onFocusActivate={() => activateOnFocus(item.label)}
            setControlRef={(element) => {
              if (element) {
                controlRefs.current.set(item.label, element);
                return;
              }
              controlRefs.current.delete(item.label);
            }}
          />
        ))}
      </div>
      <AnimatePresence>
        {submenuChildren.length > 0 && activeIndex >= 0 ? (
          <motion.section
            aria-label="하위 메뉴"
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            className="fixed left-0 top-12 z-[61] h-[104px] w-screen overflow-hidden border-b border-[rgb(55_53_47/0.09)] bg-white"
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, scaleY: 0.96, y: -10 }
            }
            id="desktop-submenu-strip"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, scaleY: 0.92, y: -14 }
            }
            style={{ transformOrigin: "top" }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ml-[188px] grid h-full w-[calc(100vw-345px)] grid-cols-5 pt-2">
              <div
                className="flex flex-col items-center"
                style={{ gridColumnStart: activeIndex + 1 }}
              >
                {submenuChildren.map((child) => (
                  <SubmenuAnchor item={child} key={child.label} />
                ))}
              </div>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
