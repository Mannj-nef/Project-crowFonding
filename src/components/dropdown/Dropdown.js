import React from "react";
import { DropdownProvider } from "./DropdownContex";

const Dropdown = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full text-text3">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
