import { all } from "redux-saga/effects";

import {
  routeNumberOneWatcher,
  routeNumberTwoWatcher,
  routeNumberThreeWatcher,
} from "./routeSagas/routeSagas";

export default function* rootSaga() {
  yield all([
    routeNumberOneWatcher(),
    routeNumberTwoWatcher(),
    routeNumberThreeWatcher(),
  ]);
}
