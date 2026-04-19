import type { ReactNode } from "react";

export type ArchNode = {
  label: string;
  detail?: string;
};

export function ArchitectureDiagram({
  layers,
  note,
}: {
  layers: { title: string; nodes: ArchNode[] }[];
  note?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-6 md:p-10">
      <div className="space-y-6">
        {layers.map((layer, idx) => (
          <div key={layer.title}>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                Layer {idx + 1}
              </span>
              <span className="text-sm font-medium">{layer.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.nodes.map((node) => (
                <div
                  key={node.label}
                  className="rounded-lg border border-[color:var(--rule)] bg-[color:var(--background)] px-3 py-2 text-sm"
                >
                  <div className="font-medium">{node.label}</div>
                  {node.detail && (
                    <div className="mt-0.5 font-mono text-xs text-[color:var(--muted)]">
                      {node.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {idx < layers.length - 1 && (
              <div
                aria-hidden
                className="mx-auto my-3 h-6 w-px bg-[color:var(--rule)]"
              />
            )}
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-8 border-t border-[color:var(--rule)] pt-6 text-sm leading-relaxed text-[color:var(--muted)]">
          {note}
        </p>
      )}
    </div>
  );
}
