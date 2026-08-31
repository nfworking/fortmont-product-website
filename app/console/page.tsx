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
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-8rem] h-[48rem] w-[80rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.10] blur-[150px]" />
        <div className="absolute left-[5%] top-[20%] h-[70rem] w-40 rotate-[-25deg] bg-gradient-to-b from-transparent via-emerald-300/[0.055] to-transparent blur-3xl" />
        <div className="absolute right-[8%] top-[35%] h-[65rem] w-44 rotate-[26deg] bg-gradient-to-b from-transparent via-white/[0.035] to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-[48%] h-[42rem] w-[70rem] -translate-x-1/2 rounded-full bg-emerald-400/[0.035] blur-[150px]" />
        <div className="absolute left-[25%] top-[72%] h-[38rem] w-[55rem] rounded-full bg-emerald-500/[0.035] blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(var(--background)/0.55)_100%)]" />
      </div>

      <Navigation />
      <section className="relative px-6 pb-0 pt-36 lg:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <span className="inline-flex rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur">MeshScale Console</span>
          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-display leading-[0.94] tracking-tight md:text-7xl lg:text-[88px]">Your infrastructure.<br /><span className="bg-gradient-to-r from-foreground via-emerald-400 to-foreground bg-clip-text text-transparent">One beautiful console.</span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Operate devices, agents, networks and infrastructure from a single, modern control plane built for the way infrastructure teams actually work.</p>
          <div className="mt-10 flex justify-center gap-3"><Button asChild className="rounded-full px-6"><a href="https://console.meshscale.cloud">Open Console <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button><Button asChild variant="outline" className="rounded-full px-6"><Link href="/agent">Meet MeshScale Agent</Link></Button></div>
        </div>
        <div className="relative mx-auto mt-20 max-w-[1200px]"><div className="absolute -inset-12 -z-10 rounded-[60px] bg-emerald-400/[0.07] blur-[70px]" /><div className="overflow-hidden rounded-t-[24px] border border-foreground/10 bg-background/90 shadow-2xl backdrop-blur"><img src={screenshots[0].src} alt={screenshots[0].alt} className="block w-full" /></div></div>
      </section>

      <section className="relative px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1200px] text-center"><p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">A better infrastructure experience</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-display tracking-tight md:text-6xl">Everything you need.<br /><span className="text-muted-foreground/70">Nothing in the way.</span></h2><div className="mt-16 grid gap-5 text-left md:grid-cols-2">{capabilities.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-3xl border border-foreground/10 bg-background/45 p-7 backdrop-blur-sm transition-colors hover:bg-background/65 md:p-9"><Icon className="h-5 w-5" /><h3 className="mb-3 mt-8 text-xl font-medium">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</div></div>
      </section>

      <section className="relative px-6 py-32 lg:px-12"><div className="mx-auto max-w-[1200px]"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Built to be explored</p><h2 className="mt-5 text-4xl font-display tracking-tight md:text-6xl">See your infrastructure differently.</h2><p className="mt-6 leading-relaxed text-muted-foreground">A focused interface for understanding what is connected, what is healthy and what needs your attention.</p></div><div className="relative mt-16 grid gap-12"><div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />{screenshots.slice(1).map((shot, index) => <div key={shot.src} className={`relative overflow-hidden rounded-[24px] border border-foreground/10 bg-background/80 shadow-2xl backdrop-blur ${index === 1 ? "lg:ml-24" : "lg:mr-24"}`}><div className="absolute -inset-10 -z-10 rounded-[50px] bg-emerald-400/[0.035] blur-3xl" /><img src={shot.src} alt={shot.alt} className="block w-full" /></div>)}</div></div></section>

      <section className="relative px-6 py-32 lg:px-12"><div className="mx-auto grid max-w-[1200px] items-center gap-12 rounded-[32px] border border-foreground/10 bg-background/45 p-8 backdrop-blur-sm md:p-12 lg:grid-cols-2"><div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Built around agents</p><h2 className="mt-4 text-4xl font-display leading-tight md:text-6xl">Your infrastructure stays where it belongs.</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">MeshScale connects your infrastructure through lightweight agents, keeping the control plane clean while your systems remain under your control.</p></div><div className="rounded-3xl border border-white/10 bg-black/80 p-7 font-mono text-sm leading-8 text-white shadow-xl"><div className="mb-3 text-white/40">// MeshScale architecture</div><div>Infrastructure</div><div className="pl-4">└─ MeshScale Agent</div><div className="pl-8 text-white/60">├─ Telemetry</div><div className="pl-8 text-white/60">├─ Plugins</div><div className="pl-8 text-white/60">└─ Secure connection</div><div className="mt-2">↓</div><div>MeshScale Console</div></div></div></section>
      <FooterSection />
    </main>
  );
}
