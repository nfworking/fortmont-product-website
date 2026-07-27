"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "I replaced five separate homelab logins with Fortmont. One account now covers dashboards, tickets, and storage.",
    author: "Ari Patel",
    role: "Student operator",
    company: "HomeLab One",
    metric: { value: "1 login", label: "Across core tools" },
  },
  {
    quote: "Fortmont API gave our side project a real OIDC issuer in a weekend, without outsourcing identity to another SaaS.",
    author: "Nina Ross",
    role: "Founder",
    company: "Night Shift Apps",
    metric: { value: "48h", label: "To first integration" },
  },
  {
    quote: "We now manage account access, shared files, and team tickets in Fortmont Home instead of jumping tabs all day.",
    author: "Omar James",
    role: "Ops lead",
    company: "Small Crew Studio",
    metric: { value: "3 tools", label: "Unified in one dashboard" },
  },
  {
    quote: "Keeping secrets and sessions on infrastructure we own made Fortmont the right call for us.",
    author: "Kayla Moore",
    role: "Infrastructure engineer",
    company: "Rack North",
    metric: { value: "100%", label: "Operator-controlled secrets" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
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

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const goPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.16),transparent_36%),radial-gradient(circle_at_80%_26%,rgba(34,211,238,0.12),transparent_36%)]" />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "88px 88px" }} />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/45 mb-4">
              <span className="w-12 h-px bg-white/25" />
              Testimonials
            </span>
            <h2 className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Trusted by teams
              <span className="text-white/40"> worldwide.</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-4 border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-4 border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote side */}
          <div className="lg:col-span-7 relative">
            {/* Large quote mark */}
            <span className="absolute -left-4 -top-8 text-[200px] font-display text-white/5 leading-none select-none">
              &ldquo;
            </span>
            
            <div className="relative">
              <blockquote 
                key={activeIndex}
                className="text-3xl lg:text-4xl xl:text-5xl font-display leading-[1.2] tracking-tight animate-fadeSlideIn"
              >
                {activeTestimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="mt-12 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                  <span className="font-display text-xl">
                    {activeTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium">{activeTestimonial.author}</p>
                  <p className="text-white/60">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Active metric - Large */}
            <div 
              key={`metric-${activeIndex}`}
              className="p-10 border border-white/20 bg-white/5 animate-fadeSlideIn"
            >
              <span className="text-7xl lg:text-8xl font-display block mb-4">
                {activeTestimonial.metric.value}
              </span>
              <span className="text-lg text-white/60">
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-white/20 overflow-hidden"
                >
                  <div 
                    className={`h-full bg-[#38bdf8] transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={idx === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Company list */}
            <div className="mt-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-4">
                Featured companies
              </span>
              <div className="flex flex-wrap gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      idx === activeIndex 
                        ? "border-white/50 text-white bg-white/5" 
                        : "border-white/15 text-white/45 hover:border-white/35"
                    }`}
                  >
                    {t.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
