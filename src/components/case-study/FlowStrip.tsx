import { DeviceFrame } from "./DeviceFrame";

export type FlowStep = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export function FlowStrip({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
      <ol className="flex gap-8 snap-x snap-mandatory md:grid md:snap-none md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex w-[16rem] shrink-0 snap-start flex-col gap-4 md:w-auto"
          >
            <DeviceFrame src={step.src} alt={step.alt} size="md" />
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-mono text-xs text-[color:var(--muted)]">
                0{i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-medium">
                {step.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              {step.caption}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
