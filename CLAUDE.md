# Portfolio de José Luis Llovet — contexto para Claude Code

Web personal de portfolio (Product Designer & UX Specialist, Aarhus). Habla con José en español; la web está en inglés.

## Stack
- HTML, CSS y JavaScript puros. Sin framework, sin build, sin dependencias.
- Archivos: `index.html` (estructura y textos fijos), `styles.css` (estilos), `content.js` (textos de casos, clientes, testimonios y experiencia) y `main.js` (lógica). En `<head>` queda un script de una línea que añade la clase `js` a `<html>`.
- Formato: CSS y JS formateados con Prettier (`--print-width 100 --single-quote`); mantener ese estilo, una propiedad por línea.
- Assets: `photo.jpg` (foto del hero, 1200×1500, recorte 4:5) y `cv-jose-luis-llovet.pdf` (botones "Download CV").
- Única carga externa: fuente Inter Tight desde Google Fonts.
- Despliegue previsto: Vercel (plan Hobby), como sitio estático. Aún NO publicado: José tiene que iniciar sesión en Vercel. Primero en URL `.vercel.app`; `josellovet.com` se conecta después, solo cuando él lo diga.

## Origen y límites
- La estructura y las interacciones están inspiradas en mikkelkoster.com (José pidió "1 to 1" en estructura). El código está escrito desde cero: no copiar código, textos, imágenes ni diseño literal de esa web.
- No inventar testimonios, cifras ni resultados. Solo datos que José haya dado o que estén en su CV.

## Estructura
- CSS (`styles.css`): tokens en `:root` (`--ink`, `--muted`, `--line`, `--tint`, `--accent`, `--radius`, `--gutter`, `--max`, `--space`…), luego secciones (nav, hero, stats, rows, cards, work, clients, carousel, beyond, experience, footer, dialogs, reveal before/after) y al final los breakpoints 1100 / 860 / 520 px.
- Contenido generado desde arrays en `content.js`: `CASES` (3 casos: `meta` en tarjeta y caso, `details` solo en el caso, context, challenge, ba, result), `CLIENTS` (8), `QUOTES` (testimonios, placeholder), `EXPERIENCE` (6 puestos; `EXP_VISIBLE = 4`).
- Orden de secciones: Hero → About (+stats) → How I work → Selected work → Additional work → Side projects → Experience → What people say → Beyond the work → Footer/contacto.
- Menú: About · Work · References · Experience. Por debajo de 1100 px se oculta la barra de enlaces y aparece el botón de menú (sticky), con desplegable que se cierra con Esc, al hacer clic fuera o al elegir una sección.

## Interacciones (decisiones ya tomadas)
- Casos de estudio: se abren desde el botón "See case study" Y al hacer clic en la imagen (también con Enter). Overlay `<dialog class="sheet">` a pantalla casi completa, con X sticky arriba a la derecha (no hay X abajo). Cierra con Esc, con la X o con clic fuera.
- Dentro del caso: carrusel con scroll-snap, bloques de texto, chips → tarjeta, comparador before/after en fondo BLANCO (no negro), métricas y botón "Next case".
- Comparador before/after: se arrastra (pointer events, `touch-action: pan-y`), teclas de flecha/Home/End, y barrido automático (18%↔82%, 6 s) mientras está en pantalla hasta la primera interacción. Sin barrido con prefers-reduced-motion.
- Modales pequeños para clientes y testimonios.
- Animaciones de entrada al hacer scroll (`.rv` → `.in`; al terminar se quitan ambas clases para que vuelvan los hover/press propios), cifras que cuentan (`data-count` + `data-suffix`).
- Easter egg: 5 clics seguidos (máx. 1,5 s entre clics) en la foto del hero → lluvia de bitcoins por toda la pantalla (canvas `.coin-rain`, sin bloquear clics, se borra al terminar). Clics 1–4 dan un pequeño "apretón" a la foto. Repetible, no se guarda nada, desactivado con prefers-reduced-motion. El ₿ se dibuja a mano (B + dos barras) para no depender de la fuente. Código en `initBitcoinRain` al final de `main.js`. (Se probó un arrugado de papel en 3D y José lo descartó.)
- Botones: primario gris grafito `#28282c` (hover `#3a3a3f`), radio 11 px (9 px en `.btn--sm`), no píldora. Las etiquetas/pills sí son redondas.

## Contenido actual
- Hero: "Product / Designer & / UX Specialist." (3 líneas) + "6+ years crafting digital interfaces, and 3+ years in product teams, most recently on data-heavy B2B SaaS…". Badge "Open to new opportunities" COMENTADO en el HTML (José aún no decide).
- Stats: 6+ años de diseño · 3+ años de product design · 3 design systems desde cero · 3 productos diseñados enteramente por él.
- Casos: AeroGuest Design System, Digital Keys (AeroGuest), Formalize.
- Email de contacto: jlllovet00@gmail.com. Teléfono deliberadamente fuera de la web.

## Pendiente
- Testimonios: siguen en lorem ipsum. Kristoffer Abell (antiguo jefe) va a mandar una referencia.
- Tercer side project: lorem ipsum.
- Todas las imágenes de casos y comparadores son maquetas CSS grises: sustituir por capturas reales de Figma.
- Nombrar el tercer design system en "How I work" cuando José diga cuál es.
- Comprobar que bewegungsmedizin-kiel.de está online (enlace en Side projects).
- Propuesta pendiente de confirmar: hover de los casos en "Selected work" = etiqueta negra "View case →" que sigue al cursor + zoom suave de la imagen (~3%) + flecha que entra junto al título. Solo en dispositivos con hover; respetar prefers-reduced-motion.
- Publicar en Vercel.

## Cómo trabajar
- Tras cada cambio: abrir en navegador y revisar escritorio (1440 px) y móvil (390 px); probar abrir/cerrar casos, menú y comparador.
- Cambios de contenido: editar `content.js` (o el texto fijo en `index.html`), no el maquetado.
- No cambiar el layout salvo que José lo pida.
