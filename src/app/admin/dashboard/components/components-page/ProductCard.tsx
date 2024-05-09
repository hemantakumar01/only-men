"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import React from "react";
import ReactStars from "react-stars";
import { useRouter } from "next/navigation";
type Props = {};

const ProductCard = (props: Props) => {
  const route = useRouter();

  return (
    <Card className="w-[175px] md:w-[200px]  px-3 p-4 flex flex-col gap-2 cursor-pointer">
      <img
        src="https://rukminim2.flixcart.com/image/832/832/jvtujrk0/t-shirt/n/q/u/xl-2303701-roadster-original-imafgmvkhx3tagrc.jpeg?q=70&crop=false"
        alt=""
        className="rounded-lg"
        onClick={() => route.push("/pages/products/hudfij")}
      />
      <div className="rating flex items-center justify-between">
        <ReactStars count={5} value={3.5} size={24} color2={"#ffd700"} />
        <span>(16)</span>
      </div>
      <div className="details flex  flex-col gap-2">
        <div className="price flex  gap-2 items-center">
          <div className="mainPrice text-lg font-bold">₹3000</div>
          <div className="discoun text-sm text-red-400 font-semibold line-through ">
            ₹12300
          </div>
        </div>
        <div className="buttons flex items-center gap-1 justify-between">
          <Button className="text-[10px] sm:text-base">ADD TO CART</Button>
          <span>
            <Heart />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
