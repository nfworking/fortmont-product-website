"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";

import { Navigation } from "@/components/landing/navigation";

// Roadmap Data Schema
interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  category: string;
  tags: string[];
}

interface QuarterRoadmap {
  quarter: string;
  year: string;
  title: string;
  status: "Completed" | "In Progress" | "Upcoming";
  completionRate: number;
  items: RoadmapItem[];
}

const roadmapData: QuarterRoadmap[] = [
  {
    quarter: "Q1",
    year: "2026",
    title: "Core Infrastructure & Security",
    status: "Completed",
    completionRate: 100,
    items: [
      {
        id: "q1-1",
        title: "OAuth 2.1 & OpenID Connect Upgrade",
        description:
          "Upgraded identity infrastructure to strictly enforce PKCE and high-security standards for mobile and web integrations.",
        status: "completed",
        category: "Security",
        tags: ["Auth", "Core"],
      },
      {
        id: "q1-2",
        title: "Control Plane v1.0 Launch",
        description:
          "Released initial public dashboard for managing cluster permissions, environment variables, and user roles.",
        status: "completed",
        category: "Platform",
        tags: ["Dashboard", "UI"],
      },
    ],
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "Developer Experience & SDKs",
    status: "In Progress",
    completionRate: 65,
    items: [
      {
        id: "q2-1",
        title: "TypeScript & Python Native SDKs",
        description:
          "Published fully-typed libraries to streamline API connectivity across Node, Next.js, FastAPI, and Django applications.",
        status: "completed",
        category: "Developer Tools",
        tags: ["SDK", "DX"],
      },
      {
        id: "q2-2",
        title: "Real-time Event Streaming (Webhooks v2)",
        description:
          "Implementing high-throughput distributed message queues for instant system event notifications.",
        status: "in-progress",
        category: "API",
        tags: ["Webhooks", "Events"],
      },
      {
        id: "q2-3",
        title: "Audit Logging Dashboard",
        description:
          "Granular activity logs and CSV/JSON export tools for enterprise compliance verification.",
        status: "in-progress",
        category: "Security",
        tags: ["Audit", "Enterprise"],
      },
    ],
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "AI Integration & Multi-Region Cloud",
    status: "Upcoming",
    completionRate: 0,
    items: [
      {
        id: "q3-1",
        title: "Fortmont AI Copilot",
        description:
          "AI-driven interface to generate custom access controls, inspect policy syntax, and diagnose access anomalies.",
        status: "planned",
        category: "AI",
        tags: ["Copilot", "Automation"],
      },
      {
        id: "q3-2",
        title: "Multi-Region Enterprise Replication",
        description:
          "Low-latency global database replication with automatic failover support across US, EU, and APAC zones.",
        status: "planned",
        category: "Infrastructure",
        tags: ["Global", "Cloud"],
      },
    ],
  },
  {
    quarter: "Q4",
    year: "2026",
    title: "Ecosystem Expansion",
    status: "Upcoming",
    completionRate: 0,
    items: [
      {
        id: "q4-1",
        title: "Third-Party Marketplace",
        description:
          "Allow developers to build, package, and monetize custom extensions for the Fortmont Control Plane.",
        status: "planned",
        category: "Ecosystem",
        tags: ["Marketplace", "Plugins"],
      },
      {
        id: "q4-2",
        title: "Zero-Trust Mesh Networking",
        description:
          "Peer-to-peer encrypted data tunnel orchestration for microservices running across hybrid cloud environments.",
        status: "planned",
        category: "Security",
        tags: ["Networking", "Zero-Trust"],
      },
    ],
  },
];

export default function RoadmapPage() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedQuarter, setExpandedQuarter] = useState<string[]>(["Q2-2026"]);

  const getStatusBadge = (status: RoadmapItem["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Released
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20">
            <Clock className="w-3 h-3 mr-1" /> In Progress
          </Badge>
        );
      case "planned":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            <Sparkles className="w-3 h-3 mr-1" /> Planned
          </Badge>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8 pt-40">
      <Navigation />
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-mono">
            <MapPin className="w-3 h-3 mr-1 inline" /> Product Roadmap
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Building the Future of Fortmont
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at what we've shipped, what we're actively working on,
            and where we're heading next.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by Status:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["all", "completed", "in-progress", "planned"].map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(type)}
                className="capitalize rounded-full text-xs"
              >
                {type.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/60 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-12">
          {roadmapData.map((quarterData) => {
            const quarterKey = `${quarterData.quarter}-${quarterData.year}`;
            
            // Filter logic
            const filteredItems = quarterData.items.filter((item) =>
              filter === "all" ? true : item.status === filter
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={quarterKey} className="relative group">
                {/* Timeline Marker Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-background transition-colors ${
                    quarterData.status === "Completed"
                      ? "bg-emerald-500 ring-2 ring-emerald-500/20"
                      : quarterData.status === "In Progress"
                      ? "bg-amber-500 ring-2 ring-amber-500/20 animate-pulse"
                      : "bg-muted-foreground/40"
                  }`}
                />

                {/* Left Date Anchor (Desktop Only) */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="font-mono text-sm font-bold block">
                    {quarterData.quarter} {quarterData.year}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    {quarterData.status}
                  </span>
                </div>

                {/* Quarter Card / Accordion Container */}
                <Accordion
                  type="multiple"
                  value={expandedQuarter}
                  onValueChange={setExpandedQuarter}
                  className="w-full"
                >
                  <AccordionItem
                    value={quarterKey}
                    className="border border-border/80 rounded-xl overflow-hidden shadow-sm bg-card transition-all hover:border-foreground/20"
                  >
                    {/* Quarter Accordion Header */}
                    <AccordionTrigger className="px-6 py-4 hover:no-underline flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
                        {/* Mobile Quarter Badge */}
                        <span className="sm:hidden text-xs font-mono font-semibold text-muted-foreground">
                          {quarterData.quarter} {quarterData.year} • {quarterData.status}
                        </span>

                        <h2 className="text-xl font-bold tracking-tight">
                          {quarterData.title}
                        </h2>
                      </div>

                      {/* Progress Bar Indicator */}
                      <div className="flex items-center gap-4 mr-2">
                        <div className="hidden md:flex flex-col items-end gap-1 w-28">
                          <span className="text-xs font-mono text-muted-foreground">
                            {quarterData.completionRate}% Done
                          </span>
                          <Progress
                            value={quarterData.completionRate}
                            className="h-1.5"
                          />
                        </div>
                      </div>
                    </AccordionTrigger>

                    {/* Expandable Features Container */}
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="grid gap-4 mt-2">
                        {filteredItems.map((item) => (
                          <Card
                            key={item.id}
                            className="bg-muted/40 border-border/50 hover:bg-muted/70 transition-colors shadow-none"
                          >
                            <CardHeader className="p-4 pb-2">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <CardTitle className="text-base font-semibold">
                                  {item.title}
                                </CardTitle>
                                {getStatusBadge(item.status)}
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 space-y-3">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                <Badge
                                  variant="secondary"
                                  className="text-[10px] font-mono rounded-md"
                                >
                                  {item.category}
                                </Badge>
                                {item.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-[10px] font-mono rounded-md text-muted-foreground"
                                  >
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}