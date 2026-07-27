"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  { 
    title: "OIDC discovery", 
    description: "Expose standard /.well-known metadata for your clients."
  },
  { 
    title: "PKCE-first auth", 
    description: "Secure web and mobile sign-in without managing a third-party IdP."
  },
  { 
    title: "Scoped API keys", 
    description: "Control service automation with explicit read/write permissions."
  },
  { 
    title: "Sample integrations", 
    description: "Start quickly with auth clients and example app patterns."
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLSection>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">

      {/* Terminal visual — absolute, bottom-right, behind all content */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-full border border-foreground/15 bg-[linear-gradient(140deg,#0d1017,#111827_45%,#0f1219)] p-4 lg:p-6">
          <div className="h-8 border border-white/15 rounded-md mb-4 bg-white/5" />
          <div className="space-y-3 font-mono text-[10px] lg:text-xs text-white/65">
            <div className="text-[#67e8f9]">GET /.well-known/openid-configuration</div>
            <div className="text-[#fbbf24]">POST /api/keys - scope=tickets.write</div>
            <div>fortmont auth-client --issuer https://fortmont.me</div>
            <div className="text-[#38bdf8]">session revoke user:42</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-20 border border-white/10 rounded bg-white/[0.03]" />
              <div className="h-20 border border-white/10 rounded bg-white/[0.03]" />
              <div className="h-20 border border-white/10 rounded bg-white/[0.03] col-span-2" />
            </div>
          </div>
        </div>
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        {/* Fade top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      {/* All text content sits on top */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — Full width */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Developers
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9]">
            Build on Fortmont.
            <br />
            <span className="text-muted-foreground">Ship your own login.</span>
          </h2>
        </div>

        {/* Description + Features — left half only */}
        <div
          className={`max-w-[50%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md">
            Fortmont API gives you OIDC identity and platform automation endpoints
            for side projects, internal tools, and self-hosted apps.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
