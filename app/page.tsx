import Link from "next/link";
import { Bot, Gauge, Network, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { MotionReveal } from "@/components/landing/motion-reveal";
import { Button } from "@/components/ui/button";

const products = [
  { icon: ShieldCheck, name: "MeshScale Console", href: "/console", label: "Operator platform", body: "Manage devices, agents, networks, infrastructure and your MeshScale environment from one clean console." },
  { icon: Bot, name: "MeshScale Agent", href: "/agent", label: "Infrastructure runtime", body: "A lightweight, secure agent that connects your servers and computers to MeshScale and streams telemetry." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />

      <MotionReveal>
        <section id="products" className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">Two products. One platform.</p>
            <h2 className="max-w-3xl text-4xl font-display md:text-6xl">Everything MeshScale does starts here.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {products.map(({ icon: Icon, name, href, label, body }, index) => (
                <MotionReveal key={name} delay={index * 0.08}>
                  <Link href={href} className="group block rounded-3xl border border-foreground/10 p-7 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02] md:p-9">
                    <div className="flex items-center justify-between"><Icon className="h-6 w-6" /><span className="text-xs font-mono text-muted-foreground">{label}</span></div>
                    <h3 className="mt-16 text-2xl font-display md:text-3xl">{name}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
                    <span className="mt-8 inline-flex items-center text-sm">Explore <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-3">
            <div><Network className="mb-6 h-5 w-5" /><h3 className="text-xl font-medium">Connect</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Keep infrastructure on your network while MeshScale Agent provides the secure bridge to the platform.</p></div>
            <div><Gauge className="mb-6 h-5 w-5" /><h3 className="text-xl font-medium">Observe</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Bring system telemetry and supported integrations into a single operational view.</p></div>
            <div><ShieldCheck className="mb-6 h-5 w-5" /><h3 className="text-xl font-medium">Operate</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use a central console to manage connected infrastructure with authentication and scoped access.</p></div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px] rounded-3xl bg-black p-8 text-white md:p-14">
            <p className="mb-5 text-xs font-mono uppercase tracking-wider text-white/40">Ready when you are</p>
            <h2 className="max-w-3xl text-4xl font-display md:text-6xl">Connect your first machine to MeshScale.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90"><Link href="/agent/download">Get MeshScale Agent</Link></Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10"><a href="https://console.meshscale.cloud">Open Console</a></Button>
            </div>
          </div>
        </section>
      </MotionReveal>
      <FooterSection />
    </main>
  );
}
