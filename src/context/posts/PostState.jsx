import { useState } from "react";
import PostContext from "./postContext";
const PostState = (props) => {
  const host = "http://localhost:5000";
  const postInitials = [
    {
      _id: "6564a2be8060563a68e56d28",
      user: "655f6488d242e06ebc52cd35",
      title: "5 Productivity Hacks to Conquer Your Day",
      description: "Unlock hidden productivity with these unconventional tips.",
      tag: "productivity, time management, life hacks",
      date: "2023-11-27T14:07:58.407Z",
      __v: 0,
    },
    {
      _id: "6564a2bf8060563a68e56d29",
      user: "655f6488d242e06ebc52cd35",
      title: "The Hidden Dangers of 'Perfect' Posture",
      description:
        "Is perfect posture overrated? Explore surprising truths about body mechanics.",
      tag: "health, posture, ergonomics",
      date: "2023-11-28T11:23:05.123Z",
      __v: 0,
    },
    {
      _id: "6564a2c08060563a68e56d2a",
      user: "655f6488d242e06ebc52cd35",
      title: "Coding for Beginners: The Ultimate Guide",
      description:
        "Unlock your coding potential with this beginner-friendly roadmap.",
      tag: "coding, programming, software development",
      date: "2023-11-29T08:45:12.876Z",
      __v: 0,
    },
    {
      _id: "6564a2c18060563a68e56d2b",
      user: "655f6488d242e06ebc52cd35",
      title: "5 Breathtaking Destinations Off the Beaten Path",
      description:
        "Escape the crowds and discover hidden gems around the globe.",
      tag: "travel, adventure, hidden destinations",
      date: "2023-11-30T16:32:45.019Z",
      __v: 0,
    },
    {
      _id: "6564a2c28060563a68e56d2c",
      user: "655f6488d242e06ebc52cd35",
      title: "How to Craft a Resume That Gets Noticed",
      description:
        "Land your dream job with a resume that stands out from the competition.",
      tag: "career, resume, job search",
      date: "2023-12-01T13:15:38.954Z",
      __v: 0,
    },
    {
      _id: "6564a2c38060563a68e56d2d",
      user: "655f6488d242e06ebc52cd35",
      title: "The Psychology of Color: How Colors Influence Your Mood",
      description:
        "Discover the hidden power of colors and their impact on your emotions.",
      tag: "psychology, color, emotions",
      date: "2023-12-02T10:02:25.642Z",
      __v: 0,
    },
  ];

  const [posts, setPosts] = useState(postInitials);

  // Fetch all Posts
  // const getPost = async () => {
  //   //  API Call
  //   const response = await fetch(`${host}/api/auth/login`, {
  //     method: "POST",
  //     // mode: "cors", // no-cors, *cors, same-origin
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();
  //   console.log(json);
  // };

  // Add a Post
  // const addPost = async (title, description, tag) => {
  //   // Todo : API Call
  //   const response = await fetch(`${host}/api/post/addpost`, {
  //     method: "POST",
  //     // mode: "cors", // no-cors, *cors, same-origin
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, description, tag }),
  //   });
  //   // const json = response.json();
  //   console.log("adding new note");
  // };
  // setPosts(posts.push(postInitials));

  // Delete a Post

  const deletePost = () => {};
  // Todo : API Call

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

  return (
    <PostContext.Provider value={{ posts, deletePost, editPost }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
