import React from "react";
import { useForm } from "react-hook-form";
import Payment from "../modules/checkout/Payment";
import Summary from "../modules/checkout/Summary";
import { paymentItem, summaryItem } from "../modules/checkout/parts/constants";

const CheackoutPage = () => {
  const { control } = useForm();
  return (
    <>
      <div className="flex gap-[135px] flex-wrap">
        <div className=" flex-shrink-0 ">
          <Payment paymentItem={paymentItem}></Payment>
        </div>
        <div className="flex-1">
          <Summary summaryItem={summaryItem} control={control}></Summary>
        </div>
      </div>
    </>
  );
};

export default CheackoutPage;
