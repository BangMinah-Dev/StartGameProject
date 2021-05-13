import { configureStore } from "@reduxjs/toolkit";
import reducerProductDetails from "./sliceProductDetails";
import reducerAdminDetails from "./sliceAdminProfile"

export const store = configureStore({
  reducer: {
    productDetails: reducerProductDetails,
    adminDetails: reducerAdminDetails
  },
});
