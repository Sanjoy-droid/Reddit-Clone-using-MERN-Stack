import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faFire,
  faLandmark,
  faChevronDown,
  faChevronUp,
  faPersonSwimming,
  faBriefcase,
  faFlask,
  faUserGraduate,
  faScaleBalanced,
  faPlaneDeparture,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import tag from "../../../public/tag.png";
import { useNavigate } from "react-router-dom";

const HamburgerModal = ({ toggleHamburger, showHamburger }) => {
  let navigate = useNavigate();

  const [recentshow, setRecentShow] = useState(false);
  const toggleRecent = () => {
    setRecentShow(!recentshow);
  };

  const [topicshow, setTopicShow] = useState(false);
  const toggleTopic = () => {
    setTopicShow(!topicshow);
  };

  useEffect(() => {
    if (showHamburger) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showHamburger]);

  if (showHamburger) {
    return (
      <>
        <div
          onClick={toggleHamburger}
          className="modal-overlay left-0 right-0 bottom-0 top-0 fixed  cursor-default bg-black bg-opacity-40"
        ></div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="hamburger-section w-[17rem] h-[36rem] bg-[#0a1122] fixed left-0 top-16 cursor-default rounded-lg "
        >
          <div
            className={`hamburger-section w-[17rem] h-[36rem] p-1 fixed left-0 top-16 cursor-default rounded-lg ${
              recentshow && topicshow
                ? "overflow-y-scroll max-h-[36rem] scrollbar-thin scrollbar-track-[#0a1122] scrollbar-thumb-slate-700"
                : ""
            }`}
          >
            <ul className="text-gray-300  flex-col ">
              {/* Home and Trending */}

              <div
                className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                <FontAwesomeIcon icon={faHouse} />
                <li className="ml-4">Home</li>
              </div>

              <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                <FontAwesomeIcon icon={faFire} />
                <li className="ml-4">Trending</li>
              </div>
              {/* 1st Small Line */}
              <div
                className="line-1 
           border-b border-gray-600 mt-2 mx-2"
              ></div>

              {/* Recent  */}

              <div
                onClick={toggleRecent}
                className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg mt-2 justify-between cursor-pointer"
              >
                <li className="">Recent</li>

                {recentshow ? (
                  <FontAwesomeIcon icon={faChevronUp} className="mr-4" />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
                )}
              </div>

              {recentshow && (
                <>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <img
                      src={tag}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer"
                    />

                    <li className="ml-4">r/Minecrafts</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <img
                      src={tag}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer"
                    />

                    <li className="ml-4">r/discordapp</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <img
                      src={tag}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer"
                    />

                    <li className="ml-4">r/DnD</li>
                  </div>
                </>
              )}

              {/* 2nd Small Line */}
              <div
                className="line-1 
           border-b border-gray-600 mt-2 mx-2"
              ></div>

              {/* Topics */}
              <div
                onClick={toggleTopic}
                className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg mt-2 justify-between cursor-pointer"
              >
                <li className="">Topics</li>

                {topicshow ? (
                  <FontAwesomeIcon icon={faChevronUp} className="mr-4" />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
                )}
              </div>
              {topicshow && (
                <>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faPersonSwimming} />
                    <li className="ml-4">Sports</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <li className="ml-4">Business</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <li className="ml-4">Education</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faScaleBalanced} />
                    <li className="ml-4">Law</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                    <li className="ml-4">Travel</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faLandmark} />
                    <li className="ml-4">Politics</li>
                  </div>
                  <div className="flex h-10 hover:bg-gray-800 items-center pl-4 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faFlask} />
                    <li className="ml-4">Science</li>
                  </div>
                </>
              )}

              {/* 3rd Small line */}
              <div
                className="line-1 
           border-b border-gray-600 mt-2 mx-2"
              ></div>
            </ul>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default HamburgerModal;
