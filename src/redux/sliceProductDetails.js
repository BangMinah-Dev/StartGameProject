import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productID: 0,
  productImage: "",
  productName: "Product Name",
  productPrice: 0,
  productCategory: "Product Category",
  productDiscount: 0,
  productDescription: "Description",
  windows: false,
  apple: false,
  android: false,
  playstation: false,
  windowsIcon: "",
  appleIcon: "",
  androidIcon: "",
  playstationIcon: "",
};

export const sliceProductDetails = createSlice({
  name: "productDetails",
  initialState,

  reducers: {
    updateID: (state, action) => {
      state.productID = action.payload;
    },
    updateProductImage: (state, action) => {
      state.productImage = action.payload;
    },
    updateName: (state, action) => {
      state.productName = action.payload;
    },
    updatePrice: (state, action) => {
      state.productPrice = action.payload;
    },
    updateCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    updateDiscount: (state, action) => {
      state.productDiscount = action.payload;
    },
    updateDescription: (state, action) => {
      state.productDescription = action.payload;
    },
    updateWindows: (state, action) => {
      state.windows = action.payload;
    },
    updateApple: (state, action) => {
      state.apple = action.payload;
    },
    updateAndroid: (state, action) => {
      state.android = action.payload;
    },
    updatePlayStation: (state, action) => {
      state.playstation = action.payload;
    },
    updateWindowsIcon: (state, action) => {
      state.windowsIcon = action.payload;
    },
    updateAppleIcon: (state, action) => {
      state.appleIcon = action.payload;
    },
    updateAndroidIcon: (state, action) => {
      state.androidIcon = action.payload;
    },
    updatePlayStationIcon: (state, action) => {
      state.playstationIcon = action.payload;
    },
  },
});

export const {
  updateID,
  updateProductImage,
  updateName,
  updatePrice,
  updateCategory,
  updateDiscount,
  updateDescription,
  updateWindows,
  updateApple,
  updateAndroid,
  updatePlayStation,
  updateWindowsIcon,
  updateAppleIcon,
  updateAndroidIcon,
  updatePlayStationIcon
} = sliceProductDetails.actions;

export const selectID = (state) => state.productDetails.productID;
export const selectProductImage = (state) => state.productDetails.productImage;
export const selectName = (state) => state.productDetails.productName;
export const selectPrice = (state) => state.productDetails.productPrice;
export const selectCategory = (state) => state.productDetails.productCategory;
export const selectDiscount = (state) => state.productDetails.productDiscount;
export const selectDescription = (state) => state.productDetails.productDescription;
export const selectWindows = (state) => state.productDetails.windows;
export const selectApple = (state) => state.productDetails.apple;
export const selectAndroid = (state) => state.productDetails.android;
export const selectPlayStation = (state) => state.productDetails.playstation;
export const selectWindowsIcon = (state) => state.productDetails.windowsIcon;
export const selectAppleIcon = (state) => state.productDetails.appleIcon;
export const selectAndroidIcon = (state) => state.productDetails.androidIcon;
export const selectPlayStationIcon = (state) => state.productDetails.playstationIcon;

export default sliceProductDetails.reducer;
