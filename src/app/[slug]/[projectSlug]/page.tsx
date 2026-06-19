import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseArticle } from "@/components/project-case-page";
import { SiteShell } from "@/components/site-shell";
import { getProjectCaseBySlug, projectCases } from "@/content/project-cases";
import { routePaths } from "@/content/routes";

const portfolioSlug = routePaths.interviews.slice(1);

type ProjectCasePageProps = {
  readonly params: Promise<{
    readonly slug: string;
    readonly projectSlug: string;
  }>;
};

export function generateStaticParams() {
  return projectCases.map((project) => ({
    slug: portfolioSlug,
    projectSlug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectCasePageProps): Promise<Metadata> {
  const { projectSlug, slug } = await params;

  if (slug !== portfolioSlug) {
    return {};
  }

  const project = getProjectCaseBySlug(projectSlug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | SLIT Portfolio`,
    description: project.description,
  };
}

export default async function ProjectCasePage({
  params,
}: ProjectCasePageProps) {
  const { projectSlug, slug } = await params;

  if (slug !== portfolioSlug) {
    notFound();
  }

  const project = getProjectCaseBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <ProjectCaseArticle project={project} />
    </SiteShell>
  );
}
