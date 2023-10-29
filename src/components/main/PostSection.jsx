import React from "react";

let name = "harry";
const PostSection = () => {
  return (
    <>
      <div className="first-panel flex justify-between w-[60%] mx-8 mt-8 ">
        <button className="h-[2.6rem] w-[7rem]  text-white border  font-medium flex justify-center items-center text-sm rounded-full cursor-pointer hover:border-zinc-200 hover:border-2">
          Create a post
        </button>
        <div className="menu flex justify-center items-end ">
          <select className="serch-select rounded-full w-[3.5rem] h-[2rem] bg-[#2b3442] text-[#f1f1f1] text-sm  mx-4 cursor-pointer hover:bg-gray-800">
            <option className="text-sm ">Hot</option>
          </select>
          <select className="serch-select rounded-full w-[3.5rem] h-[2rem] bg-[#313a48] text-white text-sm  mx-4 cursor-pointer hover:bg-gray-800">
            <option className="text-sm ">India</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PostSection;
