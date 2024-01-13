import tag from "../../../public/tag.png";

const Cards = (props) => {
  const { post } = props;

  // console.log(post.title);
  // title truncation
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };
  const postTitle = truncateTitle(post.title, 50); // Truncate after 50 characters

  // description truncation
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };
  const postDescription = truncateDescription(post.description, 120); // Truncate after 120 characters

  // tag truncation
  const truncateTag = (tag, maxLength) => {
    if (tag.length > maxLength) {
      return `${tag.substring(0, maxLength)}...`;
    }
    return tag;
  };
  const postTag = truncateTag(post.tag, 20); // Truncate after 120 characters

  return (
    <div className="card w-[18rem] h-52 rounded-2xl cursor-pointer bg-violet-950 text-white">
      <div className="content py-3 px-4 flex-col">
        <div className="h-[4em] ">
          <h1 className="title text-lg font-bold  w-fit  ">{postTitle}</h1>
        </div>
        <div className="h-[6em]">
          <p className="desc text-base overflow-hidden text-ellipsis  ">
            {postDescription}
          </p>
        </div>
        <div className="tag flex  mt-1 h-[2em]">
          <img src={tag} alt="" className="w-6 h-6 rounded-full" />
          <p className="text-sm ml-2 text-ellipsis overflow-hidden">
            r/{postTag}
          </p>
          <p className="ml-2 text-gray-300 text-sm"> and more</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
