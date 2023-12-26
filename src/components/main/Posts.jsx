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
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import postContext from "../../context/posts/postContext";

const Post = (props) => {
  const { post } = props;

  const upVoteCount = parseInt(post.upVote);
  const downVoteCount = parseInt(post.downVote);
  const commentCount = parseInt(post.comment);

  return (
    <>
      <div className="big-posts    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-[31rem]   w-[38rem] mt-1">
        <div className="credit-bar flex pt-4 ">
          <img
            src={tag}
            alt=""
            className="w-6 h-6 rounded-full cursor-pointer"
          />
          <p className="text-sm ml-2 cursor-pointer hover:text-blue-300">
            r/{post.tag}
          </p>
          <p className="text-gray-400 text-sm ml-2 cursor-pointer ">
            . 5 hr. ago
          </p>
        </div>

        <div className="title">
          {post && post.title && (
            <p className="font-bold text-2xl font-white p-1">{post.title}</p>
          )}
        </div>

        <div className="image h-[19rem] w-[97%] rounded-2xl bg-gray-700 border-2 border-gray-500 my-4 ">
          {post && post.description && (
            <p className="font-medium text-lg font-white p-4">
              {post.description}
            </p>
          )}
        </div>

        {/* interactions  */}

        <div className="interactons mt-4 flex itmes-center ml-1">
          {/* votes section */}

          <div className="votes bg-gray-600 w-20 h-8 flex justify-evenly items-center rounded-2xl ">
            <FontAwesomeIcon className="hover:text-red-700" icon={faUpLong} />

            <p className="text-sm">{upVoteCount}</p>
            <FontAwesomeIcon
              className="hover:text-violet-700"
              icon={faDownLong}
            />
            <p className="text-sm">{downVoteCount}</p>
          </div>

          {/* comment section */}

          <div className="comment h-8 w-16 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center hover:bg-gray-500">
            <FontAwesomeIcon icon={faMessage} />
            <p className="text-sm">{commentCount}</p>
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
           border-b border-gray-600 mt-2 w-[38rem] "
      ></div>
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
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const context = useContext(postContext);
  const { posts, setPosts } = context;

  const { id } = useParams();

  const post = posts.find((post) => post._id === id);
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <Navbar title="reddit" />

        <div className="p-8">
          <Post post={post} />

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
