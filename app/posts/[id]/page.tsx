// app/posts/[id]/page.tsx
// app/posts/[id]/page.tsx
"use client";

import { useParams } from 'next/navigation';
import { posts } from '@/app/data/posts';
import Comments from '@/components/ui/Comments';
import ReactMarkdown from 'react-markdown';

const PostPage = () => {
  const { id } = useParams();

  const post = posts.find((post) => post.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
      <Comments />
    </div>
  );
};

export default PostPage;

