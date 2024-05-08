"use client";

import React, { Children } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ShoppingBasket,
  LayoutDashboard,
  MessagesSquare,
  UsersRound,
  ShoppingCart,
  Users2,
  CircleChevronLeft,
  CircleChevronRight,
  BadgeDollarSign,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useWindowWidth } from "@react-hook/window-size";

export default function ResizableDemo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const Width = useWindowWidth();

  const smallScreen = Width < 600;

  React.useEffect(() => {
    if (smallScreen) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [Width]);
  return (
    <div className="xs:w-full w-[100vw]    xs:p-4 ">
      <div className=" border-[3px] md:p-4 shadow-md rounded-xl min-h-[100vh] flex flex-col">
        <div className="header p-3 border-b rounded ">
          <Header />
        </div>
        <div className="content flex flex-1 ">
          <div
            className={`sidebar border-r min-h-full pt-8 relative w-${
              isCollapsed ? "fit" : "52"
            }`}
          >
            {!smallScreen && (
              <div
                className="absolute bg-secondary top-[10px] right-[-10px] cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? <CircleChevronRight /> : <CircleChevronLeft />}
              </div>
            )}
            <SideBar
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  label: "128",
                  icon: LayoutDashboard,
                  variant: "default",
                  href: "/admin/dashboard",
                },
                {
                  title: "Products",
                  label: "9",
                  icon: ShoppingBasket,
                  variant: "ghost",
                  href: "/admin/dashboard/products",
                },
                {
                  title: "Users",
                  label: "",
                  icon: UsersRound,
                  variant: "ghost",
                  href: "/admin/dashboard/users",
                },
                {
                  title: "Orders",
                  label: "23",
                  icon: ShoppingCart,
                  variant: "ghost",
                  href: "/admin/dashboard/orders",
                },
                {
                  title: "Trasections",
                  label: "",
                  icon: BadgeDollarSign,
                  variant: "ghost",
                  href: "/admin/dashboard/transections",
                },
                {
                  title: "Archive",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
            <Separator />
            <SideBar
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Social",
                  label: "972",
                  icon: Users2,
                  variant: "ghost",
                },
                {
                  title: "Updates",
                  label: "342",
                  icon: AlertCircle,
                  variant: "ghost",
                },
                {
                  title: "Forums",
                  label: "128",
                  icon: MessagesSquare,
                  variant: "ghost",
                },
                {
                  title: "Shopping",
                  label: "8",
                  icon: ShoppingCart,
                  variant: "ghost",
                },
                {
                  title: "Promotions",
                  label: "21",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
          </div>
          <div className="sidebacontent py-8 px-4 w-full overflow-hidden ">
            {children}
          </div>
        </div>
        <div className="footer p-3 border-t">Footer</div>
      </div>
    </div>
  );
}
