import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [],
  userPosition: {},
  error: "",
};

const routeSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    addRouteNumberOne: (state, action) => {
      state.routes = action.payload;
    },
    errorRouteNumberOne: (state, action) => {
      state.error = action.payload;
    },
    addRouteNumberTwo: (state, action) => {
      state.routes = action.payload;
    },
    errorRouteNumberTwo: (state, action) => {
      state.error = action.payload;
    },
    addRouteNumberThree: (state, action) => {
      state.routes = action.payload;
    },
    errorRouteNumberThree: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addRouteNumberOne,
  errorRouteNumberOne,
  addRouteNumberTwo,
  errorRouteNumberTwo,
  addRouteNumberThree,
  errorRouteNumberThree,
} = routeSlice.actions;
export default routeSlice.reducer;
