import React from "react";
import { useDropdown } from "./DropdownContex";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };

  return (
    <div
      className="py-4 px-5 cursor-pointer flex items-center justify-betwee text-text3 hover:text-primary transition-all text-sm"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
