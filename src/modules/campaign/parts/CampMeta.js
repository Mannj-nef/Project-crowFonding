import React from "react";

const CampMeta = ({ classAmount, backers = [], big = false }) => {
  return (
    <div className="flex gap-5 justify-between">
      {!!backers.length &&
        backers.map((item) => (
          <MetaItem
            key={item.id}
            className={classAmount}
            amount={item.amount}
            desc={item.text}
            big={big}
          ></MetaItem>
        ))}
    </div>
  );
};

const MetaItem = ({
  desc = "Raised of $1,900",
  amount = "$2,000",
  className = "text-sm font-semibold ",
  big,
}) => {
  return (
    <div>
      <span className={`${className} text-text2 dark:text-text4`}>
        {amount}
      </span>
      <p className={big ? "text-base" : ""}>{desc}</p>
    </div>
  );
};

export default CampMeta;
