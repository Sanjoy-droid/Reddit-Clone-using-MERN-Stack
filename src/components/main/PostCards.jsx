import tag from "../tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import AddPost from "./AddPost";

const PostCard = (props) => {
  const { post } = props;
  // console.log(post.description);

  // Title truncation
  const truncateTitle = (title, maxLength) => {
    if (title && title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  const postTitle = truncateTitle(post.title, 45); // Truncate after 45 characters

  // upVote Clicked
  const upVote = () => {
    console.log("upVote clicked");
  };
  return (
    <>
      <div className="posts    text-gray-300 pl-4 rounded-2xl cursor-pointer  h-[28rem]   w-[38.5rem] hover:bg-gray-800  ">
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
          <p className="font-bold text-2xl text-white p-1">{postTitle}</p>
        </div>
        <div className="desc h-[18rem] w-[97%] rounded-2xl bg-indigo-900 p-4 mt-2 ">
          {post.description}
        </div>

        <div className="interactons mt-2 flex itmes-center ml-1">
          {/* votes section */}

          <div className="votes bg-gray-600 w-20 h-8 flex justify-evenly items-center rounded-2xl ">
            <FontAwesomeIcon
              className="hover:text-red-700"
              icon={faUpLong}
              onClick={upVote}
            />
            <p className="text-sm"> {post.upvote}</p>
            <FontAwesomeIcon
              className="hover:text-violet-700"
              icon={faDownLong}
            />
            <p className="text-sm"> {post.downvote}</p>
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

const PostCards = (props) => {
  const { post } = props;

  // console.log(post.title);
  return (
    <>
      <ul className="PostCards-section mx-6 mt-6 w-fit inline-block ">
        <li>
          {" "}
          <PostCard post={post} />
          {/* <AddPost /> */}
          <div className="line mx-2 mt-2 w-[37rem] border-b border-gray-500"></div>
          {/*  */}
        </li>
      </ul>
    </>
  );
};

export default PostCards;
