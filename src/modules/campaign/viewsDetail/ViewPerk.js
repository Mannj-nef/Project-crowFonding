import React from "react";
import { imgUrl } from "../parts/constants";

const ViewPerk = () => {
  return (
    <div className="bg-white dark:bg-darkSecondary shadow-boxPrimary dark:shadow-boxDarkPrimary mb-[30px] rounded-[10px]">
      <img src={imgUrl} className="w-full h-[232px] rounded-[10px]" alt="" />
      <div className="p-5">
        <span className="inline-block py-1 px-3 text-white bg-secondary font-medium text-sm mb-5">
          Featured
        </span>
        <div className="flex flex-col gap-[15px] font-normal text-sm text-text2 dark:text-text3">
          <p className="text-text1 dark:text-white font-semibold text-xl">
            Special One Camera
          </p>
          <p className="text-error text-sm font-medium">
            <strong className="text-text1 dark:text-white">$2,724 USD</strong>
            <span className="line-through ml-[10px]">$1,504 USD</span>
            <span className="ml-1">(12% OFF)</span>
          </p>
          <div className="flex flex-col">
            <span className="text-text1 dark:text-text4 font-medium text-base">
              Estimated Shipping
            </span>
            <span className="dark:text-white">October 2022</span>
          </div>
          <span>
            <span className="text-text1 dark:text-white font-medium">05 </span>
            claimed
          </span>
          <span>Ships worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default ViewPerk;
