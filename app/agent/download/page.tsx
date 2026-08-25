import { ArrowDownToLine, Apple, Box, Check, Cpu, Monitor, Terminal } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

const downloads = [
  { os: "Linux", arch: "amd64", icon: Terminal, file: "meshscale-agent-linux-amd64", command: "curl -L https://github.com/nfworking/meshscale-agent/releases/latest/download/meshscale-agent-linux-amd64 -o meshscale-agent" },
  { os: "Linux", arch: "arm64", icon: Terminal, file: "meshscale-agent-linux-arm64", command: "curl -L https://github.com/nfworking/meshscale-agent/releases/latest/download/meshscale-agent-linux-arm64 -o meshscale-agent" },
  { os: "Windows", arch: "amd64", icon: Monitor, file: "meshscale-agent-windows-amd64.exe" },
  { os: "Windows", arch: "arm64", icon: Monitor, file: "meshscale-agent-windows-arm64.exe" },
  { os: "macOS", arch: "amd64", icon: Apple, file: "meshscale-agent-darwin-amd64" },
  { os: "macOS", arch: "arm64 · Apple Silicon", icon: Apple, file: "meshscale-agent-darwin-arm64" },
];

export default function AgentDownloadPage() {
  return <main className="min-h-screen bg-background text-foreground"><Navigation />
    <section className="pt-36 pb-16 px-6 lg:px-12"><div className="max-w-[1200px] mx-auto"><Link href="/agent" className="text-xs font-mono text-muted-foreground hover:text-foreground">← MeshScale Agent</Link><h1 className="mt-7 text-5xl md:text-7xl lg:text-[84px] font-display tracking-tight leading-[0.95]">Download MeshScale Agent.</h1><p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed">Choose the binary for your operating system and architecture. Releases are built directly from the MeshScale Agent project.</p></div></section>
    <section className="pb-24 px-6 lg:px-12"><div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">{downloads.map(({os,arch,icon:Icon,file,command})=><article key={file} className="rounded-2xl border border-foreground/10 p-6 bg-foreground/[0.02] flex flex-col min-h-[240px]"><div className="flex items-center justify-between"><Icon className="h-5 w-5"/><span className="text-xs font-mono text-muted-foreground">{arch}</span></div><h2 className="mt-8 text-xl font-medium">{os}</h2><p className="mt-1 text-sm text-muted-foreground">{file}</p><div className="mt-auto pt-8"><Button asChild className="w-full rounded-full"><a href={`https://github.com/nfworking/meshscale-agent/releases/latest/download/${file}`}><ArrowDownToLine className="mr-2 h-4 w-4"/>Download</a></Button></div></article>)}</div></section>
    <section className="border-y border-foreground/10 py-20 px-6 lg:px-12 bg-foreground/[0.02]"><div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12"><div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Install</p><h2 className="text-3xl md:text-5xl font-display">Get connected in minutes.</h2><p className="mt-5 text-muted-foreground leading-relaxed">After downloading, enroll the agent with the one-time token provided by MeshScale Console.</p></div><div className="rounded-2xl bg-black text-white p-6 font-mono text-xs md:text-sm leading-7"><div className="text-white/40 mb-3"># Example enrollment</div><div>./meshscale-agent --token &lt;enrollment-token&gt;</div><div className="mt-4 text-white/40"># Then run normally</div><div>./meshscale-agent</div></div></div></section>
    <FooterSection /></main>;
}
