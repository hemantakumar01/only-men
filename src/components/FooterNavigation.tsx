"use client";
import { Home, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";

type Props = {};

const FooterNavigation = (props: Props) => {
  return (
    <div className="fixed p-2 md:hidden  bottom-0 left-auto right-auto mx-auto bg-gray-50 w-full bg-transparent flex items-center justify-around shadow-stone-300">
      <div className="flex border-2 rounded-lg items-center justify-around w-full bg-slate-50 h-full px-2 py-4 ">
        {" "}
        <Link href={"/"} className=" p-1 px-3 ">
          <Home />
        </Link>
        <Link href={"/pages/products"} className="">
          <Search />
        </Link>
        <Cart
          content={
            <div className="relative">
              <span className="bg-red-500 absolute h-6 rounded-full text-xs font-bold text-white w-6 flex items-center justify-center top-[-15px] right-[-15px]">
                1
              </span>
              <ShoppingCart />
            </div>
          }
        />
        <div className="">
          <UserRound />
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
