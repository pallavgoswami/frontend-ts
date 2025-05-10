import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postid } = useParams();

  const posdata = [
    { postid: 101, title: "React Basics", author: "Ajay" },
    { postid: 123, title: "React Hook", author: "Sanjay" },
    { postid: 345, title: "React Routing", author: "Neha" },
  ];

  const post = posdata.find((p) => p.postid.toString() === postid);

  if (!post) return <h2>Post Not Found</h2>;

  return (
    <div>
      <p>Showing Post Details: {post.postid}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
}
