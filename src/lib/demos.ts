// The live demos the site can launch.
//
// Each demo is its own static site on its own origin, so nothing it does can
// reach this site's pages, and it holds no keys or accounts: everything runs
// in the visitor's browser. To add one, deploy it somewhere of its own and add
// it here. LaunchDemo refuses any address whose origin is not in this list.
export type Demo = {
  /** the demo's address; empty until the demo has been deployed */
  url: string;
  /** what the address bar of the frame shows */
  label: string;
};

export const demos = {
  fretboardLab: {
    url: "https://fretboard-l.netlify.app/",
    label: "fretboard-l.netlify.app",
  },
  cosmicSolo: {
    // set once the web demo has a site of its own (see the case study)
    url: "",
    label: "",
  },
} satisfies Record<string, Demo>;

const origins = new Set(
  Object.values(demos)
    .filter((demo) => demo.url)
    .map((demo) => new URL(demo.url).origin),
);

/** true for an https address on one of the demo sites listed above */
export function isDemoUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && origins.has(parsed.origin);
  } catch {
    return false;
  }
}
