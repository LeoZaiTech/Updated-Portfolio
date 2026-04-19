import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-10 md:grid-cols-[12rem_1fr] md:gap-16">
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
      <div className="max-w-[46rem] space-y-6 text-lg leading-relaxed text-[color:var(--foreground)] [&_p]:text-lg [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
