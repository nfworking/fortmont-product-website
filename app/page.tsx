import Link from "next/link";
import { ArrowRight, Check, CircleDot, Code2, Container, GitBranch, Globe2, MapPin, Radio, TerminalSquare } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { MotionReveal } from "@/components/landing/motion-reveal";

const stages = ["VALIDATING", "ECR_REPOSITORY", "BUILDING", "IMAGE_READY", "SERVICE_DEPLOYING", "HEALTH_CHECK", "DEPLOYED"];

function DeployPanel() {
  return (
    <div className="relative border border-white/10 bg-[#090d11] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
      <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 font-mono text-[10px] text-white/35">
        <span>meshscale / storefront</span><span className="text-emerald-300">● LIVE</span>
      </div>
      <div className="grid md:grid-cols-[1fr_190px]">
        <div className="p-5 md:p-7">
          <div className="flex items-start justify-between">
            <div><div className="text-sm font-medium">Deploying <span className="text-white/35">a8f21c9</span></div><div className="mt-1 text-xs text-white/35">main · Sydney (ap-southeast-2)</div></div>
            <span className="border border-cyan-300/20 bg-cyan-300/[.06] px-2 py-1 font-mono text-[9px] text-cyan-200">v32</span>
          </div>
          <div className="mt-7 space-y-3">
            {stages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-3 font-mono text-[10px]">
                <span className={`grid h-4 w-4 place-items-center rounded-full ${index === stages.length - 1 ? "bg-emerald-300 text-black" : "border border-white/15 text-emerald-300"}`}>
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span className={index === stages.length - 1 ? "text-white" : "text-white/40"}>{stage}</span>
                <span className="ml-auto text-white/20">{index === stages.length - 1 ? "now" : `${18 - index * 2}s`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/25">Runtime</div>
          <div className="mt-4 space-y-4 text-xs">
            <div><div className="text-white/30">Region</div><div className="mt-1">Sydney, AU</div></div>
            <div><div className="text-white/30">Compute</div><div className="mt-1">ECS / EC2</div></div>
            <div><div className="text-white/30">Replicas</div><div className="mt-1">2 healthy</div></div>
            <div><div className="text-white/30">Container</div><div className="mt-1 truncate text-cyan-200">a8f21c9</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050709] text-white">
      <Navigation />
      <section className="mesh-grid relative px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(circle_at_62%_35%,rgba(34,211,238,.12),transparent_32%),radial-gradient(circle_at_30%_20%,rgba(163,230,53,.06),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[.025] px-3 py-2 font-mono text-[10px] uppercase tracking-[.15em] text-white/50">
              <CircleDot className="h-3 w-3 text-emerald-300" /> Developer deployment platform
            </div>
            <h1 className="mt-8 max-w-3xl text-[clamp(3.6rem,8vw,7rem)] font-semibold leading-[.88] tracking-[-.065em]">
              Ship code.<br /><span className="text-white/35">Skip the cloud maze.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
              MeshScale turns a Git commit into a healthy regional application. Builds, containers, runtimes, networking, and deployment state—handled.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://console.meshscale.cloud" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Deploy a project <ArrowRight className="h-4 w-4" /></a>
              <Link href="/process" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white">See the full flow</Link>
            </div>
          </div>
          <DeployPanel />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.018] px-6 py-7 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[.14em] text-white/30">
          <span>GitHub source</span><span>Exact commits</span><span>CodeBuild</span><span>Regional ECR</span><span>ECS on EC2</span><span>Live events</span>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-[1240px]">
          <MotionReveal><div className="max-w-3xl"><p className="eyebrow">One product abstraction</p><h2 className="section-title">Think in projects and deployments.<br /><span>Not task definitions and subnets.</span></h2></div></MotionReveal>
          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              [GitBranch, "01 / Connect", "Choose a GitHub repository, branch, exact commit, region, and environment variables."],
              [Container, "02 / Build", "MeshScale builds a container image, stores it regionally, and records every stage."],
              [Radio, "03 / Run", "The worker creates or updates the runtime and waits for healthy tasks before going live."],
            ].map(([Icon, title, body]) => {
              const ItemIcon = Icon as typeof GitBranch;
              return <MotionReveal key={title as string}><article className="h-full bg-[#070a0d] p-8 lg:p-10"><ItemIcon className="h-5 w-5 text-cyan-200" /><h3 className="mt-16 font-mono text-xs text-white">{title as string}</h3><p className="mt-4 text-sm leading-7 text-white/40">{body as string}</p></article></MotionReveal>;
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8 lg:pb-40">
        <div className="mx-auto grid max-w-[1240px] gap-12 border border-white/10 bg-[#080b0e] p-7 md:p-12 lg:grid-cols-[.8fr_1.2fr] lg:p-16">
          <MotionReveal><div><p className="eyebrow">Regional by design</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] md:text-5xl">Compute lives close to the people using it.</h2><p className="mt-6 max-w-md leading-7 text-white/40">Known infrastructure environments keep deployment repeatable and cost-conscious. One application can evolve toward multiple regional runtimes behind a global routing layer.</p><Link href="/process" className="mt-8 inline-flex items-center gap-2 text-sm text-cyan-200">Explore the architecture <ArrowRight className="h-4 w-4" /></Link></div></MotionReveal>
          <MotionReveal delay={0.1}><div className="relative min-h-[340px] overflow-hidden border border-white/10 bg-black/30 p-6">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative grid h-full place-items-center">
              <div className="grid h-28 w-28 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/[.06] text-center font-mono text-[10px] text-cyan-100">GLOBAL<br />EDGE</div>
              {[[MapPin, "SYD", "left-3 top-4"], [Globe2, "FRA", "right-3 top-8"], [MapPin, "IAD", "bottom-2 left-12"]].map(([Icon, label, pos]) => { const I = Icon as typeof MapPin; return <div key={label as string} className={`absolute ${pos} border border-white/10 bg-[#0b0f13] p-4`}><I className="h-4 w-4 text-emerald-300" /><div className="mt-2 font-mono text-[10px]">{label as string}</div><div className="mt-1 text-[9px] text-white/30">healthy runtime</div></div>; })}
            </div>
          </div></MotionReveal>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8 lg:pb-40">
        <div className="mx-auto max-w-[1240px]">
          <MotionReveal><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Visibility is part of the product</p><h2 className="section-title">Know exactly where<br /><span>your deployment is.</span></h2></div><p className="max-w-lg self-end leading-7 text-white/40">Every meaningful step becomes a deployment event. Follow builds, inspect versions, see which commit is live, and understand failures without opening five AWS consoles.</p></div></MotionReveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[[Code2,"Version history","Every version tied to an exact Git commit."],[TerminalSquare,"Live events","Readable deployment progress, stage by stage."],[MapPin,"Regional state","Region, runtime, replicas, and health in one view."],[Globe2,"Domains & routing","A foundation for regional and global delivery."]].map(([Icon,title,body])=>{const I=Icon as typeof Code2;return <article key={title as string} className="border-l border-white/15 py-2 pl-5"><I className="h-4 w-4 text-cyan-200"/><h3 className="mt-8 text-sm">{title as string}</h3><p className="mt-3 text-xs leading-6 text-white/35">{body as string}</p></article>})}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 bg-cyan-200 p-8 text-[#041014] md:flex-row md:items-end md:p-12 lg:p-16">
          <div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-black/50">From repository to runtime</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">Your next deployment should feel this simple.</h2></div>
          <a href="https://console.meshscale.cloud" className="shrink-0 bg-black px-5 py-3 text-sm font-semibold text-white">Open MeshScale</a>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
