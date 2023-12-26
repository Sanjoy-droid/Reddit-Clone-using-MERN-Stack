// Home.jsx

import Test from "./Test";

import Navbar from "../Navbar";
import PostSection from "./PostSection";
import PostCards from "./PostsCards";
import Communities from "./Communities";
import Cards from "./Cards";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import postContext from "../../context/posts/postContext";
const Home = () => {
  const context = useContext(postContext);
  const { posts } = context;
  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <Navbar title="reddit" />

        <ul className="main-section m-5 flex justify-between ">
          {posts.slice(0, 3).map((post) => (
            <Link key={post._id} to={`/postitems/${post._id}`}>
              <Cards key={post._id} post={post} />
            </Link>
          ))}
        </ul>

        <div className="flex">
          <div className="">
            <PostSection />
            {/* <Test /> */}
            {posts.slice(3).map((post) => (
              <Link key={post._id} to={`/postitems/posts/${post._id}`}>
                <PostCards key={post._id} post={post} />
              </Link>
            ))}
          </div>
          <Communities />
        </div>
      </div>
    </>
  );
};

export default Home;
