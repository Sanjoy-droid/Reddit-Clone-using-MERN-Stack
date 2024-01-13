import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SignupModal = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  // onsubmit interactions
  const handleSubmit = async (e) => {
    e.preventDefault();

    const host = import.meta.env.VITE_URL;

    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account Created Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "Error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Modal Overlay, Background of the Modal */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <>
          <div className="modal-overlay left-0 right-0 bottom-0 fixed top-0 cursor-default  bg-opacity-40"></div>
        </>

        {/* Sign Up Modal */}
        <div
          className="signup-modal w-[32rem] h-[36rem] fixed right-[15rem] top-[1rem] bg-[#0a1122] cursor-default rounded-3xl"
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          <form onSubmit={handleSubmit}>
            {/* Close Button */}

            <div
              className="close-btn text-white bg-gray-700 rounded-full w-8 h-8 mt-10 ml-[28rem] flex justify-center items-center hover:bg-gray-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </div>

            <div className="Login p-12">
              <h1 className="text-4xl flex justify-center text-white">
                Create Account
              </h1>
              <div className="inline-block ml-8 text-white">
                {/* Name */}
                <div className="bg-gray-700  mt-10 h-14 w-[22rem] rounded-3xl hover:bg-gray-800 outline-none">
                  <input
                    className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Choose Your Username"
                    autoComplete="current-username"
                    value={credentials.name}
                    onChange={onChange}
                  />
                </div>
                {/* Email */}
                <div className="bg-gray-700 mt-4  h-14 w-[22rem] rounded-3xl hover:bg-gray-800 outline-none">
                  <input
                    className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Enter Your Email"
                    autoComplete="current-email"
                    value={credentials.email}
                    onChange={onChange}
                  />
                </div>
                <div className="bg-gray-700 mt-4 h-14 w-[22rem] rounded-3xl hover:bg-gray-800">
                  <input
                    className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button className="login w-[20rem] h-[2.6rem] bg-[#d44612bd] text-white font-medium flex justify-center items-center text-sm rounded-full mx-[6rem] my-6 cursor-pointer hover:bg-[#d44612]">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
