import type { Strings } from './types';

// Polish typesetting: a one-letter word (a, i, o, u, w, z) never ends a line,
// so it is glued to the next word with a non-breaking space.
const ORPHAN = /(?<=^|[\s(„ ])([aiouwzAIOUWZ])\s+/g;
const keepTogether = <T>(value: T): T => {
  if (typeof value === 'string') return value.replace(ORPHAN, '$1 ') as T;
  if (Array.isArray(value)) return value.map(keepTogether) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, keepTogether(v)])) as T;
  }
  return value;
};

const pl: Strings = {
  lang: 'pl',
  locale: 'pl-PL',
  ogLocale: 'pl_PL',
  meta: {
    title: 'Kamil Zieliński · Senior Angular i Full-Stack Developer',
    description:
      'Full-stack developer z Lublina z ponad dziesięcioletnim doświadczeniem w złożonych produktach B2B. Angular i TypeScript w głąb; Python/Django i Node (NestJS, Express) po stronie serwera. Otwarty na etat i kontrakt B2B.',
  },
  skip: 'Przejdź do treści',
  nav: {
    work: 'Projekty',
    contact: 'Kontakt',
    switchLang: 'en',
    switchHref: '/',
    switchName: 'EN',
    switchLabel: 'English version',
    theme: 'Ciemny motyw',
  },
  hero: {
    title: ['Frontend w głąb.', 'Full stack wszerz.'],
    deck: [
      'Full-stack developer z ponad dziesięcioletnim doświadczeniem w złożonych produktach B2B: obsługa spraw dla branży pogrzebowej, kontrola dostępu na wydarzeniach sportowych, oprogramowanie dla linii produkcyjnych, SaaS dla bibliotek publicznych.',
      'Najgłębiej siedzę w Angularze i TypeScripcie: architektura, duże migracje, code review i mentoring. Po stronie serwera pracuję w Pythonie i Django albo w Node z NestJS i Expressem, a komercyjnie realizowałem też projekty w Next.js i Astro.',
    ],
    facts: [
      { label: 'Otwarty na', value: 'Etat i kontrakt B2B', status: true },
      { label: 'Teraz', value: 'Rozwijam 500metrow' },
      { label: 'Frontend', value: 'Angular, TypeScript, RxJS' },
      { label: 'Backend', value: 'Python / Django, Node / NestJS' },
      { label: 'Lokalizacja', value: 'Lublin' },
    ],
  },
  selected: {
    title: 'Wybrane projekty',
    intro: 'Trzy projekty, trzy różne rodzaje problemów.',
    cases: {
      pacemo: {
        kind: 'Architektura frontendu',
        figure: '200+',
        figureLabel: 'komponentów przeniesionych z Angulara 12 na 21',
        body: 'Platforma do obsługi spraw dla branży pogrzebowej. Prowadziłem migrację i podejmowałem większość decyzji dotyczących refaktoryzacji i architektury. Buildy przyspieszyły o około 70%, a po drodze wdrożyłem i mentorowałem kolejnego programistę.',
      },
      growing: {
        kind: 'Backend i dane',
        figure: '500 000+',
        figureLabel: 'wzbogaconych rekordów o społecznościach i adresach',
        body: 'Platforma SaaS używana przez ponad 100 bibliotek publicznych. Tworzyłem funkcje backendowe i frontendowe oraz zintegrowałem API DataAxle i Melissa, które wzbogacają jej dane.',
      },
      hid: {
        kind: 'Skala',
        figure: '50 000+',
        figureLabel: 'uczestników wydarzeń sportowych, na których działał system',
        body: 'Sprzedaż biletów i kontrola dostępu na dużych wydarzeniach. Budowałem i utrzymywałem interfejsy kontroli dostępu, pisałem dokumentację techniczną i wspierałem przekazywanie projektu między zespołami.',
      },
    },
  },
  work: {
    title: 'Dziesięć lat pracy',
    intro:
      'Większość przez Promoship, moją najdłuższą współpracę, trwającą od kwietnia 2016 roku; w latach 2025–26 także w Ideamotive. Od najnowszych.',
    filterLabel: 'Filtruj według technologii',
    all: 'Wszystkie',
    tags: { angular: 'Angular', python: 'Python / Django', node: 'Node', astro: 'Astro / Next.js' },
    status: 'Pokazuję {shown} z {total} projektów',
    present: 'obecnie',
    projects: {
      metrow: {
        what: 'Platforma do społecznych akcji sprzątania.',
        note: 'Strony w Astro oraz część produktu oparta na Next.js i Payload CMS.',
      },
      pacemo: {
        what: 'Obsługa spraw dla branży pogrzebowej.',
        note: 'Prowadziłem migrację ponad 200 komponentów z Angulara 12 na 21; buildy szybsze o około 70%. Code review oraz wdrożenie i mentoring kolejnego programisty.',
      },
      growing: {
        what: 'Platforma SaaS używana przez ponad 100 bibliotek publicznych.',
        note: 'Funkcje backendowe i frontendowe. Integracja z API DataAxle i Melissa, która wzbogaciła ponad 500 000 rekordów o społecznościach i adresach.',
      },
      rmarket: {
        what: 'Frontend w Astro na backendzie Wagtail CMS, opartym na Pythonie i Django.',
      },
      youmap: {
        what: 'Społecznościowa platforma mapowa.',
        note: 'Server-side rendering i prace nad SEO dla szybszego pierwszego ładowania i lepszej widoczności w wyszukiwarkach. Funkcje dla użytkowników oparte na GraphQL i interakcjach z mapą.',
      },
      hid: {
        what: 'Sprzedaż biletów i kontrola dostępu na dużych wydarzeniach.',
        note: 'Interfejsy kontroli dostępu używane na wydarzeniach sportowych z ponad 50 000 uczestników. Dokumentacja techniczna i wsparcie przy przekazywaniu projektu między zespołami.',
      },
      pitched: {
        what: 'Dostarczanie playlist i zarządzanie nimi dla Spotify i Deezera.',
        note: 'Tworzenie, testowanie i utrzymanie funkcji zarządzania playlistami.',
      },
      prodwatch: {
        what: 'Zarządzanie produkcją na liniach montażowych.',
        note: 'Przepisanie starej aplikacji z AngularJS na Angular 6 z backendem w NestJS i Expressie. Wprowadzenie testów jednostkowych z pokryciem około 80% w kluczowych modułach.',
      },
      schueler: {
        what: 'Korepetycje, terminarze i płatności.',
        note: 'Funkcje po stronie frontendu i backendu.',
      },
      cloudware: {
        what: 'Oprogramowanie do zarządzania centrami danych.',
        note: 'Funkcje zarządzania i interaktywne wizualizacje infrastruktury 2D. Bezpośrednia praca z klientami nad wymaganiami oraz testy automatyczne.',
      },
    },
  },
  toolbox: {
    title: 'Narzędzia',
    rows: [
      { label: 'Frontend', value: 'Angular, AngularJS, TypeScript, JavaScript, RxJS, Angular Signals, HTML, SCSS, PrimeNG, Angular Material' },
      { label: 'Backend', value: 'Python, Django, Node.js, NestJS, Express, REST, GraphQL' },
      { label: 'CMS', value: 'Wagtail CMS, Payload CMS' },
      { label: 'Więcej frontendu', value: 'Next.js i Astro komercyjnie; React i Vue we własnych projektach; Alpine.js, Tailwind CSS' },
      { label: 'Inżynieria', value: 'SSR, SEO, profilowanie wydajności, Jest, Jasmine, Karma, Cypress, Git, Docker, Sentry' },
    ],
  },
  background: {
    title: 'Wykształcenie',
    rows: [
      { label: 'Studia', value: 'Informatyka, studia I stopnia (BSc), Uniwersytet Marii Curie-Skłodowskiej w Lublinie, 2012–2015' },
      { label: 'Języki', value: 'Polski: ojczysty. Angielski: zaawansowany (C1).' },
    ],
  },
  close: {
    title: 'Szukasz full-stack lub Angular developera? Napisz do mnie.',
    availability: 'Jestem otwarty na etat i kontrakt B2B.',
    clock: 'W Lublinie jest teraz {time} ({offset}).',
    clockFallback: 'Mieszkam w Lublinie (czas środkowoeuropejski).',
    copy: {
      idle: 'Kopiuj adres',
      done: 'Skopiowano',
      error: 'Zaznaczono, skopiuj',
      statusDone: 'Adres e-mail skopiowany.',
      statusError: 'Nie udało się skopiować automatycznie. Adres jest zaznaczony; skopiuj go z klawiatury.',
    },
    cv: 'Pobierz CV (po angielsku)',
    cvMeta: 'PDF, 92 KB',
    linkedin: 'Profil na LinkedIn',
  },
  sign: {
    place: 'Kamil Zieliński, Lublin',
    colophon: 'Złożono krojami Cabinet Grotesk i Switzer. Zbudowano w Astro.',
  },
};

export default keepTogether(pl);
