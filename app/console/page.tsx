import { ArrowUpRight, Boxes, Gauge, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: ShieldCheck, title: "Identity & access", body: "Secure authentication, organizations, roles and permissions for your MeshScale environment." },
  { icon: Network, title: "Device & agent management", body: "Enroll, monitor and manage MeshScale Agents and the infrastructure they connect to." },
  { icon: Gauge, title: "Infrastructure visibility", body: "Bring host telemetry and supported integrations such as Proxmox and UniFi into one operator experience." },
  { icon: Boxes, title: "Extensible platform", body: "A modular architecture designed around agents, plugins and infrastructure integrations." },
];

export default function ConsolePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-36 pb-24 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-flex rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-mono text-muted-foreground">MeshScale Console</span>
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] leading-[0.94] font-display tracking-tight max-w-5xl">One place to operate your infrastructure.</h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">MeshScale Console is the central operator interface for devices, agents, networks, infrastructure and the MeshScale platform.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6"><a href="https://console.meshscale.cloud">Open Console <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
            <Button asChild variant="outline" className="rounded-full px-6"><Link href="/agent">Meet MeshScale Agent</Link></Button>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.02] py-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">The Console</p>
          <h2 className="text-3xl md:text-5xl font-display max-w-3xl">The control surface for everything MeshScale connects to.</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border border-foreground/10 bg-background p-6 md:p-8">
                <Icon className="h-5 w-5 mb-8" />
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Built around agents</p><h2 className="text-4xl md:text-6xl font-display leading-tight">Your infrastructure stays where it belongs.</h2></div>
          <div className="rounded-2xl border border-foreground/10 bg-black text-white p-7 font-mono text-sm leading-8"><div className="text-white/40 mb-3">// MeshScale architecture</div><div>Infrastructure</div><div className="pl-4">└─ MeshScale Agent</div><div className="pl-8 text-white/60">├─ Telemetry</div><div className="pl-8 text-white/60">├─ Plugins</div><div className="pl-8 text-white/60">└─ Secure connection</div><div className="mt-2">↓</div><div>MeshScale Console</div></div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
