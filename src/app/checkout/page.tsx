import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit } from "lucide-react";
import React from "react";

type Props = {};
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
const Page = (props: Props) => {
  return (
    <main className="flex flex-col md:flex-row p-3 space-y-3  md:items-center md:h-[100vh] md:w-[100vw] md:justify-center items-center">
      <div className="flex-1">
        <div className=" flex items-center justify-between">
          <span className="text-sm font-bold">MY BAG</span>
          <p className="text-xs font-[400]">
            items are recised for 60 minitues
          </p>
        </div>
        <ScrollArea className="py-2 space-y-2">
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
        </ScrollArea>
        <Card className="address py-6 px-3 space-y-2">
          <div className=" flex items-center justify-between font-bold">
            <h2>Delivery Address</h2>
            <Edit size={20} />
          </div>

          <p className="text-sm">
            No1 Namonigoan Millanpally, 784505, sonitpur Assam No1 Namonigoan
            Millanpally, 784505, sonitpur Assam
          </p>
        </Card>
      </div>
      <div className="space-y-2 px-4 md:space-y-5 flex-1">
        <h2 className="text-xl font-bold">Total</h2>
        <div className="flex items-center justify-between text-sm ">
          <strong>Subtotal:</strong>
          <p>₹8578</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong>Delivery:</strong>
          <p>₹88</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong>Discount:</strong>
          <p>₹100</p>
        </div>
        <Button className="w-full">Pay Now</Button>
        <div className="">
          <span className="font-bold text-sm">We Accept Here :</span>
          <img
            className="w-[300px] h-[100px] object-contain mx-auto"
            src="https://as1.ftcdn.net/v2/jpg/05/63/00/96/1000_F_563009614_0Pfnd5c4fWwWgAUfhXoQkfOX4XSi78Ba.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
