import Link from "next/link";

const links = [
  { name: "Platform", href: "/console" },
  { name: "How it works", href: "/process" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#050709] text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <Link href="/" className="text-sm font-semibold tracking-[0.18em]">MESHSCALE</Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
              Source to regional runtime, without the cloud infrastructure busywork.
            </p>
          </div>
          <div className="flex max-w-xl flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => <Link key={link.name} href={link.href} className="text-sm text-white/45 hover:text-white">{link.name}</Link>)}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/25 sm:flex-row">
          <span>© 2026 MeshScale</span>
          <span>Build once. Run regionally. Route globally.</span>
        </div>
      </div>
    </footer>
  );
}
