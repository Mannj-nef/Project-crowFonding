import React from "react";
import { Heading } from "../../components/heading";

const CampTitle = ({ children }) => {
  return (
    <Heading type="h2" className="text-lg md:my-5 font-semibold mb-5">
      {children}
    </Heading>
  );
};

export default CampTitle;
