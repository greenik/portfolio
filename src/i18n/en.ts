import type { Strings } from './types';

const en: Strings = {
  lang: 'en',
  locale: 'en-US', // US short months: Sep, not Sept
  ogLocale: 'en_GB',
  meta: {
    title: 'Kamil Zieliński · Senior Angular & Full-Stack Developer',
    description:
      'Full-stack engineer in Lublin, Poland, with over ten years on complex B2B products. Deep Angular and TypeScript; Python/Django and Node (NestJS, Express) on the server. Open to full-time roles and contract work.',
  },
  skip: 'Skip to content',
  nav: {
    work: 'Work',
    contact: 'Contact',
    switchLang: 'pl',
    switchHref: '/pl/',
    switchName: 'PL',
    switchLabel: 'Polska wersja',
    theme: 'Dark theme',
  },
  hero: {
    title: ['Frontend depth.', 'Full-stack range.'],
    deck: [
      'Full-stack engineer with over ten years on complex B2B products: case management for the funeral industry, access control for sports events, production software for factory lines, a SaaS for public libraries.',
      'Angular and TypeScript are where I go deepest: architecture, large migrations, code review and mentoring. On the server I work in Python and Django, or Node with NestJS and Express, and I’ve shipped Next.js and Astro commercially.',
    ],
    facts: [
      { label: 'Open to', value: 'Full-time roles and contract work', status: true },
      { label: 'Now', value: 'Building 500metrow' },
      { label: 'Frontend', value: 'Angular, TypeScript, RxJS' },
      { label: 'Back end', value: 'Python / Django, Node / NestJS' },
      { label: 'Based in', value: 'Lublin, Poland' },
    ],
  },
  selected: {
    title: 'Selected work',
    intro: 'Three projects, three different kinds of problem.',
    cases: {
      pacemo: {
        kind: 'Frontend architecture',
        figure: '200+',
        figureLabel: 'components moved from Angular 12 to 21',
        body: 'A case-management platform for the funeral industry. I led the migration and made most of the refactoring and architecture calls. Builds got about 70% faster, and along the way I onboarded and mentored another engineer.',
      },
      growing: {
        kind: 'Back end and data',
        figure: '500,000+',
        figureLabel: 'community and address records enriched',
        body: 'A SaaS platform used by more than 100 public libraries. I built back-end and frontend features and integrated the DataAxle and Melissa APIs that enrich its records.',
      },
      hid: {
        kind: 'Built for scale',
        figure: '50,000+',
        figureLabel: 'attendees at the sports events it served',
        body: 'Ticketing and access control for large events. I built and maintained the access-control interfaces, wrote the technical documentation and supported hand-overs between teams.',
      },
    },
  },
  work: {
    title: 'Ten years of work',
    intro:
      'Most of it through Promoship, my longest collaboration, running since April 2016; in 2025–26 also at Ideamotive. Newest first.',
    filterLabel: 'Filter by stack',
    all: 'All',
    tags: { angular: 'Angular', python: 'Python / Django', node: 'Node', astro: 'Astro / Next.js' },
    status: 'Showing {shown} of {total} projects',
    present: 'now',
    projects: {
      metrow: {
        what: 'A platform for community clean-ups.',
        note: 'Astro pages, plus the Next.js and Payload CMS side of the product.',
      },
      pacemo: {
        what: 'Case management for the funeral industry.',
        note: 'Led the Angular 12 to 21 migration of 200+ components; builds about 70% faster. Reviewed code, and onboarded and mentored another engineer.',
      },
      growing: {
        what: 'A SaaS platform used by more than 100 public libraries.',
        note: 'Back-end and frontend features. Integrated the DataAxle and Melissa APIs to enrich over 500,000 community and address records.',
      },
      rmarket: {
        what: 'An Astro frontend on a Wagtail CMS back end, powered by Python and Django.',
      },
      youmap: {
        what: 'A social mapping platform.',
        note: 'Server-side rendering and SEO work for faster first loads and better search visibility. User-facing features built on GraphQL and map interactions.',
      },
      hid: {
        what: 'Ticketing and access control for large events.',
        note: 'Access-control interfaces used at sports events with more than 50,000 attendees. Wrote the technical documentation and supported hand-overs between teams.',
      },
      pitched: {
        what: 'Playlist delivery and management for Spotify and Deezer.',
        note: 'Built, tested and maintained the playlist-management features.',
      },
      prodwatch: {
        what: 'Production management for factory assembly lines.',
        note: 'Rebuilt a legacy AngularJS app in Angular 6 on a NestJS and Express back end. Introduced unit testing, reaching about 80% coverage in the core modules.',
      },
      schueler: {
        what: 'Tutoring, scheduling and payments.',
        note: 'Features across the frontend and the back end.',
      },
      cloudware: {
        what: 'Data-center management software.',
        note: 'Management features and interactive 2D infrastructure visualizations. Worked directly with clients on custom requirements and added automated tests.',
      },
    },
  },
  toolbox: {
    title: 'Toolbox',
    rows: [
      { label: 'Frontend', value: 'Angular, AngularJS, TypeScript, JavaScript, RxJS, Angular Signals, HTML, SCSS, PrimeNG, Angular Material' },
      { label: 'Back end', value: 'Python, Django, Node.js, NestJS, Express, REST, GraphQL' },
      { label: 'CMS', value: 'Wagtail CMS, Payload CMS' },
      { label: 'More frontend', value: 'Next.js and Astro in commercial work; React and Vue in my own projects; Alpine.js, Tailwind CSS' },
      { label: 'Engineering', value: 'SSR, SEO, performance profiling, Jest, Jasmine, Karma, Cypress, Git, Docker, Sentry' },
    ],
  },
  background: {
    title: 'Background',
    rows: [
      { label: 'Education', value: 'BSc in Computer Science, Maria Curie-Skłodowska University, Lublin, 2012–2015' },
      { label: 'Languages', value: 'Polish, native. English, advanced (C1).' },
    ],
  },
  close: {
    title: 'Hiring a full-stack or Angular engineer? Write to me.',
    availability: 'Open to full-time roles and contract work.',
    clock: 'It’s {time} in Lublin ({offset}).',
    clockFallback: 'Based in Lublin, Poland (Central European Time).',
    copy: {
      idle: 'Copy address',
      done: 'Copied',
      error: 'Selected, copy it',
      statusDone: 'Email address copied.',
      statusError: 'Could not copy automatically. The address is selected; copy it with your keyboard.',
    },
    cv: 'Download my CV',
    cvMeta: 'PDF, 92 KB',
    linkedin: 'LinkedIn profile',
  },
  sign: {
    place: 'Kamil Zieliński, Lublin',
    colophon: 'Set in Cabinet Grotesk and Switzer. Built with Astro.',
  },
};

export default en;
