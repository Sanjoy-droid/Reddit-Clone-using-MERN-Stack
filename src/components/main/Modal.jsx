import { useState } from "react";
import MyModal from "./MyModal";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-white text-4xl bg-blue-500 h-32 w-32 rounded-lg flex justify-center items-center"
      >
        Open Modal
      </button>
      <MyModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Modal;
