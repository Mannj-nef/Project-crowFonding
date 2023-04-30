import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const ButtonGoogle = ({ handleWithGoogle = () => {} }) => {
  const handleSignUpWithGoogle = () => {
    console.log("sign up with google");
    handleWithGoogle();
  };
  return (
    <Button
      className="border border-strock mb-[10px] bg-transparent dark:border-darkStroke  flex justify-center items-center gap-3 lg:gap-4"
      handleClick={handleSignUpWithGoogle}
    >
      <img src="Google.png" alt="icon-google" />
      <span className="text-text2 dark:text-white">Sign up with google</span>
    </Button>
  );
};

ButtonGoogle.propTypes = {
  handleWithGoogle: PropTypes.func,
};

export default ButtonGoogle;
