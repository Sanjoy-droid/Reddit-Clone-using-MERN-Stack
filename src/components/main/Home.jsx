// Home.jsx
import Navbar from "../Navbar";
import Communities from "./Communities";
import Cards from "./Cards";
import PostCards from "./PostCards";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import postContext from "../../context/posts/postContext";
import CreatePost from "./CreatePost";

const Home = (props) => {
  const { showAlert } = props;

  const context = useContext(postContext);
  const { posts, getPost } = context;

  useEffect(() => {
    if (posts.length === 0) {
      getPost();
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[2500vh]">
      <Navbar title="reddit" showAlert={showAlert} />
      <ul className="main-section m-5 flex justify-between">
        {posts.slice(0, 3).map((post, i) => (
          <Link key={i} to={`/postitems/${post._id}`}>
            <Cards post={post} />
          </Link>
        ))}
      </ul>

      <div className="flex">
        <div className="flex-col w-[65%]">
          <CreatePost />
          {posts.slice(3).map((post, i) => (
            <Link key={i} to={`/postitems/posts/${post._id}`}>
              <PostCards key={post._id} post={post} />
            </Link>
          ))}
        </div>
        <Communities />
      </div>
    </div>
  );
};

export default Home;
