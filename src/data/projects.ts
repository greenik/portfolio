// Language-neutral facts: names, dates, stacks. All wording lives in src/i18n/<lang>.ts.

export const person = {
  name: 'Kamil Zieliński',
  email: 'needik@gmail.com',
  linkedin: 'https://www.linkedin.com/in/k-zielinski',
  cv: { href: '/Kamil_Zielinski_CV_EN.pdf', file: 'Kamil_Zielinski_CV_EN.pdf', size: '92 KB' },
  timeZone: 'Europe/Warsaw',
};

/** Filter groups on the work list. */
export const TAGS = ['angular', 'python', 'node', 'astro'] as const;
export type Tag = (typeof TAGS)[number];

export type Project = {
  id: string;
  name: string;
  org: 'Ideamotive' | 'Promoship';
  /** ISO year-month */
  start: string;
  end: string | null;
  stack: string[];
  tags: Tag[];
};

// Newest first.
export const projects: Project[] = [
  { id: 'metrow', name: '500metrow', org: 'Promoship', start: '2026-07', end: null, stack: ['Astro', 'Next.js', 'Payload CMS'], tags: ['astro', 'node'] },
  { id: 'pacemo', name: 'Pacemo / Memcare', org: 'Ideamotive', start: '2025-03', end: '2026-06', stack: ['Angular'], tags: ['angular'] },
  { id: 'growing', name: 'Growing Libraries', org: 'Promoship', start: '2025-03', end: '2026-05', stack: ['Python', 'Django', 'Alpine.js'], tags: ['python'] },
  { id: 'rmarket', name: 'Rmarket.pl', org: 'Promoship', start: '2024-12', end: '2025-06', stack: ['Astro', 'Wagtail CMS'], tags: ['astro', 'python'] },
  { id: 'youmap', name: 'YouMap', org: 'Promoship', start: '2023-09', end: '2025-03', stack: ['Angular', 'GraphQL', 'PrimeNG', 'Google Maps API'], tags: ['angular'] },
  { id: 'hid', name: 'HID Global', org: 'Promoship', start: '2020-07', end: '2023-09', stack: ['Angular'], tags: ['angular'] },
  { id: 'pitched', name: 'PITCHED', org: 'Promoship', start: '2019-03', end: '2020-07', stack: ['AngularJS'], tags: ['angular'] },
  { id: 'prodwatch', name: 'Prodwatch', org: 'Promoship', start: '2018-07', end: '2019-03', stack: ['Angular', 'NestJS', 'Express'], tags: ['angular', 'node'] },
  { id: 'schueler', name: 'Schuelernachhilfe1.de', org: 'Promoship', start: '2017-10', end: '2018-07', stack: ['Python', 'Django', 'AngularJS'], tags: ['python', 'angular'] },
  { id: 'cloudware', name: 'Cloudware Data Center Manager', org: 'Promoship', start: '2016-04', end: '2017-10', stack: ['Python', 'Django', 'AngularJS'], tags: ['python', 'angular'] },
];

/** The three projects featured in "Selected work", in display order. */
export const featured = ['pacemo', 'growing', 'hid'] as const;
export type FeaturedId = (typeof featured)[number];

export const projectById = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
};
