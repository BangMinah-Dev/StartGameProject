import { configureStore } from "@reduxjs/toolkit";
import reducerProductDetails from "./sliceProductDetails";

export const store = configureStore({
  reducer: {
    productDetails: reducerProductDetails,
  },
});
