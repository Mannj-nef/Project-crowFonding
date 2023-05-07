import React from "react";
import HistoryItem from "./parts/HistoryItem";

const tbHeard = ["Campaign", "Category", "Amount", "Backer"];

const historyList = [
  {
    id: 1,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 2,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 3,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 4,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 5,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 6,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 7,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 8,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 9,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
  {
    id: 10,
    imgSrc: "https://source.unsplash.com/random",
    title: "One Special 4K Camera",
    date: "Date: 25 Oct 2021",
    category: "Camera Gear",
    amount: "$ 5,850",
    backerAvatar: "https://source.unsplash.com/random",
    backerName: "Mahfuzul Nabil",
    backerRating: "5",
  },
];

const History = () => {
  return (
    <div className=" bg-white dark:bg-darkSecondary rounded-xl shadow-boxPrimary dark:shadow-boxDarkPrimary overflow-hidden lg:flex-1">
      <table className="table-history w-full">
        <thead className="">
          <tr className="bg-[#F7F7F8] dark:bg-softDark">
            {tbHeard.map((item, index) => (
              <th
                key={index}
                className={` py-[18px] text-text1 dark:text-white text-left  font-semibold leading-5 `}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {historyList.map((item) => (
            <HistoryItem key={item.id} history={item}></HistoryItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
