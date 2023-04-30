import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({ control, name, placeholder, className }) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <textarea
      id={name}
      placeholder={placeholder}
      className={`border w-full dark:bg-darkStroke text-text1 dark:text-white dark:border-darkStroke font-medium text-sm placeholder:text-text4 dark:placeholder:text-text2  rounded-xl py-4 px-6 h-[119px] lg:h-[141px] resize-none ${className}`}
      {...field}
    />
  );
};

export default TextArea;
