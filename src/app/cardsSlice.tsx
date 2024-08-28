import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cardsOrder: [],
  },
  reducers: {
    setCardsOrder: (state, action) => {
      state.cardsOrder = action.payload;
    },
  },
});

export const { setCardsOrder } = cardsSlice.actions;

export default cardsSlice.reducer;
