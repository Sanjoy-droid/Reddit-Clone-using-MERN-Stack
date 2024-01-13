import React, { useContext, useState, useEffect } from "react";
import postContext from "../../context/posts/postContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const EditPostModal = (props) => {
  const { toggleModal, post, showAlert, modal } = props;

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [modal]);

  const handleToggle = () => {
    toggleModal();
  };

  const context = useContext(postContext);
  const { editPost } = context;

  const [editedPost, setEditedPost] = useState({
    id: post._id,
    title: post.title,
    description: post.description,
    tag: post.tag,
  });

  const onChange = (e) => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const success = await editPost(
        editedPost.id,
        editedPost.title,
        editedPost.description,
        editedPost.tag
      );
      if (success) {
        showAlert("Post Edited Successfully", "success");
        toggleModal();
      } else {
        toggleModal();
        showAlert("You Can not Edit Other's Post!!!", "error");
      }
    } catch (error) {
      console.error("Error editing post:", error.message);
      showAlert("Failed to edit post", "error");
    }
  };

  return (
    <>
      <div
        className="modal-overlay fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleToggle}
      >
        <div
          className=" modal-content  h-screen flex justify-center py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[50rem] h-[36rem]  bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="flex">
              <h2 className="text-2xl font-bold text-white w-[95%]">
                Edit Post
              </h2>
              <button
                className="modal-close hover:bg-gray-600     bg-gray-700 rounded-full w-8 h-8  flex justify-center items-center  cursor-pointer"
                onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </button>
            </div>
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
                  value={editedPost.title}
                  className="mt-1 p-3 w-full border bg-gray-700 rounded-xl focus:outline-none focus:border-orange-700 "
                  placeholder="Enter your title"
                  onChange={onChange}
                />
              </div>

              {/* Description */}
              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium "
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={editedPost.description}
                  className="mt-1 p-3 w-full border rounded-xl bg-gray-700 focus:outline-none focus:border-orange-700 resize-none"
                  placeholder="Enter your description"
                  rows="8"
                  onChange={onChange}
                />
              </div>

              {/* Tag */}
              <div className="mt-1">
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
                  value={editedPost.tag}
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
      </div>
    </>
  );
};
export default EditPostModal;
