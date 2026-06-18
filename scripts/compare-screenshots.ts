import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const pairs = [
  "root-desktop",
  "root-mobile",
  "about-desktop",
  "about-mobile",
  "culture-desktop",
  "culture-mobile",
  "interviews-desktop",
  "interviews-mobile",
  "life-desktop",
  "life-mobile",
  "journey-desktop",
  "journey-mobile",
  "careers-desktop",
  "careers-mobile",
] satisfies readonly string[];

const outputDir =
  ".omo/ulw-loop/019ed03b-2e60-7142-929b-f4e3f6c45f65/evidence/visual-diff";
mkdirSync(outputDir, { recursive: true });

const mismatchThreshold = 0.2;

const results = pairs.map((name) => {
  const referencePath = `.omo/reference/screenshots/${name}.png`;
  const actualPath = `.omo/ulw-loop/019ed03b-2e60-7142-929b-f4e3f6c45f65/evidence/screenshots/${name}.png`;
  if (!existsSync(referencePath) || !existsSync(actualPath)) {
    return { name, status: "missing", mismatchRatio: 1 };
  }
  const reference = PNG.sync.read(readFileSync(referencePath));
  const actual = PNG.sync.read(readFileSync(actualPath));
  const width = Math.min(reference.width, actual.width);
  const height = Math.min(reference.height, actual.height);
  const diff = new PNG({ width, height });
  const mismatched = pixelmatch(
    reference.data,
    actual.data,
    diff.data,
    width,
    height,
    { threshold: 0.18 },
  );
  const mismatchRatio = mismatched / (width * height);
  const diffPath = join(outputDir, `${name}.png`);
  writeFileSync(diffPath, PNG.sync.write(diff));
  return { name, status: "compared", mismatchRatio, diffPath, width, height };
});

writeFileSync(
  join(outputDir, "summary.json"),
  JSON.stringify(results, null, 2),
);
console.log(JSON.stringify(results, null, 2));

const failed = results.filter(
  (result) =>
    result.status === "missing" || result.mismatchRatio > mismatchThreshold,
);

if (failed.length > 0) {
  console.error(
    `Visual comparison failed: ${failed
      .map((result) => `${result.name}=${result.mismatchRatio.toFixed(4)}`)
      .join(", ")}`,
  );
  process.exit(1);
}
