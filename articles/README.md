# Adding an article

1. Add the published HTML file to this folder with a descriptive lowercase filename.
2. Update its title, description, date, category, heading, summary, and article body.
3. Link `semantic-article-theme.css` and `semantic-article-theme.js` for the shared editorial styling, navigation, responsive layout, and theme selection. Keep article-specific charts and visual components in the page markup.
4. Place every contributor credit directly beneath the hero subtitle as `Name · Job title · Month Year`. A name must never appear without the person's title.
5. Use topic labels such as `AI Strategy` or `Copilot Agent Architecture`; do not use generic role or perspective labels.
6. Point Homepage and Back links to `../index.html` or `../index.html#blog`, never to another author's website.
7. Add one matching object to `catalog.js`. The Blog homepage renders and searches that catalog automatically.

The supported `visual` values are `boundary`, `systems`, `control`, `evaluation`, `memory`, `reliability`, and `handoff`.