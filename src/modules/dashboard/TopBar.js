import React from "react";
import { Button } from "../../components/buttons";
import { AvatarAuthor, LogoApp } from "../common";
import { DashboardFund, Search, MenuToogle } from "./parts-top-bar/";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATCH } from "../../routers";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-6 items-center  lg:justify-between">
      <div className="flex gap-10 flex-1 items-center">
        <LogoApp></LogoApp>
        <div className="lg:hidden flex-shrink-0">
          <MenuToogle />
        </div>
        <Search className="w-full lg:max-w-[458px]"></Search>
      </div>
      <div className="lg:flex lg:flex-1 lg:gap-10 lg:justify-end">
        <DashboardFund></DashboardFund>
        <Button
          className="bg-secondary bg-opacity-80 w-fit px-6 hidden lg:block"
          handleClick={() => navigate(ROUTER_PATCH.CAMPAIGN_ADD_NEW.path)}
        >
          Start a campaign
        </Button>
        <AvatarAuthor></AvatarAuthor>
      </div>
    </div>
  );
};

export default TopBar;
