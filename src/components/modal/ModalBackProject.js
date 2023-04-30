import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewPerk from "../../modules/campaign/viewsDetail/ViewPerk";
import { closeModalProject } from "../../store/modal/modalSlice";
import { handleModal } from "../../utils/handleModal";
import Button from "../buttons/Button";
import FormField from "../common/FormField";
import Heading from "../heading/Heading";
import { IconClose } from "../Icons";
import InputDefault from "../Inputs/InputDefault";
import Label from "../label/LabelComponent";
import Modal from "./Modal";

const ModalBackProject = () => {
  const { isOpenModalProject } = useSelector((state) => state.modalSlice);
  const [valueInputAmount, setValueInputAmount] = useState();

  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpenModalProject}>
      <div className="relative bg-white dark:bg-darkSecondary max-w-[521px] w-full py-[50px] px-10 rounded-[20px]">
        <div
          className="absolute text-text2 dark:text-text4 p-4 top-1 right-6 cursor-pointer"
          onClick={() => handleModal(dispatch, closeModalProject)}
        >
          <IconClose></IconClose>
        </div>
        <Heading className="text-2xl text-center">
          <span className="font-bold">Back this project</span>
        </Heading>
        <FormField className="mt-8">
          <Label htmlFor="">Enter the contribute amount</Label>
          <InputDefault
            name="amount"
            placeholder="$100"
            handleOnChange={(e) => setValueInputAmount(e.target.value)}
            value={valueInputAmount}
          />
          <p className="text-sm text-text3 my-5">
            Contribution are not associatied with perks
          </p>
          <Button className="bg-primary text-base py-3 px-11 w-fit ">
            Continue
          </Button>
        </FormField>

        <div className="mt-[50px]">
          {Array(3)
            .fill(null)
            .map((item, index) => (
              <div key={index}>
                <ViewPerk></ViewPerk>
                <Button className="mt-[38px] mb-[53px] bg-opacity-80 dark:bg-secondary">
                  Get this perk
                </Button>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalBackProject;
