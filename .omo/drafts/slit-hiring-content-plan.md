---
slug: slit-hiring-content-plan
status: drafting
intent: unclear
pending-action: write .omo/plans/slit-hiring-content-plan.md
approach: Use the existing Team Mint/Oopy-style recruiting template as the frame, replace the content strategy with SLIT-specific recruiting proof, and keep implementation deferred until the user approves.
---

# Draft: slit-hiring-content-plan

## Components (topology ledger)
<!-- Lock the SHAPE before depth. One row per top-level component that can succeed or fail independently. -->
<!-- id | outcome (one line) | status: active|deferred | evidence path -->
| C1 | Core narrative explains SLIT, Recova, and why the company portfolio is strong enough for both recruiting and client trust | active | Notion page "SLIT 성과 모음"; src/content/page-data/company.ts:7 |
| C2 | Portfolio/proof content reads as one unified company portfolio, not separate recruiting/client surfaces | active | Notion page sections Awards/Programs/Projects/Channels; Notion data source "SLIT Press / Mentions"; user screenshot/request on 2026-06-19 |
| C3 | Existing page templates are mapped to specific SLIT content slots | active | src/content/types.ts:61; src/components/page-home-about.tsx:14; src/components/page-life-careers.tsx:83 |
| C4 | Current recruiting role is defined as a candidate-facing job with process and application path | active | Notion recruiting text; src/content/page-data/hiring.ts:62 |
| C5 | Missing source assets/facts are identified before implementation | active | DESIGN.md:98; src/content/page-data/people.ts:13 |

## Open assumptions (announced defaults)
<!-- Intent is UNCLEAR: research resolves ambiguity, defaults are adopted (not asked), and each is surfaced in the plan's human TL;DR for veto. -->
<!-- assumption | adopted default | rationale | reversible? -->
| Intended audience | Primary audience is a broad early-stage designer who can handle brand, web, materials, and content depending on the situation | User selected "넓은 의미의 초기 디자이너" | Yes |
| Recova positioning | Lead with "채권 계정 검토, 회수 가능성 판단, 법적 조치 의사결정 AI Agent"; do not lead with voice/call automation until clarified | The Notion page has two Recova descriptions; the richer, more differentiated one is the workflow/judgment agent | Yes |
| Proof density | Use 3-5 strongest highlights above the fold; move the long proof list into links/portfolio sections | Recruiting pages need fast credibility, not an archive dump | Yes |
| Template scope | Reuse the current seven-route structure first: Home, About, Culture, Interviews, Life, Journey, Careers | The repo is already built around `PageContent`; this avoids premature component work | Yes |
| Role type | Treat the first job as flexible/contract/project-based unless the user later confirms full-time | The Notion recruiting copy says full online is possible and welcomes portfolio builders; current type only supports `정규직`/`계약직` | Yes |
| Public disclosure | Public article links, awards, programs, and Notion-level proof can be shown openly; draft project stories in the Notion tone and keep sensitive parts easy to revise | User asked to keep the Notion feel and make article/proof links openly visible | Yes |
| Portfolio appeal | Frame the page so a designer feels SLIT's awards/projects can become strong portfolio material with their contribution | User explicitly wants "조금만 해도 저 포폴들을 내 포폴로 녹일 수 있겠다" | Yes |
| Unified portfolio use | Do not visibly separate recruiting portfolio and client portfolio; project blocks should read as company portfolio cases that both audiences can interpret | User clarified it should be hard to distinguish whether it is for clients or recruiting | Yes |
| Project scope | Include detailed cases for Recova, d8d/lilmgenius collaboration, Outsome, 로톡, ArtWizard, Peopet, SPEC, ANYON, and Neural Arcade | User asked not to filter projects and to add Neural Arcade | Yes |
| d8d / Neural Arcade split | Treat d8d/lilmgenius as a collaboration/network proof case and Neural Arcade as a separate ongoing AX project case | User clarified the underlying relationship but wants two separate-looking portfolio surfaces | Yes |
| Detail interaction | Show short summaries first and reveal detailed case content via a "자세히 보기" interaction | User requested short visible view with click-to-detail | Yes |
| Tech language | Use technology names, but explain them in accessible language | User accepted the recommended technical disclosure level | Yes |

## Findings (cited - path:lines)
- The repo is a Next 16 / React 19 recruiting site clone with static content in `src/content/page-data/*`; page routing pulls from `pages` and `routePaths`, not a CMS. See `src/content/pages.ts:6`, `src/content/routes.ts:3`.
- `PageContent` supports `intro`, `stats`, `heroImage`, `sections`, `linkCards`, `interviewCards`, and `jobs`; this is enough for most SLIT content without a new CMS. See `src/content/types.ts:61`.
- Home already has the right slots for SLIT: hero image, headline/intro, four stats, section blocks, external link cards, CTA, footer. See `src/components/page-home-about.tsx:14`.
- About already has the right identity/mission/vision pattern: intro eyebrow/statement, first section body, stats, hero image, then additional sections. See `src/components/page-home-about.tsx:65`.
- Careers is currently thin: it renders page title, `jobs`, then `sections.at(1)` as process and `sections.at(2)` as notice. The first `sections[0]` title is effectively structural, not content-rich. See `src/components/page-life-careers.tsx:83`.
- Current `careersPage` data is still Team Mint-specific Performance Architect hiring copy and external job links. See `src/content/page-data/hiring.ts:62`.
- The navigation, metadata, logo URLs, call-chat URL, and all public labels are still Team Mint-oriented. See `src/content/routes.ts:13`, `src/content/routes.ts:25`, `src/app/layout.tsx:17`.
- The existing design system is Notion/Oopy document-like: white surface, compact content column, muted dividers, restrained card use. See `DESIGN.md:1`, `DESIGN.md:98`.
- The Notion source page has enough proof buckets for a recruiting portfolio: Awards / Recognition, Programs / Accelerators, Projects / Client Work, Product / PoC, Community, Channels, and Press / Mentions.
- The Notion press DB schema is useful for proof cards: `Title`, `Type`, `Publisher`, `Date`, `Visibility`, `Source URL`, and `Quote / Key line`.
- Content risk: Notion describes Recova once as a judgment/workflow AI Agent for reviewing claims and legal actions, and later as an AI voice agent for calls/payment reminders. The public page should not publish both as the same primary positioning.
- Public Neural Arcade research supports a credible separate project case: Neural Arcade's official site frames it as an AI entertainment app studio combining game-like experiences, chatbot expertise, and AI-powered modular systems. Source: https://www.neuralarcade.ai/
- Google Play publicly lists HelloBot under developer NEURAL ARCADE with 1M+ downloads, 40.9K reviews, and a 4.2 rating as of 2026-06-19. Source: https://play.google.com/store/apps/details?id=com.thingsflow.hellobot
- ZGOO's 2026-03-31 insight describes Neural Arcade as an AI-based social/entertainment app studio founded by CEO 이수지 in 2025 and describes HelloBot as a service with more than 2 million cumulative users. Source: https://zgoo.xyz/insights/news/26
- Smart Today also covers the HelloBot founder/Krafton/ZGOO context. This is useful proof, but the public copy should emphasize "validated consumer AI service context" over revenue. Source: https://www.smarttoday.co.kr/ko-kr/articles/106030
- The public lilmgenius profile describes d8d founder/CAIO, 30+ SI/AX projects, LF AI principal, Fastcampus instructor, and AI speaker/judge credentials. Source: https://lilmgenius.notion.site/

## Decisions (with rationale)
- Recommendation: do not make "채용 중인 포지션" carry the whole portfolio. Use Home/About for the team story and proof, Careers for the actual role, and Journey for process.
- Recommendation: lead with "AI 시대에 남는 전문 도메인을 찾고, 복잡한 업무를 제품화하는 팀" because it explains why SLIT is not just another vibe-coding/dev shop.
- Recommendation: make Recova the anchor product, but use achievements/projects as evidence of execution speed and credibility.
- Recommendation: for the early designer role, frame the job around turning strong but under-packaged achievements into portfolio-grade brand, web, sales, investor, proposal, and content artifacts.
- Recommendation: the page should not apologize for being early. It should say, in effect, "the raw material is already strong; a designer can make it visible and own the resulting portfolio."
- Recommendation: include project story cards for Recova plus non-Recova projects, each using a repeatable structure: context, design/material problem, what SLIT built, what changed, what a designer could improve next.
- Recommendation: project stories should read as company portfolio cases. A designer should infer "I can make this mine"; a client should infer "this team can solve and explain projects."
- Recommendation: each important project should show the problem solved, technology/approach used, SLIT's build process, key difficulty or iteration, shipped artifact, and result/proof.
- Recommendation: use all nine known projects as company portfolio cases, not just four highlights.
- Recommendation: split the d8d/lilmgenius and Neural Arcade stories without pretending they are unrelated. d8d/lilmgenius should be framed as collaboration/network proof; Neural Arcade should be framed as the ongoing project case.
- Recommendation: for d8d/lilmgenius, let public credentials do the persuasion. Avoid writing "대단한 사람" directly; write the concrete collaboration context and proof.
- Recommendation: for Neural Arcade, anchor the story in public HelloBot/AI-entertainment proof, then describe SLIT's AX scope in editable language until the exact deliverables are confirmed.
- Recommendation: preserve the existing code feel by repurposing the current `interviews` page/card pattern into a `프로젝트 포트폴리오` page. Cards stay short; native expand/click detail or lightweight detail panels reveal the full case.
- Recommendation: avoid a heavy new routing/content system unless implementation proves necessary. A single project portfolio page with expandable cases is the best first fit.
- Recommendation: expose public press/program proof strongly and preserve the Notion tone. Keep project-specific paragraphs modular so the user can correct details later.
- Recommendation: keep the current Notion-like visual rhythm for now. The strongest near-term improvement is content accuracy and hierarchy, not a new visual system.

## Verification receipts
- `git diff --check -- .omo/drafts/slit-hiring-content-plan.md .omo/plans/slit-hiring-content-plan.md` exited 0.
- Template-marker search returned no remaining fill markers.
- Read back `.omo/plans/slit-hiring-content-plan.md` after edits and confirmed the TL;DR, scope, todos, QA strategy, and success criteria are filled.
- No production code changed; build/browser QA intentionally deferred to implementation.

## Scope IN
- Content architecture for the current repo template.
- Page-by-page recommendation for what SLIT content should replace Team Mint content.
- Specific source gaps the user should provide before implementation.
- Future implementation plan in `.omo/plans/slit-hiring-content-plan.md`.

## Scope OUT (Must NOT have)
- No production code changes in this planning turn.
- No new visual redesign or component build in this planning turn.
- No confidential client names, PoC company names, or unverifiable metrics without user confirmation.
- No raw dump of the Notion page into the website.
- No claim that Recova is both a workflow/legal-decision agent and a voice collection agent until positioning is reconciled.

## Open questions
- None blocking this planning brief. The first veto point for the user is whether Recova should be positioned as workflow/judgment AI, voice/call AI, or both with a clear hierarchy.

## Approval gate
status: awaiting-approval
pending action: user can approve this content architecture for implementation, or revise the adopted assumptions above.
<!-- When exploration is exhausted and unknowns are answered, set status: awaiting-approval. -->
<!-- That durable record is the loop guard: on a later turn read it and resume at the gate instead of re-running exploration. -->
