import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { MotionReveal } from "@/components/landing/motion-reveal";

const topics = [
  { icon: MessageSquare, title: "General questions", body: "Want to know more about MeshScale, how it works, or where the platform is heading?" },
  { icon: ShieldCheck, title: "Technical support", body: "Having trouble with MeshScale Console or MeshScale Agent? Tell us what you are seeing." },
  { icon: Mail, title: "Partnerships", body: "Interested in integrating with MeshScale or working together? We would like to hear from you." },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="px-6 pb-20 pt-40 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <MotionReveal>
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
            <h1 className="max-w-4xl text-6xl font-display leading-[.92] tracking-tight md:text-8xl">Let&apos;s talk about your infrastructure.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Whether you are evaluating MeshScale, already running it, or simply have a question, send us a message. We keep the conversation direct.</p>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-7 md:p-9">
              <p className="text-sm text-muted-foreground">Email us directly</p>
              <Link href="mailto:hello@meshscale.cloud" className="mt-3 inline-flex items-center gap-2 text-2xl font-display hover:opacity-70 transition-opacity">hello@meshscale.cloud <ArrowUpRight className="h-5 w-5" /></Link>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">We&apos;ll route your message to the right person and get back to you as soon as we can.</p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-y border-foreground/10 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <MotionReveal><p className="mb-10 text-xs font-mono uppercase tracking-wider text-muted-foreground">How can we help?</p></MotionReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {topics.map(({ icon: Icon, title, body }, index) => (
              <MotionReveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-foreground/10 p-7 md:p-8">
                  <Icon className="h-5 w-5" />
                  <h2 className="mt-14 text-xl font-medium">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <MotionReveal>
          <div className="mx-auto max-w-[1200px] rounded-3xl bg-black p-8 text-white md:p-14">
            <p className="mb-5 text-xs font-mono uppercase tracking-wider text-white/40">Prefer to explore first?</p>
            <h2 className="max-w-3xl text-4xl font-display md:text-6xl">See what MeshScale can do.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/console" className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-white/90">Explore Console</Link>
              <Link href="/agent" className="inline-flex h-10 items-center rounded-full border border-white/20 px-5 text-sm font-medium text-white hover:bg-white/10">Explore Agent</Link>
            </div>
          </div>
        </MotionReveal>
      </section>
      <FooterSection />
    </main>
  );
}
