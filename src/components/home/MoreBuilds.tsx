export type Build = {
  title: string;
  kind: string;
  blurb: string;
  stack: string[];
  /** where to read the code, when the repository is public */
  href?: string;
};

export function MoreBuilds({ builds }: { builds: Build[] }) {
  return (
    <section className="border-t border-[color:var(--rule)]">
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          More builds
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light leading-tight md:text-4xl">
          Tools and games from the workbench.
        </h2>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {builds.map((build) => (
          <li
            key={build.title}
            className="flex flex-col rounded-2xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-6 md:p-8"
          >
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              {build.kind}
            </div>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light leading-tight">
              {build.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
              {build.blurb}
            </p>
            <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pt-6 text-sm">
              <span>{build.stack.join(" · ")}</span>
              {build.href && (
                <a
                  href={build.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                >
                  Source <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
