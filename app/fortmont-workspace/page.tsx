import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const modules = [
  {
    title: "Identity and access",
    body: "Manage accounts, sessions, recovery, and access controls from one dashboard.",
  },
  {
    title: "Files",
    body: "Private storage with quotas, share links, and activity tracking.",
  },
  {
    title: "Ticketing",
    body: "Create and assign tickets with teams, comments, and notifications.",
  },
  {
    title: "Ops visibility",
    body: "Keep infrastructure context close: Proxmox, DNS, proxy, UniFi, and cloud links.",
  },
];

export default function FortmontWorkspacePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm font-mono text-muted-foreground mb-6">Product • Fortmont Workspace</p>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.92] font-display tracking-tight">
            One dashboard
            <br />
            <span className="text-muted-foreground">for identity and operations.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Fortmont Workspace is the daily control plane for operators and small teams who want auth,
            files, tickets, and infra visibility in one place.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-full px-6">
              <Link href="/fortmont-api">Use Fortmont API for login</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/">Back to homepage</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display mb-10">Workspace modules</h2>
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

      <FooterSection />
    </main>
  );
}
