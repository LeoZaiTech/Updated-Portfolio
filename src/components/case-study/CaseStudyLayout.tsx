import Link from "next/link";
import type { ReactNode } from "react";

export type CaseStudyStatus =
  | { label: "Live"; tone: "live" }
  | { label: "Launching soon"; tone: "soon" }
  | { label: "Personal build"; tone: "personal" }
  | { label: "In development"; tone: "soon" };

export type CaseStudyMeta = {
  title: string;
  positioning: string;
  status: CaseStudyStatus;
  role: string;
  stack: string[];
  timeframe: string;
  links?: { label: string; href: string; disabled?: boolean }[];
};

export function CaseStudyLayout({
  meta,
  children,
}: {
  meta: CaseStudyMeta;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-[72rem] px-6 pb-32 pt-10 md:px-10">
      <nav className="mb-16 flex items-center justify-between text-sm">
        <Link
          href="/"
          className="text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
        >
          ← Leon David
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Case Study
        </span>
      </nav>

      <header className="mb-16 max-w-[52rem]">
        <StatusBadge status={meta.status} />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-light leading-[1.05] tracking-[-0.01em] md:text-[5.5rem]">
          {meta.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[color:var(--muted)] md:text-2xl">
          {meta.positioning}
        </p>
      </header>

      <MetaRow meta={meta} />

      <div className="mt-20 space-y-24">{children}</div>
    </article>
  );
}

function StatusBadge({ status }: { status: CaseStudyStatus }) {
  const dot =
    status.tone === "live"
      ? "bg-emerald-500"
      : status.tone === "soon"
        ? "bg-amber-500"
        : "bg-sky-500";
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rule)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status.label}
    </div>
  );
}

function MetaRow({ meta }: { meta: CaseStudyMeta }) {
  return (
    <dl className="grid grid-cols-2 gap-y-6 border-y border-[color:var(--rule)] py-6 text-sm md:grid-cols-4 md:gap-x-8">
      <MetaItem label="Role">{meta.role}</MetaItem>
      <MetaItem label="Timeframe">{meta.timeframe}</MetaItem>
      <div className="col-span-2 md:col-span-2">
        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Stack
        </dt>
        <dd className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[color:var(--foreground)]">
          {meta.stack.map((tech) => (
            <span key={tech} className="text-sm">
              {tech}
            </span>
          ))}
        </dd>
      </div>
      {meta.links && meta.links.length > 0 && (
        <div className="col-span-2 md:col-span-4">
          <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Links
          </dt>
          <dd className="mt-2 flex flex-wrap gap-3">
            {meta.links.map((link) =>
              link.disabled ? (
                <span
                  key={link.label}
                  className="inline-flex items-center gap-1 rounded-md border border-dashed border-[color:var(--rule)] px-3 py-1 text-sm text-[color:var(--muted)]"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-[color:var(--rule)] bg-[color:var(--surface)] px-3 py-1 text-sm transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              ),
            )}
          </dd>
        </div>
      )}
    </dl>
  );
}

function MetaItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-[color:var(--foreground)]">{children}</dd>
    </div>
  );
}
