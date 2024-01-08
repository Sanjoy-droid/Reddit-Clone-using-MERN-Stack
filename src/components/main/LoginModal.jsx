import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const LoginModal = (props) => {
  // useEffect(() => {
  //   // Add or remove a class to the body based on the modal visibility
  //   document.body.style.overflow = showLogin ? "hidden" : "auto";

  //   // Cleanup function to reset the body style when the component is unmounted
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [showLogin]);

  // submit function
  // const context = useContext(postContext);
  // const { posts } = context;
  // useEffect(() => {
  //   getPost();
  // }, []);
  const host = import.meta.env.VITE_URL;

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  // onsubmit interactions
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    if (response.ok) {
      const json = await response.json();
      console.log("Server Response: ", json); // log response
      if (json.success) {
        const authToken = json.authToken;
        localStorage.setItem("token", authToken);
        console.log(authToken);
        props.showAlert("Logged In Successfully", "success");
        navigate("/");
      } else {
        props.showAlert("Invalid Details", "Error");
      }
    } else {
      props.showAlert("HTTP Error", "error");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Modal Overlay, Background of the Modal */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-[500vh] ">
        <>
          <div className="modal-overlay left-0 right-0 bottom-0 fixed top-0 cursor-default  bg-opacity-40"></div>
        </>

        {/* Login Modal */}
        <div className="Login-modal w-[32rem] h-[39rem] fixed right-[15rem] top-[1rem] bg-[#0a1122] cursor-default rounded-3xl">
          <form onSubmit={handleSubmit}>
            {/* Close Button */}

            {/* Go Home on clicking Close Button */}
            <div
              className="close-btn text-white bg-gray-700 rounded-full w-8 h-8 mt-10 ml-[28rem] flex justify-center items-center hover:bg-gray-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </div>

            <div className="Login p-12">
              <h1 className="text-4xl flex justify-center text-white">
                Log In
              </h1>
              <div className="inline-block ml-8 text-white">
                <div className="bg-gray-700  mt-10 h-14 w-[22rem] rounded-3xl hover:bg-gray-800 outline-none">
                  <input
                    className="bg-transparent h-full w-full pl-4 text-lg outline-none text-center"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Enter Your Email"
                    autoComplete="current-email"
                    value={credentials.email}
                    onChange={onchange}
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
                    onChange={onchange}
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button className="login w-[20rem] h-[2.6rem] bg-[#d44612bd] text-white font-medium flex justify-center items-center text-sm rounded-full mx-[6rem] my-6 cursor-pointer hover:bg-[#d44612]">
              Log In
            </button>
          </form>
          <div className="flex justify-center text-white">
            New Here?{" "}
            <div className="ml-2 ">
              <Link to="/signup">
                <p className="text-blue-500 cursor-pointer hover:text-blue-400">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
