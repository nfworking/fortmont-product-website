import { ArrowRight, ArrowUpRight, Boxes, Gauge, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: ShieldCheck, title: "Identity & access", body: "Authentication, organizations, roles and permissions without the enterprise clutter." },
  { icon: Network, title: "Devices, connected", body: "See every enrolled agent and the infrastructure behind it from one place." },
  { icon: Gauge, title: "Live visibility", body: "Telemetry and infrastructure health presented in a clear operator-first interface." },
  { icon: Boxes, title: "Built to extend", body: "Plugins and integrations let MeshScale grow with the systems you already run." },
];

function ProductWindow({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return <div className={`overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0b0b]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.03] backdrop-blur-xl ${className}`}>
    <div className="flex h-10 items-center gap-1.5 border-b border-white/[0.07] px-4"><span className="h-2.5 w-2.5 rounded-full bg-white/15"/><span className="h-2.5 w-2.5 rounded-full bg-white/10"/><span className="h-2.5 w-2.5 rounded-full bg-white/10"/><span className="ml-3 text-[10px] font-mono text-white/25">{title}</span></div>
    {children}
  </div>;
}

function DashboardMockup() {
  return <ProductWindow title="console.meshscale.cloud / overview" className="mx-auto max-w-[1100px]">
    <div className="grid min-h-[470px] grid-cols-[150px_1fr] text-white">
      <aside className="border-r border-white/[0.06] p-4"><div className="mb-8 text-sm font-semibold">MeshScale</div><div className="space-y-2 text-[11px] text-white/45"><div className="rounded-lg bg-white/[0.08] px-3 py-2 text-white">Overview</div><div className="px-3 py-2">Infrastructure</div><div className="px-3 py-2">Devices</div><div className="px-3 py-2">Telemetry</div></div></aside>
      <div className="p-6"><div className="flex items-end justify-between"><div><div className="text-[10px] uppercase tracking-widest text-white/30">Overview</div><div className="mt-1 text-2xl font-semibold">Good morning, Cal.</div></div><div className="rounded-lg border border-white/10 px-3 py-2 text-[10px] text-white/45">Last 24 hours</div></div><div className="mt-7 grid grid-cols-3 gap-3"><div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"><div className="text-[10px] text-white/35">Devices</div><div className="mt-2 text-2xl">24</div><div className="mt-1 text-[9px] text-emerald-400/70">+3 this week</div></div><div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"><div className="text-[10px] text-white/35">Healthy</div><div className="mt-2 text-2xl">23</div><div className="mt-1 text-[9px] text-emerald-400/70">95.8% healthy</div></div><div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"><div className="text-[10px] text-white/35">Telemetry</div><div className="mt-2 text-2xl">1.2k</div><div className="mt-1 text-[9px] text-white/35">events / hour</div></div></div><div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5"><div className="flex justify-between text-[10px] text-white/35"><span>Infrastructure activity</span><span>24 hours</span></div><div className="mt-8 flex h-28 items-end gap-2">{[22,35,28,46,40,62,54,72,58,80,68,88,65,74,61,93,70,84,76,96].map((h,i)=><div key={i} className="flex-1 rounded-t-sm bg-emerald-400/30" style={{height:`${h}%`}}/>)}</div></div></div>
    </div>
  </ProductWindow>;
}

function DevicesMockup() {
  return <ProductWindow title="console.meshscale.cloud / devices"><div className="min-h-[400px] p-7 text-white"><div className="flex items-center justify-between"><div><div className="text-xl font-semibold">Devices</div><div className="mt-1 text-xs text-white/35">24 connected devices</div></div><div className="rounded-lg bg-white px-4 py-2 text-[10px] text-black">Add device</div></div><div className="mt-7 overflow-hidden rounded-xl border border-white/[0.07]"><div className="grid grid-cols-4 border-b border-white/[0.06] px-4 py-3 text-[9px] uppercase tracking-wider text-white/25"><span>Device</span><span>Status</span><span>Platform</span><span>Last seen</span></div>{["homelab-node-01","proxmox-edge","unifi-core","storage-01"].map((name,i)=><div key={name} className="grid grid-cols-4 items-center border-b border-white/[0.05] px-4 py-4 text-[10px] last:border-0"><span>{name}</span><span className="text-emerald-400/80">● Online</span><span className="text-white/40">{i===2?"Linux":"Linux x86_64"}</span><span className="text-white/30">{i+1}m ago</span></div>)}</div></div></ProductWindow>;
}

export default function ConsolePage() {
  return <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-[-15rem] h-[48rem] w-[75rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.16] blur-[150px]" />
      <div className="absolute left-[7%] top-[15rem] h-[75rem] w-32 rotate-[-24deg] bg-gradient-to-b from-transparent via-emerald-300/[0.055] to-transparent blur-3xl" />
      <div className="absolute right-[5%] top-[30rem] h-[80rem] w-40 rotate-[25deg] bg-gradient-to-b from-transparent via-white/[0.035] to-transparent blur-3xl" />
      <div className="absolute left-1/2 top-[105rem] h-[55rem] w-[70rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[160px]" />
      <div className="absolute left-[15%] top-[175rem] h-[50rem] w-[60rem] rounded-full bg-emerald-400/[0.05] blur-[150px]" />
      <div className="absolute right-[-15rem] top-[230rem] h-[55rem] w-[55rem] rounded-full bg-emerald-500/[0.06] blur-[150px]" />
    </div>
    <Navigation />

    <section className="relative px-6 pb-32 pt-40 lg:px-12">
      <div className="mx-auto max-w-[1200px] text-center"><div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/55 backdrop-blur">MeshScale Console <span className="mx-2 text-white/20">·</span> Infrastructure, simplified.</div><h1 className="mx-auto mt-8 max-w-5xl text-6xl font-display leading-[.9] tracking-[-0.04em] md:text-8xl lg:text-[104px]">The control plane<br/><span className="bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">for your infrastructure.</span></h1><p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">One calm, powerful place to see your infrastructure, manage your devices, and understand what is happening across your environment.</p><div className="mt-10 flex justify-center gap-3"><Button asChild size="lg" className="rounded-full bg-white px-6 text-black hover:bg-white/90"><a href="https://console.meshscale.cloud">Open Console <ArrowUpRight className="ml-2 h-4 w-4"/></a></Button><Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/[0.07]"><Link href="/agent">Get the Agent <ArrowRight className="ml-2 h-4 w-4"/></Link></Button></div></div>
      <div className="relative mx-auto mt-24 max-w-[1200px]"><div className="absolute -inset-16 -z-10 rounded-full bg-emerald-400/[0.09] blur-[80px]"/><DashboardMockup/></div>
    </section>

    <section className="relative px-6 py-32 lg:px-12"><div className="mx-auto max-w-[1200px]"><div className="max-w-2xl"><div className="text-xs font-mono uppercase tracking-[.2em] text-emerald-300/60">A new kind of infrastructure UI</div><h2 className="mt-5 text-5xl font-display leading-[.95] tracking-tight md:text-7xl">Complex systems.<br/><span className="text-white/40">Simple to understand.</span></h2></div><div className="mt-20 grid gap-5 md:grid-cols-2">{capabilities.map(({icon:Icon,title,body})=><article key={title} className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04] md:p-10"><Icon className="h-5 w-5 text-emerald-300/80"/><h3 className="mt-14 text-2xl font-medium tracking-tight">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-white/40">{body}</p></article>)}</div></div></section>

    <section className="relative px-6 py-32 lg:px-12"><div className="mx-auto max-w-[1200px]"><div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><div className="text-xs font-mono uppercase tracking-[.2em] text-emerald-300/60">Everything at a glance</div><h2 className="mt-5 text-5xl font-display leading-[.95] tracking-tight md:text-6xl">Know what is happening.</h2><p className="mt-6 max-w-md leading-7 text-white/40">A dashboard designed to surface the information that matters without burying you in panels, graphs and noise.</p></div><DashboardMockup/></div></div></section>

    <section className="relative px-6 py-32 lg:px-12"><div className="mx-auto max-w-[1200px]"><div className="grid items-center gap-16 lg:grid-cols-[1.2fr_.8fr]"><DevicesMockup/><div><div className="text-xs font-mono uppercase tracking-[.2em] text-emerald-300/60">Your fleet, connected</div><h2 className="mt-5 text-5xl font-display leading-[.95] tracking-tight md:text-6xl">Every device.<br/>One view.</h2><p className="mt-6 max-w-md leading-7 text-white/40">Enroll agents and get a clean, live view of the infrastructure they connect. No spreadsheets. No mystery hosts.</p><Link href="/agent" className="mt-8 inline-flex items-center text-sm text-white hover:text-emerald-300">Learn about MeshScale Agent <ArrowRight className="ml-2 h-4 w-4"/></Link></div></div></div></section>

    <section className="relative px-6 py-36 lg:px-12"><div className="mx-auto max-w-[1000px] text-center"><div className="text-xs font-mono uppercase tracking-[.2em] text-emerald-300/60">Made for infrastructure people</div><h2 className="mt-5 text-5xl font-display leading-[.92] tracking-tight md:text-8xl">Your systems are<br/><span className="bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">already complicated.</span></h2><p className="mx-auto mt-8 max-w-2xl text-lg leading-7 text-white/40">MeshScale should not be. Bring your infrastructure together and get back to building things.</p><Button asChild size="lg" className="mt-10 rounded-full bg-white px-7 text-black hover:bg-white/90"><a href="https://console.meshscale.cloud">Open MeshScale Console <ArrowUpRight className="ml-2 h-4 w-4"/></a></Button></div></section>
    <FooterSection />
  </main>;
}
