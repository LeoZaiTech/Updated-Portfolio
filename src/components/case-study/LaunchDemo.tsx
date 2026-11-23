"use client";

import Image from "next/image";
import { useState } from "react";
import { isDemoUrl } from "@/lib/demos";
import { BrowserChrome } from "./BrowserFrame";

export type LaunchDemoProps = {
  /** the project's name, for the button and the frame's title */
  title: string;
  /** where the demo lives; it has to be one of the sites in lib/demos.ts */
  url: string;
  /** what the address bar shows */
  label?: string;
  /** the screenshot shown until the demo is launched */
  poster: { src: string; alt: string; width: number; height: number };
  /** a desktop page in a browser window, or an app in a phone */
  shape?: "browser" | "phone";
  /** one line under the frame about what the demo does with what you type */
  note?: string;
};

// What the framed page may do. It is a different site from this one, so
// `allow-same-origin` only lets it keep its own storage (the projects and
// charts a visitor makes); it cannot read this site. Nothing here lets it
// open windows, navigate this page, or reach the camera, microphone or
// location.
const SANDBOX = "allow-scripts allow-same-origin allow-forms allow-downloads";

/**
 * A live demo, started by the visitor. Until they press the button the page
 * holds only a screenshot: no frame is created and nothing is loaded from the
 * demo's site.
 */
export function LaunchDemo({
  title,
  url,
  label,
  poster,
  shape = "browser",
  note,
}: LaunchDemoProps) {
  const [running, setRunning] = useState(false);
  const allowed = isDemoUrl(url);
  if (!allowed) return null;

  const stage = running ? (
    <iframe
      src={url}
      title={`${title} live demo`}
      sandbox={SANDBOX}
      referrerPolicy="no-referrer"
      allow="autoplay"
      className={
        shape === "phone"
          ? "block h-full w-full border-0 bg-black"
          : "block h-[min(46rem,78vh)] w-full border-0 bg-white"
      }
    />
  ) : (
    <div className="relative">
      <Image
        src={poster.src}
        alt={poster.alt}
        width={poster.width}
        height={poster.height}
        sizes={
          shape === "phone"
            ? "(min-width: 768px) 22rem, 70vw"
            : "(min-width: 1024px) 60rem, 92vw"
        }
        className="h-auto w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(20,18,15,0.45)]">
        <button
          type="button"
          onClick={() => setRunning(true)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f7f5f1] px-6 py-3 text-sm font-medium text-[#14120f] shadow-lg transition hover:bg-[#c2410c] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f5f1]"
        >
          <span aria-hidden>▶</span> Launch {title}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {shape === "phone" ? (
        <div className="mx-auto w-full max-w-[22rem]">
          <div className="rounded-[2.25rem] border border-[color:var(--rule)] bg-[color:var(--surface)] p-2 shadow-[0_30px_80px_-30px_rgba(20,18,15,0.35)]">
            <div
              className="overflow-hidden rounded-[1.75rem]"
              style={{ aspectRatio: `${poster.width} / ${poster.height}` }}
            >
              {stage}
            </div>
          </div>
        </div>
      ) : (
        <BrowserChrome label={label}>{stage}</BrowserChrome>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-[color:var(--muted)]">
        <div className="max-w-[40rem] leading-relaxed">
          {note ?? "Runs entirely in your browser."}
        </div>
        <div className="flex items-center gap-5">
          {running && (
            <button
              type="button"
              onClick={() => setRunning(false)}
              className="cursor-pointer underline-offset-4 transition hover:text-[color:var(--foreground)] hover:underline"
            >
              Close demo
            </button>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
          >
            Open in a new tab <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
