import React from "react";
import History from "../modules/withdraw/History";
import Widthdraw from "../modules/withdraw/Widthdraw";

const Withdrawpage = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:gap-[40px]">
      <Widthdraw></Widthdraw>
      <History></History>
    </div>
  );
};

export default Withdrawpage;
