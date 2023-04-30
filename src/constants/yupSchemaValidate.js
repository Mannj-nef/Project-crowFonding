import * as yup from "yup";
import MESSAGES from "./message";

const YUP = {
  NAME: yup.string().required(MESSAGES.NAME_REQUIRED),
  EMAIL: yup.string().email().required(MESSAGES.NAME_REQUIRED),
  PASSWORD: yup
    .string()
    .required(MESSAGES.NAME_REQUIRED)
    .min(8, MESSAGES.PASSWORD_CHARACTER),
};

export default YUP;
