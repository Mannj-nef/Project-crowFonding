import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconBack } from "../components/Icons";
import { AvatarAuthor, LogoApp } from "../modules/common";

const CheckOutLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6 md:py-10 md:px-[135px] dark:bg-darkbg min-h-screen">
      <div className="flex items-center justify-between mb-5">
        <LogoApp display="block"></LogoApp>
        <AvatarAuthor></AvatarAuthor>
      </div>
      <div
        onClick={() => navigate(-1)}
        className="text-sm mb-5 font-semibold cursor-pointer pl-0 p-5 text-primary inline-flex gap-[10px] items-end"
      >
        <span>
          <IconBack></IconBack>
        </span>
        <span className="">Back</span>
      </div>

      {children}
    </div>
  );
};

export default CheckOutLayout;
