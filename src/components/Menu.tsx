import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
type Props = {};
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
      },
      {
        title: "Clothing",
        link: "/products/clothing",
      },
      {
        title: "Electronics",
        link: "/products/electronics",
      },
      {
        title: "Homeware",
        link: "/products/homeware",
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
    title: "Account",
    items: [
      {
        title: "Login",
        link: "/login",
      },
      {
        title: "Register",
        link: "/register",
      },
      {
        title: "My Orders",
        link: "/account/orders",
      },
    ],
  },
  {
    title: "Support",
    link: "/pages/support",
  },
];
const Menu = (props: Props) => {
  return (
    <Menubar className="border-none flex  gap-2 justify-around max-w-screen-lg mx-auto ">
      {navItems.map((e, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="bg-blue-50 min-w-[100px] flex items-center justify-center cursor-pointer px-5 py-2 rounded-2xl text-sm dark:text-secondary">
            {e.link ? (
              <Link href={e.link}>{e.title}</Link>
            ) : (
              <span className="data-[state=open]:bg-red-400 flex items-center gap-2">
                {e.title} <ChevronDown size={"16px"} />
              </span>
            )}
          </MenubarTrigger>
          {e.items && (
            <MenubarContent>
              {e.items.map((items, index) => (
                <Link href={items.link} key={index}>
                  <MenubarItem className="cursor-pointer">
                    {items.title}
                  </MenubarItem>
                </Link>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default Menu;
