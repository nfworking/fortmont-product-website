"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownToLine, Apple, ChevronDown, Monitor, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

type Download = { os: "Linux" | "Windows" | "macOS"; arch: "amd64" | "arm64"; file: string };
const downloads: Download[] = [
  { os: "Linux", arch: "amd64", file: "meshscale-agent-linux-amd64" },
  { os: "Linux", arch: "arm64", file: "meshscale-agent-linux-arm64" },
  { os: "Windows", arch: "amd64", file: "meshscale-agent-windows-amd64.exe" },
  { os: "Windows", arch: "arm64", file: "meshscale-agent-windows-arm64.exe" },
  { os: "macOS", arch: "amd64", file: "meshscale-agent-darwin-amd64" },
  { os: "macOS", arch: "arm64", file: "meshscale-agent-darwin-arm64" },
];

function detectOs() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("windows")) return "Windows" as const;
  if (ua.includes("mac os") || ua.includes("macintosh")) return "macOS" as const;
  if (ua.includes("linux") || ua.includes("x11")) return "Linux" as const;
  return null;
}

function fallbackArch(os: Download["os"]) {
  if (os === "macOS") return "arm64" as const;
  return "amd64" as const;
}

export function AgentDownloads() {
  const [device, setDevice] = useState<{ os: Download["os"] | null; arch: Download["arch"] | null; browser: string }>({ os: null, arch: null, browser: "" });
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let active = true;
    const os = detectOs();
    const browser = /firefox/i.test(navigator.userAgent) ? "Firefox" : /edg/i.test(navigator.userAgent) ? "Edge" : /chrome/i.test(navigator.userAgent) ? "Chrome" : /safari/i.test(navigator.userAgent) ? "Safari" : "Browser";
    const uaData = (navigator as Navigator & { userAgentData?: { architecture?: string; getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }> } }).userAgentData;
    const apply = (architecture?: string) => {
      const arch = architecture?.toLowerCase().includes("arm") ? "arm64" : architecture ? "amd64" : os ? fallbackArch(os) : null;
      if (active) setDevice({ os, arch, browser });
    };
    if (uaData?.getHighEntropyValues) uaData.getHighEntropyValues(["architecture"]).then(v => apply(v.architecture)).catch(() => apply(uaData.architecture));
    else apply(uaData?.architecture);
    return () => { active = false; };
  }, []);

  const recommended = useMemo(() => downloads.find(d => d.os === device.os && d.arch === device.arch) ?? null, [device]);
  const others = downloads.filter(d => d.file !== recommended?.file);

  const icon = (os: Download["os"]) => os === "Linux" ? Terminal : os === "Windows" ? Monitor : Apple;
  const downloadUrl = (file: string) => `https://github.com/nfworking/meshscale-agent/releases/latest/download/${file}`;

  return <div className="space-y-4">
    {recommended ? <article className="rounded-2xl border border-foreground/15 p-6 md:p-8 bg-foreground/[.02]"><div className="flex flex-col md:flex-row md:items-center gap-6"><div className="flex items-center justify-center h-14 w-14 rounded-xl border border-foreground/10"><{icon(recommended.os)} className="h-6 w-6"/></div><div className="flex-1"><div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Recommended for this device</div><h2 className="mt-1 text-2xl font-display">MeshScale Agent for {recommended.os}</h2><p className="mt-1 text-sm text-muted-foreground">{recommended.arch} · {device.browser}</p></div><Button asChild className="rounded-full md:min-w-44"><a href={downloadUrl(recommended.file)}><ArrowDownToLine className="mr-2 h-4 w-4"/>Download Agent</a></Button></div></article> : <div className="rounded-2xl border border-foreground/10 p-8 text-center text-sm text-muted-foreground">We couldn't identify your operating system. Choose a download below.</div>}
    {recommended && <button type="button" onClick={() => setShowMore(v => !v)} className="w-full flex items-center justify-center gap-2 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors">{showMore ? "Hide other downloads" : "Show more downloads"}<ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`}/></button>}
    {(showMore || !recommended) && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">{others.map(item => { const Icon = icon(item.os); return <article key={item.file} className="rounded-2xl border border-foreground/10 p-6 bg-foreground/[.02] flex flex-col min-h-[210px]"><div className="flex items-center justify-between"><Icon className="h-5 w-5"/><span className="text-xs font-mono text-muted-foreground">{item.arch}</span></div><h2 className="mt-8 text-xl font-medium">{item.os}</h2><p className="mt-1 text-sm text-muted-foreground">{item.arch === "arm64" ? "ARM64" : "x86_64"}</p><div className="mt-auto pt-7"><Button asChild variant="outline" className="w-full rounded-full"><a href={downloadUrl(item.file)}><ArrowDownToLine className="mr-2 h-4 w-4"/>Download</a></Button></div></article>; })}</div>}
  </div>;
}
