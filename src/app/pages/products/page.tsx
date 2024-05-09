import { Input } from "@/components/ui/input";
import React from "react";
import ProductCard from "@/app/admin/dashboard/components/components-page/ProductCard";
import FilterDrawer from "@/app/admin/dashboard/components/components-page/FilterDrawer";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type Props = {};

const page = (props: Props) => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  return (
    <div className=" p-3 flex ">
      <div className="sidebar border-r hidden sm:block">
        <div className="p-4 flex gap-2 flex-col">
          <h3 className="font-semibold">Category</h3>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="py-1 w-full">
                All
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Apple" id="Apple" />
              <Label htmlFor="Apple" className="py-1 w-full">
                Option Two
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="samsung" id="samsung" />
              <Label htmlFor="samsung" className="py-1 w-full">
                Samsung
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="py-1 w-full">
                Option Two
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="p-4 size flex flex-col gap-2">
          <h3 className="font-semibold">Colors</h3>
          <div className="color-selector flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <RadioGroup key={index}>
                <RadioGroupItem
                  value="red"
                  className={`bg-${color}-500 border-none`}
                />
              </RadioGroup>
            ))}
          </div>
        </div>
        <div className="p-4 size flex flex-col gap-2">
          <h3 className="font-semibold">Size</h3>
          <div className="size flex gap-3 ">
            <Card className="py-1 px-2">M</Card>
            <Card className="py-1 px-2">S</Card>
            <Card className="py-1 px-2">L</Card>
            <Card className="py-1 px-2">XL</Card>
            <Card className="py-1 px-2">XXL</Card>
          </div>
        </div>
        <div className="p-4 size flex flex-col gap-2">
          <h3 className="font-semibold">Price</h3>
          <Slider defaultValue={[440]} max={1000} step={1} />
        </div>
        <div className="p-4 size flex flex-col gap-2">
          <h3 className="font-semibold">Sort</h3>

          <RadioGroup defaultValue="all" className="">
            <div className="flex items-center space-x-2  ">
              <RadioGroupItem value="all" id="all" />
              <Label className="py-1 w-full " htmlFor="all">
                All
              </Label>
            </div>

            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="asc" id="asc" />
              <Label className="py-1 w-full " htmlFor="asc">
                Low to High
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="dec" id="dec" />
              <Label className="py-1 w-full " htmlFor="dec">
                High to Low
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="popular" id="popular" />
              <Label className="py-1 w-full " htmlFor="popular">
                Popular
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="rating" id="rating" />
              <Label className="py-1 w-full " htmlFor="rating">
                Rating
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-3 md:px-7 gap-4">
        <div className="flex items-center gap-2 ">
          <Input placeholder="Search..." className="p-4 border-2" />
          <Button className="w-[200px]">Submit</Button>
        </div>
        <div className="flex gap-1 flex-wrap mt-4 sm:mt-0  justify-center  sm:justify-start flex-1">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <FilterDrawer />
    </div>
  );
};

export default page;
