"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mails } from "lucide-react";
import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="flex bg-blue-300 sm:bg-inherit flex-col gap-3 xs:gap-5 justify-center p-4 xs:p-14">
      <h1 className="text-center text-3xl xs:text-5xl font-semibold text-gray-700 dark:text-primary">
        Newsletter
      </h1>
      <span className="text-center text-base xs:text-xl font-bold text-gray-500 dark:text-primary">
        Invite customers to Join your mailing
      </span>
      <div className=" flex items-center justify-center">
        {/* <Input className="w-[600px]" /> */}
        <Card className="flex items-center justify-center p-2 sm:p-4  border-2 w-full max-w-[500px]">
          <Mails className="" />
          <Input
            className=" flex-1 text-lg font-semibold text-gray-800 dark:text-primary border-none"
            placeholder="Your mail Here"
          />
          <Button className="sm:p-6">Subscribe</Button>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;
