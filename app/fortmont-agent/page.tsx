import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const capabilities = [
  {
    title: "Metrics & Telemetry Collection",
    body: "Continuously stream real-time host system information, CPU/memory usage, storage health, network throughput, and process data directly to Fortmont Control Plane.",
  },
  {
    title: "Secure Task Execution",
    body: "Receive and safely execute authorized infrastructure orchestration commands, service restarts, maintenance tasks, and automated workflows on target hosts.",
  },
  {
    title: "Virtualization & Network Integration",
    body: "Interact directly with hypervisors (Proxmox, VMware), container engines, and network appliances for deep infrastructure visibility.",
  },
  {
    title: "Encrypted Agent Protocol",
    body: "Establish resilient, bidirectional TLS communication with Fortmont Control Plane, allowing remote control without open inbound ports.",
  },
];

export default function FortmontAgentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-6">
            <span>Product • Fortmont Agent</span>
            <span>•</span>
            <span>Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[0.94] font-display tracking-tight">
            Real-time infrastructure agent
            <br />
            <span className="text-muted-foreground">for Fortmont Control Plane.</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont Agent is a lightweight daemon installed directly on your hosts and servers. It streams system metrics,
            collects health telemetry, and executes infrastructure orchestration commands in real-time for Fortmont Control Plane.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="/fortmont-control-plane">Explore Control Plane</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/#features">Back to features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Status Notice */}
      <section className="py-8 px-6 lg:px-12 bg-indigo-500/5 border-y border-indigo-500/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 font-semibold block mb-1">
              🚧 Early Development Status
            </span>
            <p className="text-sm text-muted-foreground">
              The Fortmont Agent communication protocol and telemetry engine are actively being developed alongside Fortmont Control Plane.
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

      {/* Capabilities */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">What Fortmont Agent does</h2>
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

      {/* Architecture / Flow */}
      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Architecture</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Built for secure node control.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Agents run as unprivileged or dedicated system daemons on customer hosts, establishing outbound encrypted connections
              to Control Plane. Control Plane orchestrates tasks and aggregates metrics for presentation in Fortmont Cloud.
            </p>
          </div>
          <div className="border border-foreground/10 bg-black text-white p-6 lg:p-8 rounded-lg font-mono">
            <p className="text-xs text-white/60 mb-4">// System Telemetry & Control Flow</p>
            <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-white/80">{`Customer Infrastructure / Node
  └─> Fortmont Agent Daemon
       ├─ System Metrics (CPU, RAM, Disk, Net)
       ├─ Hypervisor Status (Proxmox/VMware)
       └─ Task Execution Handler
            ▲
            │ Encrypted Protocol
            ▼
Fortmont Control Plane (FCP)
  └─> Fortmont Cloud (Dashboards & Alerts)`}</pre>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
