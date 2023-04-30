import React from "react";
import { IconStar } from "../../components/Icons";

const tbHeard = ["Campaign", "Category", "Amount", "Backer"];

const classCommmon = "align-middle p-[20px]";

const History = () => {
  return (
    <table className="bg-white rounded-xl overflow-hidden shadow-boxPrimary flex-1">
      <thead className="">
        <tr className="bg-[#F7F7F8]">
          {tbHeard.map((item, index) => (
            <th
              key={index}
              className={`${classCommmon} py-[18px] text-text1 text-left  font-semibold leading-5 `}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {Array(10)
          .fill(null)
          .map((item, index) => (
            <tr key={index} className=" font-medium text-xs leading-4">
              <td className={`${classCommmon} max-w-[293px]`}>
                <div className="flex gap-4 items-center">
                  <div className="w-[66px] h-[50px]">
                    <img
                      src="https://source.unsplash.com/random"
                      className="w-full h-full object-cover rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-text1 ">One Special 4K Camera</p>
                    <span className="text-text3">Date: 25 Oct 2021</span>
                  </div>
                </div>
              </td>
              <td className={`${classCommmon} text-text3`}>Camera Gear</td>
              <td className={`${classCommmon} text-text1 font-semibold`}>
                $ 5,850
              </td>
              <td className={`${classCommmon} flex gap-[15px] items-center`}>
                <div className="w-10 h-10">
                  <img
                    src="https://source.unsplash.com/random"
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-medium text-text1">Mahfuzul Nabil</p>
                  <span className="flex gap-1">
                    {Array(5)
                      .fill(null)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="text-yellow-500 w-4 h-w-4 flex"
                        >
                          <IconStar></IconStar>
                        </div>
                      ))}
                  </span>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default History;
