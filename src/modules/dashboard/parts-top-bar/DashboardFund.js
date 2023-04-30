import React from "react";
import { IconArrowDown, IconUp } from "../../../components/Icons";

const DashboardFund = () => {
  return (
    <div className="hidden text-text2 dark:text-text3 lg:flex items-center gap-2 cursor-pointer">
      <span>
        <IconUp />
      </span>
      <span>Fundrising for</span>
      <span>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default DashboardFund;
