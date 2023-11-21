import tag from "../tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <>
      <div className="post-cards    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-[40rem]   w-[38rem] ">
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

      {/* Small Line  */}

      <div
        className="line-1 
           border-b my-1 border-gray-500 mx-5 w-[35rem] "
      ></div>
    </>
  );
};

const PostCards = () => {
  //w-[38rem]
  // ]
  return (
    <>
      <ul className="PostCards-section mx-6 mt-4 w-[61%] ">
        <li>
          <PostCard />
        </li>
      </ul>
    </>
  );
};

export default PostCards;
