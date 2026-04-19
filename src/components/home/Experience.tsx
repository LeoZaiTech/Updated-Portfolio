export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  note: string;
};

export function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section className="border-t border-[color:var(--rule)]">
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Selected experience
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light leading-tight md:text-4xl">
          Ten years across enterprise and consumer mobile.
        </h2>
      </div>

      <ol>
        {entries.map((entry) => (
          <li
            key={`${entry.company}-${entry.timeframe}`}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-t border-[color:var(--rule)] py-6 md:grid-cols-[14rem_1fr_10rem]"
          >
            <div className="font-[family-name:var(--font-display)] text-xl font-medium">
              {entry.company}
            </div>
            <div className="col-span-2 text-sm text-[color:var(--foreground)] md:col-span-1">
              <div className="text-[color:var(--muted)]">{entry.role}</div>
              <div className="mt-1">{entry.note}</div>
            </div>
            <div className="hidden font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)] md:block md:text-right">
              {entry.timeframe}
            </div>
            <div className="col-span-2 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)] md:hidden">
              {entry.timeframe}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
