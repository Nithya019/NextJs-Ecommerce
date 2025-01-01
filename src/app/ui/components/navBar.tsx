"use client";

import NavLinks from "./navLinks";
import Link from "next/link";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cartItem = useSelector((state: RootState) => state.cart);
  return (
    <div className="sticky top-0">
      <div className="flex h-[60px] items-center px-4">
        <div className="flex grow space-x-4 grow">
          <NavLinks />
        </div>
        <Link href="/glasses/cart">Cart ({cartItem.length})</Link>
      </div>
    </div>
  );
}
