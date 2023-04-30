import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconArrowUp } from "../Icons";
import IconArrowDown from "../Icons/IconArrowDown";
import InputCheckBox from "../Inputs/InputCheckBox";

const trendingList = [
  {
    id: 1,
    title: "Trending",
  },
  {
    id: 2,
    title: "Best Match",
  },
  {
    id: 3,
    title: "Newest",
  },
];

const Dropdown = ({ title = "Trending", className = "" }) => {
  const [show, setShow] = useState(false);
  const { control } = useForm();
  return (
    <div className="relative">
      <div
        className={`flex justify-between bg-transparent gap-[30px] border cursor-pointer ${className}`}
        onClick={() => setShow(!show)}
      >
        {title}
        {show ? <IconArrowUp /> : <IconArrowDown />}
      </div>
      {show && (
        <div className="absolute w-full font-medium z-10 shadow-boxPrimary bg-white dark:bg-darkSecondary dark:shadow-boxDarkPrimary rounded-[10px] px-4 py-2">
          {trendingList.map((item) => (
            <div className="border-b border-text4 last:border-b-0 h-[46px]">
              <InputCheckBox
                name="trending"
                control={control}
                key={item.id}
                label={item.title}
              ></InputCheckBox>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
