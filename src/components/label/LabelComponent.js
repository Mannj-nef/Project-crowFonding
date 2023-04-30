import React from "react";
import PropType from "prop-types";

const Label = ({ htmlFor = "", children = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`py-3 block text-sm text-text2 dark:text-text3 font-medium ${className}`}
    >
      {children}
    </label>
  );
};

Label.propType = {
  htmlFor: PropType.string.isRequired,
  children: PropType.string.isRequired,
  className: PropType.string,
};

export default Label;
