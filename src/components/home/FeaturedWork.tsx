import Link from "next/link";
import { DeviceFrame } from "@/components/case-study/DeviceFrame";

export type FeaturedProject = {
  slug: string;
  title: string;
  positioning: string;
  status: { label: string; tone: "live" | "soon" | "personal" };
  role: string;
  stack: string[];
  heroSrc: string;
  heroAlt: string;
  accent: string;
};

export function FeaturedWork({ projects }: { projects: FeaturedProject[] }) {
  return (
    <section className="border-t border-[color:var(--rule)]">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Featured work
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light leading-tight md:text-4xl">
            Two apps I built, front to back.
          </h2>
        </div>
      </div>

      <div className="space-y-24">
        {projects.map((p, i) => (
          <Spotlight key={p.slug} project={p} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function Spotlight({
  project,
  reversed,
}: {
  project: FeaturedProject;
  reversed: boolean;
}) {
  return (
    <article className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <div
        className={`relative overflow-hidden rounded-3xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-8 md:p-12 ${reversed ? "md:order-2" : ""}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(60% 50% at 50% 30%, ${project.accent}, transparent 70%)`,
          }}
        />
        <div className="relative flex justify-center">
          <DeviceFrame
            src={project.heroSrc}
            alt={project.heroAlt}
            size="md"
          />
        </div>
      </div>

      <div className={reversed ? "md:order-1" : ""}>
        <StatusBadge status={project.status} />
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-light leading-tight md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-[color:var(--muted)]">
          {project.positioning}
        </p>

        <dl className="mt-8 grid gap-5 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              Role
            </dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              Stack
            </dt>
            <dd className="mt-1 text-[color:var(--foreground)]">
              {project.stack.join(" · ")}
            </dd>
          </div>
        </dl>

        <Link
          href={`/work/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm text-[color:var(--background)] transition hover:bg-[color:var(--accent)]"
        >
          Read case study <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

function StatusBadge({
  status,
}: {
  status: FeaturedProject["status"];
}) {
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
