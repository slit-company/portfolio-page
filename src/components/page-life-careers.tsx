import Image from "next/image";
import { Jobs } from "@/components/jobs-section";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { Reveal } from "@/components/reveal";
import type { PageContent } from "@/content/types";

const lifeFirstSectionImage =
  "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa19d011b-0748-4d00-95d1-bd312c8de398%2Fef800f2e-d790-4bc5-8f99-a6193b1d07a5%2F%25EC%25B1%2584%25EC%259A%25A9%25ED%2599%2588%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580_%25EC%2582%25AC%25EC%25A7%2584_v02_2_%25EC%2582%25AC%25EB%2582%25B4_%25EC%25B9%25B4%25ED%258E%2598%25EC%2599%2580_%25EB%258F%2584%25EC%2584%259C%25EA%25B4%2580.png&blockId=33cdb7f5-8f0a-8024-8b15-ec48ee5048ce";

export function LifePage({ page }: { readonly page: PageContent }) {
  const headline = page.intro?.[0];
  const body = page.intro?.[1];

  return (
    <PageFrame page={page}>
      <PageTitle>{page.title}</PageTitle>
      {headline ? (
        <Reveal className="mt-[34px]">
          <h2 className="whitespace-pre-line break-keep text-[32px] font-semibold leading-[1.3] text-[rgb(55,53,47)]">
            {headline}
          </h2>
        </Reveal>
      ) : null}
      {body ? (
        <Reveal className="mt-9 max-w-[500px]">
          <p className="whitespace-pre-line text-[15px] leading-[1.65] text-[rgb(55,53,47)]">
            {body}
          </p>
        </Reveal>
      ) : null}
      <LifeSections page={page} />
    </PageFrame>
  );
}

function LifeSections({ page }: { readonly page: PageContent }) {
  return (
    <div className="mt-9 space-y-24">
      {page.sections.map((section, index) => (
        <Reveal
          className="grid items-start gap-8 md:grid-cols-[220px_1fr] md:gap-11"
          delay={index * 0.03}
          key={section.title}
        >
          <h2 className="self-start whitespace-pre-line break-keep text-[26px] font-bold leading-[1.4]">
            {section.title}
          </h2>
          <div>
            {section.body?.[0] ? (
              <p className="mb-7 text-[15px] leading-[1.6] text-[rgb(55,53,47)]">
                {section.body[0]}
              </p>
            ) : null}
            <div className="space-y-5">
              {section.columns?.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[17px] font-bold leading-[1.5]">
                    {column.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[rgba(55,53,47,0.78)]">
                    {column.body}
                  </p>
                </div>
              ))}
            </div>
            {index === 0 ? (
              <Image
                alt=""
                className="mt-5 w-full object-cover"
                height={455}
                src={lifeFirstSectionImage}
                unoptimized
                width={647}
              />
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CareersPage({ page }: { readonly page: PageContent }) {
  return (
    <PageFrame page={page}>
      <PageTitle>{page.title}</PageTitle>
      {page.jobs ? (
        <div className="mt-[72px]">
          <Jobs groups={page.jobs} />
        </div>
      ) : null}
      <CareersDetails page={page} />
    </PageFrame>
  );
}

function CareersDetails({ page }: { readonly page: PageContent }) {
  const process = page.sections.at(1);
  const notice = page.sections.at(2);

  return (
    <>
      {process?.items ? (
        <Reveal className="mt-[132px]">
          <h2 className="border-b border-[rgba(55,53,47,0.13)] pb-4 text-[19px] font-bold leading-[1.45]">
            {process.title}
          </h2>
          <div className="grid gap-6 pt-9 text-[15px] leading-6 md:grid-cols-4">
            {process.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Reveal>
      ) : null}
      {notice?.body ? (
        <Reveal className="mt-20 rounded-[20px] bg-[rgba(55,53,47,0.06)] p-6">
          <h2 className="text-[17px] font-bold">{notice.title}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.65]">
            {notice.body.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>
      ) : null}
    </>
  );
}
