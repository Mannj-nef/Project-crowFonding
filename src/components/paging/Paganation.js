import React from "react";
import { IconArrowLeft, IconArrowRight } from "../Icons";

const activeClass = "bg-secondary text-white";
const defaultClass =
  "w-[30px] p-4 h-[30px] rounded-[10px] flex items-center justify-center font-semibold";

const Pagination = () => {
  return (
    <div className="w-[230px] m-auto text-iconColor flex gap-[10px]  ">
      <Arrow>
        <IconArrowLeft />
      </Arrow>
      <button className={defaultClass}>1</button>
      <button className={`${defaultClass} ${activeClass}`}>2</button>
      <button className={defaultClass}>3</button>
      <button className={defaultClass}>4</button>
      <button className={defaultClass}>5</button>
      <Arrow>
        <IconArrowRight />
      </Arrow>
    </div>
  );
};

const Arrow = ({ children }) => {
  return (
    <button
      className={`bg-white shadow-boxPrimary dark:shadow-none ${defaultClass}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Pagination;
