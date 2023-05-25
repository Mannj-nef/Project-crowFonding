import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../store/modal/modalSlice";

const Modal = ({ children, isOpen }) => {
  const { isOpenModalProject } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName=" bg-text1 dark:bg-darkbg dark:bg-opacity-90 fixed z-[99] inset-0 bg-opacity-60 flex items-center justify-center "
      className="text-text1 outline-none overflow-y-auto max-h-[90vh] scroll-hidden p-6 "
    >
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={() => dispatch(closeModals())}
      ></div>
      <div className="">{children}</div>
    </ReactModal>
  );
};

export default Modal;
