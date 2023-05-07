import React from "react";
import { useDropdown } from "./DropdownContex";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-20 w-full bg-white dark:bg-darkStroke dark:shadow-boxDarkPrimary rounded-lg shadow-boxPrimary top-full max-h-[230px] overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
