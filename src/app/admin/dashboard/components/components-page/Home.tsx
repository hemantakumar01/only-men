"use client";
import React from "react";
import HeroSection from "./HeroSection";
import { Clock2, Package, PackageCheck, WalletMinimal } from "lucide-react";
import IconContent from "./IconContent";
import { Button } from "@/components/ui/button";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { CarouselDemo } from "./Carosal";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <div className="flex items-center justify-center gap-8 my-6 flex-wrap">
        <IconContent
          title1="Super Fast"
          title2="Free Delivery"
          icon={<Clock2 size={30} className="text-gray-500" />}
        />
        <IconContent
          title1="Non Contact"
          title2="Shipping"
          icon={<Package size={30} className="text-gray-500" />}
        />
        <IconContent
          title1="Super Secure"
          title2="Payment System"
          icon={<WalletMinimal size={30} className="text-gray-500" />}
        />
        <IconContent
          title1="Super Fast"
          title2="Free Delivery"
          icon={<Package size={30} className="text-gray-500" />}
        />
      </div>
      <div className=" my-10">
        <h1 className="p-3 md:py-5 text-2xl md:text-4xl font-bold">
          Featured Products
        </h1>
        <CarouselDemo />
      </div>
      <div className="">
        <h1 className="text-center text-xl font-semibold md:text-2xl md:my-3 lg:text-4xl border-b-2 py-1">
          Our Best Sellers
        </h1>
        <div className="grid grid-cols-3 gap-2 p-2 md:gap-4 md:p-4">
          <div className="div1 cursor-pointer  hover:opacity-[0.6] relative">
            {/* <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div> */}
            <img src="/assets/polotshirt.jpg" alt="" className="rounded-sm" />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold">
              Polo T-shits
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>

          <div className="div2 cursor-pointer  hover:opacity-[0.6] relative">
            <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div>
            <img src="/assets/ishirt.jpg" alt="" className="rounded-sm" />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold font-sans">
              Cotton T-shits
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>
          <div className="div3 cursor-pointer  hover:opacity-[0.6] relative">
            <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div>
            <img
              src="/assets/Default_men_model_is_wearing_shorts_tshirt_background_is_gray_3.jpg"
              alt=""
              className="rounded-sm"
            />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold font-sans">
              Mens Sorts
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>
          <div className="div4 cursor-pointer  hover:opacity-[0.6] relative">
            <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div>
            <img src="/assets/leather.jpg" alt="" className="rounded-sm" />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold font-sans">
              Men Sorts
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>
          <div className="div5 cursor-pointer  hover:opacity-[0.6] relative">
            <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div>
            <img src="/assets/jacket.jpg" alt="" className="rounded-sm" />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold font-sans">
              Polo T-shits
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>
          <div className="div6 cursor-pointer  hover:opacity-[0.6] relative">
            <div className="bg-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden hover:block ">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Viwe All
              </Button>
            </div>
            <img src="/assets/hoodie.jpg" alt="" className="rounded-sm" />
            <h1 className="text-xs text-center font-semibold md:text-lg md:mb-1 md:font-bold font-sans">
              Polo T-shits
            </h1>
            <div className=" flex items-center justify-center gap-1">
              <span className="w-3 h-3 bg-[#212122] rounded-full "></span>
              <span className="w-3 h-3 bg-[#e25951] rounded-full "></span>
              <span className="w-3 h-3 bg-[#dcdddc] rounded-full "></span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <section className="p-3 my-4">
        <h3 className="text-center text-sm">Voice of Elegance</h3>
        <h2 className="text-center text-2xl md:text-2xl my-3 lg:text-3xl text-gray-700 font-semibold">
          What Our Customers says
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:px-8 my-4 gap-6 mx-7 sm:mx-16 lg:mx-6 xl:mx-25">
          <div className="flex flex-col gap-2 bg-slate-50 border-2 border-gray-200 rounded-xl p-6 px-10 ">
            <img src="/assets/quote.png" className="w-5" alt="" />
            <h5 className="text-lg font-bold">
              Exceptional Quality and Style!
            </h5>
            <span className="text-sm font-semibold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              necessitatibus ipsa omnis saepe tempora! Error, repellendus.
            </span>
            <div className="flex items-start mt-2 gap-3">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                className="w-9 h-9 rounded-full"
              />
              <div className="flex flex-col  ">
                <span className="font-bold">Joushan Mehmeth</span>
                <p className="text-sm">Customer</p>
              </div>
            </div>
          </div>
          <div className=" rounded-lg relative">
            <img
              src="/assets/blue.jpg"
              alt=""
              className="h-[280px] w-full rounded-lg "
            />
            <span className="absolute bottom-5 left-4 p-3 dark:text-black bg-white rounded-2xl font-bold">
              A Seamless Shoping Exprience
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-slate-50 border-2 border-gray-200 rounded-xl p-6 px-10 ">
            <img src="/assets/quote.png" className="w-5" alt="" />
            <h5 className="text-lg font-bold">
              Exceptional Quality and Style!
            </h5>
            <span className="text-sm font-semibold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              necessitatibus ipsa omnis saepe tempora! Error, repellendus.
            </span>
            <div className="flex items-start mt-2 gap-3">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                className="w-9 h-9 rounded-full"
              />
              <div className="flex flex-col  ">
                <span className="font-bold">Joushan Mehmeth</span>
                <p className="text-sm">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
