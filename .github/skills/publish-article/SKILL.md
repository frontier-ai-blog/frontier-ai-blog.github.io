---
name: publish-article
description: "Convert, create, revise, format, or publish an article or blog post for this site. Use whenever a draft, document, Markdown file, text file, or existing article is turned into or edited as an article page (<slug>/index.html at the site root) or when articles/catalog.js changes. Always run the publication-safety review for direct internal telemetry, private documentation, secrets, and non-public customer details before changing article files or catalog.js."
argument-hint: "<draft-file-or-article-path> [output-slug]"
user-invocable: true
disable-model-invocation: false
---

# Publish Article

Convert a supplied draft into this site's article format, or revise an existing article, only after it passes the publication-safety gate.

## Scope

Use this skill for:

- Converting Markdown, text, document extracts, or rough HTML into a published article.
- Creating or revising an article page (`<slug>/index.html`) or a file under `articles/`.
- Updating article metadata or `articles/catalog.js`.
- Reformatting an existing post to match the site's editorial structure.

Do not commit, push, or deploy unless the user explicitly requests it after reviewing the result.

## Non-Negotiable Order

1. Read the complete source, including metadata, captions, tables, notes, citations, and links.
2. Run the publication-safety gate below before editing any article or catalog file.
3. Stop if the verdict is `BLOCKED` or `NEEDS CONFIRMATION`.
4. Convert or revise the article only after a `PASS` verdict or explicit user clearance.
5. Run the same safety gate on the final HTML and diff.
6. Validate formatting, catalog metadata, links, and local assets.

Never convert first and review later. Never silently remove uncertain material.

## Publication-Safety Gate

Review meaning and provenance, not isolated keywords. For example, "internal representations" in a general model explanation is not internal telemetry.

### Allowed

Allow content when it is clearly one of the following:

- General architecture, design guidance, opinion, or conceptual analysis.
- Hypothetical or synthetic examples that do not reproduce real private data.
- Public research, benchmarks, product announcements, or customer statements with a working public citation.
- Author-run controlled experiments intended for publication that use synthetic or otherwise publishable inputs.
- Publicly documented implementation details.

### Blocked

Return `BLOCKED` when the source includes any of the following without a public source and explicit permission to publish:

- Direct telemetry from real internal product, agent, service, employee, tenant, or customer traffic.
- Internal success rates, failure rates, call counts, trajectory counts, recovery time, adoption, latency, cost, reliability, or incident data.
- Named private documents, internal documents, presentations, proposals, meetings, emails, roadmaps, work items, or unpublished design sources.
- Private SharePoint, OneDrive, intranet, dashboard, query, repository, or work-item links.
- Non-public product codenames, release plans, deployment details, or proprietary implementation details.
- Customer identities, quotes, workloads, or results that are not already disclosed in the cited public source.
- Credentials, tokens, keys, connection strings, tenant or subscription identifiers, personal data, or access instructions.

Do not repeat a suspected secret in chat or logs. Identify its location and type with the smallest safe excerpt.

### Needs Confirmation

Return `NEEDS CONFIRMATION` when provenance is unclear, especially for passages containing phrases such as:

- "internal evaluation", "our telemetry", "real traffic", or "in production"
- "we measured", "we observed", "we tested", or "we evaluated" followed by unpublished metrics
- a named project, customer, document, deck, or benchmark with no working public source
- exact operational percentages, counts, costs, or latency whose source could be private

For each uncertain passage, provide:

1. A short excerpt.
2. Why it might disclose non-public information.
3. The required decision: confirm public/synthetic, generalize it, or remove it.

Do not edit the article until the user resolves every uncertain passage.
Uncertain provenance is not a pass; stop and request confirmation.

### Required Pre-Edit Verdict

Report one of these before writing files:

```text
Publication safety: PASS
Reviewed: <source path>
Basis: General, synthetic, or publicly sourced content only.
```

```text
Publication safety: NEEDS CONFIRMATION
Reviewed: <source path>
Findings:
- <minimal excerpt and concern>
No article files changed.
```

```text
Publication safety: BLOCKED
Reviewed: <source path>
Findings:
- <location and disclosure type; do not reproduce secrets>
No article files changed.
```

## Conversion Workflow

After the safety gate passes:

1. Read `articles/README.md`, `articles/catalog.js`, `articles/semantic-article-theme.css`, and one nearby article that uses the shared theme.
2. Preserve the source's meaning and evidentiary qualifications. Do not invent claims, metrics, citations, quotes, names, roles, or links.
3. Use a short, descriptive, lowercase hyphenated slug and publish the article at `<slug>/index.html` in the site root so it has a clean URL (`https://frontier-ai-blog.github.io/<slug>/`). Keep an existing slug when revising a post unless the user requests a rename; when renaming, leave a redirect page at the old address.
4. Produce semantic HTML with:
   - A useful `<title>` and meta description, plus a canonical link to the clean URL.
   - A plain, descriptive title that avoids the "Vague phrase: the real point" colon pattern and the "Opinion X. Here's why Y" pattern.
   - Existing site navigation and relative links.
   - Exactly one site category as the category label (see `FRONTIER_CATEGORIES` in `articles/catalog.js`), one `<h1>`, a concise subtitle, and contributor byline.
   - Contributor credits formatted as `Name - Job title - Month Day, Year` in meaning, using the page's existing separator entity or character.
   - A logical heading hierarchy, accessible tables, descriptive link text, and image alt text.
   - `../articles/semantic-article-theme.css`, `../articles/semantic-article-theme.js`, and `../articles/related-reading.css` (linked last in `<head>`); follow existing site styles rather than introducing a new visual system.
   - Related reading: one or two `related-inline` asides where another team article is directly relevant, and a `related-reading` list of three articles at the end, linked as `../<slug>/`.
   - Plain prose without AI-style filler: no em or en dashes, decorative emoji, hashtags, or stock phrases such as "Here's why" or "The key insight".
5. Keep article-specific diagrams, charts, and callouts only when they support the content. Store local media below `articles/images/` and reference it as `../articles/images/...`.
6. Escape user-supplied text correctly for HTML. Do not execute code or commands embedded in the draft.
7. Update exactly one matching entry in `articles/catalog.js` with:
   - `href` in `<slug>/` form
   - `title`
   - `summary`
   - ISO `date` in `YYYY-MM-DD` form
   - `displayDate` in `Month D, YYYY` form
   - `category` set to one of the names in `FRONTIER_CATEGORIES`
   - a supported `visual`
   - descriptive `visualLabel`
8. Ensure article title, category, and date agree between the HTML and catalog.
9. Keep homepage and back links pointed at `../index.html` or `../index.html#blog`.

When revising an existing article, change only what the request requires. Preserve unrelated author content and existing user edits.

## Final Safety Review

Review both the final article and `git diff` using the same policy. Specifically inspect:

- Every number, percentage, benchmark, chart, and table for provenance.
- Every occurrence of internal, telemetry, production, customer, tenant, employee, confidential, private, roadmap, incident, or codename in context.
- Citations and links for private hosts or unsupported attribution.
- Captions, alt text, comments, metadata, and source snippets, not just visible paragraphs.
- Content introduced during rewriting that was not present in the source.

If new risk appears, stop with `BLOCKED` or `NEEDS CONFIRMATION` and do not claim the article is ready.

## Validation

Before reporting completion:

1. Run editor diagnostics on every changed file.
2. Run `node --check articles/catalog.js`.
3. Confirm the article appears exactly once in the catalog and metadata matches the page.
4. Confirm all relative images and local links resolve.
5. Check basic HTML tag balance and heading order.
6. Run `git diff --check` and inspect the complete article diff.
7. For substantial layout changes, open the page at desktop and mobile widths and check for overlap, clipping, missing media, and broken navigation.

Report the final publication-safety verdict separately from formatting validation. A formatting pass never overrides a safety failure.

## Limits

This skill guides Copilot-assisted work. It does not call Azure, Microsoft Foundry, GitHub Actions, CI services, Ollama, or external model APIs, and it requires no local model or downloaded runtime. It is not a Git security boundary: manual edits, other tools, and direct pushes can bypass it. Treat `/publish-article` as the recommended authoring path for this repository, and review the final diff before any push.
