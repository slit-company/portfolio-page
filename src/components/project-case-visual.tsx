import type { ProjectCase, ProjectCaseTier } from "@/content/types";
import { cn } from "@/lib/utils";

const tierLabels = {
  flagship: "대표 사례",
  major: "주요 사례",
  expanding: "확장·자체 사례",
} satisfies Record<ProjectCaseTier, string>;

export function ProjectCaseVisual({
  mode = "card",
  project,
}: {
  readonly mode?: "card" | "hero";
  readonly project: ProjectCase;
}) {
  const isHero = mode === "hero";
  const resultTiles = project.resultTiles.slice(0, 3);

  return (
    <div
      className={cn(
        "border border-[var(--tm-border)] bg-white p-4",
        isHero ? "p-6" : undefined,
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--tm-border)] pb-4">
        <div>
          <p className="text-[13px] font-bold leading-5 text-[var(--tm-faint)]">
            SLIT 기록
          </p>
          <p className="mt-1 break-keep text-[18px] font-bold leading-7 text-[var(--tm-text)]">
            {project.title}
          </p>
        </div>
        <span className="shrink-0 border border-[var(--tm-border)] px-2 py-1 text-[12px] font-bold leading-4 text-[var(--tm-muted)]">
          {tierLabels[project.tier]}
        </span>
      </div>

      <div
        className={cn(
          "mt-4 border border-[var(--tm-border)]",
        )}
      >
        {resultTiles.map((tile) => (
          <div
            className="border-b border-[var(--tm-border)] p-4 last:border-b-0"
            key={tile}
          >
            <p className="break-keep text-[16px] font-bold leading-6 text-[var(--tm-text)]">
              {tile}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 border-l-2 border-[rgb(154,226,196)] pl-3 break-keep text-[14px] font-bold leading-6 text-[var(--tm-text)]">
        {project.headline}
      </p>
    </div>
  );
}
