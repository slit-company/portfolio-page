import { TextLines } from "@/components/page-common";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { HomePage } from "@/components/page-home-about";
import {
  InterviewGrid,
  InterviewIntroCallout,
} from "@/components/page-interviews";
import { CareersPage, LifePage } from "@/components/page-life-careers";
import { Reveal } from "@/components/reveal";
import type { PageContent } from "@/content/types";

export function PageRenderer({ page }: { readonly page: PageContent }) {
  if (page.key === "home") {
    return <HomePage page={page} />;
  }

  if (page.key === "life") {
    return <LifePage page={page} />;
  }

  if (page.key === "careers") {
    return <CareersPage page={page} />;
  }

  if (page.key === "interviews") {
    return (
      <PageFrame page={page}>
        <PageTitle>{page.title}</PageTitle>
        <InterviewIntroCallout lines={page.intro} />
        {page.projectCases ? <InterviewGrid cards={page.projectCases} /> : null}
      </PageFrame>
    );
  }

  if (page.key === "awards") {
    return (
      <PageFrame page={page}>
        <PageTitle>{page.title}</PageTitle>
        {page.intro ? (
          <Reveal className="mt-8 max-w-[760px]">
            <TextLines lines={page.intro} />
          </Reveal>
        ) : null}
        <div className="mt-16 space-y-16">
          {page.sections.map((section, index) => (
            <Reveal
              className="border-t border-[rgba(55,53,47,0.12)] pt-10"
              delay={index * 0.03}
              key={section.title}
            >
              <h2 className="whitespace-pre-line text-balance break-keep text-[clamp(24px,4.2vw,30px)] font-extrabold leading-[1.32] tracking-[-0.01em] text-[rgb(55,53,47)]">
                {section.title}
              </h2>
              {section.items ? (
                <ul className="mt-8 list-disc space-y-3 pl-5">
                  {section.items.map((item) => (
                    <li
                      className="break-keep pl-1 text-[17px] leading-8 text-[rgb(55,53,47)] marker:text-[rgba(55,53,47,0.4)]"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </PageFrame>
    );
  }

  return (
    <PageFrame page={page}>
      <PageTitle>{page.title}</PageTitle>
    </PageFrame>
  );
}
