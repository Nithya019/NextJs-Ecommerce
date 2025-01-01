"use client";

import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "@/app/redux/cartSlice";

type Props = {
    itemId: number
}

export default function Page({ itemId }: Props) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(incrementItem(itemId))}
        className="px-4 py-2 border border-inherit rounded mr-2"
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => dispatch(decrementItem(itemId))}
        className="px-4 py-2 border border-inherit rounded mr-2"
      >
        {" "}
        -{" "}
      </button>
      <button onClick={() => dispatch(removeFromCart(itemId))}> Remove </button>
    </>
  );
}
