import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cloudFeatures = [
  {
    title: "Unified Infrastructure Dashboards",
    body: "Monitor server health, system metrics, host status, and real-time telemetry gathered by Fortmont Agents across your environment.",
  },
  {
    title: "Storage & File Management",
    body: "S3-compatible object storage access, file sharing, data backup controls, and asset management in one intuitive interface.",
  },
  {
    title: "Monitoring & Alerts",
    body: "Configurable alert triggers, uptime metrics, incident notifications, and automated escalation routines powered by Control Plane.",
  },
  {
    title: "Productivity & Workflow Applications",
    body: "Integrated ticketing, operational logs, team access controls, and expanding productivity applications built for operators.",
  },
];

const surfaces = [
  "Infrastructure Overview",
  "Agent Telemetry",
  "S3 Storage & Files",
  "Server Monitoring",
  "Alert Manager",
  "Ticketing & Tasks",
  "Access & Identity",
  "API & Webhooks",
];

export default function FortmontCloudPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-6">
            <span>Product • Fortmont Cloud</span>
            <span>•</span>
            <span>Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.92] font-display tracking-tight">
            Manage everything.
            <br />
            <span className="text-muted-foreground">From anywhere.</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont Cloud is the primary application interface built from an operator&apos;s perspective.
            It provides unified dashboards, infrastructure management, storage, monitoring, telemetry visualizers,
            and productivity applications—all backed by <strong>Fortmont Control Plane</strong>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="/fortmont-control-plane">Explore Control Plane</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/fortmont-agent">Discover Fortmont Agent</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Status Notice */}
      <section className="py-8 px-6 lg:px-12 bg-indigo-500/5 border-y border-indigo-500/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 font-semibold block mb-1">
              ☁️ Platform Redesign Status
            </span>
            <p className="text-sm text-muted-foreground">
              Fortmont Cloud is being developed alongside Fortmont Control Plane to succeed the legacy Fortmont Home interface.
            </p>
          </div>
          <Link
            href="/fortmont-control-plane"
            className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline whitespace-nowrap"
          >
            Learn about Control Plane Architecture &rarr;
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">What Fortmont Cloud provides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cloudFeatures.map((feat) => (
              <article key={feat.title} className="border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8">
                <h3 className="text-xl font-medium mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feat.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Multi-Client Platform</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Unified across all devices.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fortmont Cloud powers Web, Desktop, Mobile, and CLI user experiences through the single, consistent API exposed by Fortmont Control Plane.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {surfaces.map((surface) => (
                <li key={surface}>• {surface}</li>
              ))}
            </ul>
          </div>
          <div className="border border-foreground/10 bg-black text-white p-6 lg:p-8 rounded-lg font-mono">
            <p className="text-xs text-white/60 mb-4">// Platform Interaction Flow</p>
            <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-white/80">{`Fortmont Cloud (Web / Desktop / Mobile / CLI)
  │
  └─> Central API Requests
        │
        ▼
Fortmont Control Plane (FCP)
  │
  ├─> Identity & Auth Engine
  ├─> Infrastructure Orchestration
  └─> Telemetry Aggregation
        ▲
        │ Real-time Protocol
        ▼
Fortmont Agent (Host Nodes & Servers)`}</pre>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
