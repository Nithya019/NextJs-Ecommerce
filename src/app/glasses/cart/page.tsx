"use client";

import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import { cartItemInterface } from "@/app/interfaces/productInterfaces";
import CartAction from "../cartAction/page";

export default function Cart() {
  const cartItem = useSelector((state: RootState) => state.cart);
  const getGrandTotalPrice = () => {
    return cartItem
      .reduce(
        (acc, item: cartItemInterface) => acc + item.count * item.price,
        0
      )
      .toFixed(2);
  };

  const getTotalPrice = (item) => {
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
                  <CartAction itemId={item.id} />
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
