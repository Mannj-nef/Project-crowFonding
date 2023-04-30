import React from "react";
import History from "../modules/withdraw/History";
import Widthdraw from "../modules/withdraw/Widthdraw";

const Withdrawpage = () => {
  return (
    <div className="flex gap-[40px]">
      <History></History>
      <Widthdraw></Widthdraw>
    </div>
  );
};

export default Withdrawpage;
