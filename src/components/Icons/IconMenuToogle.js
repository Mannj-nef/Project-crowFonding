import React from "react";
import PropTypes from "prop-types";

const IconMenuToogle = ({ handleClick = () => {} }) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <g clipPath="url(#clip0_2190_9983)">
        <path
          d="M1 13.4H21V10.6H1V13.4ZM1 19H21V16.2H1V19ZM1 7.8H21V5H1V7.8Z"
          fill="#808191"
        />
      </g>
      <defs>
        <clipPath id="clip0_2190_9983">
          <rect width="22" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconMenuToogle.propTypes = {
  handleClick: PropTypes.func,
};

export default IconMenuToogle;
