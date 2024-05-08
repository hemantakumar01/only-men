"use client";
import React from "react";

import {
  UsersRound,
  DollarSign,
  WalletMinimal,
  AudioWaveform,
} from "lucide-react";
import Card from "./components/Card";

import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { DataTableDemo } from "./components/DataTable";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 390,
    pv: 400,
    amt: 100,
  },
];

function page() {
  let theame;
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    theame = localStorage.getItem("theme");
    // Use the data
  } else {
    // Handle the case where localStorage is not available (e.g., initial render)
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="Total Revenue"
          amount={500.88}
          icon={<DollarSign />}
          percentage={90.3}
        />
        <Card
          title="Subscriptions"
          amount={451.88}
          icon={<UsersRound />}
          percentage={67.3}
        />
        <Card
          title="Sales"
          amount={90.88}
          icon={<WalletMinimal />}
          percentage={20.5}
        />
        <Card
          title="Sales"
          amount={45.88}
          icon={<AudioWaveform />}
          percentage={20.3}
        />
      </div>
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-4 mt-3 ">
        <div className=" border-2 shadow-md p-4 rounded-xl min-h-[300px] w-full  ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill={theame === "dark" ? "white" : "black"} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className=" border-2 shadow-md p-3 rounded-xl  overflow-hidden  ">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
}

export default page;
