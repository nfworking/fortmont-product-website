"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-6xl md:text-7xl lg:text-[72px] font-display tracking-tight mb-8 leading-[0.95]">
                  Ready to run
                  <br />
                  Fortmont your way?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Start with Fortmont Workspace for day-to-day operations,
                  then integrate Fortmont API anywhere you need trusted sign-in.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    <Link href="/fortmont-api">
                      Open Fortmont API
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  >
                    <Link href="/fortmont-workspace">Explore Workspace</Link>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  Self-hosted. Operator-controlled. Built for real homelabs.
                </p>
              </div>

              {/* Right visual */}
              <div className="hidden lg:flex items-end justify-center w-[600px] h-[650px] -mr-16">
                <div className="w-full h-full border border-foreground/15 bg-[linear-gradient(155deg,#0f0f11,#15161a)] p-8 flex flex-col gap-6">
                  <div className="h-10 rounded-md border border-white/15 bg-white/5" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-md border border-white/10 bg-white/[0.03]" />
                    <div className="h-28 rounded-md border border-white/10 bg-white/[0.03]" />
                  </div>
                  <div className="h-40 rounded-md border border-white/10 bg-black/25" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-md bg-[#38bdf8]/15 border border-[#38bdf8]/30" />
                    <div className="h-16 rounded-md bg-[#67e8f9]/15 border border-[#67e8f9]/30" />
                    <div className="h-16 rounded-md bg-[#fbbf24]/15 border border-[#fbbf24]/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
