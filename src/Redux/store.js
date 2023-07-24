import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./slices/routeSlicer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: {
    route: routeSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
