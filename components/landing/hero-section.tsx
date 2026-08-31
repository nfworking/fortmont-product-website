"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const rays = [
  { left: "7%", rotate: "-24deg", delay: 0, duration: 9, opacity: 0.16 },
  { left: "25%", rotate: "-15deg", delay: 1.3, duration: 11, opacity: 0.11 },
  { left: "52%", rotate: "12deg", delay: 0.6, duration: 10, opacity: 0.13 },
  { left: "78%", rotate: "24deg", delay: 2, duration: 12, opacity: 0.09 },
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.055),transparent_42%)]" />
        <div className="absolute left-1/2 top-[38%] h-[34rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.13] blur-[110px]" />
        <motion.div
          className="absolute left-1/2 top-[42%] h-[24rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.09] blur-[90px]"
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
        {rays.map((ray, index) => (
          <motion.div key={index} className="absolute -top-[30%] h-[165%] w-24 origin-bottom bg-gradient-to-t from-transparent via-white to-transparent blur-2xl" style={{ left: ray.left, rotate: ray.rotate, opacity: ray.opacity }} animate={{ x: [0, index % 2 ? 45 : -35, 0], opacity: [ray.opacity * 0.45, ray.opacity, ray.opacity * 0.45] }} transition={{ duration: ray.duration, delay: ray.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
        <motion.div className="absolute -left-1/4 top-1/2 h-px w-[150%] bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent blur-[1px]" animate={{ opacity: [0.1, 0.35, 0.1], scaleX: [0.92, 1, 0.92] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1400px] items-center px-6 py-32 lg:px-12">
        <motion.div className="max-w-5xl" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
          <motion.span className="text-xs font-mono uppercase tracking-[0.2em] text-white/45" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.55 }}>Infrastructure, connected.</motion.span>
          <motion.h1 className="mt-7 text-[clamp(3.5rem,9vw,8.5rem)] font-display leading-[.88] tracking-tight" variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>MeshScale<br /><span className="text-white/45">makes infrastructure simple.</span></motion.h1>
          <motion.p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.65 }}>A modern platform for connecting infrastructure, collecting telemetry and operating devices without turning your environment into another full-time job.</motion.p>
          <motion.div className="mt-10 flex flex-wrap gap-3" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.55 }}>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90"><Link href="/console">Explore MeshScale Console <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"><Link href="/agent/download">Download Agent</Link></Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
