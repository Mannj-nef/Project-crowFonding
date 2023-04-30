import React from "react";
import ActivityItem from "./ActivityItem";

const activitys = [
  {
    id: 1,
    imgSrc: "pay-image.png",
    title: "Paypal Withdraw",
    price: "$500.00",
    date: "31 Oct",
    time: " 11:00pm",
  },
  {
    id: 2,
    imgSrc: "worldremit-img.png",
    title: "Worldremit Withdraw",
    price: "$200.00",
    date: "27 Sep",
    time: " 10:40pm",
  },
  {
    id: 3,
    imgSrc: "payoneer.png",
    title: "Payoneer Withdraw",
    price: "$50.00",
    date: "15 Aug",
    time: " 08:00pm",
  },
  {
    id: 4,
    imgSrc: "remitly-img.png",
    title: "Remitly Withdraw",
    price: "$800.00",
    date: "11 Jun",
    time: " 12:00pm",
  },
  {
    id: 5,
    imgSrc: "payoneer.png",
    title: "Payoneer Withdraw",
    price: "$80.00",
    date: "31 Apr",
    time: " 11:00pm",
  },
];

const Activity = () => {
  return (
    <div className="activity p-5">
      <div className="flex justify-between font-semibold mb-[18px]">
        <h3 className="text-text1 text-xl">Activity</h3>
        <span className="text-secondary capitalize cursor-pointer">
          View All
        </span>
      </div>
      <div className="">
        {activitys.map((activityItem) => (
          <ActivityItem
            key={activityItem.id}
            activity={activityItem}
          ></ActivityItem>
        ))}
      </div>
    </div>
  );
};

export default Activity;
