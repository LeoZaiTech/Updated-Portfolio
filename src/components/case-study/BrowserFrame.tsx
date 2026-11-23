import Image from "next/image";
import type { ReactNode } from "react";

/** The window chrome on its own: three dots, an address, and whatever goes inside. */
export function BrowserChrome({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[color:var(--rule)] bg-[color:var(--surface)] shadow-[0_30px_80px_-30px_rgba(20,18,15,0.35)]">
      <div className="flex items-center gap-3 border-b border-[color:var(--rule)] px-4 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
        </div>
        {label && (
          <div className="min-w-0 flex-1 truncate rounded-md bg-[color:var(--background)] px-3 py-1 text-center font-mono text-[0.7rem] text-[color:var(--muted)]">
            {label}
          </div>
        )}
        {/* balances the dots so the address sits in the middle */}
        <div aria-hidden className="w-[2.625rem]" />
      </div>
      {children}
    </div>
  );
}

/** A screenshot of something that runs in a browser, the way DeviceFrame shows a phone. */
export function BrowserFrame({
  src,
  alt,
  label,
  width = 1920,
  height = 1200,
  preload = false,
}: {
  src: string;
  alt: string;
  label?: string;
  width?: number;
  height?: number;
  preload?: boolean;
}) {
  return (
    <BrowserChrome label={label}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload={preload}
        sizes="(min-width: 1024px) 60rem, 92vw"
        className="h-auto w-full"
      />
    </BrowserChrome>
  );
}
