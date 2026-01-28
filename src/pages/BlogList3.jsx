import { Link } from "react-router-dom";

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

function BlogList3() {
  return (
    <div>
      <h2>📚 Blog App 3</h2>

      {blogPosts3.map((post) => (
        <h3 key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
      ))}
    </div>
  );
}

export default BlogList3;