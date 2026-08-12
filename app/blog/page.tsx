"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, Clock, ArrowLeft, Tag, Calendar, User, LayoutGrid } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface ApiResponse {
  posts: Post[];
}

const MOCK_API_DATA: Post[] = [
  {
    id: "post-101",
    title: "Enterprise Cloud Architecture: 2026 Core Patterns",
    summary: "Key structural shifts in multi-tenant system design, data isolation, and low-latency API gateways.",
    content: `Modern cloud architectures require strict isolation primitives combined with low-latency edge caching. As organizations scale out microservices, managing state across disparate regions without sacrificing consistency becomes the primary challenge.

### Key Architectural Shifts
1. **Edge-Native Route Processing**: Shifting authentication and initial request validation directly to edge nodes reduces origin latency by up to 60%.
2. **Event-Driven Micro-Frontends**: Decoupling UI layers via asynchronous pub/sub channels keeps complex dashboards performant even during heavy state mutation.
3. **Automated Tenant Partitioning**: Dynamic schema routing ensures multi-tenant compliance while maintaining single-database efficiency where allowed.`,
    category: "Architecture",
    author: {
      name: "Elena Rostova",
      role: "Principal Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    publishedAt: "2026-08-10T09:30:00Z",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tags: ["Cloud", "System Design", "DevOps"]
  },
  {
    id: "post-102",
    title: "Optimizing ORM Mappings for High-Throughput Relational Databases",
    summary: "How to avoid N+1 query bottlenecks and model complex relationships cleanly without performance degradation.",
    content: `Object-Relational Mapping (ORM) tools simplify developer workflows, but improper configuration can severely impact database throughput under load.

### Common Pitfalls and Solutions
* **Eager vs. Lazy Loading**: Indiscriminate lazy loading frequently leads to N+1 query spirals. Define explicit fetch strategies based on use-case patterns.
* **Junction Object Overhead**: When handling many-to-many relationships, ensure foreign key indexes are explicitly declared and composite keys are mapped efficiently.
* **Bulk Operation Batching**: Never execute sequential UPDATE or INSERT statements inside application loops. Leverage transactional bulk queries.`,
    category: "Database",
    author: {
      name: "Marcus Vance",
      role: "Lead Data Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    publishedAt: "2026-08-08T14:15:00Z",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    tags: ["Databases", "ORM", "SQL"]
  },
  {
    id: "post-103",
    title: "Designing Accessible Component Libraries in Modern UI Frameworks",
    summary: "A practical guide to building high-contrast, keyboard-navigable interface systems for enterprise apps.",
    content: `Building accessible user interfaces isn't just about color contrast ratios—it requires a holistic approach to DOM focus management, ARIA roles, and screen-reader compatibility.

### Design Principles for Enterprise Systems
Focus state visibility, standard keyboard bindings (Tab, Esc, Space), and logical tab-indexing form the core foundation of usable web software.`,
    category: "UI/UX Design",
    author: {
      name: "Sophia Chen",
      role: "UI Systems Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    publishedAt: "2026-08-05T11:00:00Z",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000",
    tags: ["Accessibility", "Tailwind", "React"]
  }
];

interface NewsFeedProps {
  apiEndpoint?: string;
}

export default function FortmontNewsFeed({ apiEndpoint }: NewsFeedProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      if (apiEndpoint) {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: ApiResponse = await response.json();
        setPosts(data.posts);
      } else {
        await new Promise((r) => setTimeout(r, 400));
        setPosts(MOCK_API_DATA);
      }
    } catch {
      setPosts(MOCK_API_DATA);
    }  finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [apiEndpoint]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        (selectedCategory === "All" || post.category === selectedCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  }, [posts, selectedCategory, searchQuery]);

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500 selection:text-black overflow-hidden">
      {/* Footer-styled Panoramic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial + Base Linear Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(236,168,214,0.18),transparent_42%),radial-gradient(circle_at_78%_28%,rgba(103,232,249,0.14),transparent_40%),linear-gradient(180deg,#0d0d0f_0%,#070708_50%,#000000_100%)]" />

        {/* Subtle Grid Overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />

        {/* Vignette Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      {/* Main Container */}
      <div className="relative mt-15 z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <Navigation />  
        {/* Header Title Section */}
        <header className="text-center mb-16">
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            Building the Future of Fortmont
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Latest news, technical breakdowns, platform status updates, and release notes from the team.
          </p>
        </header>

        {selectedPost ? (
          /* Single Article Detail View */
          <article className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Nav Bar */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to feed
              </button>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 font-mono">
                {selectedPost.category}
              </span>
            </div>

            {/* Article Body Container */}
            <div className="p-8 md:p-12 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                {selectedPost.title}
              </h1>

              {/* Author & Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-white/10 py-5 mb-10 text-sm text-white/60">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <div className="font-medium text-white">{selectedPost.author.name}</div>
                    <div className="text-xs text-white/40">{selectedPost.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedPost.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Full Content */}
              <div className="prose prose-invert max-w-none text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line space-y-6">
                {selectedPost.content}
              </div>

              {/* Tags Footer */}
              <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-3">
                <Tag className="w-4 h-4 text-white/40" />
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-white/5 text-white/70 px-3 py-1 rounded-md border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ) : (
          /* News Feed Grid View */
          <div className="space-y-8">
            {/* Filters and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap border ${
                      selectedCategory === cat
                        ? "bg-white text-black border-white font-semibold"
                        : "bg-black/40 text-white/60 border-white/10 hover:text-white hover:border-white/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-72 bg-black/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            {/* Articles List */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="h-36 bg-white/5 border border-white/10 rounded-2xl animate-pulse"
                  />
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-black/40 border border-dashed border-white/10 rounded-2xl">
                <p className="text-white/40 text-sm">No updates match your query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                        {post.title}
                      </h2>
                      <span className="text-xs text-white/40 font-mono whitespace-nowrap">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                      {post.summary}
                    </p>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                      <div className="flex items-center gap-2.5">
                        <User className="w-4 h-4 text-white/40" />
                        <span className="text-white/80">{post.author.name}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-cyan-400 font-mono">{post.category}</span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                ))}
                 <FooterSection />
              </div>
            )}
            
          </div>
        )}
       
      </div>
    </div>
  );
}