import tag from "../tag.png";

const Communities = () => {
  return (
    <>
      <div className="communities h-[24rem] w-[21rem] bg-gray-900 rounded-xl mt-12 ">
        <header className="title mt-5 ml-4 ">
          {" "}
          <p className="text-xs text-gray-400"> POPULAR COMMUNITIES</p>
        </header>
        <div className="popular-communities-list">
          <ul>
            <li>
              <div className="list-1  ml-4 mt-4 h-14 w-[19rem]  hover:bg-gray-700 flex items-center pl-3 cursor-pointer">
                <img src={tag} alt="" className="w-8 h-8  rounded-full" />
                <div className="pl-2">
                  <p className="text-gray-300 text-base"> r/AskReddit</p>
                  <p className="text-sm text-gray-400">43,641, 114 members</p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-2  ml-4  h-14 w-[19rem]  hover:bg-gray-700 flex items-center pl-3 cursor-pointer">
                <img src={tag} alt="" className="w-8 h-8  rounded-full" />
                <div className="pl-2">
                  <p className="text-gray-300 text-base"> r/AskReddit</p>
                  <p className="text-sm text-gray-400">43,641, 114 members</p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-3  ml-4 h-14 w-[19rem]  hover:bg-gray-700 flex items-center pl-3 cursor-pointer">
                <img src={tag} alt="" className="w-8 h-8  rounded-full" />
                <div className="pl-2">
                  <p className="text-gray-300 text-base"> r/AskReddit</p>
                  <p className="text-sm text-gray-400">43,641, 114 members</p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-4  ml-4  h-14 w-[19rem]  hover:bg-gray-700 flex items-center pl-3 cursor-pointer">
                <img src={tag} alt="" className="w-8 h-8  rounded-full" />
                <div className="pl-2">
                  <p className="text-gray-300 text-base"> r/AskReddit</p>
                  <p className="text-sm text-gray-400">43,641, 114 members</p>
                </div>
              </div>
            </li>
            <li>
              <div className="list-5  ml-4  h-14 w-[19rem]  hover:bg-gray-700 flex items-center pl-3 cursor-pointer">
                <img src={tag} alt="" className="w-8 h-8  rounded-full" />
                <div className="pl-2">
                  <p className="text-gray-300 text-base"> r/AskReddit</p>
                  <p className="text-sm text-gray-400">43,641, 114 members</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className="text-white  mt-1 ml-5 text-xs h-8 w-[4rem] rounded-3xl hover:bg-gray-700">
          {" "}
          See more
        </button>
      </div>
    </>
  );
};

export default Communities;
