import React, { useState, useEffect, useMemo } from 'react';
import { Search, Clock, ArrowLeft, Tag, Calendar, User, RefreshCw, AlertCircle } from 'lucide-react';
import { Post, ApiResponse } from './news';

// Placeholder fallback data matching API structure
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
* **Bulk Operation Batching**: Never execute sequential \`UPDATE\` or \`INSERT\` statements inside application loops. Leverage transactional bulk queries.`,
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
Focus state visibility, standard keyboard bindings (\`Tab\`, \`Esc\`, \`Space\`), and logical tab-indexing form the core foundation of usable web software.`,
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

export const NewsFeed: React.FC<NewsFeedProps> = ({ apiEndpoint }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Fetch logic with fallback to local mock data
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      if (apiEndpoint) {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data: ApiResponse = await response.json();
        setPosts(data.posts);
      } else {
        // Simulate network latency for local dev
        await new Promise((resolve) => setTimeout(resolve, 400));
        setPosts(MOCK_API_DATA);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news posts.');
      setPosts(MOCK_API_DATA); // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [apiEndpoint]);

  // Derive categories from post list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)));
    return ['All', ...cats];
  }, [posts]);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Format dates consistently
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950">
              F
            </div>
            <span className="text-xl font-bold tracking-wider text-slate-100 uppercase">
              Fortmont <span className="text-cyan-400 font-normal">Feed</span>
            </span>
          </div>

          <button
            onClick={fetchPosts}
            disabled={loading}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50"
            title="Refresh feed"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Full Post View Modal / Screen */}
        {selectedPost ? (
          <article className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Navigation back bar */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to feed
              </button>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {selectedPost.category}
              </span>
            </div>

            {/* Post Header Image */}
            <div className="relative h-72 md:h-96 w-full overflow-hidden bg-slate-950">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            {/* Post Metadata & Content */}
            <div className="p-6 md:p-10 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-6">
                {selectedPost.title}
              </h1>

              {/* Author Info Bar */}
              <div className="flex items-center justify-between border-y border-slate-800 py-4 mb-8 text-sm">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full border border-slate-700"
                  />
                  <div>
                    <div className="font-semibold text-slate-200">{selectedPost.author.name}</div>
                    <div className="text-slate-400 text-xs">{selectedPost.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-400 text-xs">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {formatDate(selectedPost.publishedAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="prose prose-invert max-w-none text-slate-300 space-y-4 whitespace-pre-line leading-relaxed">
                {selectedPost.content}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center space-x-2">
                <Tag className="w-4 h-4 text-slate-500" />
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ) : (
          /* News Feed Overview List */
          <div className="space-y-6">
            {/* Controls: Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search posts, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap border ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center text-amber-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Notice: {error} Displaying cached data.</span>
              </div>
            )}

            {/* Feed Cards Grid */}
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-slate-900 border border-slate-800 rounded-xl h-80 animate-pulse p-4 flex flex-col justify-between"
                  >
                    <div className="h-40 bg-slate-800 rounded-md mb-4" />
                    <div className="h-4 bg-slate-800 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-slate-800 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-400 text-sm">No posts found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-cyan-400 text-xs px-2.5 py-1 rounded border border-slate-800 font-medium">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-5 h-5 rounded-full"
                          />
                          <span className="text-slate-300">{post.author.name}</span>
                        </div>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};