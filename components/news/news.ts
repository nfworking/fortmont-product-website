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