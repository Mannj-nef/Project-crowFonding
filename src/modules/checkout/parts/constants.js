import { imgUrl } from "../../campaign/parts/constants";

export const paymentItem = [
  {
    id: 1,
    value: "Pay-Pal",
    imgUrl: "/pay-pal.png",
    isCheck: true,
  },
  {
    id: 2,
    value: "Payoneer",
    imgUrl: "/payoneer.png",
    isCheck: false,
  },
];

export const summaryItem = {
  id: 1,
  imgUrl: imgUrl,
  title: "Special One Camera",
  price: "$2,724 USD",
  Subtotal: "$2,724 USD",
  Shipping: "$0 USD",
  TOTAL: "$2,724 USD",
};
