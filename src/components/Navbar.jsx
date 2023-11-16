import React, { useState } from "react";
import Modal from "./main/Modal";
import logo from "../components/download.png";
import HamburgerModal from "./main/HamburgerModal";
import LoginModal from "./main/LoginModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MoreModal from "./main/MoreModal";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  // Hamburger Modal
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  // Login Modal
  const [showLogin, setShowLogin] = useState(false);
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // More Modal
  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="navbar flex items-center py-1 ">
        {/* Hamburger Menu */}
        <button
          onClick={toggleHamburger}
          className="hamburger-menu cursor-pointer my-1 mx-2 h-10 w-10   hover:bg-gray-700   rounded-full  px-[0.6rem] py-[0.6rem]"
        >
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
          <HamburgerModal
            showHamburger={showHamburger}
            toggleHamburger={toggleHamburger}
          />
        </button>
        {/* Logo */}
        <img src={logo} alt="" className="w-9 cursor-pointer rounded-full" />
        <p className="mx-2 text-2xl cursor-pointer text-white">{props.title}</p>
        {/* Serach Section */}
        <div
          className="nav-search flex mx-2 w-[44rem] h-[42px] rounded-3xl
          border-2 border-solid border-gray-700 hover:bg-[#000000] selection:bg-blue-500 selection:text-white"
        >
          <div className="search-icon w-[50px] flex items-center justify-center  rounded-l-full  text-white">
            <FontAwesomeIcon className="pl-3" icon={faMagnifyingGlass} />
          </div>

          <input
            className="w-full  rounded-r-full bg-[#24252549] text-white outline-none px-2"
            placeholder="Search Reddit"
          />
        </div>
        {/* Login Button */}
        <div
          onClick={toggleLogin}
          className=" login w-[5rem] h-[2.6rem] bg-[#d44612] text-white  font-medium flex justify-center items-center text-sm rounded-full mx-2 cursor-pointer hover:bg-[#d44612bd]"
        >
          Log In
          <LoginModal toggleLogin={toggleLogin} showLogin={showLogin} />
        </div>

        {/* More,  three dots */}

        <button
          onClick={toggleMore}
          className="three-dots  
        cursor-pointer my-1 mr-2  h-10 w-10 flex justify-center items-center   hover:bg-gray-700   rounded-full   text-2xl   text-white"
        >
          <p className="pb-4">...</p>
          <MoreModal toggleMore={toggleMore} showMore={showMore} />
        </button>
      </div>

      {/* Small Line  */}

      <div
        className="line-1 
           border-b border-gray-400 mx-2 "
      ></div>
    </>
  );
};
