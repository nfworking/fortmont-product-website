import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const modules = [
  {
    title: "Operations dashboard",
    body: "Track infrastructure status, service health, and key workload signals from one authenticated control plane.",
  },
  {
    title: "Network and edge",
    body: "Manage DNS records, reverse proxy routes, SSL certificates, and UniFi connectivity from one interface.",
  },
  {
    title: "Support and delivery",
    body: "Run ticket queues, assignment flows, and collaboration threads while linking updates to real platform activity.",
  },
  {
    title: "Account and platform",
    body: "Use account security, sessions, mailbox, storage, GitHub linking, and API key settings in one user-facing product.",
  },
];

const surfaces = [
  "Dashboard",
  "DNS Records",
  "Proxy",
  "SSL Certificates",
  "Azure and Entra",
  "My Storage",
  "UniFi",
  "Ticketing",
  "Webmail",
  "Apps",
];

export default function FortmontHomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm font-mono text-muted-foreground mb-6">Product • Fortmont Home</p>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.92] font-display tracking-tight">
            The operator dashboard
            <br />
            <span className="text-muted-foreground">for your Fortmont environment.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont Home is the daily interface for infrastructure and support workflows. It connects account controls,
            network operations, storage, ticketing, and webmail to the Fortmont API identity and service layer.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="/fortmont-api">Connect with Fortmont API</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/">Back to homepage</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">What Fortmont Home includes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <article key={module.title} className="border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8">
                <h3 className="text-xl font-medium mb-3">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4">Product surfaces</p>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Built for day-to-day operation.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fortmont Home focuses on authenticated operational workflows. The app surface combines infrastructure panels
              and service modules so teams can work without jumping across disconnected tools.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {surfaces.map((surface) => (
                <li key={surface}>• {surface}</li>
              ))}
            </ul>
          </div>
          <div className="border border-foreground/10 bg-black text-white p-6 lg:p-8">
            <p className="text-sm font-mono text-white/60 mb-4">Product relationship</p>
            <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-white/80">{`Fortmont Home UI
  -> Auth session + access token
  -> Fortmont API endpoints
      -> Identity and OAuth/OIDC
      -> Ticketing and notifications
      -> Storage and file activity
      -> DNS, proxy, mailbox, and infra data`}</pre>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
