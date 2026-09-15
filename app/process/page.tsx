import { ArrowDown, ArrowRight, Box, Check, CloudCog, Code2, Container, Database, GitCommit, Globe2, HeartPulse, Image, Layers3, Network, RadioTower, ServerCog, Shield } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const buildSteps = [
  [GitCommit, "01", "Deploy request", "The dashboard creates a deployment version tied to an exact Git commit, region, and runtime configuration."],
  [Database, "02", "Queue & validate", "The API persists deployment state. The Go worker consumes the request and validates its project and regional environment."],
  [Box, "03", "Prepare registry", "MeshScale finds or creates the project’s Amazon ECR repository in the selected region."],
  [Code2, "04", "Build source", "AWS CodeBuild checks out the requested Git commit, builds the application image, and publishes build progress."],
  [Container, "05", "Publish image", "The immutable container image is pushed to regional ECR and recorded against the deployment version."],
  [ServerCog, "06", "Create runtime", "The worker registers an ECS task definition and prepares the deployment’s runtime security group."],
  [Layers3, "07", "Update service", "An EC2-backed ECS service is created or updated with the new image and requested replica count."],
  [HeartPulse, "08", "Prove health", "MeshScale waits for the requested tasks to become healthy before declaring the version live."],
];

function Step({ item, index }: { item: (typeof buildSteps)[number]; index: number }) {
  const [Icon, number, title, body] = item;
  return (
    <div className="relative grid gap-5 border border-white/10 bg-[#080c0f] p-6 md:grid-cols-[64px_1fr] md:p-8">
      <div className="grid h-12 w-12 place-items-center border border-cyan-200/25 bg-cyan-300/[.05]"><Icon className="h-5 w-5 text-cyan-200" /></div>
      <div><div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/25">Stage {number as string}</div><h3 className="mt-2 text-xl font-semibold">{title as string}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-white/40">{body as string}</p></div>
      {index < buildSteps.length - 1 && <ArrowDown className="absolute -bottom-5 left-10 z-10 h-5 w-5 text-cyan-200/50" />}
    </div>
  );
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#050709] text-white">
      <Navigation />
      <section className="mesh-grid relative overflow-hidden px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="absolute right-[5%] top-24 h-80 w-80 rounded-full bg-cyan-300/[.08] blur-[100px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <p className="eyebrow">Anatomy of a deployment</p>
          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.88] tracking-[-.065em]">You press deploy.<br /><span className="text-white/30">MeshScale does the rest.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">A complete view of how source becomes a healthy regional runtime—and how a browser request finds its way back to it.</p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_.55fr]"><div><p className="eyebrow">Phase 01 / Control plane to runtime</p><h2 className="section-title">Commit to container.<br /><span>Container to healthy service.</span></h2></div><p className="self-end text-sm leading-7 text-white/40">The web application coordinates product state. A separate Go worker performs long-running AWS operations, keeping the control and execution planes cleanly separated.</p></div>
          <div className="space-y-3">{buildSteps.map((item, index) => <Step key={item[1] as string} item={item} index={index} />)}</div>
          <div className="mt-3 grid gap-px border border-emerald-300/20 bg-emerald-300/20 md:grid-cols-[1fr_auto]">
            <div className="flex items-center gap-4 bg-emerald-300/[.06] p-7"><span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-300 text-black"><Check className="h-5 w-5" /></span><div><div className="font-semibold">Deployment marked successful</div><div className="mt-1 text-xs text-white/40">AWS resource identifiers and live version state are persisted.</div></div></div>
            <div className="flex items-center gap-3 bg-emerald-300/[.06] p-7 font-mono text-[10px] text-emerald-200"><Image className="h-4 w-4" /> CAPTURE PREVIEW</div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080b0e] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl"><p className="eyebrow">Phase 02 / Browser to application</p><h2 className="section-title">A request crosses the edge.<br /><span>Then lands in-region.</span></h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/40">The regional runtime is implemented today. Global edge routing is the intended delivery architecture and remains an evolving part of the platform.</p></div>
          <div className="mt-16 overflow-x-auto pb-4">
            <div className="grid min-w-[980px] grid-cols-[1fr_54px_1fr_54px_1fr_54px_1fr] items-stretch">
              {[
                [Globe2, "01 / Browser", "A user requests the project’s MeshScale or custom domain."],
                [RadioTower, "02 / Global edge", "Domain routing selects the appropriate regional edge destination."],
                [Network, "03 / Regional edge", "The regional layer forwards traffic to the deployment host and port."],
                [CloudCog, "04 / ECS service", "A healthy application task serves the response from regional compute."],
              ].map(([Icon,title,body],index)=>{const I=Icon as typeof Globe2;return <div className="contents" key={title as string}><div className="border border-white/10 bg-black/30 p-7"><I className="h-6 w-6 text-cyan-200"/><div className="mt-12 font-mono text-[10px] uppercase tracking-wider text-white/30">{title as string}</div><p className="mt-3 text-sm leading-6 text-white/55">{body as string}</p></div>{index<3&&<div className="grid place-items-center"><ArrowRight className="h-5 w-5 text-cyan-200/50"/></div>}</div>})}
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[[Shield,"Domain-aware","Routing data maps hostnames to their regional destinations."],[HeartPulse,"Health-aware","Traffic is intended for runtimes proven healthy during deployment."],[Globe2,"Region-aware","The architecture supports actual regional application instances—not just a CDN cache."]].map(([Icon,title,body])=>{const I=Icon as typeof Shield;return <div key={title as string} className="border-l border-white/15 pl-5"><I className="h-4 w-4 text-emerald-300"/><h3 className="mt-6 text-sm font-semibold">{title as string}</h3><p className="mt-2 text-xs leading-6 text-white/35">{body as string}</p></div>})}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">Always observable</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] md:text-5xl">The black box has a timeline.</h2><p className="mt-5 text-sm leading-7 text-white/40">Deployment events turn infrastructure work into product language developers can follow.</p></div>
          <div className="border border-white/10 bg-[#080b0e] p-6 font-mono text-[10px]">
            {["VALIDATING","ECR_REPOSITORY","BUILDING","IMAGE_READY","TASK_DEFINITION","SECURITY_GROUP","SERVICE_DEPLOYING","HEALTH_CHECK","DEPLOYED","SCREENSHOT"].map((event,index)=><div key={event} className="flex items-center border-b border-white/[.07] py-3 last:border-0"><span className="mr-4 text-white/20">{String(index+1).padStart(2,"0")}</span><span className={event==="DEPLOYED"?"text-emerald-300":"text-white/55"}>{event}</span><span className="ml-auto text-white/20">{event==="DEPLOYED"?"LIVE":"complete"}</span></div>)}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
