import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBullhorn,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const MoreModal = ({ toggleMore, showMore }) => {
  if (showMore) {
    return (
      <>
        <div
          onClick={toggleMore}
          className="modal-overlay left-0 right-0 bottom-0 top-0 fixed cursor-default "
        ></div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="more-section w-[18rem] h-[12rem] bg-[#0a1122] fixed left-[45rem] top-14 cursor-default rounded-lg "
        >
          <div className="my-4 mx-2">
            <div className="flex px-3 h-12  hover:bg-gray-800 items-center  rounded-lg cursor-pointer">
              <FontAwesomeIcon
                className="text-sm"
                icon={faArrowRightToBracket}
                size="sm"
              />
              <p className="ml-4 text-sm">Log In / Sign Up </p>
            </div>
            <div className="flex h-12 px-3   hover:bg-gray-800 items-center  rounded-lg cursor-pointer">
              <FontAwesomeIcon icon={faBullhorn} />
              <p className="ml-4 text-sm">Advertise on Reddit</p>
            </div>
            <div className="flex h-12 px-3 hover:bg-gray-800 items-center  rounded-lg cursor-pointer">
              <FontAwesomeIcon icon={faBagShopping} />
              <p className="ml-4 text-sm">Shop on Reddit </p>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default MoreModal;
