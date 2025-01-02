"use client";

import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import { cartItemInterface } from "@/app/interfaces/productInterfaces";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cart);
  const getGrandTotalPrice = () => {
    return cartItem
      .reduce(
        (acc, item: cartItemInterface) => acc + item.count * item.price,
        0
      )
      .toFixed(2);
  };

  const getTotalPrice = (item: cartItemInterface) => {
    return (item.price * item.count).toFixed(2);
  };

  return (
    <div className="p-8">
      {cartItem.length === 0 ? (
        <h1 className="text-4xl pb-10">Your Cart is Empty!!</h1>
      ) : (
        <>
          {" "}
          {cartItem.map((item: cartItemInterface) => {
            return (
              <div
                key={item.id}
                className="flex flex-row justify-between border border-inherit rounded my-4 p-4"
              >
                <div>
                  <Image
                    className="cartImage"
                    src={item.image}
                    width={70}
                    height={90}
                    alt={item.title}
                  />
                </div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>{item.count}</p>

                <div>
                  <button
                    onClick={() => dispatch(incrementItem(item.id))}
                    className="px-4 py-2 border border-inherit rounded mr-2"
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button
                    onClick={() => dispatch(decrementItem(item.id))}
                    className="px-4 py-2 border border-inherit rounded mr-2"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    {" "}
                    Remove{" "}
                  </button>
                </div>
                <div className="flex flex-col">
                  Total
                  <p>${getTotalPrice(item)}</p>
                </div>
              </div>
            );
          })}
          <div className="text-right text-xl font-bold">
            Grand Total: ${getGrandTotalPrice()}
          </div>
        </>
      )}
    </div>
  );
}
