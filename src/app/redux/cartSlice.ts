"use client";
import { createSlice } from "@reduxjs/toolkit";
import { cartItemInterface } from "@/app/interfaces/productInterfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as cartItemInterface[],
  reducers: {
    addTocart: (state, action) => {
      const itemExists = state.find(
        (item: cartItemInterface) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.count++;
      } else {
        if (action.payload) {
          state.push({ ...action.payload, count: 1 });
        }
      }
    },
    removeFromCart: (state, action) => {
      const getItemIndex = state.findIndex(
        (item: cartItemInterface) => item.id === action.payload
      );
      state.splice(getItemIndex, 1);
    },
    incrementItem: (state, action) => {
      const getItem = state.find(
        (item: cartItemInterface) => item.id === action.payload
      );
      if (getItem) {
        getItem["count"]++;
      }
    },
    decrementItem: (state, action) => {
      const getItem = state.find(
        (item: cartItemInterface) => item.id === action.payload
      );
      if (getItem && getItem["count"] === 1) {
        const index = state.findIndex(
          (item: cartItemInterface) => item.id === action.payload
        );
        state.splice(index, 1);
      } else {
        if (getItem) getItem["count"]--;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addTocart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;
