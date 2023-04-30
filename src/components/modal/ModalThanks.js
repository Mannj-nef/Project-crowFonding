import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalToastThanks } from "../../store/modal/modalSlice";
import Button from "../buttons/Button";
import Heading from "../heading/Heading";
import { IconCheck, IconClose } from "../Icons";
import Modal from "./Modal";

const ModalThanks = () => {
  const { isOpenModelToastThanks } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={isOpenModelToastThanks}>
      <div className="max-w-[650px] bg-white dark:bg-darkSecondary p-[35px] lg:p-[78px] relative rounded-xl">
        <div
          className="absolute w-[30px] h-[30px] top-4 right-4 flex items-center justify-center bg-error bg-opacity-10 rounded-full text-error cursor-pointer p-2"
          onClick={() => {
            dispatch(closeModalToastThanks());
          }}
        >
          <IconClose></IconClose>
        </div>
        <div className="flex flex-col gap-5 mb-[25px] items-center text-center">
          <div className=" w-[62px] h-[62px] bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
            <div className="w-[37px] h-[37px] bg-primary rounded-full flex items-center justify-center text-white">
              <IconCheck></IconCheck>
            </div>
          </div>
          <Heading type="h2">
            <span className="text-base md:text-xl font-semibold leading-6">
              Thank's for backing campaign!
            </span>
          </Heading>
          <p className="text-text3 leading-6 text-xs md:text-sm">
            Thank you so much for your support. We are so grateful to have the
            best backers on the planet.
          </p>
        </div>
        <div className="max-w-[307px] mx-auto">
          <Button secondary>Share this campaign</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalThanks;
