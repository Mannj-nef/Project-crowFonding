import React from "react";

const InputDefault = ({ value, handleOnChange, placeholder, className }) => {
  return (
    <input
      className={`border w-full bg-transparent text-text1 dark:text-white font-medium text-xs lg:text-sm placeholder:text-text4 dark:placeholder:text-text2 dark:border-darkStroke rounded-xl py-4 px-6 ${className}`}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
    />
  );
};

export default InputDefault;
