# Portfolio de José Luis Llovet — contexto para Claude Code

Web personal de portfolio (Product Designer & UX Specialist, Aarhus). Habla con José en español; la web está en inglés.

## Stack
- HTML, CSS y JavaScript puros. Sin framework, sin build, sin dependencias.
- Archivos: `index.html` (estructura y textos fijos), `styles.css` (estilos), `content.js` (textos de casos, clientes, testimonios y experiencia) y `main.js` (lógica). 
- Formato: CSS y JS formateados con Prettier (`--print-width 100 --single-quote`); mantener ese estilo, una propiedad por línea.
- Assets: `photo.jpg` (foto del hero, 1200×1500, recorte 4:5), `cv-jose-luis-llovet.pdf` (botones "Download CV") y fotos de testimonios (`mikkel-koster.jpg`).
- Única carga externa: fuentes de Google Fonts: DM Sans 500 (titulares, `--font-display`, también en cursiva para el saludo) e Inter 400/500/600 (texto, `--font`), las del "Warm Design System" de José (artifact https://claude.ai/artifact/ENaTEYr8ja8UbW9JrNJEEf).
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
- Selected work: cada caso es una fila compacta (texto a la izquierda, imagen 16:10 a la derecha; imagen arriba por debajo de 860 px) separada por líneas finas: `kicker` (empresa · rol + años, de `content.js`), título, frase (`sub` sin negritas) y enlace transparente "VIEW CASE →". Toda la fila es clicable: el botón "View case" se estira sobre el artículo con `::after` (una sola parada de teclado por caso).
- Casos de estudio: se abren pulsando en cualquier parte de su fila (o con Enter en "View case"). Overlay `<dialog class="sheet">` a pantalla casi completa, con X sticky arriba a la derecha (no hay X abajo). Cierra con Esc, con la X o con clic fuera.
- Dentro del caso: carrusel con scroll-snap, bloques de texto, chips → tarjeta, comparador before/after en fondo BLANCO (no negro), métricas y botón "Next case".
- Comparador before/after: se arrastra (pointer events, `touch-action: pan-y`), teclas de flecha/Home/End, y barrido automático (18%↔82%, 6 s) mientras está en pantalla hasta la primera interacción. Sin barrido con prefers-reduced-motion.
- Modales pequeños para clientes y testimonios.
- Sin animaciones de entrada ni cifras que cuentan: el Warm Design System no las permite ("no entrance choreography"). Transiciones de color de 120–200 ms con `--ease-standard`.
- Easter egg: ninguno por ahora. La lluvia de bitcoins (5 clics en la foto) y un arrugado de papel en 3D se probaron y José los quitó; él añadirá otros.
- Design system: TODO el sitio sigue el "Warm Design System" de José (https://claude.ai/artifact/ENaTEYr8ja8UbW9JrNJEEf): canvas `--bg #fffcf7`, `--soft #f7f1e8` (footer, marcos de imagen), `--tint #eee5d8` (tarjetas crema), `--tint-2 #e3d7c7`, ink `#0a0a0a`, body `#3a3a3a`, muted `#6a6a6a`, hairline `#e5e5e5`; DM Sans 500 en titulares (escala 72/56/40/32), Inter 600 en títulos de tarjeta, Inter 400 16 px/1.55 en texto, etiquetas 12 px 600 mayúsculas +1,5 px; radios 8/12/16/24; botones 44/36 px, label 14 px 600; contenedor 1280 px, márgenes 32 px, 96 px entre secciones; sin sombras, degradados, blur ni transparencias; foco 2 px ink. Excepciones decididas por José: botones principales en terracotta oscuro `--brand #b5583f` (AA 4,7:1; pulsado `#a9513a`) en vez del negro del design system; hover en Selected work; el saludo animado del hero. La barra pasa a menú hamburguesa por debajo de 1100 px (el design system dice 768, pero no cabe).
- Hero: columnas 7/5; etiqueta, titular, intro (title-md: 18 px 600 muted) y botones van juntos, centrados en vertical respecto a la foto. Footer: banda crema (`--soft`) de lado a lado.
- Botones: primario `--brand #b5583f` con texto blanco (sin hover; pulsado `--brand-active`), secundario canvas con borde hairline (pulsado `--soft`); radio 12 px (8 px en `.btn--sm`). Etiquetas/pills redondas; sobre tarjetas crema van en canvas.
- Hover (excepción al "sin hover" del design system, pedida por José; solo con `hover: hover`), un único patrón en toda la web: lo clicable se vuelve `--brand`. Títulos de casos (y la flecha de "View case" avanza 4 px; la imagen gana `--shadow-soft`, la sombra que el design system reserva para hover), nombre en tarjetas de clientes, empresa en experiencia, enlaces de menú, GitHub, enlaces de texto, josellovet.com e icono, email y footer; botones secundarios, de flecha, de menú y de cerrar pasan texto y borde a `--brand`; el botón principal se oscurece a `--brand-active`. Todo con transiciones de color de 160 ms; el bloque está antes de `prefers-reduced-motion` en `styles.css`.

## Contenido actual
- Hero (estructura inspirada en una referencia que pasó José, con la tipografía y colores propios de la web): etiqueta en mayúsculas `.hero__eyebrow` "Currently a Product Designer at AeroGuest, from Aarhus" + titular "Hi, I’m / José Llovet" (sin "Luis") (`.hero .display`, más pequeño que `.display`) donde el saludo en cursiva (`.hero__hello`, Inter Tight italic 400) rota cada 5 s: Hi → Hey → Hej → Hola → Hallo → Grüezi (fundido de 200 ms; sin animación con prefers-reduced-motion; el h1 lleva aria-label fijo) + intro corta: "3+ years designing B2B and B2C SaaS used by millions. I make complex workflows clear, on design systems built from scratch." Los detalles (Formalize 5M+ empleados, AeroGuest 1M+ huéspedes en nórdicos y Reino Unido) van al final del párrafo de About me. Cifras dadas por José: Formalize >5M de empleados usuarios; AeroGuest 1M+ huéspedes en nórdicos y Reino Unido. El "6+ years" se quitó a petición de José. Badge "Open to new opportunities" COMENTADO en el HTML (José aún no decide).
- Stats (3, en 3 columnas también en móvil): 3+ años de product design · 3 design systems desde cero · 3 productos diseñados enteramente por él. La cifra "6+ años de diseño" se quitó a petición de José; el "3+" lo confirmó él.
- Casos: AeroGuest Design System, Digital Keys (AeroGuest), Formalize.
- Side projects: solo josellovet.com, en una tarjeta horizontal (imagen a la izquierda, texto a la derecha; apilada por debajo de 860 px). Dr. Edler y el placeholder "Dolor" se quitaron a petición de José.
- Logo (arriba a la izquierda, `.nav__name`): "José Llovet" en DM Sans 500 24 px; la tilde de la é en `--brand` (una "e" normal con `´` superpuesto en `.nav__e::after`); el enlace lleva aria-label "José Llovet, back to top". Hover: solo la tilde crece un 18 % desde su base, el nombre no se mueve (excepción pedida por José; sin animación con prefers-reduced-motion). El resto de la web (title, meta, footer, alt) sigue diciendo "José Luis Llovet".
- Email de contacto: jlllovet00@gmail.com. Los botones "Get in touch" abren `mailto:` a ese email. Teléfono deliberadamente fuera de la web.
- Enlaces: LinkedIn (`linkedin.com/in/joseluisllr25`) y GitHub (`github.com/joseluisllovet`) en barra, menú y footer. En la barra, GitHub es un enlace de texto (`.nav__text`) en el sitio donde antes estaba "Download CV"; el CV sigue en hero, menú móvil, Experience y footer. En Side projects, la tarjeta josellovet.com lleva además solo el icono de GitHub (`.card__icon`) junto a su enlace.

## Pendiente
- Testimonios: José tendrá 4 en total. Ahora, en orden: Kasper Tikær (Head of Design, AeroGuest; foto `kasper-tikaer.jpg`; falta su texto, lleva placeholder), Mikkel Køster (Head of Product Design, Formalize; foto cabeza y hombros `mikkel-koster.jpg`) y Toni Borras (Founder & CEO, Borrads; foto `toni-borras.jpg`, que ya venía muy cerrada). Falta saber quién es el cuarto. Fotos en blanco y negro. En `content.js` cada testimonio es `{ name, role, short, full, photo }`; `short` es un extracto literal del texto.
- Todas las imágenes de casos y comparadores son maquetas CSS grises: sustituir por capturas reales de Figma.
- Nombrar el tercer design system en "How I work" cuando José diga cuál es.
- (Hecho) Hover de Selected work: ver "Selected work" en Interacciones.
- Publicar en Vercel.

## Cómo trabajar
- **Flujo obligatorio:** todo cambio se enseña primero a José en una vista previa (artifact con la web completa). Solo se hace commit y push a GitHub cuando José lo confirma.
- Tras cada cambio: abrir en navegador y revisar escritorio (1440 px) y móvil (390 px); probar abrir/cerrar casos, menú y comparador.
- Cambios de contenido: editar `content.js` (o el texto fijo en `index.html`), no el maquetado.
- No cambiar el layout salvo que José lo pida.
