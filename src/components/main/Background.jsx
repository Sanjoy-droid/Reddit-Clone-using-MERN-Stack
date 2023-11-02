import React from "react";
import bg from "../../components/bg.png";

const Background = () => {
  return (
    <>
      <img
        className="w-full h-[500vh] relative z-0"
        src={bg}
        alt="Background"
      />
    </>
  );
};

export default Background;
