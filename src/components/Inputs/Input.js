import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = ({
  type = "text",
  children,
  placeholder = "",
  className = "",
  error = "",
  name,
  control,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  const inputDefault = (
    <input
      type={type}
      id={name}
      className={`border w-full bg-transparent text-text1 dark:text-white font-medium text-sm placeholder:text-text4 dark:placeholder:text-text2  rounded-xl py-4 px-6 
      ${!!error ? "border-error" : "border-strock dark:border-darkStroke"} 
      ${children ? "pr-14" : ""}  
      ${className}`}
      placeholder={!error ? placeholder : ""}
      {...field}
    />
  );

  return (
    <>
      <div className="relative">
        {inputDefault}

        {error ? (
          <span className="input-error absolute text-error left-6 top-4 bg-white dark:bg-darkStroke pointer-events-none font-medium text-sm ">
            {error}
          </span>
        ) : null}

        {children}
      </div>
    </>
  );
};

Input.propsType = {
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  control: PropTypes.any,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
