import React, { useState } from "react";
import logo from "../components/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = (props) => {
  // const [first, setfirst] = useState("booooom");
  // setfirst("ki holo eta palta");

  return (
    <>
      {/* <div className="">{first}</div> */}
      <div className="navbar flex items-center py-1 ">
        {/* Hamburger Menu */}
        <div className="hamburger-menu cursor-pointer my-1 mx-2 h-10 w-10   hover:bg-gray-700   rounded-full  px-[0.6rem] py-[0.6rem]">
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
          <div className="line h-0.5 w-5 mt-1 bg-white"></div>
        </div>

        {/* Logo */}

        <img src={logo} alt="" className="w-9 cursor-pointer rounded-full" />
        <p className="mx-2 text-2xl cursor-pointer text-white">{props.title}</p>

        {/* Serach Section */}
        <div
          className="nav-search flex mx-2 w-[60rem] h-[42px] rounded-3xl
          border-2 border-solid border-gray-700 hover:bg-[#000000] "
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
        <button className=" login w-[4.4rem] h-[2.6rem] bg-[#d44612] text-white  font-medium flex justify-center items-center text-sm rounded-full mx-2 cursor-pointer hover:bg-[#d44612bd]">
          Log In
        </button>

        {/* three dots */}

        <button
          className="three-dots  
        cursor-pointer my-1 mr-2  h-10 w-10 flex justify-center items-center   hover:bg-gray-700   rounded-full   text-2xl   text-white"
        >
          <p className="pb-4">...</p>
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
