import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import modalSlice from "./modal/modalSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    modalSlice,
  },
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
// sagaMiddleware.run(rootSaga);
