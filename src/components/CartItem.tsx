"use client";
import React from "react";
import { Trash } from "lucide-react";
import { Card } from "./ui/card";
type Props = {
  img: string;
  name: string;
  desc: string;
};

const CartItem = (props: Props) => {
  return (
    <Card className="flex items-start p-2 gap-2 ">
      <img src={props.img} alt="" className="w-12 h-18 rounded-lg" />
      <div className="details max-w-[150px] space-y-1">
        <p className=" text-xs font-semibold overflow-hidden text-ellipsis  whitespace-nowrap ">
          {props.name}
        </p>
        <p className=" text-xs font-[400] overflow-hidden text-ellipsis whitespace-nowrap ">
          {props.desc}
        </p>
        <div className="flex items-center gap-2 ">
          <Card className="px-2 rounded-sm">-</Card>
          <span className="text-sm">1</span>
          <Card className="px-2 rounded-sm">+</Card>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 justify-between h-full">
        <span className="text-xs font-bold">₹37378</span>
        <Trash size={20} className="text-red-400" />
      </div>
    </Card>
  );
};

export default CartItem;
