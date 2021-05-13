import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "",
};

export const sliceAdminProfile = createSlice({
  name: "adminDetails",
  initialState,

  reducers: {
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { updateAvatar } = sliceAdminProfile.actions;

export const selectAvatar = (state) => state.adminDetails.avatar

export default sliceAdminProfile.reducer;
