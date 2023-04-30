import React from "react";
import PropType from "prop-types";

const Button = ({
  children,
  className,
  type = "button",
  isLoading = false,
  height = "",
  rounded = "12px",
  secondary = false,
  handleClick = () => {},
  ...res
}) => {
  const element = isLoading ? (
    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent border-b-transparent animate-spin m-auto"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full 
      ${!!height ? height : "min-h-[52px]"} 
      ${secondary ? "bg-secondary" : "bg-primary"}
      font-semibold p-3 text-white ${className} `}
      style={{ borderRadius: rounded }}
      {...res}
    >
      {element}
    </button>
  );
};

Button.propTypes = {
  children: PropType.node,
  isLoading: PropType.bool,
  className: PropType.string,
  rounded: PropType.string,
  height: PropType.string,
  type: PropType.string,
  handleClick: PropType.func,
};

export default Button;
