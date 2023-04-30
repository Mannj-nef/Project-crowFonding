import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/Icons";

const CampCategories = ({ categories = "Education", className }) => {
  return (
    <Link
      to={`/category/slug?=${categories}`}
      className={`font-medium inline-flex w-fit items-center gap-[10px] ${className}`}
    >
      <span>
        <IconFolder />
      </span>
      <span>{categories}</span>
    </Link>
  );
};

export default CampCategories;
