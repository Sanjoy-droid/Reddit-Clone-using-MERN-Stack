import Tag from "../tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import postContext from "../../context/posts/postContext";

// Utility function for handling upvote
const handleUpvote = async (event, postId, upVoteCount, getPost) => {
  event.preventDefault();
  try {
    const newUpvoteCount = await upVoteCount(postId);
    getPost();
    return newUpvoteCount;
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error as needed
  }
};
// Utility function for handling downvote
const handleDownvote = async (event, postId, downVoteCount, getPost) => {
  event.preventDefault();
  try {
    const newDownvoteCount = await downVoteCount(postId);
    getPost();
    return newDownvoteCount;
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error as needed
  }
};

const Post = (props) => {
  const { post } = props;
  const context = useContext(postContext);
  const { getPost, upVoteCount, downVoteCount, deletePost } = context;

  let navigate = useNavigate();
  // Utility for Delete Post
  const handleDelete = async (
    event,
    postId,
    postUserId,
    getPost,
    deletePost
  ) => {
    event.preventDefault();
    if (!postId) {
      console.error("Post ID is missing!");
      return;
    }
    await deletePost(postId, postUserId);
    // props.showAlert("Post Deleted", "success");
    navigate("/");
  };
  return (
    <>
      <div className="big-posts    text-gray-300 pl-4    rounded-2xl  bg-gray-800 h-[31rem]   w-[38rem] m-6">
        <div className="credit-bar flex pt-4 ">
          <img
            src={Tag}
            alt=""
            className="w-6 h-6 rounded-full cursor-pointer"
          />
          <p className="text-sm ml-2 cursor-pointer hover:text-blue-300">
            {post && post.tag && <span>r/{post.tag}</span>}
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

        <div className="interactons mt-4 flex itmes-center ml-1 ">
          {/* votes section */}

          <div className="votes bg-gray-600 w-24 h-8 flex justify-evenly items-center rounded-2xl  ">
            <FontAwesomeIcon
              className=" hover:text-red-700"
              onClick={(e) => handleUpvote(e, post._id, upVoteCount, getPost)}
              icon={faUpLong}
            />
            {post && post.upvote && <p className="text-sm">{post.upvote}</p>}

            <FontAwesomeIcon
              className="hover:text-violet-700"
              onClick={(e) =>
                handleDownvote(e, post._id, downVoteCount, getPost)
              }
              icon={faDownLong}
            />
            {post && post.downvote && (
              <p className="text-sm">{post.downvote}</p>
            )}
          </div>

          {/* comment section */}

          <div className="comment h-8 w-16 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center hover:bg-gray-500">
            <FontAwesomeIcon icon={faMessage} />
            <p className="text-sm">58</p>
          </div>

          {/* share section */}

          <div className="share h-8 w-24 ml-4 bg-gray-600 rounded-2xl flex justify-evenly items-center hover:bg-gray-500">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p className="text-sm">Share</p>
          </div>
          {/* Delete Section */}
          <div
            className="delete h-8 w-10 bg-gray-500  rounded-md flex justify-evenly items-center hover:bg-red-700 ml-56"
            onClick={(e) =>
              handleDelete(e, post._id, post.user, getPost, deletePost)
            }
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
      {/* Small Line  */}
      <div
        className="line-1 
           border-b border-gray-600 ml-6 w-[38rem] "
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
            src={Tag}
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
  const context = useContext(postContext);
  const { posts, getPost } = context;
  const { id } = useParams();
  const post = posts.find((p) => p._id === id);
  useEffect(() => {
    window.scroll(0, 0);
    if (posts.length === 0) {
      getPost();
    }
  }, [id]);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <Navbar title="reddit" />
        <Post post={post} />
        <div className="p-8">
          <AddComment />
          <Comment />
        </div>
      </div>
    </>
  );
};

export default Posts;
