import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import postContext from "../../context/posts/postContext";

const Test2 = () => {
  const context = useContext(postContext);
  const { posts, setPosts } = context;

  const { id } = useParams();

  const post = posts.find((post) => post._id === id);

  return (
    <>
      <div>Test2 post page with id: {id}</div>
      {post && (
        <div>
          <p>{post.title}</p>
          <p>{post.description}</p>
        </div>
      )}
      {!post && <p>Post not found</p>}
    </>
  );
};

export default Test2;
