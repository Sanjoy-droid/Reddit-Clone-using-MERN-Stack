import "./App.css";
import { Navbar } from "./components/Navbar";
import Cards from "./components/main/Cards";
import PostSection from "./components/main/PostSection";
import Posts from "./components/main/Posts";
import Communities from "./components/main/Communities";
import Modal from "./components/main/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    console.log("openModal state changed");
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-600 h-[500vh] ">
        {/* <Modal /> */}
        {/* components */}

        <Navbar className="" title="reddit" />
        <Cards />
        <div className="flex">
          <div>
            <PostSection />
            <Posts />
          </div>
          <Communities />
        </div>
      </div>
    </>
  );
}

export default App;
