"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { addTocart } from "@/app/redux/cartSlice";
import { ProductInterface } from "@/app/interfaces/productInterfaces";

export default function ProductView({ product }: {product : ProductInterface}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addTocart(product));
  };

  return (
    <div>
      <Image
        src={product.image}
        width={300}
        height={320}
        className="product-group w-full"
        alt="Picture of the author"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p> {product.title} </p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.shape}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <button
        onClick={addItemToCart}
        className="w-full py-1 mt-4 outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white rounded hover:bg-purple-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
