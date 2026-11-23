import Image from "next/image";

export type Shot = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width?: number;
  height?: number;
};

/** FlowStrip for wide screenshots: numbered steps, two across. */
export function ShotGrid({ shots }: { shots: Shot[] }) {
  return (
    <ol className="grid gap-x-10 gap-y-14 md:grid-cols-2">
      {shots.map((shot, i) => (
        <li key={shot.title} className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-[color:var(--rule)] bg-white shadow-[0_20px_50px_-30px_rgba(20,18,15,0.35)]">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width ?? 1920}
              height={shot.height ?? 1200}
              sizes="(min-width: 768px) 30rem, 92vw"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-mono text-xs text-[color:var(--muted)]">
              0{i + 1}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-medium">
              {shot.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
            {shot.caption}
          </p>
        </li>
      ))}
    </ol>
  );
}
