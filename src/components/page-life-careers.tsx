import { Jobs } from "@/components/jobs-section";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { Reveal } from "@/components/reveal";
import { ProcessSystemMock } from "@/components/workflow-system-ui";
import type { PageContent } from "@/content/types";

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
        <Reveal className="mt-9 max-w-[720px]">
          <p className="whitespace-pre-line break-keep text-[16px] leading-8 text-[rgb(55,53,47)]">
            {body}
          </p>
        </Reveal>
      ) : null}
      <ProcessSystemMock />
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
              <p className="mb-7 break-keep text-[16px] leading-8 text-[rgb(55,53,47)]">
                {section.body[0]}
              </p>
            ) : null}
            <div className="space-y-5">
              {section.columns?.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[17px] font-bold leading-[1.5]">
                    {column.title}
                  </h3>
                  <p className="mt-2 break-keep text-[15px] leading-7 text-[rgba(55,53,47,0.78)]">
                    {column.body}
                  </p>
                </div>
              ))}
            </div>
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
