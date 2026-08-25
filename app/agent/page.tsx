import { ArrowDownToLine, Check, Cpu, Globe, Lock, Puzzle } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Cpu, title: "Telemetry", body: "Collects device information and system resource metrics and reports them securely to MeshScale." },
  { icon: Lock, title: "Secure connectivity", body: "Maintains an authenticated outbound connection, designed to work without exposing inbound ports." },
  { icon: Puzzle, title: "Plugins", body: "Extend the agent with infrastructure integrations such as Proxmox and UniFi while keeping the core lightweight." },
  { icon: Globe, title: "Resilient connection", body: "Reconnects automatically and supports MeshScale gateway health checks and failover." },
];

export default function AgentPage() {
  return <main className="min-h-screen bg-background text-foreground"><Navigation />
    <section className="pt-36 pb-24 px-6 lg:px-12"><div className="max-w-[1200px] mx-auto">
      <span className="inline-flex rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-mono text-muted-foreground">MeshScale Agent</span>
      <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] leading-[0.94] font-display tracking-tight max-w-5xl">A secure bridge between MeshScale and your infrastructure.</h1>
      <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">A lightweight runtime for servers and computers. Install it on your infrastructure, enroll it with MeshScale, and let the Console bring your connected systems together.</p>
      <div className="mt-10 flex flex-wrap gap-3"><Button asChild className="rounded-full px-6"><Link href="/agent/download"><ArrowDownToLine className="mr-2 h-4 w-4" />Download Agent</Link></Button><Button asChild variant="outline" className="rounded-full px-6"><Link href="/console">Explore Console</Link></Button></div>
    </div></section>
    <section className="border-y border-foreground/10 bg-foreground/[0.02] py-20 px-6 lg:px-12"><div className="max-w-[1200px] mx-auto"><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Capabilities</p><h2 className="text-3xl md:text-5xl font-display max-w-3xl">Small runtime. Serious infrastructure access.</h2><div className="grid md:grid-cols-2 gap-5 mt-12">{capabilities.map(({icon:Icon,title,body})=><article key={title} className="rounded-2xl border border-foreground/10 bg-background p-6 md:p-8"><Icon className="h-5 w-5 mb-8"/><h3 className="text-xl font-medium mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></article>)}</div></div></section>
    <section className="py-24 px-6 lg:px-12"><div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12"><div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Enrollment</p><h2 className="text-4xl md:text-6xl font-display">Install. Enroll. Connect.</h2><p className="mt-6 text-muted-foreground leading-relaxed">A one-time enrollment token registers the device. After enrollment, the agent keeps its persistent identity and can reconnect without the token.</p></div><div className="rounded-2xl border border-foreground/10 p-7 bg-foreground/[0.02] space-y-5 text-sm"><div className="font-mono text-muted-foreground">$ meshscale-agent --token &lt;enrollment-token&gt;</div>{["Device registered","Identity persisted","Secure connection established","Telemetry streaming"].map(x=><div key={x} className="flex gap-3 items-center"><span className="rounded-full bg-foreground/10 p-1"><Check className="h-3 w-3"/></span>{x}</div>)}</div></div></section>
    <FooterSection /></main>;
}
