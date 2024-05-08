"use client";
import React from "react";

import { Button } from "@/components/ui/button";
type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="bg-[#0777ff4f] flex items-center justify-center sm:px-20 xs:px-10 px-5 ">
      <div className="content flex items-start flex-col flex-1 gap-3">
        <h1 className="text-xl xs:text-2xl md:text-4xl lg:text-5xl font-bold font-sans">
          Start Your Fassion Journey Here
        </h1>
        <span className=" text-[10px] xs:text-xs md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo
          assumenda doloremque exercitationem sunt laborum odio distinctio
          blanditiis necessitatibus rerum!
        </span>
        <Button className="xs:text-xs">Explore Now</Button>
      </div>
      <div className="flex-1 flex xs:items-center  justify-center">
        <img
          src="/assets/hero.png"
          alt=""
          className="md:h-full h-[250px] clipPtah"
        />
      </div>
    </div>
  );
}

export default HeroSection;
