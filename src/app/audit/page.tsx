import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Workflow Audit & Sprint — Leon David",
  description:
    "A paid 5-day AI workflow audit and optional 10-day implementation sprint for performance and paid-media agencies. Working automations deployed on your stack.",
  robots: { index: false, follow: false },
};

const CAL_URL = "https://cal.com/leon-david-zamhke";
const EMAIL = "leonzetechwiz@gmail.com";

export default function AuditPage() {
  return (
    <main className="mx-auto w-full max-w-[72rem] px-6 py-10 md:px-10 md:py-14">
      <Header />

      <section className="max-w-[52rem] py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          For performance &amp; paid-media agencies · 20–200 people
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-light leading-[1.02] tracking-[-0.01em] md:text-[5.5rem]">
          AI workflow audit &amp; implementation sprint.
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed text-[color:var(--muted)]">
          A paid five-day audit that maps your highest-ROI automation
          candidates. An optional ten-day sprint that ships working automations
          on your stack. No decks. No vendor lock-in. Your team owns the
          artifacts.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm text-[color:var(--background)] transition hover:bg-[color:var(--accent)]"
          >
            Book a 20-min fit call <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--foreground)] hover:underline"
          >
            {EMAIL}
          </a>
        </div>
      </section>

      <WhoFor />
      <Offers />
      <Deliverables />
      <Difference />
      <Workflows />
      <Process />
      <Pricing />
      <FAQ />
      <StartCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-xl font-medium"
      >
        Leon David
      </Link>
      <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
        <a
          href={`mailto:${EMAIL}`}
          className="hover:text-[color:var(--foreground)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function SectionShell({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[color:var(--rule)] py-16">
      <div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-16">
        <header>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {eyebrow}
          </div>
        </header>
        <div className="max-w-[46rem]">{children}</div>
      </div>
    </section>
  );
}

function WhoFor() {
  return (
    <SectionShell eyebrow="Who this is for">
      <p className="text-lg leading-relaxed">
        Agency operators — CEO, COO, Head of Ops, Head of Delivery — running
        performance or paid-media teams where:
      </p>
      <ul className="mt-5 space-y-3 text-lg leading-relaxed text-[color:var(--muted)]">
        <li>
          Senior people still spend hours each week on reporting, QA, proposal
          assembly, or client onboarding.
        </li>
        <li>
          AI has been tried in pockets, but nothing has stuck as an owned,
          repeatable process.
        </li>
        <li>
          Adding headcount is not the preferred answer to the margin problem.
        </li>
      </ul>
    </SectionShell>
  );
}

function Offers() {
  return (
    <SectionShell eyebrow="The two offers">
      <div className="grid gap-6 md:grid-cols-2">
        <OfferCard
          name="Workflow Audit"
          price="$1,500"
          timeline="5 business days"
          outcome="Ranked, ROI-scored plan + one working prototype"
          commitment="~2 hrs of your team's time"
          note="100% credits to a Sprint booked within 14 days"
        />
        <OfferCard
          name="Implementation Sprint"
          price="$7,500"
          timeline="10 business days"
          outcome="1–3 workflows automated, deployed, and documented on your stack"
          commitment="~4–6 hrs of your team's time"
          note="30-day light support window included"
        />
      </div>
    </SectionShell>
  );
}

function OfferCard({
  name,
  price,
  timeline,
  outcome,
  commitment,
  note,
}: {
  name: string;
  price: string;
  timeline: string;
  outcome: string;
  commitment: string;
  note: string;
}) {
  return (
    <div className="rounded-3xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-8">
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-light leading-tight">
        {name}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light text-[color:var(--foreground)]">
        {price}
      </p>
      <dl className="mt-6 space-y-4 text-sm">
        <Row k="Timeline" v={timeline} />
        <Row k="Outcome" v={outcome} />
        <Row k="Your team" v={commitment} />
      </dl>
      <p className="mt-6 border-t border-[color:var(--rule)] pt-4 text-sm text-[color:var(--muted)]">
        {note}
      </p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
        {k}
      </dt>
      <dd className="mt-1 text-[color:var(--foreground)]">{v}</dd>
    </div>
  );
}

function Deliverables() {
  return (
    <SectionShell eyebrow="What you get">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-light">
            Audit · 5 days
          </h3>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-[color:var(--muted)]">
            <li>
              <span className="text-[color:var(--foreground)]">
                Workflow map
              </span>
              {" "}— 3–5 highest-leverage automation candidates, ranked
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">ROI model</span>
              {" "}— hours saved × loaded cost, 12-month horizon
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                Implementation plan
              </span>
              {" "}— scope, sequence, delivery window per candidate
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                Working prototype
              </span>
              {" "}— one live automation so the team can see it
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                Walkthrough
              </span>
              {" "}— 30-minute recorded review
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-light">
            Sprint · 10 days
          </h3>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-[color:var(--muted)]">
            <li>
              <span className="text-[color:var(--foreground)]">
                1–3 workflows automated
              </span>
              {" "}— end-to-end on your stack
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                Owned artifacts
              </span>
              {" "}— prompts, agents, scripts, connectors committed to your
              systems
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                Runbook &amp; walkthrough video
              </span>
              {" "}— SOP plus recorded training
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">
                30-day light support
              </span>
              {" "}— bug fixes and clarifications
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

function Difference() {
  const rows: Array<[string, string]> = [
    ["Slide deck and a list of recommendations", "Working software deployed on your stack"],
    ["Generic prompts, no integration", "Automations wired into the tools your team uses"],
    ["90-day discovery phase", "5-day audit, 10-day build"],
    [
      "Results depend on your team implementing later",
      "Results exist by the end of the sprint",
    ],
    ["Vendor lock-in to a proprietary platform", "You own every artifact"],
  ];
  return (
    <SectionShell eyebrow="How this differs">
      <p className="text-lg leading-relaxed text-[color:var(--muted)]">
        The usual &ldquo;AI consultant&rdquo; engagement vs. this one.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--rule)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[color:var(--surface)]">
              <th className="border-b border-[color:var(--rule)] px-5 py-3 text-left font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                Typical engagement
              </th>
              <th className="border-b border-[color:var(--rule)] px-5 py-3 text-left font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                This engagement
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b]) => (
              <tr key={a}>
                <td className="border-b border-[color:var(--rule)] px-5 py-4 align-top text-[color:var(--muted)]">
                  {a}
                </td>
                <td className="border-b border-[color:var(--rule)] px-5 py-4 align-top">
                  {b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}

function Workflows() {
  const items = [
    {
      t: "Weekly client reporting",
      d: "Pull platform data, apply commentary, produce client-ready narrative reports.",
    },
    {
      t: "Proposal QA & assembly",
      d: "Ingest scope, assemble tailored proposals, QA against brand and commercial guardrails.",
    },
    {
      t: "Campaign launch QA",
      d: "Pre-launch checklist across naming, tracking, creative approvals.",
    },
    {
      t: "Creative brief → concept",
      d: "Structured intake, agent-assisted concept drafts for strategists to edit.",
    },
    {
      t: "Client onboarding",
      d: "Discovery docs, account setup checklist, internal kickoff brief.",
    },
    {
      t: "QBR prep",
      d: "Data pull, narrative draft, deck skeleton.",
    },
  ];
  return (
    <SectionShell eyebrow="Representative workflows">
      <p className="text-lg leading-relaxed text-[color:var(--muted)]">
        A performance/paid-media agency sprint usually targets work like this.
        Every sprint picks from this kind of inventory based on audit findings
        — not on what&apos;s easiest to ship.
      </p>
      <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.t}>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              {i.t}
            </div>
            <p className="mt-2 text-base leading-relaxed">{i.d}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Process() {
  return (
    <SectionShell eyebrow="Process">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-light">
            Audit · 5 days
          </h3>
          <ol className="mt-4 space-y-3 text-base leading-relaxed text-[color:var(--muted)]">
            <li>
              <span className="text-[color:var(--foreground)]">Day 1</span> —
              intake call, tool access
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Days 2–3</span>
              {" "}— process review, recordings, shortlist
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Day 4</span> —
              prototype build
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Day 5</span> —
              written report, walkthrough, decision
            </li>
          </ol>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-light">
            Sprint · 10 days
          </h3>
          <ol className="mt-4 space-y-3 text-base leading-relaxed text-[color:var(--muted)]">
            <li>
              <span className="text-[color:var(--foreground)]">Days 1–2</span>
              {" "}— scoping lock, integration setup
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Days 3–7</span>
              {" "}— build
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Days 8–9</span>
              {" "}— test, document, runbook
            </li>
            <li>
              <span className="text-[color:var(--foreground)]">Day 10</span> —
              walkthrough, handoff, 30-day support window starts
            </li>
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

function Pricing() {
  const rows: Array<{ name: string; price: string; note: string }> = [
    {
      name: "Workflow Audit",
      price: "$1,500",
      note: "5 days. Credits to Sprint within 14 days.",
    },
    {
      name: "Implementation Sprint",
      price: "$7,500",
      note: "10 days. 1–3 workflows.",
    },
    {
      name: "Sprint + 90-day retainer",
      price: "$7,500 + $3,500/mo",
      note: "Maintenance and incremental additions.",
    },
    {
      name: "Multi-workflow package",
      price: "$18,000",
      note: "4 weeks. For 4+ high-ROI audit candidates.",
    },
  ];
  return (
    <SectionShell eyebrow="Pricing">
      <div className="overflow-hidden rounded-2xl border border-[color:var(--rule)]">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-[color:var(--rule)] last:border-0">
                <td className="px-5 py-4 align-top font-medium">{r.name}</td>
                <td className="px-5 py-4 align-top font-mono text-[color:var(--foreground)]">
                  {r.price}
                </td>
                <td className="px-5 py-4 align-top text-[color:var(--muted)]">
                  {r.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}

function FAQ() {
  const qa: Array<{ q: string; a: string }> = [
    {
      q: "Who owns the work?",
      a: "You do. Every prompt, script, agent, and integration is committed to your systems. There is no vendor platform to lock into.",
    },
    {
      q: "What tools do you work with?",
      a: "Claude, OpenAI, custom agents, and connectors to whatever your team already uses — HubSpot, Salesforce, Asana, ClickUp, Notion, Slack, Google Workspace, Microsoft 365, Looker Studio, GA4, Meta, Google Ads, and most browser-based SaaS. If the tool has an API or a browser, it is in scope.",
    },
    {
      q: "What if our workflows are messy or undocumented?",
      a: "Most are. The audit is designed to map what is actually happening, not what the org chart says. Screen recordings of the team doing the work are the primary input.",
    },
    {
      q: "Do you work in our repos / inside our stack?",
      a: "Yes. Implementation is repo-aware and deployed on your environments under access scoped to the sprint.",
    },
    {
      q: "What about data security?",
      a: "No client data is used to train models. All work runs under your accounts and your data residency. NDA and DPA on request.",
    },
    {
      q: "What happens after the sprint?",
      a: "Three options: (1) done — the team owns it; (2) a follow-on sprint on the next workflow; (3) a monthly retainer for maintenance and incremental additions at $3,500/mo. No lock-in.",
    },
    {
      q: "Why is the audit paid?",
      a: "Free audits attract tire-kickers. A paid audit qualifies interest, protects both sides' time, and credits 100% toward the sprint if you move forward. If the audit finds no workflow worth automating, you still own a ranked map of your process inefficiencies.",
    },
  ];
  return (
    <SectionShell eyebrow="FAQ">
      <dl className="divide-y divide-[color:var(--rule)]">
        {qa.map((item) => (
          <div key={item.q} className="py-6 first:pt-0 last:pb-0">
            <dt className="font-[family-name:var(--font-display)] text-xl font-light">
              {item.q}
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}

function StartCTA() {
  return (
    <section className="border-t border-[color:var(--rule)] py-16">
      <div className="rounded-3xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-10 md:p-14">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          To start
        </div>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-light leading-tight md:text-4xl">
          Twenty minutes to see if it&apos;s a fit.
        </h2>
        <ol className="mt-6 grid gap-3 text-base leading-relaxed text-[color:var(--muted)] md:grid-cols-2">
          <li>
            <span className="text-[color:var(--foreground)]">1.</span> 20-minute
            fit call
          </li>
          <li>
            <span className="text-[color:var(--foreground)]">2.</span> Audit
            kickoff within 5 business days
          </li>
          <li>
            <span className="text-[color:var(--foreground)]">3.</span> Report
            and working prototype by day 5
          </li>
          <li>
            <span className="text-[color:var(--foreground)]">4.</span> Sprint
            decision by day 7
          </li>
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm text-[color:var(--background)] transition hover:bg-[color:var(--accent)]"
          >
            Book a 20-min fit call <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--foreground)] hover:underline"
          >
            Or email {EMAIL}
          </a>
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
          href={`mailto:${EMAIL}`}
          className="hover:text-[color:var(--foreground)]"
        >
          Email
        </a>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[color:var(--foreground)]"
        >
          Book a call
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
