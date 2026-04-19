import { DeviceFrame } from "./DeviceFrame";

export function Hero({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--rule)] bg-[color:var(--surface)] px-6 py-14 md:px-14 md:py-20">
      {accent && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(60% 50% at 70% 30%, ${accent}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative flex justify-center">
        <DeviceFrame src={src} alt={alt} size="lg" priority />
      </div>
    </div>
  );
}
