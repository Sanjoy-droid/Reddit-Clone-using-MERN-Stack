const MyModal = ({ toggleModal, showModal }) => {
  if (showModal) {
    return (
      <>
        <div
          onClick={toggleModal}
          className="modal-overlay top-0 left-0  absolute inset-0 bg-[#144141dd]"
        ></div>
        <div className="modal-content bg-purple-950 absolute">
          <h2 className="text-3xl text-white">Stay Tuned</h2>

          <p className="text-white text-lg bg-purple ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam
            ad amet aliquam, dolorem ex excepturi dicta quasi, impedit corporisi
            perspiciatis vitae est error! Vitae tenetur animi dolores placeat?
          </p>
          <button
            onClick={toggleModal}
            className="bg-green-600  h-20 w-32 text-white text-2xl"
          >
            {" "}
            Close It
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default MyModal;
