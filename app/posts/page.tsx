// app/posts/page.tsx
import Link from 'next/link';
import { posts } from '@/app/data/posts';

const Blog = () => {
  return (
    <div className="container mx-auto p-4 animate__animated animate__fadeIn">
      <h1 className="text-3xl text-center font-bold mb-4 animate__animated animate__fadeInDown">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-8 mt-12 text-center text-white animate__animated animate__fadeInLeft">
            <Link href={`/posts/${post.id}`}
               className="bg-white text-black p-2  font-semibold rounded-md hover:bg-black hover:text-white">{post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
