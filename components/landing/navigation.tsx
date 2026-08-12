"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Use Cases", href: "/#how-it-works" },
  { name: "Architecture", href: "/#infra" },
  { name: "Developers", href: "/#developers" },
  { name: "Security", href: "/#security" },
  { name: "Downloads", href: "/downloads" },
  { name: "Blog", href: "/blog" },
];

const productLinks = [
  {
    name: "Fortmont Control Plane",
    description: "Central backend platform for authentication, agent management, and infrastructure orchestration",
    href: "/fortmont-control-plane",
    badge: "Core Platform",
    badgeVariant: "info",
  },
  {
    name: "Fortmont Cloud",
    description: "Manage everything. From anywhere. Dashboards, monitoring, infrastructure, and storage.",
    href: "/fortmont-cloud",
    badge: "Coming Soon",
    badgeVariant: "info",
  },
  {
    name: "Fortmont Agent",
    description: "Dedicated infrastructure agent collecting system metrics and executing tasks in real-time",
    href: "/fortmont-agent",
    badge: "Coming Soon",
    badgeVariant: "info",
  },
  {
    name: "Fortmont API",
    description: "Original backend core for auth and integrations — being redesigned into Control Plane",
    href: "/fortmont-api",
    badge: "Phasing Out",
    badgeVariant: "warning",
  },
  {
    name: "Fortmont Home",
    description: "Original homelab operations dashboard — being replaced by Fortmont Cloud",
    href: "/fortmont-home",
    badge: "Phasing Out",
    badgeVariant: "warning",
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl text-foreground" : "text-2xl text-white"
              }`}
            >
              FORTMONT
            </span>
            <span
              className={`font-mono transition-all duration-500 ${
                isScrolled
                  ? "text-[10px] mt-0.5 text-muted-foreground"
                  : "text-xs mt-1 text-white/60"
              }`}
            >
              
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 outline-none ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[580px] p-3">
                <DropdownMenuLabel>Fortmont products</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-3" />
                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-2 gap-2">
                  {productLinks.map((product) => (
                    <DropdownMenuItem
                      key={product.name}
                      asChild
                      className="cursor-pointer rounded-lg p-3 hover:bg-accent focus:bg-accent transition-colors"
                    >
                      <Link
                        href={product.href}
                        className="flex flex-col h-full justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-medium text-sm text-foreground">
                              {product.name}
                            </span>
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
                                product.badgeVariant === "warning"
                                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                                  : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                              }`}
                            >
                              {product.badge}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {product.description}
                          </span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-foreground" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className={`transition-all duration-500 ${
                isScrolled
                  ? "text-xs text-foreground/70 hover:text-foreground"
                  : "text-sm text-white/70 hover:text-white"
              }`}
            >
              Sign in
            </Link>

            <Button
              asChild
              size="sm"
              className={`rounded-full transition-all duration-500 ${
                isScrolled
                  ? "bg-foreground hover:bg-foreground/90 text-background px-4 h-8 text-xs"
                  : "bg-white hover:bg-white/90 text-black px-6"
              }`}
            >
              <Link href="/fortmont-control-plane">Explore Control Plane</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8 overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Products
              </p>
              {productLinks.map((product, i) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between group transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${i * 75}ms`
                      : "0ms",
                  }}
                >
                  <span className="text-2xl font-display text-foreground group-hover:text-muted-foreground">
                    {product.name}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      product.badgeVariant === "warning"
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                        : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    }`}
                  >
                    {product.badge}
                  </span>
                </Link>
              ))}
            </div>

            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${i * 85 + 200}ms`
                    : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            <Button
              variant="outline"
              className="flex-1 rounded-full h-14 text-base"
              asChild
            >
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
              asChild
            >
              <Link
                href="/fortmont-control-plane"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Control Plane
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}