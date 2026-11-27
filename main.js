const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const chevron =
  '<svg class="exp__chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3.5 5.5 3.5 3.5 3.5-3.5"/></svg>';
const browser =
  '<div class="mock-browser"><div class="mock-browser__bar"><i></i><i></i><i></i></div><div class="mock-browser__body"><div class="mock-side"></div><div class="mock-main"><div class="mock-kpis"><i></i><i></i><i></i></div><div class="mock-chart"></div></div></div></div>';
const arrows =
  '<div class="arrows"><button class="icon-btn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3 5 8l5 5"/></svg></button><button class="icon-btn" data-dir="1" aria-label="Next"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 3 5 5-5 5"/></svg></button></div>';
const metaHTML = (rows) =>
  '<dl class="meta">' +
  rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('') +
  '</dl>';
const who = (q) =>
  (q.photo ? `<img src="${q.photo}" alt="" width="38" height="38">` : '<i></i>') +
  `<div><b>${q.name}</b><span>${q.role}</span></div>`;

$('#work-list').innerHTML = CASES.map(
  (c, i) => `
  <article class="case">
    <div class="case__text">
      <p class="case__kicker">${c.kicker[0]}<span>${c.kicker[1]}</span></p>
      <h3 class="case__title">${c.title}</h3>
      <p class="case__sub">${c.sub.replace(/<\/?strong>/g, '')}</p>
      <button class="case__link" data-case="${i}" aria-label="View case: ${c.title}">View case <span aria-hidden="true">→</span></button>
    </div>
    <div class="ph case__media" data-ph="Case image · 16:10">${browser}</div>
  </article>`,
).join('');

$('#clients-grid').innerHTML = CLIENTS.map(
  (c, i) => `
  <button class="client" data-client="${i}">
    <span class="client__logo"><i></i>${c.name}</span>
    <span class="client__d">${c.d}</span>
    <span class="pill">${c.tag}</span>
  </button>`,
).join('');

$('#quotes').innerHTML = QUOTES.map(
  (q, i) => `
  <figure class="quote">
    <p>${q.short}</p>
    <button class="link-u" data-quote="${i}">Read the full recommendation</button>
    <figcaption class="who">${who(q)}</figcaption>
  </figure>`,
).join('');
$('#testimonials .carousel__ctrl').insertAdjacentHTML('beforeend', arrows);

$('#exp-list').innerHTML = EXPERIENCE.map(
  ([co, date, role, tag, text], i) => `
  <div class="exp__row" data-open="false" ${i >= EXP_VISIBLE ? 'hidden data-extra' : ''}>
    <button class="exp__btn" aria-expanded="false">
      <span class="exp__co">${co}</span><span class="exp__date">${date}</span><span class="exp__role">${role}</span><span class="pill">${tag}</span>${chevron}
    </button>
    <div class="exp__panel" inert><div><div><p>${text}</p></div></div></div>
  </div>`,
).join('');

/* Before / after comparator */
const oldScreen =
  '<div class="scr scr--old"><div class="scr__side"></div><div class="scr__main"></div></div>';
const newScreen =
  '<div class="scr scr--new"><div class="scr__side"><i></i><i></i><i></i><i></i><i></i></div><div class="scr__main"><div class="scr__bar"><i></i><i></i><i></i></div><div class="scr__kpi"><i></i><i></i><i></i></div><div class="scr__rows"></div></div></div>';
const revealHTML = (title, text) => `<figure>
    <div class="reveal">
      <div class="reveal__layer reveal__before">${oldScreen}</div>
      <div class="reveal__layer reveal__after">${newScreen}</div>
      <span class="reveal__tag reveal__tag--a">Before</span>
      <span class="reveal__tag reveal__tag--b">After</span>
      <div class="reveal__line"></div>
      <div class="reveal__handle" role="slider" tabindex="0" aria-label="Compare before and after: ${title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5 2 10l5 5M13 5l5 5-5 5"/></svg>
      </div>
    </div>
    <figcaption><b>${title}</b>${text}</figcaption>
  </figure>`;

// Until the first interaction the handle sweeps 18% ↔ 82% (6 s period) while on screen.
function initReveal(el, scroller) {
  const handle = $('.reveal__handle', el);
  let x = 50,
    auto = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = false,
    raf = 0,
    last = 0,
    phase = 0,
    touchStart = null,
    dragging = false;

  const set = (v) => {
    x = Math.max(0, Math.min(100, v));
    el.style.setProperty('--x', x + '%');
    handle.setAttribute('aria-valuenow', Math.round(x));
  };
  const stopAuto = () => {
    auto = false;
    cancelAnimationFrame(raf);
  };
  const moveTo = (e) => {
    const r = el.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };
  const startDrag = (e) => {
    stopAuto();
    dragging = true;
    el.setPointerCapture(e.pointerId);
    moveTo(e);
  };

  const loop = (now) => {
    if (!auto || !visible) return;
    if (last) phase += (now - last) / 1000;
    last = now;
    set(50 + 32 * Math.sin((phase * Math.PI) / 3));
    raf = requestAnimationFrame(loop);
  };
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && auto) {
        cancelAnimationFrame(raf);
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    },
    { root: scroller, threshold: 0.35 },
  );
  io.observe(el);

  // On touch, only a mostly horizontal move grabs the handle, so scrolling past doesn't.
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') startDrag(e);
    else touchStart = { x: e.clientX, y: e.clientY };
  });
  el.addEventListener('pointermove', (e) => {
    if (dragging) return moveTo(e);
    if (!touchStart) return;
    const dx = Math.abs(e.clientX - touchStart.x),
      dy = Math.abs(e.clientY - touchStart.y);
    if (dx > 6 && dx > dy) startDrag(e);
  });
  el.addEventListener('pointerup', (e) => {
    if (touchStart && !dragging) {
      stopAuto();
      moveTo(e);
    } // tap
    dragging = false;
    touchStart = null;
  });
  el.addEventListener('pointercancel', () => {
    dragging = false;
    touchStart = null;
  });

  handle.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 10 : 2;
    const to = {
      ArrowLeft: x - step,
      ArrowDown: x - step,
      ArrowRight: x + step,
      ArrowUp: x + step,
      Home: 0,
      End: 100,
    }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    stopAuto();
    set(to);
  });
  return io;
}

function caseHTML(i) {
  const c = CASES[i],
    nextIndex = (i + 1) % CASES.length;
  const slides = c.slides
    .map(
      ([t, d]) => `
    <div class="slide"><div class="ph" data-ph="Screen · 16:10">${browser}</div><b>${t}</b><span>${d}</span></div>`,
    )
    .join('');
  return `
    <p class="label">Case study</p>
    <h2 class="display" id="case-title">${c.title}</h2>
    <p class="lede">${c.sub.replace(/<\/?strong>/g, '')}</p>
    ${metaHTML([...c.meta, ...c.details])}
    <div data-carousel>
      <div class="track">${slides}</div>
      <div class="carousel__ctrl"><div class="dots"></div>${arrows}</div>
    </div>

    <div class="sblock">
      <p class="label">${c.context.label}</p>
      <h3 class="h2">${c.context.h}</h3>
      <dl class="two"><div><dt>${c.context.a[0]}</dt><dd><p>${c.context.a[1]}</p></dd></div><div><dt>${c.context.b[0]}</dt><dd><p>${c.context.b[1]}</p></dd></div></dl>
    </div>

    <div class="sblock">
      <p class="label">${c.challenge.label}</p>
      <h3 class="h2">${c.challenge.h}</h3>
      <div class="flow">
        <div><p class="small flow__from">${c.challenge.from}</p>
          <div class="pills">${c.challenge.chips.map((x) => `<span class="pill">${x}</span>`).join('')}<span class="pill pill--dash">${c.challenge.extra}</span></div></div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9h12M10 4l5 5-5 5"/></svg>
        <div class="flow__card"><span class="small">${c.title}</span><b>${c.challenge.card[0]}</b><p class="small">${c.challenge.card[1]}</p></div>
      </div>
    </div>

    <div class="sblock ba">
      <p class="label">Before &amp; after</p>
      <h3 class="h2">${c.ba.h}</h3>
      <div class="ba__list">
        ${c.ba.items.map(([t, d]) => revealHTML(t, d)).join('')}
      </div>
    </div>

    <div class="sblock">
      <p class="label">Result</p>
      <h3 class="h2">${c.result.h}</h3>
      <div class="metrics">
        ${c.result.m.map(([n, l]) => `<div class="metric"><b>${n}</b><span>${l}</span></div>`).join('')}
      </div>
    </div>

    <div class="sheet__next">
      <span class="small">Next case</span>
      <button class="btn btn--ghost" data-case="${nextIndex}">${CASES[nextIndex].title} →</button>
    </div>`;
}

/* Dialogs */
const html = document.documentElement;
function openDialog(dlg) {
  if (dlg.open) return;
  dlg.showModal();
  html.classList.add('locked');
}
function closeDialog(dlg) {
  if (!dlg.open || dlg.classList.contains('closing')) return;
  const finish = () => {
    dlg.classList.remove('closing');
    dlg.close();
  };
  dlg.classList.add('closing');
  if (getComputedStyle(dlg).animationName === 'none') finish();
  else dlg.addEventListener('animationend', finish, { once: true });
}
$$('dialog').forEach((dlg) => {
  dlg.addEventListener('close', () => html.classList.remove('locked'));
  dlg.addEventListener('cancel', (e) => {
    e.preventDefault();
    closeDialog(dlg);
  });
  dlg.addEventListener('click', (e) => {
    const r = dlg.getBoundingClientRect();
    const onBackdrop =
      e.target === dlg &&
      (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom);
    if (onBackdrop || e.target.closest('[data-close]')) closeDialog(dlg);
  });
});

let caseObservers = [];
function openCase(i) {
  const sheet = $('#case-sheet');
  $('#case-body').innerHTML = caseHTML(i);
  openDialog(sheet);
  $$('[data-carousel]', sheet).forEach(initCarousel);
  caseObservers.forEach((io) => io.disconnect());
  caseObservers = $$('.reveal', sheet).map((el) => initReveal(el, sheet));
  // Always start at the top, also when arriving from "Next case".
  sheet.focus({ preventScroll: true });
  sheet.scrollTop = 0;
}
function openModal(content) {
  $('#modal-body').innerHTML = content;
  openDialog($('#modal'));
}

function initCarousel(root) {
  const track = $('.track', root),
    items = [...track.children],
    dots = $('.dots', root);
  const [prev, next] = $$('.arrows button', root);
  dots.innerHTML = items.map((_, i) => `<button aria-label="Go to ${i + 1}"></button>`).join('');
  const dotBtns = [...dots.children];
  const offset = (item) => item.offsetLeft - items[0].offsetLeft;
  const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  let index = 0,
    timer;

  const paint = () => {
    dotBtns.forEach((d, i) => d.classList.toggle('on', i === index));
    prev.disabled = index === 0;
    next.disabled = index === items.length - 1 || atEnd();
  };
  const go = (i) => {
    index = Math.max(0, Math.min(items.length - 1, i));
    track.scrollTo({ left: offset(items[index]), behavior: 'smooth' });
    paint();
  };
  prev.onclick = () => go(index - 1);
  next.onclick = () => go(index + 1);
  dotBtns.forEach((d, i) => (d.onclick = () => go(i)));

  // Once scrolling settles, mark the closest slide. The last few slides can't
  // reach the start edge, so at the end of the track a later index is kept.
  track.addEventListener(
    'scroll',
    () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const dist = (item) => Math.abs(offset(item) - track.scrollLeft);
        const closest = items.reduce(
          (best, item, i) => (dist(item) < dist(items[best]) ? i : best),
          0,
        );
        index = atEnd() ? Math.max(closest, index) : closest;
        paint();
      }, 80);
    },
    { passive: true },
  );
  paint();
}
$$('main [data-carousel]').forEach(initCarousel);

/* Experience */
$('#exp-list').addEventListener('click', (e) => {
  const btn = e.target.closest('.exp__btn');
  if (!btn) return;
  const row = btn.parentElement,
    open = row.dataset.open !== 'true';
  row.dataset.open = open;
  btn.setAttribute('aria-expanded', open);
  $('.exp__panel', row).inert = !open;
});
$('#exp-all').addEventListener('click', (e) => {
  const btn = e.currentTarget,
    show = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', show);
  btn.firstChild.textContent = show ? 'Show less ' : 'Show all experience ';
  $$('[data-extra]').forEach((row) => (row.hidden = !show));
  if (!show) $('#experience').scrollIntoView({ block: 'start' });
});

/* Nav */
const nav = $('#nav'),
  navSheet = $('#nav-sheet'),
  menu = $('#nav-menu');
const menuOpen = () => navSheet.classList.contains('open');
const setMenu = (open) => {
  navSheet.classList.toggle('open', open);
  navSheet.inert = !open;
  menu.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });
menu.addEventListener('click', () => setMenu(!menuOpen()));
$$('a', navSheet).forEach((a) => a.addEventListener('click', () => setMenu(false)));
matchMedia('(min-width:1101px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

const anchors = $$('.nav__anchors a');
const sectionIO = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        anchors.forEach((a) => a.classList.toggle('active', a.hash === '#' + entry.target.id));
    }),
  { rootMargin: '-45% 0px -50% 0px' },
);
anchors.forEach((a) => sectionIO.observe($(a.hash)));

document.addEventListener('click', (e) => {
  if (menuOpen() && !navSheet.contains(e.target) && !menu.contains(e.target)) setMenu(false);

  const caseEl = e.target.closest('[data-case]');
  const quoteEl = e.target.closest('[data-quote]');
  const clientEl = e.target.closest('[data-client]');
  if (caseEl) {
    openCase(+caseEl.dataset.case);
  } else if (quoteEl) {
    const q = QUOTES[+quoteEl.dataset.quote];
    openModal(
      `<p class="label" id="modal-title">Recommendation</p>${q.full.map((p) => `<p>${p}</p>`).join('')}<div class="who">${who(q)}</div>`,
    );
  } else if (clientEl) {
    const c = CLIENTS[+clientEl.dataset.client];
    openModal(
      `<p class="label">${c.tag}</p><h3 class="h3" id="modal-title">${c.name}</h3><p>${c.long}</p><div class="ph" data-ph="Image · 16:9"></div>`,
    );
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen()) {
    setMenu(false);
    menu.focus();
  }
});

/* Hero greeting: Hi, Hey, Hej, Hola, Hallo, Grüezi, one every 5 s */
const hello = $('.hero__hello');
const HELLOS = ['Hi', 'Hey', 'Hej', 'Hola', 'Hallo', 'Grüezi'];
let helloIndex = 0;
setInterval(() => {
  helloIndex = (helloIndex + 1) % HELLOS.length;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hello.textContent = HELLOS[helloIndex];
    return;
  }
  hello.classList.add('out');
  setTimeout(() => {
    hello.textContent = HELLOS[helloIndex];
    hello.classList.remove('out');
  }, 200);
}, 5000);

/* Slower, smoother scrolling: the mouse wheel and in-page links glide to their
   target instead of jumping. Touch, keys, dialogs, carousels and reduced motion
   keep the browser's own scrolling. */
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const EASE = 0.07; // share of the remaining distance covered each frame
  let target = scrollY;
  let current = scrollY;
  let raf = 0;
  const maxScroll = () => html.scrollHeight - innerHeight;
  const step = () => {
    current += (target - current) * EASE;
    if (Math.abs(target - current) < 0.5) current = target;
    scrollTo(0, current);
    raf = current === target ? 0 : requestAnimationFrame(step);
  };
  const glideTo = (y) => {
    if (!raf) current = scrollY;
    target = Math.max(0, Math.min(maxScroll(), y));
    if (!raf) raf = requestAnimationFrame(step);
  };
  addEventListener(
    'wheel',
    (e) => {
      const busy = html.classList.contains('locked') || html.classList.contains('intro-on');
      if (e.ctrlKey || busy || e.target.closest('dialog, .track, .nav__sheet')) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      glideTo((raf ? target : scrollY) + e.deltaY * (e.deltaMode === 1 ? 40 : 1));
    },
    { passive: false },
  );
  // scrolling some other way (keys, scrollbar, touch) resets the glide
  addEventListener(
    'scroll',
    () => {
      if (!raf) target = current = scrollY;
    },
    { passive: true },
  );
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    const section = hash.length > 1 && hash !== '#top' ? $(hash) : null;
    if (hash.length > 1 && hash !== '#top' && !section) return;
    e.preventDefault();
    const offset = section ? parseFloat(getComputedStyle(section).scrollMarginTop) || 0 : 0;
    glideTo(section ? section.getBoundingClientRect().top + scrollY - offset : 0);
  });
}

/* Intro: count to 100 while the line fills, then the name flies into the menu
   and becomes the logo, the screen fades and the hero comes in (see .intro in styles.css) */
if (html.classList.contains('intro-on')) {
  const intro = $('.intro');
  const name = $('.intro__name');
  const count = $('#intro-count');
  const t0 = performance.now();
  const duration = 1400;
  const land = () => {
    // move and shrink the big name onto the menu logo
    const from = name.getBoundingClientRect();
    const to = $('.nav__name > span').getBoundingClientRect();
    const scale = to.width / from.width;
    // line boxes differ in height, so line up the centres of the text, not the tops
    const dy = to.top + to.height / 2 - (from.top + (from.height * scale) / 2);
    name.style.transform = `translate(${to.left - from.left}px, ${dy}px) scale(${scale})`;
    html.classList.add('intro-out');
    name.addEventListener(
      'transitionend',
      () => {
        intro.remove();
        $('.nav__name').style.visibility = 'visible';
        setTimeout(() => {
          html.classList.remove('intro-on', 'intro-out');
          $('.nav__name').style.visibility = '';
        }, 700);
      },
      { once: true },
    );
  };
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / duration);
    const eased = 1 - (1 - p) ** 3;
    count.textContent = Math.round(eased * 100);
    intro.style.setProperty('--p', eased);
    if (p < 1) return requestAnimationFrame(tick);
    land();
  };
  requestAnimationFrame(tick);
}

/* Easter eggs. To add one: put its id in EGGS, then call findEgg('its-id') when someone
   discovers it. The footer shows how many exist and how many this visitor has found;
   found eggs are remembered in this browser only. */
const EGGS = [];
const eggsFound = new Set(
  (() => {
    try {
      return JSON.parse(localStorage.getItem('eggs-found')) || [];
    } catch {
      return [];
    }
  })(),
);
const renderEggs = () => {
  const found = EGGS.filter((id) => eggsFound.has(id)).length;
  $('#eggs').innerHTML = EGGS.length
    ? `${EGGS.length} easter egg${EGGS.length === 1 ? '' : 's'} · <b>${found}</b> found`
    : 'Easter eggs coming soon';
};
function findEgg(id) {
  if (!EGGS.includes(id) || eggsFound.has(id)) return;
  eggsFound.add(id);
  try {
    localStorage.setItem('eggs-found', JSON.stringify([...eggsFound]));
  } catch {}
  renderEggs();
}
renderEggs();

$('#year').textContent = new Date().getFullYear();
