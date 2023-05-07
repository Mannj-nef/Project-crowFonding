import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import modalSlice from "./modal/modalSlice";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    modalSlice,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware, logger),
});
// sagaMiddleware.run(rootSaga);
