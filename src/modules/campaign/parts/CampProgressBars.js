import React from "react";

const CampProgressBars = ({ percentage = "60%", className = "my-2" }) => {
  return (
    <div className={`bg-[#EFEFEF] h-[5px] rounded-md ${className}`}>
      <div
        className={`h-full bg-primary rounded-md`}
        style={{ width: percentage }}
      ></div>
    </div>
  );
};

export default CampProgressBars;
