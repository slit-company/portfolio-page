import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
        SLIT Portfolio / 프로젝트 포트폴리오 / {project.title}
      </p>
      <article className="mx-auto mt-[72px] w-[calc(100%_-_48px)] max-w-[908px]">
        <Reveal>
          <Link
            className="inline-flex items-center gap-2 text-[15px] font-bold text-inherit no-underline"
            href={routePaths.interviews}
          >
            <ArrowLeft className="size-4" />
            프로젝트 목록
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded bg-[rgba(55,53,47,0.07)] px-2 py-1 text-[13px] font-bold leading-4 text-[rgba(55,53,47,0.72)]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 break-keep text-[42px] font-bold leading-[1.18] tracking-normal text-[rgb(55,53,47)]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[720px] break-keep text-[22px] font-semibold leading-[1.45] text-[rgb(55,53,47)]">
            {project.headline}
          </p>
          <p className="mt-7 max-w-[680px] text-[16px] leading-7 text-[rgba(55,53,47,0.78)]">
            {project.description}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Image
            alt=""
            className="aspect-[16/9] w-full rounded-[20px] object-cover"
            height={511}
            priority
            src={project.image}
            unoptimized
            width={908}
          />
        </Reveal>

        <Reveal className="mt-10 rounded-[20px] border border-[rgba(55,53,47,0.12)] bg-[rgba(55,53,47,0.04)] p-6">
          <p className="text-[14px] font-bold leading-5 text-[rgba(55,53,47,0.55)]">
            핵심 증거
          </p>
          <p className="mt-3 text-[19px] font-bold leading-8 text-[rgb(55,53,47)]">
            {project.proof}
          </p>
        </Reveal>

        <Reveal className="mt-14 space-y-5 text-[17px] leading-8 text-[rgb(55,53,47)]">
          {project.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="mt-16 space-y-16">
          {project.sections.map((section, index) => (
            <Reveal
              className="grid gap-7 border-t border-[rgba(55,53,47,0.12)] pt-8 md:grid-cols-[180px_1fr]"
              delay={index * 0.03}
              key={section.title}
            >
              <div>
                <p className="text-[14px] font-bold leading-5 text-[rgba(55,53,47,0.55)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 break-keep text-[28px] font-bold leading-[1.3] text-[rgb(55,53,47)]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-5 text-[16px] leading-8 text-[rgba(55,53,47,0.82)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-[rgba(55,53,47,0.12)] pt-8">
          <h2 className="text-[28px] font-bold leading-[1.3]">남은 결과</h2>
          <ul className="mt-6 grid gap-3 text-[16px] leading-7 md:grid-cols-3">
            {project.results.map((result) => (
              <li
                className="rounded-[12px] border border-[rgba(55,53,47,0.12)] bg-white p-4"
                key={result}
              >
                {result}
              </li>
            ))}
          </ul>
        </Reveal>

        {project.href ? (
          <Reveal className="mt-10">
            <a
              className="inline-flex items-center gap-2 text-[15px] font-bold text-inherit underline decoration-[rgba(55,53,47,0.28)] underline-offset-4"
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
