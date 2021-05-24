import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "",
  tokenExpired: false
};

export const sliceAdminProfile = createSlice({
  name: "adminDetails",
  initialState,

  reducers: {
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateTokenExpired: (state, action) => {
      state.tokenExpired = action.payload;
    },
  },
});

export const { updateAvatar, updateTokenExpired } = sliceAdminProfile.actions;

export const selectAvatar = (state) => state.adminDetails.avatar
export const selectTokenExpired = (state) => state.adminDetails.tokenExpired

export default sliceAdminProfile.reducer;
