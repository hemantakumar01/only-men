"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="dark:text-white">
      <div className=" grid gap-6 grid-cols-2 md:grid-cols-3 p-10 xs:px-16 grid-flow-row-dense">
        <div className="flex flex-col gap-[14px]  ">
          <h4 className="text-xl text-gray-700 dark:text-primary font-semibold ">
            Page
          </h4>
          <div className="links flex flex-col gap-2  text-gray-700 dark:text-primary font-semibold text-sm">
            <Link href={"/pages/home"}>Home</Link>
            <Link href={"/pages/home"}>Catelog</Link>
            <Link href={"/pages/products"}>Products</Link>
            <Link href={"/pages/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] ">
          <h4 className="text-xl text-gray-700 dark:text-primary font-semibold ">
            Follow Us
          </h4>
          <div className="links flex flex-col gap-2 text-gray-700 dark:text-primary font-semibold text-sm">
            <Link href={"/pages/home"}>Home</Link>
            <Link href={"/pages/home"}>Catelog</Link>
            <Link href={"/pages/products"}>Products</Link>
            <Link href={"/pages/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] col-span-2 md:col-span-1 ">
          <h4 className="text-xl text-gray-700 dark:text-primary font-semibold ">
            Page
          </h4>
          <span className="links text-gray-700 dark:text-primary font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In odit
            quos, sed autem dicta culpa rem alias officiis nihil atque! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            libero iure sequi debitis, illo, sit culpa magni
          </span>
        </div>
      </div>
      <div className="bg-slate-100 p-3 text-center font-semibold text-gray-600 dark:text-black text-xs sm:text-base ">
        Copywrite 2024 - design & build by Hemant
      </div>
    </footer>
  );
};

export default Footer;
