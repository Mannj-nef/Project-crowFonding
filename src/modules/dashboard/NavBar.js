import React from "react";
import {
  NAVBAR_LINK,
  DashboardNavLink,
  DARK_MODE,
  LOG_OUT,
} from "./parts-nav-bar/";

const NavBar = () => {
  return (
    <div className="hidden md:flex w-full md:w-[76px] md:h-[750px] md:rounded-2xl bg-white dark:bg-darkSecondary dark:shadow-boxDarkPrimary md:py-10 md:px-[14px] shadow-boxPrimary flex-shrink-0  flex-col">
      <>
        {NAVBAR_LINK.map((link) => (
          <DashboardNavLink key={link.title} link={link} />
        ))}
        <DashboardNavLink key={LOG_OUT.title} link={LOG_OUT} />
      </>
      <DashboardNavLink key={DARK_MODE.title} link={DARK_MODE} />
    </div>
  );
};

export default NavBar;
