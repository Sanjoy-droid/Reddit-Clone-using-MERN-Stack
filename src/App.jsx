import "./App.css";
import { Navbar } from "./components/Navbar";
import Cards from "./components/main/Cards";
import PostSection from "./components/main/PostSection";
import PostCards from "./components/main/Posts";
import Communities from "./components/main/Communities";
import Modal from "./components/main/Modal";
import { useState } from "react";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import NewsPosts from "./components/main/NewsPosts";

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    console.log("openModal state changed");
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="bg-gradient-to-r from-gray-900 to-gray-600 h-[500vh] ">
                <Navbar className="" title="reddit" />
                {/* <Modal /> */}
                {/* components */}
                <Cards />

                <div className="flex">
                  <div>
                    <PostSection />
                    <PostCards />
                  </div>
                  <Communities />
                </div>
              </div>
            }
          />
          <Route exact path="/newsposts" element={<NewsPosts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
