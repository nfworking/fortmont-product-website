import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { AgentDownloads } from "@/components/landing/agent-downloads";

export default function AgentDownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-black text-white pt-36 pb-28 px-6 lg:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute left-1/2 top-[42%] h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.11] blur-[120px]" />
          <div className="absolute left-[15%] top-[-25%] h-[120%] w-32 rotate-[-22deg] bg-gradient-to-b from-transparent via-emerald-300/[0.07] to-transparent blur-3xl" />
          <div className="absolute left-[48%] top-[-30%] h-[130%] w-24 rotate-[8deg] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-3xl" />
          <div className="absolute right-[12%] top-[-20%] h-[120%] w-28 rotate-[25deg] bg-gradient-to-b from-transparent via-emerald-400/[0.06] to-transparent blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <Link href="/agent" className="text-xs font-mono text-white/45 hover:text-white/80">← MeshScale Agent</Link>
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[84px] font-display tracking-tight leading-[.95]">Download MeshScale Agent.</h1>
          <p className="mt-7 text-lg text-white/60 max-w-2xl leading-relaxed">We’ll identify your device and recommend the right Agent build. Other platforms stay available if you need them.</p>
        </div>
      </section>

      <section className="relative -mt-10 pb-24 px-6 lg:px-12">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <AgentDownloads />
        </div>
      </section>

      <section className="border-y border-foreground/10 py-20 px-6 lg:px-12 bg-foreground/[.02]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          <div><p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Install</p><h2 className="text-3xl md:text-5xl font-display">Get connected in minutes.</h2><p className="mt-5 text-muted-foreground leading-relaxed">After downloading, enroll the agent with the one-time token provided by MeshScale Console.</p></div>
          <div className="rounded-2xl bg-black text-white p-6 font-mono text-xs md:text-sm leading-7"><div className="text-white/40 mb-3"># Example enrollment</div><div>./meshscale-agent --token &lt;enrollment-token&gt;</div><div className="mt-4 text-white/40"># Then run normally</div><div>./meshscale-agent</div></div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
