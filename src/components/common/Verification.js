import React from "react";
import PropTypes from "prop-types";
import { Button } from "../buttons";
import { Heading } from "../heading";
import { IconBack } from "../Icons";
import LayoutAuthen from "../../layouts/LayoutAuthen";
import { useNavigate } from "react-router-dom";

const Verification = ({ heading }) => {
  const navigate = useNavigate();
  return (
    <LayoutAuthen className="py-[30px] px-5 lg:py-[35px] lg:px-[50px]">
      <Heading className="font-bold text-xl">{heading}</Heading>
      <div className="text-sm leading-6">
        <p className="text-text4 font-normal dark:text-text3">
          Please Enter the OTP you receive to
        </p>
        <p className="text-text2 font-medium dark:text-white">
          {"hello@gmail.com"}
        </p>
      </div>
      <div className="p-[10px] flex gap-5">
        {Array(4)
          .fill(null)
          .map((item, index) => (
            <input
              key={index}
              type="number"
              className="text-center w-[50px] h-[72px] border-2 dark:border bg-transparent border-strock rounded-md text-text1 dark:text-white font-semibold text-lg"
            />
          ))}
      </div>
      <p className="my-[30px]">
        <span className="text-secondary cursor-pointer font-semibold text-xs lg:text-sm">
          Resend OTP
        </span>
      </p>
      <Button className="bg-primary">Confirm</Button>
      <p
        className="text-secondary cursor-pointer flex mt-[20px] items-center font-semibold gap-[10px] text-sm"
        onClick={() => navigate(-1)}
      >
        <IconBack /> <span className="inline-block">Back to login</span>
      </p>
    </LayoutAuthen>
  );
};

Verification.propType = {
  heading: PropTypes.string.isRequired,
};

export default Verification;
