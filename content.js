// All the text that changes between items lives here.
// Keep the quotes around each text. For ’ use the curly apostrophe, or \' inside '...'.

// Selected work. Each case is a card on the page and a full case study when opened.
//   kicker   small line above the title on the card: [company · role, years]
//   sub      line under the title (<strong> = dark part in the case study)
//   meta     Role / Hands-on / Team, shown in the case study
//   details  Industry / Scope / Timeline, shown in the case study
//   slides   carousel: [title, caption]
//   context, challenge, ba (before & after), result: the case study sections
//   h = section heading, m = result metrics [number, label]
const CASES = [
  {
    id: 'aeroguest-ds',
    title: 'AeroGuest Design System',
    kicker: ['AeroGuest · Product Designer', '2025 – 2026'],
    sub: '<strong>One system for three products,</strong> built from scratch for a digital hospitality platform.',
    meta: [
      ['Role', 'Product Designer, owner of the system'],
      ['Hands-on', 'Tokens, components, patterns and documentation'],
      ['Team', 'With the Head of Product Design'],
    ],
    details: [
      ['Industry', 'Hospitality, B2B2C SaaS'],
      ['Scope', 'Zest, Flow and Web Check-in'],
      ['Timeline', 'About 6 months, 2025 – 2026'],
    ],
    slides: [
      ['Foundations', 'Colour, type and spacing tokens shared by every product.'],
      ['Components', 'A documented library the whole team designs and builds from.'],
      ['Patterns', 'Recurring flows solved once and reused across products.'],
      ['Documentation', 'Handoff practices that make implementation faster and more consistent.'],
    ],
    context: {
      label: 'The context',
      h: 'A growing platform, designed from screenshots and copy-paste.',
      a: [
        'The product',
        'AeroGuest helps hotels and property managers automate operations and streamline the guest experience: mobile check-in and check-out, digital keys, in-app payments and room selection.',
      ],
      b: [
        'My role',
        'I was the designer responsible for the system, working alongside the Head of Product Design. I built it in about six months, and it now supports the entire product.',
      ],
    },
    challenge: {
      label: 'The challenge',
      h: 'Three products, each with its own way of doing things.',
      from: 'Before: every product designed on its own',
      chips: ['Zest · internal tool', 'Flow · hotel management', 'Web Check-in · guests'],
      extra: '+ every new feature',
      card: [
        'One design system',
        'Shared tokens, components, patterns and documentation, so every product looks and behaves the same.',
      ],
    },
    ba: {
      h: 'From copy-paste to a shared library.',
      items: [
        ['Components', 'Ad-hoc UI on the left, system components on the right.'],
        ['Product screens', 'The same screen before and after moving to the system.'],
      ],
    },
    result: {
      h: 'A foundation the whole product runs on.',
      m: [
        ['3', 'Products running on one system'],
        ['~6 mo', 'From first token to full coverage'],
        ['1', 'Source of truth for design and engineering'],
      ],
    },
  },

  {
    id: 'aeroguest-keys',
    title: 'Digital Keys',
    kicker: ['AeroGuest · Product Designer & UX Specialist', '2026'],
    sub: '<strong>Where the app meets the door.</strong> Connected guest experiences where the app and physical locks must work as one.',
    meta: [
      ['Role', 'Product Designer & UX Specialist'],
      ['Hands-on', 'Problem framing to shipped feature'],
      ['Team', 'PMs and engineers, Shape Up'],
    ],
    details: [
      ['Industry', 'Hospitality, B2B2C SaaS'],
      ['Scope', 'Guest app, check-in, digital keys'],
      ['Timeline', '2026'],
    ],
    slides: [
      ['Check-in', 'Mobile check-in before the guest arrives.'],
      ['Room selection', 'Choosing a room from the phone.'],
      ['Digital key', 'Opening the door with the app.'],
      ['Check-out', 'Leaving without queueing at reception.'],
    ],
    context: {
      label: 'The context',
      h: 'The key to the room lives in the guest’s phone.',
      a: [
        'The product',
        'AeroGuest’s guest experience covers mobile check-in and check-out, in-app payments, room selection and digital keys, all from the guest’s phone.',
      ],
      b: [
        'My role',
        'I lead UX for key product areas, from problem framing to shipped feature. I apply Shape Up with PMs and engineers, and run usability tests to keep improving the experience.',
      ],
    },
    challenge: {
      label: 'The challenge',
      h: 'Software and hardware have to feel like one thing.',
      from: 'Every step of the stay',
      chips: ['Mobile check-in', 'Room selection', 'In-app payments', 'Digital key', 'Check-out'],
      extra: '+ the physical lock',
      card: [
        'One guest journey',
        'From arrival to the door to check-out, in a single app that works with the lock.',
      ],
    },
    ba: {
      h: 'From reception desk to phone.',
      items: [
        ['Guest flow', 'The old flow next to the redesigned one.'],
        ['Key screen', 'How the digital key is presented to the guest.'],
      ],
    },
    result: {
      h: 'Shipped, tested and refined.',
      m: [
        ['App + lock', 'Designed as one experience'],
        ['End-to-end', 'From problem framing to release'],
        ['Tested', 'With real users, then improved'],
      ],
    },
  },

  {
    id: 'formalize',
    title: 'Formalize',
    kicker: ['Formalize · Product Designer', '2024 – 2025'],
    sub: '<strong>The company’s first design system,</strong> and clear workflows for a compliance SaaS platform.',
    meta: [
      ['Role', 'Product Designer, one of the first'],
      ['Hands-on', 'Design system in Figma, pages and flows'],
      ['Team', 'Hand in hand with the founders'],
    ],
    details: [
      ['Industry', 'Compliance, B2B SaaS'],
      ['Scope', 'Design system, core flows'],
      ['Timeline', 'Oct 2024 – Sep 2025'],
    ],
    slides: [
      ['Overview', 'The dashboard teams open first.'],
      ['Workflows', 'Compliance requirements broken into manageable steps.'],
      ['Pages and flows', 'Designed and prototyped end to end.'],
      ['Design system', 'The company’s first, built in Figma.'],
    ],
    context: {
      label: 'The context',
      h: 'Compliance is complex. The product shouldn’t feel that way.',
      a: [
        'The product',
        'Formalize turns complex compliance requirements into manageable, automated workflows for companies.',
      ],
      b: [
        'My role',
        'As one of the first product designers, working directly with the founders, I built the design system from scratch and designed and prototyped full pages and user flows.',
      ],
    },
    challenge: {
      label: 'The challenge',
      h: 'Dense interfaces for an already demanding job.',
      from: 'What users were dealing with',
      chips: ['Complex requirements', 'Dense interfaces', 'Inconsistent UI', 'Manual processes'],
      extra: '+ the next regulation',
      card: [
        'Clear, consistent workflows',
        'Simplified interfaces and realigned flows, built on one reusable, documented component library.',
      ],
    },
    ba: {
      h: 'Simpler screens, same depth.',
      items: [
        ['List view', 'A dense table before, a scannable list after.'],
        ['Detail view', 'The same record, reorganised around the task.'],
      ],
    },
    result: {
      h: 'A consistent product, built faster.',
      m: [
        ['1st', 'Design system in the company’s history'],
        ['0 → 1', 'Built from scratch in Figma'],
        ['Daily', 'Collaboration with engineers, PMs and founders'],
      ],
    },
  },
];

// Additional work tiles. d = text on the tile, long = text in the popup.
const CLIENTS = [
  {
    name: 'Zest',
    tag: 'Internal tool',
    d: 'AeroGuest’s internal tool, rebuilt on the design system.',
    long: 'Zest is the internal tool AeroGuest’s team uses every day. I moved it onto the shared design system so it looks and behaves like the rest of the platform.',
  },
  {
    name: 'Flow',
    tag: 'B2B SaaS',
    d: 'Hotel management for AeroGuest’s hotel and property clients.',
    long: 'Flow is AeroGuest’s hotel management product for hotels and property managers. I designed core staff flows, from research and wireframes to high-fidelity UI and developer handoff.',
  },
  {
    name: 'Web Check-in',
    tag: 'Guest app',
    d: 'Guests check in from their phone before they arrive.',
    long: 'Web Check-in lets guests check in before they arrive. I designed core guest flows and brought the product onto the shared design system.',
  },
  {
    name: 'NDB Technology',
    tag: 'Energy tech',
    d: 'Website redesign and UX research, Tallinn.',
    long: 'Product Designer Intern in Tallinn, Estonia (Jan – May 2023). I supported a full website redesign, improving information architecture and user flow, applied UX research to a live energy-tech product, and created marketing and social media assets in an international team.',
  },
  {
    name: 'Borrads',
    tag: 'Agency',
    d: '10+ websites designed and built end to end.',
    long: 'Web Designer, remote from Barcelona (Sep 2022 – May 2023). I led the design and development of 10+ websites end to end, managing full client cycles and building custom interfaces with WordPress, HTML, CSS and JavaScript.',
  },
  {
    name: 'Freelance',
    tag: 'Freelance',
    d: '10+ websites for small businesses in Jerez.',
    long: 'Web Designer in Jerez, Spain (Apr 2020 – Jan 2023). I delivered 10+ websites with WordPress and front-end technologies for small businesses, managing full client cycles including branding, digital strategy and content marketing.',
  },
  {
    name: 'UOC',
    tag: 'Education',
    d: 'Master’s in Interaction and UX Design.',
    long: 'Master’s in Interaction and User Experience Design (UI/UX) at Universitat Oberta de Catalunya, 2024 – 2025. Key areas: UX research, information architecture, interaction design, interface design, usability testing and UX strategy.',
  },
  {
    name: 'University of Cádiz',
    tag: 'Education',
    d: 'Bachelor’s in Advertising and Public Relations.',
    long: 'Bachelor’s in Advertising and Public Relations at the University of Cádiz, 2019 – 2023. Relevant coursework: graphic design, visual communication and branding.',
  },
];

// Testimonials: name, role, the short text on the card, the full text in the popup,
// and an optional photo (a square black-and-white file in images/).
// Those without text show placeholder copy until the real recommendation arrives.
const QUOTES = [
  { name: 'Kasper Tikær', role: 'Head of Design, AeroGuest', photo: 'images/kasper-tikaer.jpg' },
  {
    name: 'Mikkel Køster',
    role: 'Head of Product Design, Formalize',
    photo: 'images/mikkel-koster.jpg',
    short:
      'José is an invaluable product designer within our Product Team at Formalize. He built our design system from scratch and owned its ongoing maintenance.',
    full: [
      'José is an invaluable product designer within our Product Team at Formalize, with a strong commitment and a positive impact on our team’s efficiency. He built our design system from scratch and owned its ongoing maintenance, while also designing new components and end-to-end pages and flows.',
      'José possesses a strong eye for UI, is highly proficient in Figma, and is highly proactive and self-driven. I wholeheartedly recommend José.',
    ],
  },
  {
    name: 'Morten Becker Grønning',
    role: 'Chief Product Officer, AeroGuest',
    photo: 'images/morten-becker-gronning.jpg',
  },
  {
    name: 'Toni Borras',
    role: 'Founder & CEO, Borrads',
    photo: 'images/toni-borras.jpg',
    short:
      'He faces challenges with enthusiasm and finds sensible and practical solutions. The results of his work always maintained a high standard of quality, even under changing requirements and adverse conditions.',
    full: [
      'José Luis was employed as WordPress Web Designer and Developer in our company, planning, designing and developing websites using WordPress, HTML, CSS and JavaScript, and maintaining over 30 websites. José possesses exceptionally comprehensive and outstanding specialized knowledge, which he employs with confidence and success in all of his activities.',
      'He faces challenges with enthusiasm and finds sensible and practical solutions. The results of his work always maintained a high standard of quality, even under changing requirements and adverse conditions.',
      'We would like to thank José for his consistently excellent performance. We are convinced that he will continue to achieve extraordinary successes in the future.',
    ],
  },
].map((q) => ({
  short:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  full: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ],
  ...q,
}));

// Experience, newest first: [company, dates, role, tag, description].
const EXPERIENCE = [
  [
    'AeroGuest',
    'Jun 2026 – Now',
    'Product Designer & UX Specialist',
    'B2B2C SaaS',
    'Lead UX for key product areas, from problem framing to shipped feature. I apply Shape Up to complex user problems, designed connected experiences like digital keys where the app and physical door locks must work seamlessly together, and run usability tests that keep improving the product.',
  ],
  [
    'AeroGuest',
    'Sep 2025 – Jun 2026',
    'Product Designer',
    'B2B2C SaaS',
    'Involved in the full design lifecycle of the hospitality platform. I built the Design System from the ground up, designed core guest and staff flows from research to developer handoff, and defined documentation and handoff practices that made implementation faster and more consistent.',
  ],
  [
    'Formalize',
    'Oct 2024 – Sep 2025',
    'Product Designer',
    'B2B SaaS',
    'Created the company’s first design system from scratch in Figma, designed and prototyped full pages and user flows, and simplified dense interfaces to better match user needs and business goals.',
  ],
  [
    'NDB Technology',
    'Jan 2023 – May 2023',
    'Product Designer Intern',
    'Energy tech',
    'In Tallinn, Estonia. Supported a full website redesign, improving information architecture and user flow, and created digital assets for marketing and social media in an international, cross-functional team.',
  ],
  [
    'Borrads',
    'Sep 2022 – May 2023',
    'Web Designer',
    'Agency',
    'Remote, Barcelona. Led the design and development of 10+ websites end to end and built custom interfaces with WordPress, HTML, CSS and JavaScript.',
  ],
  [
    'Freelance',
    'Apr 2020 – Jan 2023',
    'Web Designer',
    'Freelance',
    'Jerez, Spain. Delivered 10+ websites for small businesses and managed full client cycles including branding, digital strategy and content marketing.',
  ],
];

// How many roles show before "Show all experience".
const EXP_VISIBLE = 4;
