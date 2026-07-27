import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const capabilities = [
  {
    title: "Sign-in and security",
    body: "Credentials and Entra sign-in, 2FA, session management, and password reset in one self-hosted identity layer.",
  },
  {
    title: "Identity provider",
    body: "Use Fortmont as your OIDC issuer with discovery endpoints and PKCE support for web and mobile clients.",
  },
  {
    title: "API access",
    body: "Create scoped platform API keys for automation, internal jobs, and service-to-service access.",
  },
  {
    title: "Operator ownership",
    body: "Secrets, sessions, and account data stay in infrastructure you operate.",
  },
];

const requirements = ["Node.js", "MariaDB", "Redis", "S3-compatible storage", "Optional Microsoft Entra integration"];

export default function FortmontApiPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm font-mono text-muted-foreground mb-6">Product • Fortmont API</p>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.92] font-display tracking-tight">
            OAuth and OIDC
            <br />
            <span className="text-muted-foreground">for infrastructure you control.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont API is the identity and automation core of the Fortmont platform. It gives solo operators,
            students, and small teams a self-hosted way to issue tokens, manage sessions, and integrate internal apps.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="#getting-started">Get started</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/#developers">Back to overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="identity" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">What Fortmont API covers</h2>
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
            <p className="text-sm font-mono text-muted-foreground mb-4">Who it is for</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Use cases that fit.</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>I run a homelab and want one login for my tools.</li>
              <li>I am building a side project and need an OIDC provider I control.</li>
              <li>My small team needs tickets, shared files, and accounts without SaaS sprawl.</li>
            </ul>
          </div>
          <div className="border border-foreground/10 bg-black text-white p-6 lg:p-8">
            <p className="text-sm font-mono text-white/60 mb-4">Architecture</p>
            <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-white/80">{`App clients
  -> Fortmont API
      -> MariaDB (accounts, sessions, tickets)
      -> Redis (session/cache)
      -> S3 (files)
      -> Integrations (Proxmox, DNS, UniFi, Azure optional)`}</pre>
          </div>
        </div>
      </section>

      <section id="getting-started" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Getting started</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Deploy and integrate.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Keep the marketing site concise, then route technical users to implementation docs and examples.
              The standard OIDC discovery path is available at /.well-known/openid-configuration.
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
              Link public users to docs for setup, environment configuration, and Docker deployment instructions.
            </p>
          </div>
        </div>
      </section>

      <section id="api-access" className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-6">
          <article className="border border-foreground/10 p-6">
            <h3 className="text-xl font-medium mb-3">Trust and security</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fortmont stores account and session data, file metadata, and ticket records. Authentication methods,
              scoped API keys, and session revocation are visible and operator-controlled.
            </p>
          </article>
          <article className="border border-foreground/10 p-6">
            <h3 className="text-xl font-medium mb-3">Status and roadmap</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fortmont is actively evolving for homelab and small-team use. Keep expectations clear: stable core auth,
              with ongoing expansion across modules.
            </p>
          </article>
          <article className="border border-foreground/10 p-6">
            <h3 className="text-xl font-medium mb-3">Brand and legal</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you have a name or trademark concern, contact the maintainer quickly so the repository can be adjusted
              while rebrand steps are handled.
            </p>
          </article>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
