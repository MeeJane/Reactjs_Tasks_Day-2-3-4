import { useParams, Link } from "react-router-dom";

const blogPosts3 = [
  {
    id: 1,
    title: "Learning React",
    content: "React makes building UI simple and powerful."
  },
  {
    id: 2,
    title: "React Router",
    content: "React Router helps create multi-page navigation in React apps."
  },
  {
    id: 3,
    title: "Vite with React",
    content: "Vite gives super-fast development for React projects."
  }
];

function Post3() {
  const { id } = useParams();

  const post = blogPosts3.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <Link to="/">⬅ Back to Blog</Link>
    </div>
  );
}

export default Post3;
