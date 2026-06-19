import Image from "next/image";
import {
  ContactCta,
  LinkCards,
  PageFooter,
  Section,
  Stats,
  TextLines,
} from "@/components/page-common";
import { PageFrame, PageTitle } from "@/components/page-doc-layout";
import { Reveal } from "@/components/reveal";
import type { PageContent } from "@/content/types";

export function HomePage({ page }: { readonly page: PageContent }) {
  const heading = page.intro?.[0] ?? page.title;
  const introLines = page.intro?.slice(1) ?? [];

  return (
    <PageFrame home page={page}>
      {page.heroImage ? (
        <Reveal className="mb-[74px]">
          <Image
            alt=""
            className="aspect-[16/9] w-full rounded-[20px] object-cover"
            height={511}
            priority
            src={page.heroImage}
            unoptimized
            width={908}
          />
        </Reveal>
      ) : null}
      <Reveal>
        <h1 className="max-w-[812px] whitespace-pre-line break-keep text-[25px] font-semibold leading-[1.34] tracking-normal text-[rgb(55,53,47)] md:text-[29px] md:leading-[1.28]">
          {heading}
        </h1>
      </Reveal>
      {introLines.length > 0 ? (
        <Reveal className="mt-[50px] max-w-[560px]">
          <TextLines lines={introLines} />
        </Reveal>
      ) : null}
      <div className="mt-[61px]">
        <Stats stats={page.stats} />
      </div>
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

export function AboutPage({ page }: { readonly page: PageContent }) {
  const eyebrow = page.intro?.[0];
  const statement = page.intro?.[1];
  const firstSection = page.sections.at(0);

  return (
    <PageFrame page={page}>
      <PageTitle large>{page.title}</PageTitle>
      {eyebrow ? (
        <Reveal className="mt-6">
          <p className="text-[21px] font-bold leading-[1.2] text-[rgba(55,53,47,0.62)]">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      {statement ? (
        <Reveal className="mt-8">
          <h2 className="whitespace-pre-line break-keep text-[32px] font-semibold leading-[1.3] text-[rgb(55,53,47)]">
            {statement}
          </h2>
        </Reveal>
      ) : null}
      {firstSection?.body ? (
        <Reveal className="mt-9 max-w-[908px]">
          <TextLines lines={firstSection.body} />
        </Reveal>
      ) : null}
      <div className="mt-11">
        <Stats stats={page.stats} variant="plain" />
      </div>
      {page.heroImage ? (
        <Reveal className="mt-6">
          <Image
            alt=""
            className="w-full rounded-[20px] object-cover shadow-[8px_4px_12px_rgba(0,0,0,0.22)]"
            height={559}
            priority
            src={page.heroImage}
            unoptimized
            width={908}
          />
        </Reveal>
      ) : null}
      <div className="mt-28 space-y-28">
        {page.sections.slice(1).map((section, index) => (
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
