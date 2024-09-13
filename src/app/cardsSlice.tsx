import { createSlice } from "@reduxjs/toolkit";
import { Card, Inpt, Template } from "./interface/interface.model";

const initialState: {
  selectedTemplate: Template | {};
  cardsOrder: Card[];
  cardsInputs: Inpt[];
} = {
  selectedTemplate: {},
  cardsOrder: [],
  cardsInputs: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setSelectedTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    setCardsOrder: (state, action) => {
      state.cardsOrder = action.payload;
    },
    setCardsInputs: (state, action) => {
      state.cardsInputs = action.payload;
    },
  },
});

export const { setCardsOrder, setCardsInputs, setSelectedTemplate } = cardsSlice.actions;

export default cardsSlice.reducer;
