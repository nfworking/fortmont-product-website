"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  { q: "Now", title: "Core platform", body: "MeshScale Console and MeshScale Agent form the foundation of the platform.", details: "The current focus is making the core connection between Console and Agent reliable and useful: secure enrollment, live presence, device information and the operational views needed to understand connected infrastructure." },
  { q: "Next", title: "Infrastructure depth", body: "Continue expanding device telemetry, Proxmox and UniFi integrations and agent capabilities.", details: "The next phase expands what MeshScale can observe and operate. Deeper telemetry and infrastructure integrations will make the Agent more useful in real environments without changing the simple Console + Agent product model." },
  { q: "Later", title: "More ways to operate", body: "Grow the plugin ecosystem, automation capabilities and infrastructure workflows around the same connected platform.", details: "Longer term, MeshScale can build on the same primitives for automation, richer plugins and repeatable infrastructure workflows. These are intentionally downstream of a strong core platform." },
];

export function RoadmapList() {
  const [open, setOpen] = useState<string | null>(null);
  return <div className="mt-16 space-y-4">{items.map(item => { const isOpen = open === item.q; return <button key={item.q} type="button" onClick={() => setOpen(isOpen ? null : item.q)} className="w-full text-left rounded-2xl border border-foreground/10 p-6 md:p-8 hover:border-foreground/20 transition-colors"><div className="grid md:grid-cols-[120px_1fr_auto] gap-5 items-start"><div className="text-xs font-mono text-muted-foreground uppercase">{item.q}</div><div><h2 className="text-2xl font-display">{item.title}</h2><p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">{item.body}</p>{isOpen && <p className="mt-5 pt-5 border-t border-foreground/10 text-sm text-muted-foreground leading-7 max-w-2xl">{item.details}</p>}</div><ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}/></div></button>; })}</div>;
}
