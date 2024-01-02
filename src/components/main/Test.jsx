import React from "react";

const Test = (props) => {
  const { post } = props;
  console.log(post.title);
  return <div>Test</div>;
};

export default Test;
