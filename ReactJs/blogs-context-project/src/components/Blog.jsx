import React, { useContext } from "react";
import { AppContext } from "../Context/ContextApiImplentation";

export const Blog = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {posts.length === 0 ? (
        <div>No Blog Found</div>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h1 className="text-3xl">{post.title}</h1>
              <p>
                By <span className="italic">{post.author}</span> on{" "}
                <span>{post.category}</span>
              </p>
              <p>{post.content}</p>

              {post.tags.map((tag, index) => (
                <p key={index}>#{tag}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
