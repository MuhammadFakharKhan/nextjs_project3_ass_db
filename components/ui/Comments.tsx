// components/Comments.tsx
import { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      <input 
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full mb-2 text-black"
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment} className="bg-white font-semibold text-black hover:bg-black hover:text-white py-2 px-4 rounded-lg">
        Post
      </button>
      <ul className="mt-4">
        {comments.map((c, index) => (
          <li key={index} className="border-b py-2">{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
