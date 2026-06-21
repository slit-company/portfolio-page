import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import type { PageContent } from "@/content/types";
import { cn } from "@/lib/utils";

type PageFrameProps = {
  readonly page: PageContent;
  readonly home?: boolean;
  readonly children: ReactNode;
};

export function PageFrame({ page, home = false, children }: PageFrameProps) {
  return (
    <main className="min-h-screen w-full pb-32">
      <p className="px-[14px] pt-[13px] text-[13px] leading-4 text-[rgb(55,53,47)]">
        {page.breadcrumb}
      </p>
      <article
        className={cn(
          "mx-auto w-[calc(100%_-_48px)]",
          home
            ? "mt-[22px] max-w-[var(--wide-content-max-width)]"
            : "mt-[120px] max-w-[var(--content-max-width)]",
        )}
      >
        {children}
      </article>
    </main>
  );
}

export function PageTitle({
  children,
  large = false,
}: {
  readonly children: ReactNode;
  readonly large?: boolean;
}) {
  return (
    <Reveal>
      <h1
        className={cn(
          "text-balance break-keep font-extrabold tracking-[-0.01em] text-[rgb(55,53,47)]",
          large
            ? "text-[clamp(32px,5.2vw,42px)] leading-[1.2]"
            : "text-[clamp(28px,4.4vw,34px)] leading-[1.2]",
        )}
      >
        {children}
      </h1>
    </Reveal>
  );
}
