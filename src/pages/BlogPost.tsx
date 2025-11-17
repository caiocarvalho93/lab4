import { useParams } from 'react-router-dom';
import { posts } from '../lib/post';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);


  if (!post) {
    return <div>Post not  found ova heree</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
