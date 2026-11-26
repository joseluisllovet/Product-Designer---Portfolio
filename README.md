# Product-Designer---Portfolio
This is my personal professional portfolio to show my work, case studies and personal projects.

## Files
Static site: plain HTML, CSS and JavaScript, no build step and no dependencies.

| File | What's in it |
| --- | --- |
| `index.html` | Page structure and the fixed text (hero, about, how I work, side projects, beyond the work, footer) |
| `content.js` | Text for case studies, additional work, testimonials and experience |
| `styles.css` | All styles. Colours and spacing tokens are at the top, in `:root` |
| `main.js` | Behaviour: rendering, case study overlay, carousels, comparator, menu |
| `photo.jpg`, `cv-jose-luis-llovet.pdf` | Hero photo and CV |
| `CLAUDE.md` | Project context and decisions for Claude Code |

## Dónde cambiar cada texto
- **Hero, About, How I work, Side projects, Beyond the work, footer**: `index.html`. Busca la frase (Cmd + F) y cámbiala entre las etiquetas.
- **Casos de estudio, Additional work, testimonios, experiencia**: `content.js`. Cada texto va entre comillas `'...'`; cambia solo lo de dentro.
- Si un texto lleva un apóstrofo recto (`'`), escríbelo como `\'`, o usa el apóstrofo tipográfico `’`.
- Guarda, recarga el navegador y comprueba que todo se ve. Si una sección aparece vacía, casi siempre falta una comilla o una coma en `content.js`.

## Run locally
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy
Planned: Vercel (static site, no build settings needed).
