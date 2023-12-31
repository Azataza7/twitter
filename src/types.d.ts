export interface Post {
  id: string
  title: string;
  description: string;
  createdAt: string;
}

export interface PostList {
  posts: Post[];
}

export interface NewPost {
  title: string;
  description: string;
  createdAt: string;
}