import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducers";
import logger from "redux-logger";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware, logger),
});
sagaMiddleware.run(rootSaga);
