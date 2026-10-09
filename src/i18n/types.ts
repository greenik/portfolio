import type { FeaturedId, Tag } from '../data/projects';

export type Lang = 'en' | 'pl';

export type Row = { label: string; value: string };

export type Strings = {
  lang: Lang;
  /** BCP 47 locale for Intl date formatting */
  locale: string;
  ogLocale: string;
  meta: { title: string; description: string };
  skip: string;
  nav: {
    work: string;
    contact: string;
    /** The other language */
    switchLang: Lang;
    switchHref: string;
    switchName: string;
    switchLabel: string;
    theme: string;
  };
  hero: { title: [string, string]; deck: string[]; facts: (Row & { status?: boolean })[] };
  selected: {
    title: string;
    intro: string;
    cases: Record<FeaturedId, { kind: string; figure: string; figureLabel: string; body: string }>;
  };
  work: {
    title: string;
    intro: string;
    filterLabel: string;
    all: string;
    tags: Record<Tag, string>;
    /** Uses {shown} and {total} */
    status: string;
    present: string;
    projects: Record<string, { what: string; note?: string }>;
  };
  toolbox: { title: string; rows: Row[] };
  background: { title: string; rows: Row[] };
  close: {
    title: string;
    availability: string;
    /** Uses {time} and {offset} */
    clock: string;
    clockFallback: string;
    copy: { idle: string; done: string; error: string; statusDone: string; statusError: string };
    cv: string;
    cvMeta: string;
    linkedin: string;
  };
  sign: { place: string; colophon: string };
};
