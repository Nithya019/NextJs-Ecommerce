"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartItemInterface } from "../interfaces/productInterfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart: (state, action: PayloadAction<cartItemInterface>) => {
      const itemExists = state.find(
        (item: cartItemInterface) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.count++;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number | undefined>) => {
      const getItemIndex = state.findIndex(
        (item: cartItemInterface) => item.id === action.payload
      );
      state.splice(getItemIndex, 1);
    },
    incrementItem: (state, action: PayloadAction<number | undefined>) => {
      const getItem = state.find(
        (item: cartItemInterface) => item.id === action.payload
      );
      getItem.count++;
    },
    decrementItem: (state, action: PayloadAction<number | undefined>) => {
      const getItem = state.find(
        (item: cartItemInterface) => item.id === action.payload
      );
      if (getItem.count === 1) {
        const index = state.findIndex(
          (item: cartItemInterface) => item.id === action.payload
        );
        state.splice(index, 1);
      } else {
        getItem.count--;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addTocart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;
