export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "This is the content of my first blog post. Welcome to my blog!"
  },
  {
    id: 2,
    slug: "learning-react-router",
    title: "Learning React Router",
    content: "React Router makes navigation easy. It's a powerful tool for building SPAs."
  },
  {
    id: 3,
    slug: "typescript-tips",
    title: "TypeScript Tips",
    content: "TypeScript adds type safety to JavaScript. Here are some useful tips..."
  }
];
//created 3 fake blogs