import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const scanDirs = [
  fileURLToPath(new URL("../src/content", import.meta.url)),
  fileURLToPath(new URL("../src/components", import.meta.url)),
];

function collectSourceFiles(dir: string): readonly string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectSourceFiles(fullPath));
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

const sourceFiles = scanDirs.flatMap((dir) => collectSourceFiles(dir));

type BannedRule = {
  readonly name: string;
  readonly pattern: RegExp;
};

const bannedRules: readonly BannedRule[] = [
  { name: "팔란티어 reference", pattern: /팔란티어/ },
  {
    // 대조 클리셰. "X(이/가) 아니라 Y입니다" 형태를 이/가 둘 다 잡는다.
    name: "대조 클리셰 (~이/가 아니라 ~입니다)",
    pattern: /(이|가)\s*아니라[^.\n]*입니다/,
  },
  {
    // 본문에서 회사를 3인칭으로 부르는 주어/소유격형(SLIT은/SLIT의/SLIT이 ).
    // breadcrumb "SLIT / ...", title "SLIT 소개", 태그/라벨의 브랜드명은 josa가 없어 잡히지 않는다.
    name: "본문 3인칭 (SLIT은/SLIT의/SLIT이 )",
    pattern: /(SLIT은|SLIT의|SLIT이 )/,
  },
  {
    // 해요체 종결어미. 합쇼체(-습니다/-합니다/-드립니다/-ㅂ니다)는 잡지 않도록 \b로 한정한다.
    // JS의 \b는 ASCII 단어경계라 한글+문장부호(예: 인용문 "있어요?")는 매치되지 않는다.
    name: "해요체 종결어미",
    pattern: /(예요|거예요|[가-힣]어요|[가-힣]아요)\b/,
  },
  {
    name: "금액 언급 (천만 원 / 억 원)",
    pattern: /\d+\s*천만\s*원|\d+\s*억\s*원/,
  },
];

describe("banned phrases gate (src/content + src/components)", () => {
  it("collects source files to scan", () => {
    expect(sourceFiles.length).toBeGreaterThan(0);
  });

  for (const rule of bannedRules) {
    it(`has zero occurrences of ${rule.name}`, () => {
      const offenders: string[] = [];
      for (const file of sourceFiles) {
        const lines = readFileSync(file, "utf8").split("\n");
        lines.forEach((line, index) => {
          if (rule.pattern.test(line)) {
            offenders.push(`${file}:${index + 1}: ${line.trim()}`);
          }
        });
      }
      expect(offenders, offenders.join("\n")).toHaveLength(0);
    });
  }
});
