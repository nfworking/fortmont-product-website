import { Check, Circle, LoaderCircle } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const roadmap = [
  ["Shipping now", "Regional deployment foundation", "GitHub source, exact-commit versions, CodeBuild, regional ECR, EC2-backed ECS, health checks, deployment events, and screenshots.", Check],
  ["In progress", "A complete developer workflow", "Consistent dashboard UX, stronger failure handling, build and runtime logs, domains, configuration, and version management.", LoaderCircle],
  ["Next", "Framework-aware builds", "Detect common web frameworks and produce deployable output without requiring every project to bring a Dockerfile.", Circle],
  ["Future", "Global application delivery", "Route domains across real regional runtimes through a global and regional edge layer, with traffic metrics and regional health.", Circle],
];

export default function RoadmapPage(){return <main className="min-h-screen bg-[#050709] text-white"><Navigation/><section className="mesh-grid px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48"><div className="mx-auto max-w-[1240px]"><p className="eyebrow">Product roadmap</p><h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[.9] tracking-[-.06em]">Build the core.<br/><span className="text-white/30">Earn the edge.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">MeshScale is evolving in deliberate layers: reliable regional deployment first, then a polished developer workflow, smarter builds, and global delivery.</p></div></section><section className="px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-[1000px]">{roadmap.map(([phase,title,body,Icon],index)=>{const I=Icon as typeof Check;return <div key={title as string} className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[170px_1fr_32px]"><div className="font-mono text-[10px] uppercase tracking-[.16em] text-cyan-200/60">{phase as string}</div><div><h2 className="text-2xl font-semibold">{title as string}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">{body as string}</p></div><I className={`h-5 w-5 ${index===0?"text-emerald-300":index===1?"animate-spin text-cyan-200":"text-white/20"}`}/></div>})}</div></section><FooterSection/></main>}
