import { Section } from "@/components/page-common";
import { CultureLead, CulturePermanentBeta } from "@/components/page-culture";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { AboutPage, HomePage } from "@/components/page-home-about";
import {
  InterviewGrid,
  InterviewIntroCallout,
} from "@/components/page-interviews";
import { CareersPage, LifePage } from "@/components/page-life-careers";
import {
  JourneyIntro,
  JourneyProcess,
} from "@/components/page-special-sections";
import type { PageContent } from "@/content/types";

export function PageRenderer({ page }: { readonly page: PageContent }) {
  if (page.key === "home") {
    return <HomePage page={page} />;
  }

  if (page.key === "about") {
    return <AboutPage page={page} />;
  }

  if (page.key === "life") {
    return <LifePage page={page} />;
  }

  if (page.key === "careers") {
    return <CareersPage page={page} />;
  }

  if (page.key === "culture") {
    return (
      <PageFrame page={page}>
        <PageTitle large>{page.title}</PageTitle>
        <CultureLead />
        <CulturePermanentBeta />
        <div className="mt-28 space-y-28">
          {page.sections.slice(2).map((section, index) => (
            <Section
              compact
              index={index}
              key={`${page.key}-${section.title}`}
              section={section}
            />
          ))}
        </div>
      </PageFrame>
    );
  }

  if (page.key === "interviews") {
    return (
      <PageFrame page={page}>
        <PageTitle>{page.title}</PageTitle>
        <InterviewIntroCallout lines={page.intro} />
        {page.interviewCards ? (
          <InterviewGrid cards={page.interviewCards} />
        ) : null}
      </PageFrame>
    );
  }

  if (page.key === "journey") {
    return (
      <PageFrame page={page}>
        <PageTitle>{page.title}</PageTitle>
        <JourneyIntro />
        <JourneyProcess />
      </PageFrame>
    );
  }

  return (
    <PageFrame page={page}>
      <PageTitle>{page.title}</PageTitle>
    </PageFrame>
  );
}
