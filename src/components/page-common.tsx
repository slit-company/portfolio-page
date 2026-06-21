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
          className="whitespace-pre-line break-keep text-[16px] leading-8 text-[rgb(55,53,47)]"
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
      <Reveal className="space-y-7">
        {stats.map((stat) => (
          <div key={stat.value}>
            <h3 className="text-[26px] font-extrabold leading-[1.3] text-[rgb(55,53,47)]">
              {stat.value}
            </h3>
            <p className="mt-2 text-[17px] leading-7 text-[rgb(55,53,47)]">
              {stat.label}
            </p>
            <p className="text-[17px] leading-7 text-[rgb(55,53,47)]">
              {stat.description}
            </p>
          </div>
        ))}
      </Reveal>
    );
  }

  return (
    <Reveal className="space-y-3 max-w-[760px]">
      {stats.map((stat) => (
        <Card
          className="rounded-none border border-[rgba(55,53,47,0.12)] bg-white py-0 shadow-none ring-0"
          key={stat.value}
        >
          <CardContent className="px-[21px] py-4">
            <h3 className="border-b border-[rgba(55,53,47,0.12)] pb-3 text-[23px] font-extrabold leading-[1.3]">
              {stat.value}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.55]">{stat.label}</p>
            <p className="text-[15px] leading-[1.55]">{stat.description}</p>
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
        "border-t border-[rgba(55,53,47,0.12)] pt-10",
        compact ? null : null,
      )}
      delay={index * 0.03}
    >
      <div>
        {section.eyebrow ? (
          <p className="mb-3 text-[15px] font-extrabold text-[rgba(55,53,47,0.55)]">
            {section.eyebrow}
          </p>
        ) : null}
        <h2 className="whitespace-pre-line text-balance break-keep text-[clamp(24px,4.2vw,30px)] font-extrabold leading-[1.32] tracking-[-0.01em] text-[rgb(55,53,47)]">
          {section.title}
        </h2>
        {section.body ? (
          <div className="mt-8">
            <TextLines lines={section.body} />
          </div>
        ) : null}
      </div>
      <div className="mt-8 space-y-5">
        {section.items ? (
          <ol className="space-y-0">
            {section.items.map((item, itemIndex) => (
              <li
                className="flex gap-4 border-b border-[rgba(55,53,47,0.11)] py-4 text-[19px] font-extrabold leading-7"
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
          <div className="space-y-5">
            {section.columns.map((column) => (
              <MotionLift key={column.title}>
                <Card className="h-full rounded-none border border-[rgba(55,53,47,0.1)] bg-white py-0 shadow-none ring-0">
                  <CardContent className="p-5">
                    <h3 className="text-[18px] font-extrabold leading-7">
                      {column.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-7 text-[rgba(55,53,47,0.82)]">
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
    <Reveal className="space-y-4">
      {linkCards.map((card) => (
        <MotionLift key={card.title}>
          <a
            className="block text-inherit no-underline"
            href={card.href}
            rel="noreferrer"
            target="_blank"
          >
            <Card className="h-full rounded-none border border-[rgba(55,53,47,0.1)] bg-white py-0 shadow-none ring-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[19px] font-extrabold">{card.title}</h3>
                  <ArrowUpRight className="mt-1 size-4" />
                </div>
                <p className="mt-4 text-[16px] leading-7 text-[rgba(55,53,47,0.78)]">
                  {card.description}
                </p>
                <p className="mt-5 text-[15px] font-extrabold">바로가기</p>
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
      className="mt-24 border-y border-[rgba(55,53,47,0.12)] bg-[rgba(55,53,47,0.04)] py-8"
      id="application"
    >
      <p className="break-keep text-[16px] leading-8">
        반복 확인과 재정리가 많은 업무를 AI Agent나 운영 시스템으로 옮기고 싶다면, 먼저 현재 업무가 어떤 순서로 돌아가는지부터 이야기해 주세요. 우리는 자동화 가능한
        구간과 사람이 검토해야 할 구간을 함께 정리합니다.
      </p>
      <Button
        asChild
        className="mt-5 h-10 rounded-lg bg-black px-4 text-[15px] text-white hover:bg-black/80"
      >
        <a href={callChatUrl}>문의하기</a>
      </Button>
    </Reveal>
  );
}

export function PageFooter() {
  return (
    <footer className="mt-20 flex flex-col gap-3 pb-12 text-[15px] text-[rgba(55,53,47,0.68)] md:flex-row md:items-center md:justify-between">
      <p>2026 SLIT. Company portfolio.</p>
      <Link
        className="font-extrabold text-inherit no-underline"
        href={routePaths.home}
      >
        메인으로
      </Link>
    </footer>
  );
}
