import {
  ContactCta,
  LinkCards,
  PageFooter,
  Section,
  TextLines,
} from "@/components/page-common";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { Reveal } from "@/components/reveal";
import { HomeWorkflowPreview } from "@/components/workflow-system-ui";
import type { PageContent } from "@/content/types";

export function HomePage({ page }: { readonly page: PageContent }) {
  const heading = page.intro?.[0] ?? page.title;
  const introLines = page.intro?.slice(1) ?? [];

  return (
    <PageFrame page={page}>
      <PageTitle large>{heading}</PageTitle>
      {introLines.length > 0 ? (
        <Reveal className="mt-8 max-w-[760px]">
          <TextLines lines={introLines} />
        </Reveal>
      ) : null}
      <HomeWorkflowPreview />
      <div className="mt-24 space-y-28">
        {page.sections.map((section, index) => (
          <Section
            compact
            index={index}
            key={`${page.key}-${section.title}`}
            section={section}
          />
        ))}
      </div>
      <div className="mt-28">
        <LinkCards linkCards={page.linkCards} />
      </div>
      <ContactCta />
      <PageFooter />
    </PageFrame>
  );
}
