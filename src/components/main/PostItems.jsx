import Navbar from "../Navbar";
import tag from "../tag.png";
// import Posts from "./Posts";
// import { Link } from "react-router-dom";

const BigPosts = () => {
  return (
    <>
      <div className="post-cards    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-[26rem]   w-[38rem] mt-10">
        <div className="credit-bar flex pt-4 ">
          <img
            src={tag}
            alt=""
            className="w-6 h-6 rounded-full cursor-pointer"
          />
          <p className="text-sm ml-2 cursor-pointer hover:text-blue-300">
            r/health
          </p>
          <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
            . 5 hr. ago
          </p>
        </div>
        <div className="title">
          <p className="font-bold text-2xl font-white p-1">Title of the post</p>
        </div>
        <div className="image h-[19rem] w-[97%] rounded-2xl bg-orange-950 "></div>
      </div>
      {/* Small Line  */}
      <div
        className="line-1 
           border-b border-gray-600 mt-2 w-[38rem] "
      ></div>
    </>
  );
};
const SmallPost = () => {
  return (
    <>
      <div className="post-cards    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-[7rem]   w-[38rem] ml-7 mt-2">
        <div className="credit-bar flex pt-3">
          <img
            src={tag}
            alt=""
            className="w-6 h-6 rounded-full cursor-pointer"
          />
          <p className="text-sm ml-2 cursor-pointer hover:text-blue-300">
            r/health
          </p>
          <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
            . 5 hr. ago
          </p>
        </div>
        <div className="title">
          <p className="font-bold text-2xl font-white p-1">Title of the post</p>
        </div>

        <div className="flex mt-3">
          <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
            107 votes
          </p>
          <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
            . 12 comments
          </p>
        </div>
      </div>
      {/* Small Line  */}
      <div
        className="line-1 
           border-b border-gray-600 mt-2 mx-7 w-[38rem] "
      ></div>
    </>
  );
};

const PostItems = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-900 to-gray-600 h-[500vh]">
        <Navbar className="" title="reddit" />
        <div className="News-Posts">
          <ul className="posts-section mx-6 mt-4 w-[61%]">
            <li>
              {" "}
              <BigPosts />{" "}
            </li>
          </ul>

          <ul>
            <li>
              <SmallPost />
              <SmallPost />
              <SmallPost />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostItems;
