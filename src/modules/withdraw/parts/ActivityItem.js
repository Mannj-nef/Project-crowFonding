import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <div className="flex justify-between items-center p-3 gap-8">
      <div className="flex gap-5 items-center font-medium">
        <div className="w-[58px] h-[58px] p-4 rounded-xl shadow-boxPrimary bg-secondary bg-opacity-5">
          <img src={activity?.imgSrc} alt={activity?.title} />
        </div>
        <div className="">
          <p className="text-text1">{activity?.title}</p>
          <span className="text-text4">
            {activity?.date},{activity?.time}
          </span>
        </div>
      </div>
      <div className="ml-0 w-16">
        <span className="text-error text-lg">{activity?.price}</span>
      </div>
    </div>
  );
};
export default ActivityItem;
