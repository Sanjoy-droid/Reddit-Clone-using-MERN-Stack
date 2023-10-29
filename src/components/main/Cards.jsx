import React from "react";

import tag from "../tag.png";
import cardImage from "../card-img.webp";

const Cards = () => {
  return (
    <>
      <div className="main-section m-5 flex justify-between ">
        <div className="card w-[18rem] h-52 rounded-2xl cursor-pointer bg-purple-300">
          <div className="content pt-[7rem] pl-4">
            <h1 className="title text-2xl font-bold">Top</h1>
            <p className="desc">Lorem ipsum ipsum dolor sitr sit . . .</p>
            <div className="tag flex  mt-2">
              <img src={tag} alt="" className="w-6 h-6 rounded-full" />
              <p className="text-sm ml-2">r/sports</p>
              <p className="ml-2 text-gray-700 text-sm"> and more</p>
            </div>
          </div>
        </div>
        <div className="card w-[18rem] h-52 rounded-2xl cursor-pointer bg-purple-300">
          <div className="content pt-[7rem] pl-4">
            <h1 className="title text-2xl font-bold">Top</h1>
            <p className="desc">Lorem ipsum ipsum dolor sitr sit . . .</p>
            <div className="tag flex  mt-2">
              <img src={tag} alt="" className="w-6 h-6 rounded-full " />
              <p className="text-sm ml-2">r/sports</p>
              <p className="ml-2 text-gray-700 text-sm"> and more</p>
            </div>
          </div>
        </div>
        <div className="card w-[18rem] h-52 rounded-2xl cursor-pointer bg-purple-300">
          <div className="content pt-[7rem] pl-4">
            <h1 className="title text-2xl font-bold">Top</h1>
            <p className="desc">Lorem ipsum ipsum dolor sitr sit . . .</p>
            <div className="tag flex  mt-2">
              <img src={tag} alt="" className="w-6 h-6 rounded-full " />
              <p className="text-sm ml-2">r/sports</p>
              <p className="ml-2 text-gray-700 text-sm"> and more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
