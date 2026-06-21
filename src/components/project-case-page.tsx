import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { routePaths } from "@/content/routes";
import type { ProjectCase } from "@/content/types";

export function ProjectCaseArticle({
  project,
}: {
  readonly project: ProjectCase;
}) {
  return (
    <main className="min-h-screen w-full pb-32">
      <p className="px-[14px] pt-[13px] text-[13px] leading-4 text-[rgb(55,53,47)]">
        SLIT / 프로젝트 사례 / {project.title}
      </p>
      <article className="mx-auto mt-[72px] w-[calc(100%_-_48px)] max-w-[760px]">
        <Reveal>
          <Link
            className="inline-flex items-center gap-2 text-[15px] font-extrabold text-inherit no-underline"
            href={routePaths.interviews}
          >
            <ArrowLeft className="size-4" />
            프로젝트 목록
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded bg-[rgba(55,53,47,0.07)] px-2 py-1 text-[13px] font-extrabold leading-4 text-[rgba(55,53,47,0.72)]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 break-keep text-[42px] font-extrabold leading-[1.18] tracking-[-0.01em] text-[rgb(55,53,47)]">
            {project.title}
          </h1>
          <p className="mt-6 break-keep text-[23px] font-extrabold leading-[1.45] text-[rgb(55,53,47)]">
            {project.headline}
          </p>
          <p className="mt-7 text-[17px] leading-8 text-[rgba(55,53,47,0.82)]">
            {project.description}
          </p>
        </Reveal>

        <Reveal className="mt-12 border-y border-[rgba(55,53,47,0.12)] py-7">
          <p className="text-[14px] font-extrabold leading-5 text-[rgba(55,53,47,0.55)]">
            핵심 증거
          </p>
          <p className="mt-3 text-[20px] font-extrabold leading-8 text-[rgb(55,53,47)]">
            {project.proof}
          </p>
          <div className="mt-7 space-y-5">
            {project.summaryBoxes.map((box) => (
              <p
                className="text-[16px] leading-8 text-[rgba(55,53,47,0.82)]"
                key={box.label}
              >
                <span className="font-extrabold text-[rgb(55,53,47)]">
                  {box.label} — {box.value}.
                </span>{" "}
                {box.description}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 space-y-5 text-[18px] leading-9 text-[rgb(55,53,47)]">
          {project.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="mt-18 space-y-20">
          {project.sections.map((section, index) => (
            <Reveal
              className="border-t border-[rgba(55,53,47,0.12)] pt-9"
              delay={index * 0.03}
              key={section.title}
            >
              <p className="text-[14px] font-extrabold leading-5 text-[rgba(55,53,47,0.48)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 break-keep text-[30px] font-extrabold leading-[1.28] tracking-[-0.01em] text-[rgb(55,53,47)]">
                {section.title}
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-9 text-[rgba(55,53,47,0.84)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-[rgba(55,53,47,0.12)] pt-9">
          <h2 className="text-[30px] font-extrabold leading-[1.28] tracking-[-0.01em]">
            남은 결과
          </h2>
          <div className="mt-7 space-y-4 text-[17px] leading-8 text-[rgba(55,53,47,0.84)]">
            {project.results.map((result) => (
              <p key={result}>— {result}</p>
            ))}
          </div>
        </Reveal>

        {project.href ? (
          <Reveal className="mt-10">
            <a
              className="inline-flex items-center gap-2 text-[15px] font-extrabold text-inherit underline decoration-[rgba(55,53,47,0.28)] underline-offset-4"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              공개 자료 보기
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        ) : null}
      </article>
    </main>
  );
}
