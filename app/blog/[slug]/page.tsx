import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const articles: Record<string, { title: string; category: string; date: string; intro: string; sections: { heading: string; body: string }[] }> = {
  "why-meshscale-is-built-around-agents": {
    title: "Why MeshScale is built around agents", category: "Architecture", date: "August 2026",
    intro: "MeshScale is designed around a simple idea: infrastructure should remain close to the systems it operates, while the Console provides one clear surface for managing everything.",
    sections: [
      { heading: "Keep infrastructure local", body: "MeshScale Agent runs alongside the infrastructure it manages. That keeps access to local networks and services where it belongs, without requiring every device to expose itself directly to the internet." },
      { heading: "One connected control surface", body: "The Agent maintains a secure connection back to MeshScale Console. Operators get device presence, telemetry and management from one place while the underlying infrastructure remains in its own environment." },
      { heading: "A foundation for plugins", body: "The agent model also gives MeshScale a consistent runtime for integrations. Capabilities can grow through plugins without turning the Console into a collection of tightly coupled infrastructure-specific services." },
    ],
  },
  "meshscale-agent-0-2-0": {
    title: "MeshScale Agent 0.2.0", category: "Release", date: "August 2026",
    intro: "MeshScale Agent 0.2.0 establishes the foundation for reliable, remotely managed infrastructure connectivity.",
    sections: [
      { heading: "Telemetry and presence", body: "The agent reports device information and operational metrics to MeshScale Console, giving operators a live view of connected infrastructure." },
      { heading: "Resilient connectivity", body: "The Agent is built to maintain its connection to the platform and recover cleanly when network conditions change." },
      { heading: "Extensible by design", body: "Plugin support provides a path for infrastructure integrations while keeping the core agent focused on connectivity, identity and runtime responsibilities." },
    ],
  },
  "from-infrastructure-to-one-operational-surface": {
    title: "From infrastructure to one operational surface", category: "Product", date: "August 2026",
    intro: "Managing infrastructure often means jumping between dashboards, servers and vendor-specific tools. MeshScale Console is intended to make that experience feel like one connected system.",
    sections: [
      { heading: "See what is connected", body: "Console brings agents, devices and their state into a single operational view so you can understand what is running before diving into individual systems." },
      { heading: "Operate without losing context", body: "The platform is structured around the infrastructure itself rather than a collection of unrelated products. That makes it easier to move from an overview into the details that matter." },
      { heading: "A focused platform", body: "MeshScale has two products: MeshScale Console and MeshScale Agent. Keeping that boundary clear lets each product do one job well while working together as a single platform." },
    ],
  },
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return <main className="min-h-screen bg-background"><Navigation/><div className="pt-40 px-6 text-center"><h1 className="text-5xl font-display">Article not found.</h1><Link href="/blog" className="inline-flex mt-6 text-sm underline">Back to blog</Link></div><FooterSection/></main>;
  return <main className="min-h-screen bg-background"><Navigation/><article className="pt-36 pb-24 px-6 lg:px-12"><div className="max-w-[820px] mx-auto"><Link href="/blog" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-foreground"><ArrowLeft className="mr-2 h-3.5 w-3.5"/>Back to blog</Link><div className="mt-12 flex gap-4 text-xs font-mono uppercase tracking-wider text-muted-foreground"><span>{article.category}</span><span>·</span><span>{article.date}</span></div><h1 className="mt-6 text-5xl md:text-7xl font-display tracking-tight leading-[1.02]">{article.title}</h1><p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">{article.intro}</p><div className="mt-16 border-t border-foreground/10 pt-12 space-y-12">{article.sections.map(section=><section key={section.heading}><h2 className="text-3xl md:text-4xl font-display">{section.heading}</h2><p className="mt-4 text-base md:text-lg text-muted-foreground leading-8">{section.body}</p></section>)}</div></div></article><FooterSection/></main>;
}
