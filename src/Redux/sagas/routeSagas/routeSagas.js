import { put, call, takeEvery } from "redux-saga/effects";
import {
  getFirstRoute,
  getSecondRoute,
  getThirdRoute,
} from "../../../HTTP-requests";
import {
  addRouteNumberOne,
  addRouteNumberThree,
  addRouteNumberTwo,
  errorRouteNumberOne,
  errorRouteNumberThree,
  errorRouteNumberTwo,
} from "../../slices/routeSlicer";
import {
  getRouteNumberOne,
  getRouteNumberTwo,
  getRouteNumberThree,
} from "../../actionCreators";
export function* getRouteNumberOneWorker() {
  const route = yield call(getFirstRoute);
  if (route.message) {
    yield put(errorRouteNumberOne(route.message));
  }
  yield put(addRouteNumberOne(route));
}

export function* routeNumberOneWatcher() {
  yield takeEvery(getRouteNumberOne, getRouteNumberOneWorker);
}

export function* getRouteNumberTwoWorker() {
  const route = yield call(getSecondRoute);

  if (route.message) {
    yield put(errorRouteNumberTwo(route.message));
  }
  yield put(addRouteNumberTwo(route));
}

export function* routeNumberTwoWatcher() {
  yield takeEvery(getRouteNumberTwo, getRouteNumberTwoWorker);
}
export function* getRouteNumberThreeWorker() {
  const route = yield call(getThirdRoute);
  if (route.message) {
    yield put(errorRouteNumberThree(route.message));
  }
  yield put(addRouteNumberThree(route));
}

export function* routeNumberThreeWatcher() {
  yield takeEvery(getRouteNumberThree, getRouteNumberThreeWorker);
}
