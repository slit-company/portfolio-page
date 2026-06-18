import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("recruit visual tokens", () => {
  it("defines page geometry, font, and reference colors", () => {
    const css = readFileSync("src/app/globals.css", "utf8");
    const layout = readFileSync("src/app/layout.tsx", "utf8");

    expect(css).toContain("--page-max-width: 1100px");
    expect(css).toContain("--content-max-width: 908px");
    expect(css).toContain("--nav-height: 48px");
    expect(css).toContain("--tm-header-surface: #ffffff");
    expect(css).toContain("--tm-nav-active-bg: rgb(55 53 47 / 6%)");
    expect(css).toContain("--tm-nav-accent: rgb(102, 157, 253)");
    expect(css).toContain("rgb(55, 53, 47)");
    expect(css).toContain("rgb(154 226 196");
    expect(css).toMatch(/--font-sans:\s*"Gothic A1"/);
    expect(layout).toContain("Gothic_A1");
    expect(layout).toContain("Geist_Mono");
  });
});
