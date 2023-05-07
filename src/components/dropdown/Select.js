import React from "react";
import { useDropdown } from "./DropdownContex";

const Select = ({ placeholder = "", className = "" }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between py-4 px-6 border bg-white dark:bg-darkSecondary text-text1 dark:text-white dark:border-darkStroke border-strock rounded-lg cursor-pointer text-sm ${className}`}
      onClick={toggle}
    >
      <span className="capitalize">{placeholder}</span>
      <span className="ml-8">
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
