import { configureStore } from "@reduxjs/toolkit";
import postofficeReducer from "./PincodeReducer";

export const store = configureStore({
  reducer: {
    postoffice: postofficeReducer,
  },
});
