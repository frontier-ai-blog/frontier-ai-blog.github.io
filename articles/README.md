# Adding an article

## Recommended Copilot workflow

Run `/publish-article <draft-path> [output-slug]` when adding or revising an article. The workspace skill checks the complete input for direct internal telemetry, private documents, secrets, and non-public customer details before it changes the article or catalog.

- `PASS`: the skill can format the article and update the catalog.
- `NEEDS CONFIRMATION`: resolve each flagged passage before continuing.
- `BLOCKED`: remove or generalize the non-public material before continuing.

The skill is a shared authoring workflow, not a Git hook. Manual edits remain possible and require the same review before pushing.

1. Choose a short, descriptive, lowercase hyphenated slug (for example `enterprise-agent-memory`) and publish the article at `<slug>/index.html` in the site root. It is then served at `https://frontier-ai-blog.github.io/<slug>/`.
2. Update its title, description, canonical URL, date, category, heading, summary, and article body. Titles should state the topic plainly: avoid the "Vague phrase: the real point" colon pattern and the "Opinion X. Here's why Y" pattern.
3. Link `../articles/semantic-article-theme.css`, `../articles/semantic-article-theme.js`, and, last in `<head>`, `../articles/related-reading.css` for the shared editorial styling, related links, navigation, responsive layout, and theme selection. Store images in `articles/images/` and reference them as `../articles/images/...`. Keep article-specific charts and visual components in the page markup.
4. Place every contributor credit directly beneath the hero subtitle as `Name · Job title · Month Day, Year`. A name must never appear without the person's title.
5. Label the article with exactly one primary site category: `Agent Architecture`, `Memory and Context`, `Tools and Interfaces`, or `Models and Efficiency`. The categories are defined in `FRONTIER_CATEGORIES` in `catalog.js`; add a new one only when an article fits none of them. To also include an article in other homepage topics, add an `additionalCategories` array to its catalog entry.
6. Add related reading: one or two `related-inline` asides in the body where another team article is directly relevant, and a `related-reading` list of three articles at the end. Link to other articles as `../<slug>/`.
7. Point Homepage and Back links to `../index.html` or `../index.html#blog`, never to another author's website.
8. Add one matching object to `catalog.js` with `href: "<slug>/"`. The homepage renders, filters, and searches that catalog automatically.
9. Remove AI-style filler before publishing: em and en dashes, decorative emoji, hashtags, and stock phrases such as "Here's why" or "The key insight".

If you rename or move an article, leave a redirect page at the old address (see the redirect files in this folder) and update related links in the other articles.

The supported `visual` values are `boundary`, `systems`, `control`, `evaluation`, `memory`, `enterpriseMemory`, `reliability`, and `handoff`.