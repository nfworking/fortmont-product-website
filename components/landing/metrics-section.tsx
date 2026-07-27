"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "68,420",
    label: "Sessions validated this month",
    sublabel: "Workspace and API clients",
  },
  {
    value: "99.99%",
    label: "Auth endpoint availability",
    sublabel: "Self-hosted production uptime",
  },
  {
    value: "12 min",
    label: "Average key rotation",
    sublabel: "Scoped platform key lifecycle",
  },
];

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="metrics" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden border-y border-foreground/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_80%_26%,rgba(34,211,238,0.08),transparent_34%)]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/25" />
              Metrics
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[96px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Live platform
              <br />
              <span className="text-muted-foreground">health and usage.</span>
            </h2>
          </div>
        </div>

        <div
          className={`border border-foreground/10 bg-foreground/[0.02] p-3 mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="/images/metrics-surface.svg" alt="Fortmont metrics dashboard graph" className="w-full h-auto object-cover" />
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120 + 120}ms` }}
            >
              <p className="text-4xl lg:text-5xl font-display tracking-tight mb-2">{metric.value}</p>
              <p className="text-base mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
