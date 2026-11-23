import { BrowserFrame } from "./BrowserFrame";
import { DeviceFrame } from "./DeviceFrame";

export function Hero({
  src,
  alt,
  accent,
  frame = "phone",
  label,
}: {
  src: string;
  alt: string;
  accent?: string;
  /** a phone screenshot, or a wide one in a browser window */
  frame?: "phone" | "browser";
  /** the address shown in the browser window */
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[color:var(--rule)] bg-[color:var(--surface)] ${
        frame === "browser"
          ? "px-4 py-8 md:px-12 md:py-14"
          : "px-6 py-14 md:px-14 md:py-20"
      }`}
    >
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
        {frame === "browser" ? (
          <BrowserFrame src={src} alt={alt} label={label} preload />
        ) : (
          <DeviceFrame src={src} alt={alt} size="lg" priority />
        )}
      </div>
    </div>
  );
}
