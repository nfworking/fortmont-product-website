"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownToLine, ChevronDown } from "lucide-react";
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

function fallbackArch(os: Download["os"]) { return os === "macOS" ? "arm64" as const : "amd64" as const; }

export function AgentDownloads() {
  const [device, setDevice] = useState<{ os: Download["os"] | null; arch: Download["arch"] | null }>({ os: null, arch: null });
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let active = true;
    const os = detectOs();
    const uaData = (navigator as Navigator & { userAgentData?: { architecture?: string; getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }> } }).userAgentData;
    const apply = (architecture?: string) => {
      const arch = architecture?.toLowerCase().includes("arm") ? "arm64" : architecture ? "amd64" : os ? fallbackArch(os) : null;
      if (active) setDevice({ os, arch });
    };
    if (uaData?.getHighEntropyValues) uaData.getHighEntropyValues(["architecture"]).then(v => apply(v.architecture)).catch(() => apply(uaData.architecture));
    else apply(uaData?.architecture);
    return () => { active = false; };
  }, []);

  const recommended = useMemo(() => downloads.find(d => d.os === device.os && d.arch === device.arch) ?? null, [device]);
  const others = downloads.filter(d => d.file !== recommended?.file);
  const downloadUrl = (file: string) => `https://github.com/nfworking/meshscale-agent/releases/latest/download/${file}`;

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-3xl border border-foreground/10 bg-background/95 p-10 md:p-14 text-center shadow-2xl backdrop-blur-xl">
        {recommended ? (
          <Button asChild size="lg" className="h-14 w-full rounded-full text-base">
            <a href={downloadUrl(recommended.file)}><ArrowDownToLine className="mr-2 h-5 w-5" />Download MeshScale Agent</a>
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">Choose your platform below.</p>
        )}
      </div>

      <div className="mt-5 text-center">
        <button type="button" onClick={() => setShowMore(v => !v)} className="inline-flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          {showMore ? "Hide other downloads" : "Download for another platform"}
          <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </button>
      </div>

      {(showMore || !recommended) && (
        <div className="mt-4 grid gap-2 rounded-2xl border border-foreground/10 p-3 bg-background/80 backdrop-blur-xl">
          {others.map(item => (
            <a key={item.file} href={downloadUrl(item.file)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-foreground/[.04] transition-colors">
              <span>{item.os} <span className="text-muted-foreground">· {item.arch === "arm64" ? "ARM64" : "x86_64"}</span></span>
              <ArrowDownToLine className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
