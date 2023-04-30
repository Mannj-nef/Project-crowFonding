import { IconCheck } from "../../../components/Icons";

const PaymentItem = ({ paymentItem, checked }) => {
  return (
    <div
      className={`relative border bg-white dark:bg-darkSecondary shadow-boxPrimary dark:shadow-none w-[132px] h-[102px]  px-10 py-[25px] cursor-pointer rounded-[15px]  ${
        checked ? "border-primary" : "border-transparent"
      }`}
      onClick={() => {}}
    >
      {checked ? (
        <div className="absolute w-3 h-3 bg-primary text-white rounded-full top-3 right-[10px]">
          <span className="w-3 h-3  flex items-center justify-center">
            <IconCheck></IconCheck>
          </span>
        </div>
      ) : null}

      <img
        src={paymentItem.imgUrl}
        className="w-full h-full object-cover"
        alt=""
      />
    </div>
  );
};

export default PaymentItem;
