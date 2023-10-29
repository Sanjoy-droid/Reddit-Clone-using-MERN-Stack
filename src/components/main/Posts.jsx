import React from "react";
import tag from "../tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faComment,
  faMessage,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Posts = () => {
  return (
    <>
      {" "}
      <div
        className="
      
bg-gradient-to-r from-gray-900 to-gray-600 h-screen
      "
      >
        <div className="posts-section mx-6 mt-4 w-[61%] ">
          <div className="post-cards   bg-gray-800 text-gray-300 pl-4  h-[40rem] w-[38rem] rounded-2xl cursor-pointer hover:bg-[#262d35] ">
            <div className="credit-bar flex pt-8 ">
              <img
                src={tag}
                alt=""
                className="w-6 h-6 rounded-full cursor-pointer"
              />
              <p className="text-sm ml-2 cursor-pointer">r/health</p>
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
              <p className="font-bold text-2xl font-white">Title of the post</p>
            </div>
            <div className="image h-[31rem] w-[95%] rounded-2xl bg-orange-950"></div>
            <div className="buttons mt-2 flex itmes-center">
              {/* votes section */}

              <div className="votes bg-gray-600 w-20 h-8 flex justify-evenly items-center rounded-2xl ">
                <FontAwesomeIcon icon={faUpLong} />
                <p className="text-sm"> 351</p>
                <FontAwesomeIcon icon={faDownLong} />
              </div>

              {/* comment section */}
              <div className="comment h-8 w-16 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center ">
                <FontAwesomeIcon icon={faMessage} />
                <p className="text-sm">22</p>
              </div>
              <div className="share h-8 w-24 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p className="text-sm">Share</p>
              </div>
            </div>
          </div>
          {/* Small Line  */}

          <div
            className="line-1 
           border-b mt-2 border-gray-500 mx-2 "
          ></div>
        </div>
      </div>
    </>
  );
};

export default Posts;
