import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { RoadmapList } from "@/components/landing/roadmap-list";

export default function RoadmapPage(){return <main className="min-h-screen bg-background"><Navigation/><div className="pt-36 pb-24 px-6 lg:px-12"><div className="max-w-[1000px] mx-auto"><span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">MeshScale roadmap</span><h1 className="mt-5 text-5xl md:text-7xl font-display">Build the platform.<br/><span className="text-muted-foreground">Keep it useful.</span></h1><p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">MeshScale is being developed around a small number of strong primitives rather than a collection of disconnected products.</p><RoadmapList/></div></div><FooterSection/></main>}
