import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const capabilities = [
  {
    title: "Identity and sessions",
    body: "Support credentials and Entra login, two-factor authentication, password reset, session verification, and device registration in one core service.",
  },
  {
    title: "OAuth and OIDC issuer",
    body: "Expose discovery, JWKS, authorize, token, consent, and userinfo endpoints with PKCE-ready flows for web and client applications.",
  },
  {
    title: "Platform and admin APIs",
    body: "Use scoped API keys and authenticated routes for users, apps, sessions, storage, ticketing, notifications, and admin-level operations.",
  },
  {
    title: "Integrated operations surface",
    body: "Back infrastructure features including DNS, proxy, Proxmox, mailbox, Azure, UniFi, and real-time dashboard data through one API layer.",
  },
];

const requirements = [
  "Node.js",
  "MySQL-compatible database",
  "Redis",
  "S3-compatible storage",
  "IMAP and SMTP for mailbox features",
  "Optional Microsoft Entra and GitHub OAuth integrations",
];

export default function FortmontApiPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Phasing Out Notice Banner */}
      <section className="pt-28 px-6 lg:px-12 bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-[1200px] mx-auto py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold block">
                Legacy Product Notice • Phasing Out
              </span>
              <p className="text-sm text-foreground/80">
                Fortmont API is being redesigned and succeeded by <strong>Fortmont Control Plane (FCP)</strong>.
              </p>
            </div>
          </div>
          <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full text-xs font-mono">
            <Link href="/fortmont-control-plane">Explore Fortmont Control Plane &rarr;</Link>
          </Button>
        </div>
      </section>

      <section className="pt-16 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm font-mono text-muted-foreground mb-6">Product • Fortmont API (Legacy)</p>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.92] font-display tracking-tight">
            Identity and platform APIs
            <br />
            <span className="text-muted-foreground">for infrastructure you operate.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont API served as the original backend core for auth, identity, and operations data. It is currently being transitioned
            into the next-generation <strong>Fortmont Control Plane</strong>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="/fortmont-control-plane">Switch to Control Plane</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/#developers">Back to overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="identity" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">What Fortmont API provided</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <article key={capability.title} className="border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8">
                <h3 className="text-xl font-medium mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Original Use Cases</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Homelab operations core.</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>Teams that wanted first-party identity and OAuth without outsourcing session control.</li>
              <li>Operators building dashboard products that needed ticketing, storage, and account APIs.</li>
              <li>Self-hosted environments where infrastructure integrations must stay in-house.</li>
            </ul>
          </div>
          <div className="border border-foreground/10 bg-black text-white p-6 lg:p-8">
            <p className="text-sm font-mono text-white/60 mb-4">Legacy Architecture</p>
            <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-white/80">{`App clients
  -> Fortmont API (Legacy)
      -> MySQL-compatible database (accounts, sessions, ticketing, storage metadata)
      -> Redis (session and stream events)
      -> S3-compatible storage (file objects)
      -> Mail + external infrastructure integrations`}</pre>
          </div>
        </div>
      </section>

      <section id="getting-started" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Transition Guide</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Moving to Control Plane.</h2>
            <p className="text-muted-foreground leading-relaxed">
              New deployments should evaluate <strong>Fortmont Control Plane</strong>. Legacy Fortmont API environments will receive guidance and migration paths as Control Plane reaches stable release milestones.
            </p>
          </div>
          <div className="border border-foreground/10 p-6 lg:p-8">
            <h3 className="font-medium mb-4">Requirements checklist</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              {requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Documentation and legacy references remain accessible for existing deployments.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
