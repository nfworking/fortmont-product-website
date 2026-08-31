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

const screenshots = [
  { src: "/screenshots/console-dashboard.png", alt: "MeshScale Console dashboard" },
  { src: "/screenshots/console-devices.png", alt: "MeshScale Console devices view" },
  { src: "/screenshots/console-infrastructure.png", alt: "MeshScale Console infrastructure view" },
];

export default function ConsolePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navigation />
      <section className="relative isolate px-6 pb-0 pt-36 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[620px] w-[1000px] -translate-x-1/2 rounded-full bg-emerald-500/[0.12] blur-[140px]" />
          <div className="absolute left-[18%] top-[-10%] h-[800px] w-24 rotate-[-22deg] bg-gradient-to-b from-transparent via-emerald-300/[0.08] to-transparent blur-3xl" />
          <div className="absolute right-[18%] top-[-5%] h-[760px] w-28 rotate-[24deg] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-3xl" />
        </div>
        <div className="mx-auto max-w-[1200px] text-center">
          <span className="inline-flex rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur">MeshScale Console</span>
          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-display leading-[0.94] tracking-tight md:text-7xl lg:text-[88px]">Your infrastructure.<br /><span className="text-muted-foreground/70">One beautiful console.</span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Operate devices, agents, networks and infrastructure from a single, modern control plane built for the way infrastructure teams actually work.</p>
          <div className="mt-10 flex justify-center gap-3">
            <Button asChild className="rounded-full px-6"><a href="https://console.meshscale.cloud">Open Console <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
            <Button asChild variant="outline" className="rounded-full px-6"><Link href="/agent">Meet MeshScale Agent</Link></Button>
          </div>
        </div>
        <div className="relative mx-auto mt-20 max-w-[1200px]">
          <div className="absolute -inset-8 -z-10 rounded-[40px] bg-emerald-400/[0.08] blur-3xl" />
          <div className="overflow-hidden rounded-t-[24px] border border-foreground/10 bg-background shadow-2xl ring-1 ring-foreground/[0.04]"><img src={screenshots[0].src} alt={screenshots[0].alt} className="block w-full" /></div>
        </div>
      </section>
      <section className="relative px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">A better infrastructure experience</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-display tracking-tight md:text-6xl">Everything you need.<br />Nothing in the way.</h2>
          <div className="mt-16 grid gap-5 text-left md:grid-cols-2">{capabilities.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-7 transition-colors hover:bg-foreground/[0.04] md:p-9"><Icon className="h-5 w-5" /><h3 className="mb-3 mt-8 text-xl font-medium">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</div>
        </div>
      </section>
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Built to be explored</p><h2 className="mt-5 text-4xl font-display tracking-tight md:text-6xl">See your infrastructure differently.</h2><p className="mt-6 leading-relaxed text-muted-foreground">A focused interface for understanding what is connected, what is healthy and what needs your attention.</p></div>
          <div className="mt-16 grid gap-8">{screenshots.slice(1).map((shot, index) => <div key={shot.src} className={`overflow-hidden rounded-[24px] border border-foreground/10 bg-background shadow-xl ${index === 1 ? "lg:ml-24" : "lg:mr-24"}`}><img src={shot.src} alt={shot.alt} className="block w-full" /></div>)}</div>
        </div>
      </section>
      <section className="px-6 py-28 lg:px-12"><div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2"><div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Built around agents</p><h2 className="mt-4 text-4xl font-display leading-tight md:text-6xl">Your infrastructure stays where it belongs.</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">MeshScale connects your infrastructure through lightweight agents, keeping the control plane clean while your systems remain under your control.</p></div><div className="rounded-3xl border border-foreground/10 bg-black p-7 font-mono text-sm leading-8 text-white shadow-xl"><div className="mb-3 text-white/40">// MeshScale architecture</div><div>Infrastructure</div><div className="pl-4">└─ MeshScale Agent</div><div className="pl-8 text-white/60">├─ Telemetry</div><div className="pl-8 text-white/60">├─ Plugins</div><div className="pl-8 text-white/60">└─ Secure connection</div><div className="mt-2">↓</div><div>MeshScale Console</div></div></div></section>
      <FooterSection />
    </main>
  );
}
