import React from "react";
import { Heading } from "../../components/heading";
import PaymentItem from "./parts/PaymentItem";

const Payment = ({ paymentItem, type = "h1" }) => {
  return (
    <div>
      <Heading type={type} className="text-3xl !font-bold">
        Payment
      </Heading>
      <div className="flex gap-[30px] mt-10">
        {paymentItem.map((item) => (
          <PaymentItem
            paymentItem={item}
            key={item.id}
            checked={item.isCheck}
          ></PaymentItem>
        ))}
      </div>
    </div>
  );
};

export default Payment;
