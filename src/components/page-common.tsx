import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MotionLift, Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { callChatUrl, routePaths } from "@/content/routes";
import type { LinkCard, SectionBlock, StatItem } from "@/content/types";
import { cn } from "@/lib/utils";

export function TextLines({ lines }: { readonly lines: readonly string[] }) {
  return (
    <div className="space-y-3">
      {lines.map((line) => (
        <p
          className="whitespace-pre-line text-[14px] leading-[1.55] text-[rgb(55,53,47)]"
          key={line}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

type StatsProps = {
  readonly stats?: readonly StatItem[];
  readonly variant?: "cards" | "plain";
};

export function Stats({ stats, variant = "cards" }: StatsProps) {
  if (!stats) {
    return null;
  }

  if (variant === "plain") {
    return (
      <Reveal className="grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value}>
            <h3 className="text-[24px] font-semibold leading-[1.3] text-[rgb(55,53,47)]">
              {stat.value}
            </h3>
            <p className="mt-2 text-[16px] leading-6 text-[rgb(55,53,47)]">
              {stat.label}
            </p>
            <p className="text-[16px] leading-6 text-[rgb(55,53,47)]">
              {stat.description}
            </p>
          </div>
        ))}
      </Reveal>
    );
  }

  return (
    <Reveal className="grid gap-6 sm:grid-cols-2 lg:max-w-[816px] lg:grid-cols-[repeat(4,168px)] lg:gap-12">
      {stats.map((stat) => (
        <Card
          className="rounded-[20px] border border-[rgba(55,53,47,0.12)] bg-white py-0 shadow-none ring-0"
          key={stat.value}
        >
          <CardContent className="px-[21px] py-4">
            <h3 className="border-b border-[rgba(55,53,47,0.12)] pb-3 text-[21px] font-semibold leading-[1.3]">
              {stat.value}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.5]">{stat.label}</p>
            <p className="text-[14px] leading-[1.5]">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </Reveal>
  );
}

export function Section({
  section,
  index,
  compact = false,
}: {
  readonly section: SectionBlock;
  readonly index: number;
  readonly compact?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "grid gap-10 border-t border-[rgba(55,53,47,0.12)] pt-10 md:grid-cols-[0.85fr_1.15fr]",
        compact ? "md:grid-cols-[220px_1fr]" : null,
      )}
      delay={index * 0.03}
    >
      <div>
        {section.eyebrow ? (
          <p className="mb-3 text-sm font-bold text-[rgba(55,53,47,0.55)]">
            {section.eyebrow}
          </p>
        ) : null}
        <h2 className="whitespace-pre-line text-[28px] font-bold leading-[1.32] tracking-normal text-[rgb(55,53,47)]">
          {section.title}
        </h2>
        {section.body ? (
          <div className="mt-8 md:hidden">
            <TextLines lines={section.body} />
          </div>
        ) : null}
      </div>
      <div className="space-y-5">
        {section.body ? (
          <div className="hidden md:block">
            <TextLines lines={section.body} />
          </div>
        ) : null}
        {section.items ? (
          <ol className="space-y-0">
            {section.items.map((item, itemIndex) => (
              <li
                className="flex gap-4 border-b border-[rgba(55,53,47,0.11)] py-4 text-[18px] font-bold leading-7"
                key={item}
              >
                <span className="w-8 shrink-0 tabular-nums text-[rgba(55,53,47,0.75)]">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        ) : null}
        {section.columns ? (
          <div className="grid gap-4 md:grid-cols-2">
            {section.columns.map((column) => (
              <MotionLift key={column.title}>
                <Card className="h-full rounded-[20px] border border-[rgba(55,53,47,0.1)] bg-white py-0 shadow-none ring-0">
                  <CardContent className="p-5">
                    <h3 className="text-[17px] font-bold leading-7">
                      {column.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[rgba(55,53,47,0.82)]">
                      {column.body}
                    </p>
                  </CardContent>
                </Card>
              </MotionLift>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export function LinkCards({
  linkCards,
}: {
  readonly linkCards?: readonly LinkCard[];
}) {
  if (!linkCards) {
    return null;
  }

  return (
    <Reveal className="grid gap-4 md:grid-cols-2">
      {linkCards.map((card) => (
        <MotionLift key={card.title}>
          <a
            className="block h-full text-inherit no-underline"
            href={card.href}
            rel="noreferrer"
            target="_blank"
          >
            <Card className="h-full rounded-[20px] border border-[rgba(55,53,47,0.1)] bg-white py-0 shadow-none ring-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <ArrowUpRight className="mt-1 size-4" />
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[rgba(55,53,47,0.78)]">
                  {card.description}
                </p>
                <p className="mt-5 text-sm font-bold">바로가기</p>
              </CardContent>
            </Card>
          </a>
        </MotionLift>
      ))}
    </Reveal>
  );
}

export function ContactCta() {
  return (
    <Reveal
      className="mt-24 rounded-[20px] bg-[rgba(55,53,47,0.06)] p-6"
      id="application"
    >
      <p className="text-[15px] leading-7">
        지원/문의 경로는 업데이트 예정입니다. 그 전까지는 포트폴리오와 작업 가능
        범위를 먼저 정리해두고, SLIT이 가진 프로젝트를 어떤 브랜드, 웹, 자료,
        콘텐츠로 바꿀 수 있을지 중심으로 이야기합니다.
      </p>
      <Button
        asChild
        className="mt-5 h-10 rounded-lg bg-black px-4 text-white hover:bg-black/80"
      >
        <a href={callChatUrl}>지원/문의 경로 확인하기</a>
      </Button>
    </Reveal>
  );
}

export function PageFooter() {
  return (
    <footer className="mt-20 flex flex-col gap-3 pb-12 text-sm text-[rgba(55,53,47,0.68)] md:flex-row md:items-center md:justify-between">
      <p>2026 SLIT. Portfolio and recruiting page.</p>
      <Link
        className="font-bold text-inherit no-underline"
        href={routePaths.home}
      >
        메인으로
      </Link>
    </footer>
  );
}
