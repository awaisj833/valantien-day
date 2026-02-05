import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD, $",
  language: "English",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setCurrency, setLanguage } = globalSlice.actions;

export default globalSlice.reducer;
