import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const posdata = [
    { postid: 101, title: "React Basics", author: "Ajay" },
    { postid: 123, title: "React Hook", author: "Sanjay" },
    { postid: 345, title: "React Routing", author: "Neha" },
  ];

  return (
    <div>
      <p>This is Home Page</p>
      <ul>
        {posdata.map((post) => (
          <li key={post.postid}>
            <Link to={`/post/${post.postid}`}>
              <p>{post.title}</p>
              <p>{post.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
