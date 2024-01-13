import logo from "../../public/download.png";
import HamburgerModal from "../components/main/HamburgerModal";
import MoreModal from "../components/main/MoreModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { post, showAlert } = props;
  let navigate = useNavigate();
  // Hamburger Modal
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  // More Modal
  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
  };
  //Log Out Logic
  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("Logged Out Successfully", "success");
    navigate("/");
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
        <div
          className="cursor-pointer flex"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="" className="w-9 rounded-full" />
          <p className="mx-2 text-2xl  text-white">{props.title}</p>
        </div>
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
        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className=" login w-[5rem] h-[2.6rem] bg-[#d44612] text-white  font-medium flex justify-center items-center text-sm rounded-full mx-2 cursor-pointer hover:bg-[#d44612bd]">
              Log In
            </button>
          </Link>
        ) : (
          <button
            className="btn w-[5rem] h-[2.6rem] bg-[#d44612] text-white  font-medium flex justify-center items-center text-sm rounded-full mx-2 cursor-pointer hover:bg-[#d44612bd]"
            onClick={handleLogout}
          >
            Log Out
          </button>
        )}

        {/* More,  three dots */}

        {!localStorage.getItem("token") ? (
          <button
            onClick={toggleMore}
            className="three-dots  
        cursor-pointer my-1 mr-2  h-10 w-10 flex justify-center items-center   hover:bg-gray-600   rounded-full   text-2xl   text-white"
          >
            <p className="pb-4">...</p>
            <MoreModal toggleMore={toggleMore} showMore={showMore} />
          </button>
        ) : null}
      </div>

      {/* Small Line  */}

      <div className="line-1 border-b border-gray-400 mx-2 "></div>
    </>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
