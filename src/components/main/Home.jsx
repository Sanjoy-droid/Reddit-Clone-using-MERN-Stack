// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
// import Cards from "./Cards";
import PostSection from "./PostSection";
import PostCards from "./PostsCards";
import Communities from "./Communities";
import Cards from "./Cards";
// import PostItems from "./components/main/PostItems";

import { Link } from "react-router-dom";
// import PostItems from "./PostItems";
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <Navbar title="reddit" />
        {/* <Test /> */}
        {/* <Modal /> */}
        {/* components */}

        <ul className="main-section m-5 flex justify-between ">
          <Link to="/postitems">
            {" "}
            <Cards />
          </Link>
          <Link to="/postitems">
            {" "}
            <Cards />
          </Link>
          <Link to="/postitems">
            {" "}
            <Cards />
          </Link>
        </ul>

        <div className="flex">
          <div>
            <PostSection />
            <Link to="/postitems/posts">
              <PostCards />
            </Link>
            <Link to="/postitems/posts">
              <PostCards />
            </Link>
            <Link to="/postitems/posts">
              <PostCards />
            </Link>
          </div>
          <Communities />
        </div>
      </div>
    </>
  );
};

export default Home;
