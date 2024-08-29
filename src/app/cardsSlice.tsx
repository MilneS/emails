import { createSlice } from "@reduxjs/toolkit";
import { Card, Inpt } from "./interface/interface.model";

const initialState: {
  cardsOrder: Card[];
  cardsInputs: Inpt[];
} = {
  cardsOrder: [],
  cardsInputs: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardsOrder: (state, action) => {
      state.cardsOrder = action.payload;
    },
    setCardsInputs: (state, action) => {
      state.cardsInputs = action.payload;
    },
  },
});

export const { setCardsOrder, setCardsInputs } = cardsSlice.actions;

export default cardsSlice.reducer;
