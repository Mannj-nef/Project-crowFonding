import React from "react";
import { IconStar } from "../../../components/Icons";

const HistoryItem = ({ history }) => {
  return (
    <tr className=" font-medium text-xs leading-4 ">
      <td className="max-w-[293px]">
        <div className="flex gap-4 items-center">
          <div className="w-[66px] h-[50px] flex-shrink-0">
            <img
              src={history.imgSrc}
              className="w-full h-full object-cover rounded-md"
              alt={history.title}
            />
          </div>
          <div className="">
            <p className="text-text1 dark:text-white">{history.title}</p>
            <span className="text-text3">{history.date}</span>
          </div>
        </div>
      </td>
      <td className="text-text3">
        <span>{history.category}</span>
      </td>
      <td className="text-text1 font-semibold dark:text-white">
        {history.amount}
      </td>
      <td className="">
        <div className="flex gap-[15px]">
          <div className="w-10 h-10">
            <img
              src={history.backerAvatar}
              className="w-full h-full object-cover rounded-full"
              alt={history.backerName}
            />
          </div>
          <div className="">
            <p className="font-medium text-text1 dark:text-white">
              {history.backerName}
            </p>
            <span className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((item, index) => (
                  <div key={index} className="text-yellow-500 w-4 h-w-4 flex">
                    <IconStar></IconStar>
                  </div>
                ))}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default HistoryItem;
