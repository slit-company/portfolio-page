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
          "mx-auto w-[calc(100%_-_48px)] max-w-[908px]",
          home ? "mt-[22px]" : "mt-[120px]",
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
          "break-keep font-bold tracking-normal text-[rgb(55,53,47)]",
          large ? "text-[42px] leading-[1.2]" : "text-[34px] leading-[1.2]",
        )}
      >
        {children}
      </h1>
    </Reveal>
  );
}
