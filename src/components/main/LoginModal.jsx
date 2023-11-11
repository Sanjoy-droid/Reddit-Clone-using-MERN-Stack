import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const LoginModal = ({ toggleLogin, showLogin }) => {
  useEffect(() => {
    // Add or remove a class to the body based on the modal visibility
    document.body.style.overflow = showLogin ? "hidden" : "auto";

    // Cleanup function to reset the body style when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin]);

  if (showLogin)
    return (
      <>
        <div
          onClick={toggleLogin}
          className="modal-overlay left-0 right-0 bottom-0 top-0 fixed  cursor-default bg-black bg-opacity-40"
        ></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="Login-modal  w-[32rem] h-[39rem] fixed right-[15rem] top-[1rem] bg-[#0a1122]   cursor-default rounded-3xl "
        >
          <div
            onClick={toggleLogin}
            className="close-btn bg-gray-700 rounded-full w-8 h-8 mt-10 ml-[28rem] flex justify-center items-center hover:bg-gray-800 cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </div>
          <div className="Login p-12">
            <h1 className="text-4xl">Log In</h1>
            <div className="inline-block flex-col justify-center ">
              <div className="bg-gray-700 mt-10 h-14 w-[22rem] rounded-3xl hover:bg-gray-800">
                <input
                  className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" Enter Your Email"
                />
              </div>
              <div className="bg-gray-700 mt-4 h-14 w-[22rem] rounded-3xl  hover:bg-gray-800">
                <input
                  className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            New Here?{" "}
            <p className="ml-2 text-blue-500 cursor-pointer hover:text-blue-400">
              Sign Up
            </p>
          </div>
          {/* Login Button */}
          <button className=" login w-[20rem] h-[2.6rem] bg-[#d44612bd] text-white  font-medium flex justify-center items-center text-sm rounded-full mx-[6rem] my-6 cursor-pointer hover:bg-[#d44612]">
            Log In
          </button>
        </div>
      </>
    );
  else return null;
};

export default LoginModal;
