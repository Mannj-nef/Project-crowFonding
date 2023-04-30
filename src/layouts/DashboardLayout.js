import React from "react";
import Overlay from "../components/common/Overlay";
import { ModalThanks } from "../components/modal";
import useScrollToTop from "../hooks/useScrollToTop";
import { NavBar, TopBar } from "../modules/dashboard";

const DashboardLayout = ({ children }) => {
  useScrollToTop(children);
  return (
    <>
      <ModalThanks></ModalThanks>
      <div className="bg-lite dark:bg-darkbg min-h-screen py-4 px-6 lg:p-10">
        <Overlay></Overlay>
        <TopBar></TopBar>
        <div className="flex items-start gap-10 mt-[40px]">
          <NavBar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
