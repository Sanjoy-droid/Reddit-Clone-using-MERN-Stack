import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "./postContext";

const PostState = (props) => {
  const host = import.meta.env.VITE_URL;
  const postInitials = [];

  const [posts, setPosts] = useState(postInitials);

  const navigate = useNavigate();

  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  const getPost = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/api/post/fetchallposts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      // Handle the error as needed.
    }
  };

  // Add a Post
  const addPost = async (title, description, tag) => {
    try {
      const authToken = getAuthToken();
      if (!authToken) {
        navigate("/login");
        return;
      }

      const response = await fetch(`${host}/api/post/addpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add a post: ${errorMessage}`);
      }

      const newPost = await response.json();
      setPosts(posts.concat(newPost));
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getUserIdFromToken = () => {
    const authToken = getAuthToken();
    if (!authToken) {
      return null;
    }

    try {
      const tokenData = JSON.parse(atob(authToken.split(".")[1]));

      const userId = tokenData.user?.id;
      return userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  // Delete Post Api Call
  const deletePost = async (postId, postUserId) => {
    try {
      const authToken = getAuthToken();
      if (!authToken) {
        navigate("/login");
        return;
      }
      // Check if the authenticated user is the owner of the post
      const currentUserId = getUserIdFromToken();
      if (currentUserId !== postUserId) {
        props.showAlert("You can only delete your own posts", "error");
        return;
      }

      // Make an API call to delete the post
      const response = await fetch(`${host}/api/post/deletepost/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        props.showAlert("Post Deleted", "success");
        return true;
      } else {
        const errorText = await response.text(); // Get the error message as text
        console.error("Error deleting post:", errorText || "Unknown error");
        return false;
      }
    } catch (error) {
      console.error("API call error:", error);
      return false;
    }
  };

  // Update a Post
  const editPost = async (id, title, description, tag) => {
    try {
      const authToken = getAuthToken();
      if (!authToken) {
        navigate("/login");
        return false;
      }
      // API Call
      const response = await fetch(`${host}/api/post/updatepost/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (response.ok) {
        // Logic to edit the post
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === id ? { ...post, title, description, tag } : post
          )
        );
        return true;
      } else {
        const errorText = await response.text(); // Get the error message as text
        console.error("Error editing post:", errorText || "Unknown error");
        return false;
      }
    } catch (error) {
      console.error("API call error:", error);
      return false;
    }
  };

  // API Call for UpVote increment
  const upVoteCount = async (id) => {
    const authToken = getAuthToken();
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await fetch(`${host}/api/post/upvote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to increment upvote count");
      }

      const data = await response.json();
      return data.upvote;
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // API Call for Down Vote increment

  const downVoteCount = async (id) => {
    const authToken = getAuthToken();
    if (!authToken) {
      navigate("/login");
    }
    try {
      const response = await fetch(`${host}/api/post/downvote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to increment upvote count");
      }

      const data = await response.json();
      return data.downvote;
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getPost,
        addPost,
        deletePost,
        editPost,
        upVoteCount,
        downVoteCount,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
