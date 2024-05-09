"use client";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import {
  BadgePercent,
  Bus,
  Heart,
  MapPin,
  MenuIcon,
  Search,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import Menu from "./Menu";
import { DrawerDemo } from "./Navbar/MenuDrawer";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="main flex flex-col  ">
      <div className="bg-slate-100  dark:text-secondary hidden sm:block">
        <div className="max-w-screen-xl mx-auto w-full py-2 flex items-center justify-between">
          <p className="text-xs font-semibold">Welcom to Mens Store</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs border-r-2 px-1">
              <MapPin size={"18px"} className="text-blue-400" />
              Deliver to <strong>784505</strong>
            </div>
            <div className="flex items-center gap-2 text-xs border-r-2 px-1">
              <Bus size={"18px"} className="text-blue-400" />
              Track Your Order
            </div>
            <div className="flex items-center gap-2 text-xs border-r-2 px-1">
              <BadgePercent size={"18px"} className="text-blue-400" />
              All Offers
            </div>
          </div>
        </div>
      </div>
      <div className="  flex  justify-between  mx-auto w-full  max-w-screen-xl  py-2  px-2 xl:px-0  ">
        <Link href={"/"} className="cursor-pointer ">
          <h2 className="text-lg sm:text-2xl pl-2 dark:bg-white flex items-center font-bold italic bg-black  text-secondary  tracking-[3px] rounded cursor-pointer">
            Only{" "}
            <span className="bg-blue-400 py-1 rounded-l-[10px] pr-2">Men</span>
          </h2>
        </Link>

        <div className="fields hidden  sm:flex items-center gap-3 justify-end ">
          <div className="input relative flex items-center   ">
            <Input
              type="text"
              placeholder="search..."
              className="bg-slate-50 pl-9 ] hidden sm:block md:min-w-[300px] xl:min-w-[600px] lg:min-w-[400px] w-full"
            />
            <Search className="absolute hidden sm:block top-[9px] left-[10px] text-blue-300" />
          </div>
          <div className="sign border-r-2 px-2 flex text-sm font-semibold items-center gap-1">
            <User2Icon
              size={"20px"}
              fontWeight={700}
              className="text-blue-400 font-bold"
            />
            <Link href={"/signup"}>Sign Up</Link>
          </div>
          <Cart
            content={
              <div className="sign relative border-r-2 px-2 flex text-sm font-semibold items-center gap-1">
                <ShoppingCartIcon
                  size={"20px"}
                  className="text-blue-400 font-bold"
                  fontWeight={700}
                />
                <span>Cart</span>
                <span className="w-4 h-4 rounded-[50%] bg-red-500 text-secondary flex items-center justify-center text-[9px] font-bold absolute top-[-10px] left-[-3px]">
                  1
                </span>
              </div>
            }
          />
          <Wishlist
            content={
              <div className="sign border-r-2 px-2 flex text-sm font-semibold items-center gap-1 relative">
                <Heart
                  size={"20px"}
                  className="text-blue-400 font-bold"
                  fontWeight={700}
                />
                <span className="w-4 h-4 rounded-[50%] bg-red-500 text-secondary flex items-center justify-center text-[9px] font-bold absolute top-[-10px] left-[-3px]">
                  1
                </span>
                <span>Wishlist</span>
              </div>
            }
          />
        </div>
        <DrawerDemo
          content={
            <div className="mobileMenu flex items-center gap-2 sm:hidden">
              <img
                className="w-9 h-9 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVR1d0_9PINxXz8d17JphZo3fSmegrgaeZQ&s"
                alt=""
              />
              <MenuIcon />
            </div>
          }
        />
      </div>
      <div className="dropdowns  py-2 border-y hidden lg:block">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
