import React from "react";
import { Heading } from "../../../components/heading";

const CampStory = ({
  className = "font-semibold text-base mb-1",
  title = "Powered Kits Learning Boxes",
  children,
}) => {
  return (
    <div>
      <Heading type="h3" className={className}>
        {title}
      </Heading>
      <p>{children}</p>
    </div>
  );
};

export default CampStory;
