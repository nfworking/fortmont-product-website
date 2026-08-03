import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const focusAreas = [
  { icon: "🏗️", title: "Core Platform Architecture", desc: "Building scalable, resilient core services and data pipelines." },
  { icon: "🔐", title: "Authentication & Authorization", desc: "Implementing robust identity, session management, and access controls." },
  { icon: "🤖", title: "Fortmont Agent Protocol", desc: "Developing secure real-time communication protocols for infrastructure agents." },
  { icon: "🖥️", title: "Infrastructure Capabilities", desc: "Expanding virtualization, network equipment, and host management integrations." },
  { icon: "✨", title: "Stability & Developer Experience", desc: "Refining API interfaces, tooling, security audits, and developer workflows." },
];

const capabilities = [
  {
    title: "Central Platform & Identity",
    body: "Responsible for authentication, authorization, and seamless communication between all Fortmont applications and services.",
  },
  {
    title: "Fortmont Agent Orchestration",
    body: "Provides secure registration and management of Fortmont Agents, enabling real-time control across customer infrastructure.",
  },
  {
    title: "Telemetry & Metric Collection",
    body: "Collects system metrics, resource utilization, and health signals from hosts, hypervisors, and networking hardware.",
  },
  {
    title: "Infrastructure Task Execution",
    body: "Safely execute operations tasks, container actions, and system management routines across virtualized and physical environments.",
  },
];

const pillars = [
  {
    icon: "☁️",
    title: "Cloud-First",
    body: "Architected for modern cloud environments while supporting on-premises deployments.",
  },
  {
    icon: "🔌",
    title: "API-First",
    body: "Single, consistent API powering Web, Desktop, Mobile, CLI, and Fortmont Agent.",
  },
  {
    icon: "👨‍💻",
    title: "Developer-Friendly",
    body: "Clean interfaces, scoped tokens, transparent protocols, and extensible modules.",
  },
  {
    icon: "🧩",
    title: "Modular & Scalable",
    body: "Designed to grow from personal homelabs to high-demand professional infrastructure.",
  },
];

export default function FortmontControlPlanePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-6">
            <span>🚀 Fortmont Control Plane</span>
            <span>•</span>
            <span>Next Generation Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[96px] leading-[0.92] font-display tracking-tight">
            Central platform for identity,
            <br />
            <span className="text-muted-foreground">agents & infrastructure.</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Welcome to <strong>Fortmont Control Plane (FCP)</strong>. FCP is a complete redesign of the original Fortmont API,
            built with scalability, security, and long-term maintainability in mind. Rather than simply acting as an API,
            FCP serves as the central platform responsible for authentication, agent management, infrastructure orchestration,
            and communication between Fortmont applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="#status">Project status</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="#ecosystem">Explore ecosystem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Status Banner */}
      <section id="status" className="py-16 px-6 lg:px-12 bg-amber-500/5 border-y border-amber-500/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🚧</span>
            <div>
              <h2 className="text-2xl font-display">Project Status: Early Development</h2>
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400">
                Core platform functionality is actively being developed. Breaking changes should be expected until an initial stable release.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            During the coming weeks, core development will focus heavily on platform architecture, protocol security, and agent management.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="border border-foreground/10 bg-background/60 p-4 rounded-lg">
                <div className="text-xl mb-2">{area.icon}</div>
                <h3 className="font-medium text-sm mb-1">{area.title}</h3>
                <p className="text-xs text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fortmont Ecosystem */}
      <section id="ecosystem" className="py-20 px-6 lg:px-12 border-b border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm font-mono text-muted-foreground mb-4">☁️ Ecosystem Architecture</p>
          <h2 className="text-3xl lg:text-5xl font-display mb-6">The Fortmont Platform</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Fortmont Control Plane is one part of the redesigned ecosystem. The platform is built around two primary applications
            and dedicated host agents, allowing web, desktop, mobile, CLI, and agent clients to connect through a single, consistent API.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-foreground/15 bg-foreground/[0.02] p-6 lg:p-8 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-display mb-2">Fortmont Control Plane</h3>
                <span className="text-xs font-mono text-indigo-500 block mb-4">Backend Platform</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Responsible for authentication, APIs, agent management, and infrastructure orchestration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-foreground/10 text-xs font-mono text-muted-foreground">
                Core API & Engine
              </div>
            </div>

            <div className="border border-foreground/15 bg-foreground/[0.02] p-6 lg:p-8 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-xl font-display mb-2">Fortmont Cloud</h3>
                <span className="text-xs font-mono text-indigo-500 block mb-4">Operator Application</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage everything. From anywhere. Unified dashboards, infrastructure monitoring, storage, and productivity applications.
                </p>
              </div>
              <Link href="/fortmont-cloud" className="mt-6 pt-4 border-t border-foreground/10 text-xs font-mono text-indigo-500 hover:underline">
                Explore Fortmont Cloud &rarr;
              </Link>
            </div>

            <div className="border border-foreground/15 bg-foreground/[0.02] p-6 lg:p-8 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-display mb-2">Fortmont Agent</h3>
                <span className="text-xs font-mono text-indigo-500 block mb-4">Infrastructure Agent</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated daemon running on host nodes to collect system metrics, stream telemetry, and execute tasks.
                </p>
              </div>
              <Link href="/fortmont-agent" className="mt-6 pt-4 border-t border-foreground/10 text-xs font-mono text-indigo-500 hover:underline">
                Explore Fortmont Agent &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <article key={cap.title} className="border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8">
                <h3 className="text-xl font-medium mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{cap.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A New Direction */}
      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10 bg-black text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-white/60 uppercase tracking-wider block mb-4">🌱 Architectural Evolution</span>
            <h2 className="text-4xl lg:text-6xl font-display mb-6">A New Direction</h2>
            <p className="text-white/70 leading-relaxed text-lg mb-4">
              Earlier Fortmont projects, including <strong>Fortmont Home</strong> and the original <strong>Fortmont API</strong>,
              were primarily designed around personal homelab management and infrastructure integrations.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Fortmont Control Plane represents a complete architectural redesign—building a modern, cloud-first foundation
              capable of scaling from enthusiast homelabs to enterprise environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border border-white/15 bg-white/[0.03] p-6 rounded-lg">
                <div className="text-2xl mb-3">{pillar.icon}</div>
                <h3 className="font-medium text-lg mb-2 text-white">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started & Documentation */}
      <section id="getting-started" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-4">⚡ Access & Preview</span>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Getting Started</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A hosted preview of Fortmont Control Plane and Fortmont Cloud is planned once the platform reaches a stable state.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              At this stage, local development is not officially supported, as the architecture is evolving rapidly and frequent
              breaking changes are expected. Installation guides and developer documentation will be published at the first stable milestone.
            </p>
          </div>

          <div className="border border-foreground/10 p-6 lg:p-8 bg-foreground/[0.02] rounded-lg">
            <h3 className="font-medium mb-4 text-lg">📚 Documentation & Community</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A dedicated Fortmont website is currently under development and will include product documentation, getting started guides,
              API specifications, feature announcements, and community resources.
            </p>
            <div className="p-4 bg-background border border-foreground/10 rounded font-mono text-xs">
              <p className="text-muted-foreground mb-2">// Questions or Feedback?</p>
              <p className="text-foreground">Open a GitHub issue using the <span className="text-indigo-500 font-bold">[info]</span> prefix.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
