# Frontier AI Blog

Static website for the Frontier AI team in Microsoft Office.

## Site

<https://frontier-ai-blog.github.io/>

Each article has its own clean URL at the site root, for example <https://frontier-ai-blog.github.io/enterprise-agent-memory/>.

## Structure

- `index.html`: landing page with the team overview, our story, research areas, and the filterable blog list.
- `team.html`: team roster.
- `<slug>/index.html`: one folder per article, which gives each article a clean URL.
- `articles/`: the article catalog (`catalog.js`), shared article styles and scripts, and images. The original `articles/*.html` addresses redirect to the new URLs.

## Publishing articles

See [`articles/README.md`](articles/README.md) for the publishing workflow.