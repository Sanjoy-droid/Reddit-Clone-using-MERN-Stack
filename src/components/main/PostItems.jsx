import Navbar from "../Navbar";
import tag from "../tag.png";
// import Posts from "./Posts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import postContext from "../../context/posts/postContext";
import { useParams } from "react-router-dom";

const BigPosts = (props) => {
  const { post } = props;
  return (
    <>
      <div className="big-posts    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-[28rem]   w-[38rem] mt-10">
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
      </div>
      {/* Small Line  */}
      <div
        className="line-1 
           border-b border-gray-600 mt-2 w-[38rem] "
      ></div>
    </>
  );
};
const SmallPost = (props) => {
  const { post } = props;

  // title truncation
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };
  const postTitle = truncateTitle(post.title, 40); // Truncate after 120 characters
  return (
    <>
      <div className="post-cards    text-gray-300 pl-4    rounded-2xl cursor-pointer hover:bg-gray-800 h-32   w-[38rem] ml-7 mt-2">
        <div className="credit-bar flex pt-3">
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
          <p className="font-bold text-2xl font-white p-1">{postTitle}</p>
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
  const context = useContext(postContext);
  const { posts, setPosts } = context;

  const { id } = useParams();

  const post = posts.find((post) => post._id === id);
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-900 to-gray-600 h-[500vh]">
        <Navbar className="" title="reddit" />
        <div className="News-Posts">
          <ul className="posts-section mx-6 mt-4 w-[61%]">
            <li>
              {" "}
              <Link key={post._id} to={`/postitems/posts/${post._id}`}>
                <BigPosts key={post._id} post={post} />
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              {posts
                .slice()
                .reverse()
                .map((post) => (
                  <Link key={post._id} to={`/postitems/posts/${post._id}`}>
                    <SmallPost key={post._id} post={post} />
                  </Link>
                ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostItems;
