"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Platform", href: "/console" },
  { name: "How it works", href: "/process" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className={`mx-auto max-w-[1240px] border transition-all duration-300 ${scrolled || mobile ? "border-white/10 bg-[#070a0d]/90 shadow-2xl backdrop-blur-xl" : "border-white/[0.07] bg-[#070a0d]/55 backdrop-blur-md"}`}>
        <div className="flex h-14 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-cyan-300/40 bg-cyan-300/[0.08] font-mono text-[10px] text-cyan-200">M</span>
            <span className="text-sm font-semibold tracking-[0.18em] text-white">MESHSCALE</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
          <a href="https://console.meshscale.cloud" className="hidden items-center gap-2 bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-cyan-100 md:flex">
            Open console <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button className="p-2 text-white md:hidden" onClick={() => setMobile(!mobile)} aria-label="Toggle navigation">
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobile && (
          <div className="border-t border-white/10 px-5 py-5 md:hidden">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobile(false)} className="block border-b border-white/[0.07] py-4 text-sm text-white/70">
                {link.name}
              </Link>
            ))}
            <a href="https://console.meshscale.cloud" className="mt-5 flex items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-semibold text-black">
              Open console <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
