import React from "react";
import Button from "../../components/buttons/Button";
import { IconDown, IconWallet } from "../../components/Icons/";
import Activity from "./parts/Activity";

const bgImage = [
  "Ellipse-widthdraw-green.png",
  "Ellipse-widthdraw-yellow.png",
  "Ellipse-widthdraw-blue.png",
];

const Widthdraw = () => {
  return (
    <div className="w-[327px] lg:w-[407px] shadow-boxPrimary rounded-xl overflow-hidden">
      <div className="text-text2 text-center relative rounded-xl overflow-hidden">
        <div className="absolute w-full ">
          {bgImage.map((item) => (
            <div key={item} className="absolute w-full">
              <img src={item} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
        </div>

        <div className="px-[58px] py-[30px] lg:px-[76px] lg:py-[50px] relative z-10">
          <div className="w-[100px] h-[100px] mx-auto bg-opacity-20 bg-primary rounded-full flex items-center justify-center mb-4">
            <IconWallet></IconWallet>
          </div>
          <span>Your Balance</span>
          <h3 className="text-text1 text-[40px] font-bold leading-[60px] my-[10px]">
            1,206.89
          </h3>
          <div className="flex items-center gap-2 mb-5 justify-center">
            <div className="w-4 h-4">
              <img src="/Placement.png" alt="us" />
            </div>
            <span>USD</span>
          </div>
          <Button className="flex gap-[10px] items-center justify-center">
            <div className="flex-shrink-0">
              <IconDown></IconDown>
            </div>
            <span>Withdraw</span>
          </Button>
        </div>
      </div>

      <Activity></Activity>
    </div>
  );
};

export default Widthdraw;
