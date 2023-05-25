import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalSearch } from "../../store/modal/modalSlice";
import { handleModal } from "../../utils/handleModal";

const Overlay = () => {
  const { isOpenModalSearch } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      {isOpenModalSearch && (
        <div
          className="overlay bg-text1 opacity-20 inset-0 fixed cursor-pointer z-40"
          onClick={() => handleModal(dispatch, closeModalSearch)}
        ></div>
      )}
    </>
  );
};

export default Overlay;
