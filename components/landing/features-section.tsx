"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Sign-in and security",
    description:
      "Use local credentials or Entra login with 2FA, session management, and password reset flows from one control plane.",
    stats: { value: "2FA", label: "session revocation and recovery" },
  },
  {
    number: "02",
    title: "Identity provider",
    description:
      "Fortmont API issues OAuth and OIDC tokens so your apps can trust one identity source you fully control.",
    stats: { value: "OIDC", label: "PKCE and discovery endpoints" },
  },
  {
    number: "03",
    title: "Fortmont Home operations",
    description:
      "Run DNS, proxy, SSL, UniFi, mail, ticketing, storage, and infrastructure views from one authenticated dashboard.",
    stats: { value: "1 control plane", label: "operations + account workflows" },
  },
  {
    number: "04",
    title: "Automation API keys",
    description:
      "Generate scoped platform keys for internal services and scripts while keeping secrets inside your infrastructure.",
    stats: { value: "Scoped", label: "service-to-service automation" },
  },
];

// Floating dot particles visualization
function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Generate stable particle positions
    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: (seed * 127.1) % 1,
        by: (seed * 311.7) % 1,
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = window.setTimeout(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [isVisible, activeFeature]);

  const goToFeature = (index: number) => {
    const normalized = (index + features.length) % features.length;
    setActiveFeature(normalized);
  };

  const goToNextFeature = () => {
    goToFeature(activeFeature + 1);
  };

  const goToPrevFeature = () => {
    goToFeature(activeFeature - 1);
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Core capabilities
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                One Identity
                <br />
                <span className="text-muted-foreground">Two connected products.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Use Fortmont API as your identity and integration core, then operate through Fortmont Home for day-to-day infrastructure and service workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Large feature card */}
          <div
            className={`lg:col-span-12 relative bg-black border border-foreground/10 min-h-[500px] overflow-hidden group transition-all duration-700 flex ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left: text content */}
            <div className="relative flex-1 p-8 lg:p-12 bg-black">
              <ParticleVisualization />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `translateX(-${activeFeature * 100}%)`,
                    }}
                  >
                    {features.map((feature) => (
                      <article
                        key={feature.number}
                        className="min-w-full max-w-full pr-2"
                      >
                        <span className="font-mono text-sm text-muted-foreground">
                          {feature.number}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-display mt-4 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                          {feature.description}
                        </p>
                        <div>
                          <span className="text-5xl lg:text-6xl font-display">
                            {feature.stats.value}
                          </span>
                          <span className="block text-sm text-muted-foreground font-mono mt-2">
                            {feature.stats.label}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    {features.map((feature, index) => (
                      <button
                        key={feature.number}
                        type="button"
                        aria-label={`Go to feature ${feature.number}`}
                        onClick={() => goToFeature(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeFeature === index
                            ? "w-10 bg-white"
                            : "w-4 bg-white/35 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous feature"
                      onClick={goToPrevFeature}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    >
                      <span aria-hidden="true">&#8592;</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Next feature"
                      onClick={goToNextFeature}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    >
                      <span aria-hidden="true">&#8594;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: system panel, full height */}
          </div>
        </div>
      </div>
    </section>
  );
}
