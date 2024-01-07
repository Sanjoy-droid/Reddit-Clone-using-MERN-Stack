import React, { useContext, useState } from "react";
import postContext from "../../context/posts/postContext";
import { useNavigate } from "react-router-dom";

const AddPost = (props) => {
  let navigate = useNavigate();

  const context = useContext(postContext);
  const { addPost, getPost } = context;
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = async (e) => {
    console.log("before prevent default");
    e.preventDefault();
    try {
      console.log("Before addPost");
      await addPost(post.title, post.description, post.tag);
      console.log("After addPost");
      props.showAlert("Post Added Successfully", "success");
      navigate("/");
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-screen flex justify-center py-4">
      <div className="w-[50rem]  bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-white">Create a Post</h2>
        <form className="text-white" onSubmit={handleClick}>
          {/* Title */}
          <div className="mt-4">
            <label htmlFor="title" className="block text-lg font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-3 w-full border bg-gray-700 rounded-xl focus:outline-none focus:border-orange-700 "
              placeholder="Enter your title"
              onChange={onChange}
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <label htmlFor="description" className="block text-lg font-medium ">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-3 w-full border rounded-xl bg-gray-700 focus:outline-none focus:border-orange-700 resize-none"
              placeholder="Enter your description"
              rows="8"
              onChange={onChange}
            />
          </div>

          {/* Tag */}
          <div className="mt-2">
            <label
              htmlFor="tag"
              className="block text-lg font-medium text-white"
            >
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="mt-1 p-3 w-full border rounded-xl bg-gray-700 focus:outline-none focus:border-orange-700"
              placeholder="Enter your tag"
              onChange={onChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-900 text-white font-semibold py-2 px-4 rounded-xl mt-4 hover:bg-orange-700 "
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
