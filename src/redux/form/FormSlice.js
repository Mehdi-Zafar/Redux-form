import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, clear } = formSlice.actions;

export default formSlice.reducer;
