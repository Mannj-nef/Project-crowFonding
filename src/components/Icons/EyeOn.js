import React from "react";
import PropTypes from "prop-types";

const EyeOn = ({ handleClick, className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`eye-icon ${className}`}
      onClick={handleClick}
    >
      <path
        d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z"
        stroke="#4B5264"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="#4B5264"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

EyeOn.propTypes = {
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default EyeOn;
