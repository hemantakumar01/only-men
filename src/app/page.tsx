"use client";

import Link from "next/link";
import React from "react";
import Home from "./pages/Home";
import Navbar from "@/components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="o">
      <Navbar />
      <Home />
      <Link href={"/admin/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default page;
