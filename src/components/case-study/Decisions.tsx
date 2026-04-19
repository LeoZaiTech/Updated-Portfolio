export type Decision = {
  title: string;
  body: string;
};

export function Decisions({ items }: { items: Decision[] }) {
  return (
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[color:var(--rule)] pb-6 last:border-0 last:pb-0"
        >
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[color:var(--foreground)]">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
