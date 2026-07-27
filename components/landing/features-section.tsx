"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Sign-in and security",
    description: "Use local credentials or Entra login with 2FA, session management, and password reset flows from one control plane.",
    stats: { value: "2FA", label: "session revocation and recovery" },
  },
  {
    number: "02",
    title: "Identity provider",
    description: "Fortmont API issues OAuth and OIDC tokens so your apps can trust one identity source you fully control.",
    stats: { value: "OIDC", label: "PKCE and discovery endpoints" },
  },
  {
    number: "03",
    title: "Ops dashboard",
    description: "See Proxmox, DNS, reverse proxy, UniFi, Azure, files, mail, and tickets in one dashboard instead of separate tools.",
    stats: { value: "1 view", label: "identity + homelab operations" },
  },
  {
    number: "04",
    title: "Automation API keys",
    description: "Generate scoped platform keys for internal services and scripts while keeping secrets inside your infrastructure.",
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
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                One platform.
                <br />
                <span className="text-muted-foreground">Two products.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Fortmont Workspace and Fortmont API are built for solo operators, students, and small teams running real systems at home.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Large feature card */}
          <div 
            className={`lg:col-span-12 relative bg-black border border-foreground/10 min-h-[500px] overflow-hidden group transition-all duration-700 flex ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setActiveFeature(0)}
          >
            {/* Left: text content */}
            <div className="relative flex-1 p-8 lg:p-12 bg-black">
              <ParticleVisualization />
              <div className="relative z-10">
                <span className="font-mono text-sm text-muted-foreground">{features[0].number}</span>
                <h3 className="text-3xl lg:text-4xl font-display mt-4 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {features[0].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                  {features[0].description}
                </p>
                <div>
                  <span className="text-5xl lg:text-6xl font-display">{features[0].stats.value}</span>
                  <span className="block text-sm text-muted-foreground font-mono mt-2">{features[0].stats.label}</span>
                </div>
              </div>
            </div>

            {/* Right: system panel, full height */}
            <div className="hidden lg:block relative w-[42%] shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,#0f1116,#141922_44%,#0c0f14)]" />
              <div className="absolute inset-0 p-7 flex flex-col gap-4">
                <div className="h-10 rounded-md border border-white/15 bg-white/5" />
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                    <div className="h-2 w-16 bg-[#67e8f9]/70 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded" />
                      <div className="h-2 w-4/5 bg-white/15 rounded" />
                    </div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                    <div className="h-2 w-14 bg-[#fbbf24]/70 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded" />
                      <div className="h-2 w-3/4 bg-white/15 rounded" />
                    </div>
                  </div>
                  <div className="col-span-2 rounded-md border border-white/10 bg-black/25 p-4">
                    <div className="h-2 w-20 bg-[#38bdf8]/70 rounded mb-3" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded bg-white/10" />
                      <div className="h-16 rounded bg-white/10" />
                      <div className="h-16 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(103,232,249,0.18),transparent_42%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
