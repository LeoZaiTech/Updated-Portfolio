import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  id,
  wide = false,
  children,
}: {
  eyebrow: string;
  title?: string;
  /** an anchor for links from elsewhere, e.g. "demo" */
  id?: string;
  /** let the content use the full column, for frames and screenshot grids */
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-16 gap-10 md:grid-cols-[12rem_1fr] md:gap-16"
    >
      <header>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          {eyebrow}
        </div>
        {title && (
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light leading-tight md:text-3xl">
            {title}
          </h2>
        )}
      </header>
      <div
        className={`${wide ? "" : "max-w-[46rem] "}min-w-0 space-y-6 text-lg leading-relaxed text-[color:var(--foreground)] [&_p]:text-lg [&_p]:leading-relaxed`}
      >
        {children}
      </div>
    </section>
  );
}
