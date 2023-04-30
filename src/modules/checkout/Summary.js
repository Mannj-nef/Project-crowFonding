import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons";
import { Heading } from "../../components/heading";
import { InputCheckBox } from "../../components/Inputs";
import { ROUTER_PATCH } from "../../routers";
import { openModalToastThanks } from "../../store/modal/modalSlice";

const Summary = ({ summaryItem, control }) => {
  const [fakeShipping, setFakeShipping] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitPayment = () => {
    if (fakeShipping === 1) {
      dispatch(openModalToastThanks());
      navigate(ROUTER_PATCH.HOME.path);
    } else {
      setFakeShipping(1);
      navigate(ROUTER_PATCH.SHIPPING.path);
    }
  };
  return (
    <>
      <div className="bg-white dark:bg-darkSecondary shadow-boxPrimary dark:shadow-boxDarkPrimary px-5 py-[15px] rounded-[20px] max-w-[462px] ">
        <Heading
          type="h2"
          className=" text-lg font-semibold p-[10px] pl-[15px] "
        >
          <span className="text-text2">Contribution Summury</span>
        </Heading>

        <div className="flex items-center dark:text-white justify-center gap-[15px] text-text1 py-4 px-5 bg-secondary dark:bg-darkStroke bg-opacity-5 rounded-[10px] my-[15px]">
          <img
            src={summaryItem.imgUrl}
            className="w-[89px] h-[75px] object-cover rounded-[5px]"
            alt={summaryItem.title}
          />
          <p className="font-medium mr-[15px]">{summaryItem.title}</p>
          <strong>{summaryItem.price}</strong>
        </div>

        <div className="px-5 pb-5 flex flex-col gap-[10px] dark:text-text3">
          <SummaryPrice
            title="Subtotal"
            price={summaryItem.Subtotal}
          ></SummaryPrice>
          <SummaryPrice
            title="Shipping"
            price={summaryItem.Subtotal}
          ></SummaryPrice>
          <SummaryPrice
            title="total"
            price={summaryItem.Subtotal}
            className="font-bold text-text1 dark:text-white uppercase"
          ></SummaryPrice>

          <InputCheckBox name="term" control={control}>
            <p className="font-normal text-sm lg: text-text2 dark:text-text3 flex-1">
              I agree to the{" "}
              <Link className="text-secondary underline" to={"#"}>
                Terms of Use
              </Link>{" "}
              and have read and understand the{" "}
              <Link className="text-secondary underline" to="#">
                Privacy policy.
              </Link>
            </p>
          </InputCheckBox>

          <Button handleClick={handleSubmitPayment}>Submit Payment</Button>
        </div>
      </div>
    </>
  );
};

const SummaryPrice = ({
  className = "font-medium text-text2 capitalize",
  title,
  price,
}) => {
  return (
    <div className={`flex items-center justify-between  ${className}`}>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default Summary;
