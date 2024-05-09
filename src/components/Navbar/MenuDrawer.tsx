"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { ReactElement } from "react";
import {
  AlignCenter,
  CookingPot,
  KeyRound,
  Plug,
  Shirt,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
type Props = {
  content: ReactElement;
};
const size = 20;
const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Products",
    items: [
      {
        title: "All",
        link: "/pages/products",
        icon: <AlignCenter size={size} />,
      },
      {
        title: "Clothing",
        link: "/products/clothing",
        icon: <Shirt size={size} />,
      },
      {
        title: "Electronics",
        link: "/products/electronics",
        icon: <Plug size={size} />,
      },
      {
        title: "Homeware",
        link: "/products/homeware",
        icon: <CookingPot size={size} />,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Login",
        link: "/login",
        icon: <KeyRound size={size} />,
      },
      {
        title: "Register",
        link: "/register",
        icon: <User size={size} />,
      },
      {
        title: "My Orders",
        link: "/account/orders",
        icon: <ShoppingBag size={size} />,
      },
    ],
  },
  {
    title: "Services",
    link: "/pages/services",
  },
  {
    title: "Blog",
    link: "/pages/blog",
  },
  {
    title: "About Us",
    link: "/pages/about",
  },
  {
    title: "Contact",
    link: "/pages/contact",
  },

  {
    title: "Support",
    link: "/pages/support",
  },
];
export function DrawerDemo(props: Props) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{props.content}</DrawerTrigger>
      <DrawerContent className="h-screen left-auto right-0 top-0 mt-0 w-[300px] rounded-none">
        <ScrollArea className="h-screen p-3">
          <DrawerClose>
            <div className="p-2 ">
              <X className="font-semibold text-xl" />
            </div>
          </DrawerClose>
          <Card>
            {navItems.map((e, index) => (
              <Link
                href={e.link ? e.link : ""}
                className="p-2 text-left flex  flex-col gap-1  "
                key={index}
              >
                {e.items ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="">
                      <AccordionTrigger className="no-underline  font-normal ">
                        {e.title}
                      </AccordionTrigger>
                      <AccordionContent
                        key={index}
                        className=" grid grid-cols-2 gap-3  p-2 relative "
                      >
                        {e.items.map((items, index) => (
                          <Link
                            href={items.link}
                            className=" border rounded-md p-3 flex justify-start gap-2 text-xs items-center bg- "
                            key={index}
                          >
                            {items.icon}
                            <DrawerClose className=" ">
                              {items.title}
                            </DrawerClose>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <DrawerClose className="w-full  text-left py-2">
                    {e.title}
                  </DrawerClose>
                )}
              </Link>
            ))}
          </Card>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
