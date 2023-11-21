// import { Link } from "react-router-dom";

import tag from "../tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";

const Post = () => {
  return (
    <>
      <div className="posts    text-gray-300 pl-4 rounded-2xl cursor-pointer  h-[40rem]   w-[38rem] bg-gray-800 ">
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
          <button className="join ml-[21rem] bg-blue-800 text-sm font-semibold h-6 w-12 rounded-full hover:bg-blue-600">
            Join
          </button>
          <button
            className="three-dots  
        cursor-pointer ml-2 mt-[-0.3rem] h-10 w-10 flex justify-center items-center   hover:bg-gray-700   rounded-full   text-2xl   text-white "
          >
            <p className="pb-5">...</p>
          </button>
        </div>
        <div className="title">
          <p className="font-bold text-2xl font-white p-1">Title of the post</p>
        </div>
        <div className="image h-[31rem] w-[97%] rounded-2xl bg-orange-950 "></div>

        <div className="interactons mt-2 flex itmes-center ml-1">
          {/* votes section */}

          <div className="votes bg-gray-600 w-20 h-8 flex justify-evenly items-center rounded-2xl ">
            <FontAwesomeIcon className="hover:text-red-700" icon={faUpLong} />
            <p className="text-sm"> 351</p>
            <FontAwesomeIcon
              className="hover:text-violet-700"
              icon={faDownLong}
            />
          </div>

          {/* comment section */}

          <div className="comment h-8 w-16 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center hover:bg-gray-500">
            <FontAwesomeIcon icon={faMessage} />
            <p className="text-sm">22</p>
          </div>

          {/* share section */}

          <div className="share h-8 w-24 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center hover:bg-gray-500">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p className="text-sm">Share</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Add Comment Button
const AddComment = () => {
  return (
    <>
      <div className="add-comments mt-12">
        <button className="h-[2.6rem] w-[10rem]  text-white border  font-medium flex justify-evenly items-center text-sm rounded-full cursor-pointer hover:border-zinc-200 hover:border-2">
          <FontAwesomeIcon icon={faPlus} size="xl" />
          Add a Comment
        </button>
      </div>
    </>
  );
};

const Comment = () => {
  return (
    <>
      <div className="comments mt-8 w-[38rem]">
        <div className="flex ">
          <img
            src={tag}
            alt=""
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          <div className="flex-col  ml-3 mt-2">
            <div className="flex">
              <p className="text-sm  cursor-pointer text-gray-300">r/health</p>
              <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
                . 5 hr. ago
              </p>
            </div>
            <p className="comment-content mt-2 text-gray-300">
              The puppy was playing and was in a playful mood. The puppy didn’t
              even have its mouth open to go for a bite. What’s with everyone in
              the comments saying the puppy was trying to bite ?
            </p>
            <div className="votes flex h-12 w-20  justify-between items-center rounded-2xl text-white">
              <FontAwesomeIcon
                className=" hover:text-red-700"
                icon={faUpLong}
              />
              <p className="text-sm"> 351</p>
              <FontAwesomeIcon
                className="hover:text-violet-700"
                icon={faDownLong}
              />
              <p className="text-sm"> 29</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Posts = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <Navbar />

        <div className="p-8">
          <Post />

          {/* Add Comments */}
          <AddComment />

          {/* Comments */}
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
};

export default Posts;
