"use client";
import React, { ReactElement } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { X } from "lucide-react";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  content: ReactElement;
};
const productDetail = {
  name: "Awesome Product Name",
  description:
    "Replace with a detailed and compelling description of the product, highlighting its features and benefits.",
  price: 19.99, // Adjust based on your product's price
  rating: 4.7, // Out of 5 stars
  reviews: [
    {
      author: "John Doe",
      content: "This product is amazing! Highly recommend!",
      rating: 5,
    },
    {
      author: "Jane Smith",
      content: "Very satisfied with the purchase. Great value for money.",
      rating: 4,
    },
  ],
  images: [
    "https://rukminim2.flixcart.com/image/832/832/jkwwgi80/t-shirt/q/u/m/l-2275369-roadster-original-imaf85qg8zmwyyyu.jpeg?q=70&crop=false", // Replace with actual image URLs
    "https://example.com/images/product1_side.jpg",
    "https://example.com/images/product1_detail.jpg",
  ],
  colors: [
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Black", hex: "#000000" },
    { name: "Green", hex: "#008000" }, // Add more colors as needed
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  // Optional properties (add as needed)
  stock: 100, // Current inventory level
  availability: "In Stock", // Availability status (e.g., "In Stock", "Pre-order")
  brand: "Your Brand Name",
  category: "Clothing", // Product category
  material: "Cotton", // Material composition
  weight: 0.5, // Weight in kilograms (or pounds)
  dimensions: {
    // Dimensions in centimeters (or inches)
    length: 20,
    width: 15,
    height: 10,
  },
};

const Cart = (props: Props) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>{props.content}</DrawerTrigger>
      <DrawerContent className="w-[300px] sm:max-w-sm top-0 left-auto ring-0  mt-0  ">
        <DrawerClose className="px-4 py-2">
          <X />
        </DrawerClose>
        <DrawerTitle className="text-center">Cart</DrawerTitle>

        <ScrollArea className="p-3 flex flex-col gap-2   overflow-y-scroll">
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />
          <CartItem
            name={productDetail.name}
            desc={productDetail.description}
            img={productDetail.images[0]}
          />

          <div className="total">
            <div className="flex items-center justify-between py-2">
              <h2 className="text-xl font-bold">Total</h2>
              <span className="text-xl font-semibold">₹37378</span>
            </div>
            <Button className="w-full">
              <Link href={"/checkout"}>Checkout</Link>
            </Button>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
