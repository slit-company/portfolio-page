# slit-hiring-content-plan - Work Plan

## TL;DR (For humans)
**What you'll get:** SLIT 채용 페이지를 "포지션 목록"이 아니라 회사 포트폴리오처럼 읽히는 성과 기반 페이지로 채우는 콘텐츠 설계안. 채용 페이지인지 고객사용 포트폴리오인지 선명하게 구분하지 않고, 디자이너는 "내가 합류하면 이 성과를 내 포트폴리오로 만들 수 있겠다"고 느끼고 고객사는 "이 팀이 프로젝트를 이렇게 풀어냈구나"라고 이해하게 만든다.

**Why this approach:** 현재 코드 템플릿은 Notion/Oopy형 문서 리듬과 정적 콘텐츠 구조가 이미 잡혀 있으므로, 새 UI를 먼저 만들기보다 SLIT의 정체성, Recova, 수상/프로그램/프로젝트 증빙, 디자이너 역할을 페이지별로 재배치하는 것이 가장 빠르고 덜 위험하다.

**What it will NOT do:** 이번 계획은 제품 코드를 수정하지 않는다. Notion 내용을 그대로 복붙하지 않는다. 공개 확인 전에는 고객사명, PoC 기업명, 민감한 계약 정보를 구체적으로 노출하지 않는다.

**Effort:** Short
**Risk:** Medium - 프로젝트 블록이 너무 채용공고처럼 보이거나 너무 영업자료처럼 보이면 의도한 "회사 포트폴리오"의 중립성이 깨진다.
**Decisions I made for you:** 사용자 답변을 반영해 기본값을 바꿨다. 1) 채용 대상은 브랜드, 웹, 자료, 콘텐츠를 상황 따라 맡는 넓은 의미의 초기 디자이너다. 2) Recova는 "채권 계정 검토, 회수 가능성 판단, 법적 조치 의사결정 AI Agent"로 설명한다. 3) 기사 링크와 공개 증빙은 적극 공개하고 Notion의 느낌을 유지한다. 4) 매출보다 수상, 프로그램, 현재 프로젝트, 구축 경험, 포트폴리오화 가능한 결과물을 강조한다. 5) 프로젝트별 스토리는 채용용/고객사용을 분리하지 않고 회사 포트폴리오 케이스처럼 둔다. 6) d8d/lilmgenius는 협업 네트워크/실행 파트너십 증거로, Neural Arcade는 헬로우봇을 만드는 스타트업과의 진행 중 AX 프로젝트로 분리한다.

Your next move: 인터뷰를 조금 더 이어서 프로젝트별 스토리 재료와 지원 흐름을 확정하면 바로 구현에 들어갈 수 있다. Full execution detail follows below.

---

> TL;DR (machine): Short, medium-risk content planning; reuse current static PageContent structure, replace Team Mint copy with unified SLIT company portfolio narrative, defer code edits until approval.

## Scope
### Must have
- Replace the current Team Mint recruiting narrative with SLIT-specific positioning.
- Keep the existing document-like recruiting template and page rhythm unless implementation later proves a slot is missing.
- Convert the Notion page into proof, not an archive:
  - Core identity: "AI 시대에 남는 전문 도메인을 찾고, 복잡한 업무를 제품으로 만드는 팀."
  - Anchor product: Recova, positioned as a domain workflow/judgment AI Agent.
  - Proof: selected awards, programs, accelerators, projects, PoCs, public channels, and press.
  - Recruiting interpretation: broad early-stage designer can see strong raw achievements they can turn into brand, web, sales, investor, proposal, and content artifacts.
  - Client interpretation: project cases show what SLIT did, what problem it solved, which technology/approach it used, and what proof/result exists.
- Include detailed project cases for Recova, d8d/lilmgenius collaboration, Outsome, 법무법인 로톡 자동 답변, ArtWizard, Peopet, SPEC, ANYON, and Neural Arcade.
- Split d8d/lilmgenius and Neural Arcade carefully:
  - d8d/lilmgenius: collaboration/network proof that SLIT works with a strong AX operator.
  - Neural Arcade: ongoing AX project case connected to HelloBot and Neural Arcade's AI entertainment app context.
- Keep project cards short at first glance, then expose detailed case content through a "자세히 보기" style interaction.
- Identify missing source assets/facts before implementation.
- Keep public/private boundary explicit.

### Content architecture recommendation
- **Home:** Use as the high-signal recruiting landing page.
  - Hero headline: "수상과 프로젝트가 쌓이는 팀에서, 브랜드와 웹과 자료를 함께 포트폴리오로 만들어갈 초기 디자이너를 찾습니다."
  - Intro: explain SLIT's shift from fast building to domain depth, then Recova.
  - Stats: 4 PoC companies, 2 major awards/targets, Asan Doers 2026, content/channel traction or paid project proof.
  - Sections:
    1. "우리가 풀고 있는 문제" - Recova and the debt-collection workflow problem.
    2. "우리가 증명한 실행력" - awards/programs/projects.
    3. "디자이너가 포트폴리오로 가져갈 수 있는 것" - IR deck, sales deck, proposal, product page, landing page, brand/content assets.
  - Link cards: Press / Mentions, SPEC, Threads, Instagram, public program links.
- **About:** Use as the clean identity/mission/vision page.
  - Identity: "우리는 AI 시대에 남는 전문 도메인을 찾고, 그 안의 복잡한 업무를 제품화합니다."
  - Mission: "숙련자의 판단과 업무흐름을 제품 안으로 옮깁니다."
  - Vision: "전문 도메인의 어려운 일을 AI Agent로 더 넓고 일관되게 확장합니다."
- **Culture:** Replace generic startup values with SLIT-specific working principles.
  - Suggested values:
    1. 좁고 어려운 도메인을 끝까지 파고듭니다.
    2. 기술보다 현장의 문제를 먼저 봅니다.
    3. 빠르게 만들고 고객 반응으로 고칩니다.
    4. 증거로 설득합니다.
    5. 복잡한 이야기를 단순하게 만듭니다.
    6. 작은 팀처럼 책임지고 끝냅니다.
- **Interviews / People:** Do not keep fake Team Mint member stories.
  - If founder/team profile assets exist: use "팀을 만드는 사람들" with founder/operator/designer-adjacent stories.
  - If assets do not exist yet: either hide from nav for v1 or retitle into "빌더 노트" with founder notes.
- **Life:** Reframe from mature-company benefits to early-team working mode.
  - Full online possible, office near 내방역, fast feedback, customer/IR/sales material ownership, side-project experiments.
  - Add only benefits/work policies that are actually true.
- **Journey:** Make the hiring process fit a designer.
  - Coffee chat -> portfolio/work sample review -> working-style interview -> optional paid trial/project discussion -> collaboration start.
- **Portfolio / Projects:** Add or repurpose one existing content section to list Recova plus non-Recova projects in a repeatable company-portfolio story format.
  - Story format: problem/context -> technology/approach -> what SLIT built -> process/iteration -> result/proof -> why this project matters.
  - The copy should not label itself as "for recruiting" or "for clients"; it should just read like a credible company portfolio.
  - Use Notion tone and public links aggressively.
  - Draft missing project story details with plausible placeholders, but keep them in isolated blocks so the user can edit later.
  - Separate d8d/lilmgenius from Neural Arcade in the project grid:
    - "d8d / lilmgenius 협업" should sell the caliber of SLIT's working network without calling it a separate client delivery.
    - "Neural Arcade AX" should sell the active project with a validated HelloBot/AI-entertainment startup context.
  - Recommended code fit: repurpose the current `interviews` page/card slot into `프로젝트 포트폴리오`. Use cards for the short visible layer and an expandable native detail area for the case-study layer.
  - Avoid creating nine separate routes at first; that is more structure than the current template needs.
- **Careers:** Keep focused.
  - Job group: "Design / Brand / Product Story"
  - Position: "초기팀 디자이너" or "브랜드·웹·콘텐츠 디자이너"
  - Responsibilities: IR deck, sales deck, proposal, product intro page, landing page, content templates, visual proof assets, project portfolio pages.
  - Candidate fit: early-stage, portfolio-building, complex B2B/domain storytelling, speed with iteration, willingness to move across brand/web/materials/content.
  - Application path: email/form/link must be confirmed before implementation.

### Must NOT have (guardrails, anti-slop, scope boundaries)
- Do not publish both contradictory Recova descriptions as the same primary product story.
- Do not over-index on revenue. The persuasive proof is awards, programs, public recognition, projects, and portfolio-ready output.
- Do not bury public article/program links; expose them as proof.
- Do not split the experience into a visible hiring portfolio and a visible client portfolio. It should feel like one company portfolio.
- Do not make project copy sound like a hiring pitch only. Each project must answer "what problem did SLIT solve, what technology did it use, and what result came out?"
- Do not hide most projects just because the top-level view would get long. The top-level view should be compact, not selective.
- Do not double-count the same relationship dishonestly. d8d/lilmgenius can be a collaboration proof case; Neural Arcade can be a project proof case.
- Do not overstate the Neural Arcade scope before the exact SLIT deliverables are confirmed. Use "진행 중", "AX 구축", "자동화/운영 워크플로우", or similarly editable language until confirmed.
- Do not over-explain technology in a way that non-technical clients/designers cannot follow. Use technology names, then explain them plainly.
- Do not fill the Careers page with the whole company history; Careers should sell the role and next step.
- Do not keep Team Mint brand labels, metadata, contact email, logo, job links, or nav text.
- Do not invent founder/team profiles or work benefits that are not in source material.
- Do not rely on emoji-heavy UI labels in future implementation; existing strings contain emojis, but the design standard should move toward text/icons.

## Verification strategy
> Zero human intervention - all verification is agent-executed.
- Test decision: none for this planning turn because no production behavior changes are made. Future implementation should run `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, then browser QA for the affected routes.
- Evidence for this planning turn: repository reads, Notion fetch/search, and the draft ledger in `.omo/drafts/slit-hiring-content-plan.md`.
- Future route QA: run the dev server, open the home/about/culture/life/journey/careers routes in a real browser, capture desktop and mobile screenshots, and verify that no Team Mint content remains.

## Execution strategy
### Parallel execution waves
> Target 5-8 todos per wave. Fewer than 3 (except the final) means you under-split.
- **Wave 1 - Content data replacement:** update static content files and metadata only.
- **Wave 2 - Template fit fixes:** adjust type unions or lightweight rendering only if the SLIT content cannot fit current structures.
- **Wave 3 - QA and cleanup:** run checks, browser QA, and content audit.

### Dependency matrix
| Todo | Depends on | Blocks | Can parallelize with |
| --- | --- | --- | --- |
| 1 | none | 2, 3, 4 | none |
| 2 | 1 | 5 | 3, 4 |
| 3 | 1 | 5 | 2, 4 |
| 4 | 1 | 5 | 2, 3 |
| 5 | 2, 3, 4 | 6 | none |
| 6 | 5 | final verification | none |

## Todos
> Implementation + Test = ONE todo. Never separate.
<!-- APPEND TASK BATCHES BELOW THIS LINE WITH edit/apply_patch - never rewrite the headers above. -->
- [ ] 1. Lock the public content source, disclosure boundary, and unified company-portfolio framing.
  What to do / Must NOT do: Before editing code, decide which Notion claims are public enough for the website. Keep public press/program/channel links visible and strong. Use Notion-level tone for projects. Reconcile Recova positioning and make each project block read as a company portfolio case, not as a separate recruiting/client artifact. Treat d8d/lilmgenius as collaboration proof and Neural Arcade as an ongoing project proof case; do not blur those two claims.
  Parallelization: Wave 1 | Blocked by: none | Blocks: 2, 3, 4
  References (executor has NO interview context - be exhaustive): Notion page "SLIT 성과 모음"; Notion data source "SLIT Press / Mentions"; `.omo/drafts/slit-hiring-content-plan.md`; Neural Arcade official site https://www.neuralarcade.ai/; Google Play HelloBot https://play.google.com/store/apps/details?id=com.thingsflow.hellobot; ZGOO Neural Arcade insight https://zgoo.xyz/insights/news/26; lilmgenius public profile https://lilmgenius.notion.site/
  Acceptance criteria (agent-executable): A markdown evidence note lists "publish", "generalize", and "exclude" buckets; it explicitly resolves Recova primary positioning and records d8d/lilmgenius as collaboration proof separate from Neural Arcade as ongoing project proof.
  QA scenarios (name the exact tool + invocation): `rg -n "음성|전화|납부 안내|회수 가능성|법적 조치|d8d|lilmgenius|Neural Arcade|헬로우봇" .omo/evidence/slit-content-disclosure.md` must show one primary Recova hierarchy and separate d8d/Neural Arcade labels; Evidence `.omo/evidence/slit-content-disclosure.md`
  Commit: N | planning/content gate only

- [ ] 2. Replace Home/About content with SLIT narrative and proof.
  What to do / Must NOT do: Update the static data for hero, intro, stats, identity, mission, vision, link cards, and proof sections. Make the page feel like a company portfolio backed by strong raw achievements and public proof. Do not dump full Notion paragraphs.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 5
  References (executor has NO interview context - be exhaustive): `src/content/page-data/company.ts:7`; `src/components/page-home-about.tsx:14`; `src/components/page-home-about.tsx:65`; `src/content/types.ts:61`; `DESIGN.md:98`
  Acceptance criteria (agent-executable): `rg -n "팀민트|TEAM MINT|마케팅 시장|ReFit|Mix" src/content/page-data/company.ts src/app/layout.tsx src/content/routes.ts` returns no old Team Mint narrative for the active public pages.
  QA scenarios (name the exact tool + invocation): Browser use: open `/` and the About route, PASS if hero/identity/stats show SLIT/Recova proof and no Team Mint copy; Evidence `.omo/evidence/slit-home-about-browser.md`
  Commit: Y | `feat(content): replace home and about with SLIT narrative`

- [ ] 3. Replace Culture/Life/People/Interviews content with early-team truth and a project portfolio.
  What to do / Must NOT do: Replace generic mature-company benefits and fake member stories. Repurpose the current interviews/card page into a company project portfolio if that remains the lightest fit. Do not invent people profiles.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 5
  References (executor has NO interview context - be exhaustive): `src/content/page-data/company.ts:152`; `src/content/page-data/people.ts:4`; `src/content/page-data/people.ts:81`; `src/components/page-interviews.tsx`; `src/content/routes.ts:43`; `DESIGN.md:98`
  Acceptance criteria (agent-executable): `rg -n "호치민|퍼포먼스 마케터|리프레시룸|성과 인센티브|롱치데이|Refresh People" src/content src/components` returns no active public Team Mint-specific people/life copy unless intentionally removed from nav. `rg -n "Recova|Neural Arcade|헬로우봇|d8d|lilmgenius|ANYON|ArtWizard|Peopet|Outsome" src/content src/components` shows project portfolio content.
  QA scenarios (name the exact tool + invocation): Browser use: open Culture/Life/Project Portfolio routes, PASS if visible pages reflect SLIT working principles and project cards reveal detail through "자세히 보기"; Evidence `.omo/evidence/slit-culture-life-browser.md`
  Commit: Y | `feat(content): add SLIT project portfolio`

- [ ] 4. Replace Journey/Careers with the broad early-designer recruiting flow.
  What to do / Must NOT do: Create the first SLIT role around brand/web/materials/content design, set realistic employment/location labels, process, notice, and application path. If current `JobPosting` type cannot represent remote/project/flexible work, update the type narrowly.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 5
  References (executor has NO interview context - be exhaustive): `src/content/page-data/hiring.ts:4`; `src/content/page-data/hiring.ts:62`; `src/components/page-life-careers.tsx:83`; `src/content/types.ts:46`; Notion recruiting post at bottom of "SLIT 성과 모음"
  Acceptance criteria (agent-executable): `rg -n "Performance Architect|퍼포먼스 마케터|thesmc|호치민|people@team-mint.io" src/content/page-data/hiring.ts src/components/page-common.tsx` returns no stale Team Mint job/application copy.
  QA scenarios (name the exact tool + invocation): Browser use: open Careers route, PASS if it shows the early-designer role, designer-specific process, and confirmed application path; Evidence `.omo/evidence/slit-careers-browser.md`
  Commit: Y | `feat(content): add SLIT early designer role`

- [ ] 5. Replace global metadata, routes, nav, logo/contact links, and any remaining Team Mint shell copy.
  What to do / Must NOT do: Update visible brand shell, metadata title/description, nav labels, CTA/contact path, footer, logo/favicon/OG only when replacement assets are available. Do not leave mixed Team Mint/SLIT identity.
  Parallelization: Wave 2 | Blocked by: 2, 3, 4 | Blocks: 6
  References (executor has NO interview context - be exhaustive): `src/content/routes.ts:13`; `src/content/routes.ts:25`; `src/app/layout.tsx:17`; `src/components/page-common.tsx:193`; `DESIGN.md:90`
  Acceptance criteria (agent-executable): `rg -n "팀민트|TEAM MINT|team-mint|teammint|ReFit|Mix|thesmc" src` returns only intentionally archived comments or zero matches.
  QA scenarios (name the exact tool + invocation): Browser use: open all nav routes and inspect header/footer/metadata text, PASS if shell consistently says SLIT and all links resolve; Evidence `.omo/evidence/slit-shell-browser.md`
  Commit: Y | `feat(content): rebrand recruiting shell to SLIT`

- [ ] 6. Run checks and route-level browser QA.
  What to do / Must NOT do: Run static checks and real browser QA for every public route. Do not claim done from grep or a green build alone.
  Parallelization: Wave 3 | Blocked by: 5 | Blocks: final verification
  References (executor has NO interview context - be exhaustive): `package.json`; `scripts/capture-screenshots.ts`; `DESIGN.md:98`; `src/content/routes.ts:25`
  Acceptance criteria (agent-executable): `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build` exit 0, or any pre-existing failure is documented with proof.
  QA scenarios (name the exact tool + invocation): Browser use: start `pnpm dev`, open `/`, About, Culture, Life/People if linked, Journey, Careers at 375px and 1280px, PASS if no stale copy, no layout overlap, and CTAs/links work; Evidence `.omo/evidence/slit-final-browser.md`
  Commit: Y | `chore(qa): verify SLIT recruiting content`

## Final verification wave
> Runs in parallel after ALL todos. ALL must APPROVE. Surface results and wait for the user's explicit okay before declaring complete.
- [ ] F1. Plan compliance audit: confirm every adopted assumption was either implemented or explicitly changed by user direction.
- [ ] F2. Code quality review: confirm changes are scoped to static content/types/shell only unless a slot truly required a component adjustment.
- [ ] F3. Real manual QA: browser screenshots for all public routes, mobile and desktop.
- [ ] F4. Scope fidelity: confirm no confidential facts were published and no Team Mint content remains.

## Commit strategy
- Do not commit during planning.
- If implementation starts later, use separate conventional commits by logical surface:
  - `feat(content): replace home and about with SLIT narrative`
  - `feat(content): replace culture and life with SLIT working style`
  - `feat(content): add SLIT branding designer role`
  - `feat(content): rebrand recruiting shell to SLIT`

## Success criteria
- The user can approve a clear content direction before implementation.
- The plan identifies what to add, where to add it in the existing template, and what source material is still missing.
- Future implementation can proceed without asking broad content-architecture questions again.
- Public page copy will position SLIT consistently, show credible proof, sell the designer role, and avoid unverifiable/confidential claims.
- Public page copy will make a designer feel there is already strong project material they can shape into portfolio-grade work.
- Project copy will work as unified company portfolio proof by explaining problem, technology/approach, process, artifact, and result.
- d8d/lilmgenius and Neural Arcade will read as two useful proof surfaces while staying factually separated: collaboration caliber vs ongoing AX project.
