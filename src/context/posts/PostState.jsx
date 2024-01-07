import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PostContext from "./postContext";

const PostState = (props) => {
  const host = import.meta.env.VITE_URL;
  const postInitials = [];

  const [posts, setPosts] = useState(postInitials);

  const navigate = useNavigate();

  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  // Fetch all Posts
  const getPost = async () => {
    //  API Call
    const response = await fetch(`${host}/api/post/fetchallposts`, {
      method: "GET",
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPosts(json);
  };

  // Add a Post
  const addPost = async (title, description, tag) => {
    try {
      const authToken = getAuthToken();
      console.log(authToken);
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
      // setPosts((prevPosts) => [...prevPosts, newPost]); // Update state correctly
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error as needed
    }
  };

  // Delete a Post

  const getUserIdFromToken = () => {
    const authToken = getAuthToken();
    if (!authToken) {
      return null;
    }

    try {
      // Assuming your token is a JWT and it contains a 'sub' claim for the user ID
      const tokenData = JSON.parse(atob(authToken.split(".")[1]));
      console.log("Decoded token data:", tokenData);

      const userId = tokenData.user?.id;
      console.log("User ID from token:", userId);
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
      console.log("Current user ID:", currentUserId);
      console.log("Post user ID:", postUserId);

      if (currentUserId !== postUserId) {
        props.showAlert("You can only delete your own posts", "error");
        return;
      }

      // Make an API call to delete the post
      const response = await fetch(`${host}/api/post/deletepost/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken, // Assuming you store the authentication token in local storage
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Post deleted successfully:", data.post);
        // Implement any additional logic or UI updates after successful deletion
      } else {
        const errorText = await response.text(); // Get the error message as text
        console.error("Error deleting post:", errorText || "Unknown error");
        // Implement error handling or display error messages to the user
      }
    } catch (error) {
      console.error("API call error:", error);
      // Implement error handling for unexpected errors
    }
  };

  // Edit a Post
  const editPost = async (id, title, description, tag) => {
    // Todo : API Call
    //   const response = await fetch(url, {
    //   method: "POST",
    //   // mode: "cors", // no-cors, *cors, same-origin
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // return response.json();
  };

  // Retrieve the auth token from local storage

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
      // console.log("Upvote count:", data.upvote);
      return data.upvote;
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error as needed
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
      // console.log("Upvote count:", data.upvote);
      return data.downvote;
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error as needed
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
