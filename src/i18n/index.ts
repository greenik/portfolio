import en from './en';
import pl from './pl';
import type { Lang, Strings } from './types';

export type { Lang, Strings } from './types';

export const LANGS: Lang[] = ['en', 'pl'];
export const HOME: Record<Lang, string> = { en: '/', pl: '/pl/' };

export const getStrings = (lang: Lang): Strings => (lang === 'pl' ? pl : en);

/** "Jul 2026" / "lip 2026" */
export const monthYear = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${iso}-01T00:00:00Z`),
  );

/** "2025–26" / "2026–now" */
export const yearSpan = (start: string, end: string | null, present: string) => {
  const from = start.slice(0, 4);
  if (!end) return `${from}–${present}`;
  const to = end.slice(0, 4);
  return from === to ? from : `${from}–${to.slice(2)}`;
};

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
