"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PackageCheck, ShoppingBag } from "lucide-react";
import ImageGallery from "react-image-gallery";
import ReactStars from "react-stars";

type Props = {};

function page(props: Props) {
  const images = [
    {
      original:
        "https://rukminim2.flixcart.com/image/832/832/jvtujrk0/t-shirt/n/q/u/xl-2303701-roadster-original-imafgmvkhx3tagrc.jpeg?q=70&crop=false",
      thumbnail:
        "https://rukminim2.flixcart.com/image/832/832/jvtujrk0/t-shirt/n/q/u/xl-2303701-roadster-original-imafgmvkhx3tagrc.jpeg?q=70&crop=false",
    },
    {
      original:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/c/t/r/xxl-pct09201001-polo-plus-original-imafuvp5zyzpfn97.jpeg?q=70&crop=false",
      thumbnail:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/c/t/r/xxl-pct09201001-polo-plus-original-imafuvp5zyzpfn97.jpeg?q=70&crop=false",
    },
    {
      original:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/i/s/v/xxl-pct09201001-polo-plus-original-imafuvp5h7vwrysz.jpeg?q=70&crop=false",
      thumbnail:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/i/s/v/xxl-pct09201001-polo-plus-original-imafuvp5h7vwrysz.jpeg?q=70&crop=false",
    },
    {
      original:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/y/1/8/xxl-pct09201006-polo-plus-original-imafuvp2quvbymzx.jpeg?q=70&crop=false",
      thumbnail:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/y/1/8/xxl-pct09201006-polo-plus-original-imafuvp2quvbymzx.jpeg?q=70&crop=false",
    },
    {
      original:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/6/v/d/xxl-pct09201001-polo-plus-original-imafuvp5nqndyy6h.jpeg?q=70&crop=false",
      thumbnail:
        "https://rukminim2.flixcart.com/image/832/832/ke4kjgw0-0/t-shirt/6/v/d/xxl-pct09201001-polo-plus-original-imafuvp5nqndyy6h.jpeg?q=70&crop=false",
    },
  ];
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
      "https://example.com/images/product1.jpg", // Replace with actual image URLs
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
  // const [color, setColor] = React.useState<string>(productDetail.colors[0].hex);
  // const [size, setSize] = React.useState<string>(productDetail.sizes[0]);

  return (
    <div className="flex p-2 flex-col md:flex-row ">
      <div className="img flex-1 lg:flex-shrink-0  p-3  flex justify-center items-center ">
        <ImageGallery items={images} autoPlay />
      </div>
      <div className="details flex-1 p-3 flex flex-col gap-3">
        <span className="text-2xl font-semibold">{productDetail.name}</span>
        <p className="desc">{productDetail.description}</p>
        <div className="color flex flex-col gap-1">
          <strong>Color:</strong>
          <div className="flex items-center gap-3">
            {productDetail.colors.map((e, index) => (
              <button
                className="w-7 h-7 rounded-full shadow-md transition-all ease-in duration-75"
                // style={{
                //   backgroundColor: e.hex,
                //   scale: color === e.hex ? `1.1 ` : "none",
                // }}
                key={index}
                // onClick={() => setColor(e.hex)}
              />
            ))}
          </div>
        </div>

        <div className=" size flex flex-col gap-2">
          <strong>Size</strong>
          <div className="size flex gap-3 ">
            <div className="size-inputs">
              {productDetail.sizes.map((e, index) => (
                <label
                  key={index}
                  style={
                    {
                      // backgroundColor: e === size ? "#E0E0E0" : "inherit",
                    }
                  }
                  htmlFor="s"
                  className="s"
                  // onClick={() => setSize(e)}
                >
                  {e}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="rating ">
          <strong>Rating:</strong>
          <div className="flex items-center gap-2">
            <ReactStars value={productDetail.rating} size={20} />
            <span>({productDetail.reviews.length})</span>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <Button className="text-base py-6 border-2" variant={"outline"}>
            <ShoppingBag className="mr-2" /> Add To Cart
          </Button>
          <Button className="text-base py-6">
            {" "}
            <PackageCheck className="mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
//
