import React from "react";
import Button from "../../../components/buttons/Button";
import { Heading } from "../../../components/heading";
import { InputDefault } from "../../../components/Inputs";

const ViewSupport = () => {
  return (
    <div className="py-5 px-[25px] bg-white rounded-xl shadow-boxPrimary">
      <Heading type="h3" className=" font-medium text-lg text-center mb-[30px]">
        <span className="text-text3">Pledge without reward</span>
      </Heading>
      <InputDefault placeholder="$10"></InputDefault>
      <div className="p-5 rounded-[10px] bg-[#F7F7F7] dark:bg-darkbg my-5">
        <p className="font-semibold text-text2 mt-5 dark:text-white">
          Back it because you believe in it.
        </p>
        <p className="text-text3 text-sm">
          Support the project for no reward, just because it speaks to you.
        </p>
      </div>
      <Button className="text-white bg-secondary bg-opacity-80">
        Continue
      </Button>
    </div>
  );
};

export default ViewSupport;
