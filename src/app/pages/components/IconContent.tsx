"use client";
import React, { ReactElement } from "react";

type Props = {
  title1: string;
  title2: string;
  icon: ReactElement;
};

const IconContent = (props: Props) => {
  return (
    <div className=" bg-slate-50 flex items-center gap-2 rounded-md  border w-[160px] sm:w-[220px] py-4 px-2 sm:px-4">
      {props.icon}
      <span className=" text-xs font-bold dark:text-black  ">
        {props.title1}
        <br />
        {props.title2}
      </span>
    </div>
  );
};

export default IconContent;
