import Link from "next/link";
import {
  FeaturedWork,
  type FeaturedProject,
} from "@/components/home/FeaturedWork";
import {
  Experience,
  type ExperienceEntry,
} from "@/components/home/Experience";

const projects: FeaturedProject[] = [
  {
    slug: "cosmic-solo",
    title: "Cosmic Solo",
    positioning:
      "An AI-powered astrology app that helps you decide, not just scroll. On-device natal chart computation and grounded guidance.",
    status: { label: "Launching soon", tone: "soon" },
    role: "Solo — design, engineering, product",
    stack: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Redux Toolkit",
      "astronomia",
      "OpenAI",
    ],
    heroSrc: "/work/cosmic-solo/home.png",
    heroAlt: "Cosmic Solo home screen",
    accent: "rgba(194, 65, 12, 0.22)",
  },
  {
    slug: "life-in-character",
    title: "Life In Character",
    positioning:
      "A Habitica-inspired RPG habit tracker. Built as a personal engineering study in gamification mechanics, sprite-layered avatars, and Redux-at-scale.",
    status: { label: "Personal build", tone: "personal" },
    role: "Solo — design, engineering",
    stack: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
    ],
    heroSrc: "/work/life-in-character/character.png",
    heroAlt: "Life In Character avatar screen",
    accent: "rgba(56, 189, 248, 0.22)",
  },
];

const experience: ExperienceEntry[] = [
  {
    company: "DFW International Airport",
    role: "Senior React Native Developer · Contract",
    timeframe: "2025",
    note: "Next-generation field ops app. ArcGIS migration, offline-first architecture, encrypted GPS breadcrumbs. 150+ iPads deployed.",
  },
  {
    company: "Emcee",
    role: "Senior Full-Stack React Developer",
    timeframe: "2024 – present",
    note: "Social commerce platform. Led Creator Analytics mobile module and Next.js brand portal. Apollo GraphQL, Stripe Connect, Algolia.",
  },
  {
    company: "Antares Technologies",
    role: "Senior React Native Developer",
    timeframe: "2022 – 2025",
    note: "Led development and 3-year maintenance of VoCap — cross-platform voice recording and editing app. Native module integration and multi-arch builds.",
  },
  {
    company: "Techfield",
    role: "Senior React Consultant",
    timeframe: "2022",
    note: "Pest-control technician workflow app. Modular React components, Redux state, AWS Lambda backend.",
  },
  {
    company: "Airbnb",
    role: "Senior React Native Developer",
    timeframe: "2019 – 2021",
    note: "Real-time order tracking, Apple Pay / Google Pay native modules, geolocation-based routing. Hermes and Redux performance work.",
  },
  {
    company: "NerdWallet",
    role: "Senior React Native Developer",
    timeframe: "2017 – 2019",
    note: "Predictive autocomplete for financial forms, Express + MongoDB APIs, Material Design across iOS and Android.",
  },
  {
    company: "Vogue",
    role: "React Native Developer",
    timeframe: "2015 – 2017",
    note: "Vogue Runway Fashion Shows app — cross-platform, offline mode, Mapbox integration. 1M+ downloads.",
  },
  {
    company: "Discord",
    role: "React Native Developer",
    timeframe: "2015",
    note: "Reusable UI component library, React Navigation + Redux, chat performance work.",
  },
  {
    company: "Sanmina Corporation",
    role: "iOS & Android Native Mobile Developer",
    timeframe: "2013 – 2015",
    note: "Biometric auth, Objective-C to Swift migration, Alamofire + Retrofit API layers.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[72rem] px-6 py-10 md:px-10 md:py-14">
      <Header />

      <section className="max-w-[52rem] py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Senior React Native developer
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-light leading-[1.02] tracking-[-0.01em] md:text-[5.5rem]">
          I ship mobile products end to end.
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed text-[color:var(--muted)]">
          Ten years building React Native apps — field ops for airport
          technicians, consumer platforms at Airbnb and Vogue, and my own indie
          work. This site is a short list of the things I care about most.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/work/cosmic-solo"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm text-[color:var(--background)] transition hover:bg-[color:var(--accent)]"
          >
            See the featured work <span aria-hidden>→</span>
          </Link>
          <a
            href="mailto:leonzetechwiz@gmail.com"
            className="text-sm text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--foreground)] hover:underline"
          >
            leonzetechwiz@gmail.com
          </a>
        </div>
      </section>

      <div id="work" className="scroll-mt-16 py-16">
        <FeaturedWork projects={projects} />
      </div>

      <div id="experience" className="scroll-mt-16 py-16">
        <Experience entries={experience} />
      </div>

      <HowIWork />

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <span className="font-[family-name:var(--font-display)] text-xl font-medium">
        Leon David
      </span>
      <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
        <a href="#work" className="hover:text-[color:var(--foreground)]">
          Work
        </a>
        <a
          href="#experience"
          className="hover:text-[color:var(--foreground)]"
        >
          Experience
        </a>
        <a
          href="mailto:leonzetechwiz@gmail.com"
          className="hover:text-[color:var(--foreground)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function HowIWork() {
  return (
    <section className="border-t border-[color:var(--rule)] py-16">
      <div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-16">
        <header>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            How I work
          </div>
        </header>
        <div className="max-w-[44rem] space-y-5 text-lg leading-relaxed">
          <p>
            I like mobile work because the constraints are real. Offline, slow
            networks, older devices, battery, native modules — problems that
            force you to think about architecture rather than hide behind it.
          </p>
          <p>
            I&apos;ve spent the last few years on apps that field technicians
            actually use in the real world and on consumer platforms where
            performance is the feature. I care about shipping honest products,
            writing TypeScript that other people can read, and resisting the
            pull of premature abstraction.
          </p>
          <p>
            If you&apos;re building a mobile product and need a senior hand on
            it — contract or full-time — I&apos;d like to hear about it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--rule)] pt-8 text-xs text-[color:var(--muted)]">
      <span className="font-mono uppercase tracking-[0.18em]">
        Leon David · Augusta, GA
      </span>
      <div className="flex gap-5">
        <a
          href="mailto:leonzetechwiz@gmail.com"
          className="hover:text-[color:var(--foreground)]"
        >
          Email
        </a>
        <a
          href="https://github.com/LeoZai613"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[color:var(--foreground)]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/leon-613/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[color:var(--foreground)]"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
