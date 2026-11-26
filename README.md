# Product-Designer---Portfolio
This is my personal professional portfolio to show my work, case studies and personal projects.

## Stack
Static site: plain HTML, CSS and JavaScript, no build step and no dependencies.

- `index.html` — the whole site (styles in `<style>`, content, and scripts at the end)
- `photo.jpg` — hero photo
- `cv-jose-luis-llovet.pdf` — linked from the "Download CV" buttons
- `CLAUDE.md` — project context and decisions for Claude Code

## Run locally
Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Editing content
Case studies, clients, testimonials and experience are generated from the arrays
(`CASES`, `CLIENTS`, `QUOTES`, `EXPERIENCE`) in the `<script>` at the end of `index.html`.

## Deploy
Planned: Vercel (static site, no build settings needed).
