import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-36 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-4">About Fortmont</span>
        <h1 className="text-5xl lg:text-7xl font-display mb-8">Architecting the future of platform control.</h1>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Fortmont is evolving into a cloud-first, API-first platform designed to power identity, agent orchestration, and infrastructure monitoring across homelab and enterprise environments.
          </p>
          <p>
            The next-generation ecosystem centers around <strong>Fortmont Control Plane (FCP)</strong>—the core backend for authentication, multi-client APIs, and real-time agent management—and <strong>Fortmont Cloud</strong>, the primary application interface built around the punchline: <em>&ldquo;Manage everything. From anywhere.&rdquo;</em>
          </p>
          <p>
            System telemetry and task execution are handled by <strong>Fortmont Agent</strong>, a lightweight daemon communicating directly with Control Plane in real-time.
          </p>
          <div className="p-6 border border-amber-500/20 bg-amber-500/5 rounded-lg text-sm text-foreground/80 mt-8">
            <span className="font-mono text-xs uppercase text-amber-600 dark:text-amber-400 block mb-2">📌 Architectural Evolution</span>
            Earlier projects—including Fortmont Home and original Fortmont API—are being phased out and succeeded by the new Control Plane & Cloud architecture.
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
