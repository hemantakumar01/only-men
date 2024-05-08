import React from "react";

type Props = {
  title: string;
  icon: React.JSX.Element;
  amount: number;
  percentage: number;
};

const Card = ({ amount, icon, percentage, title }: Props) => {
  return (
    <div className="1 border-2 shadow-md p-4 rounded-xl ">
      <div className="text text-sm font-serif flex items-center justify-between">
        <span>{title}</span>
        <h1 className="mr-6">{icon}</h1>
      </div>
      <h1 className="text-2xl font-bold mt-2">₹{amount}</h1>
      <span className="lastMonth text-xs">{percentage}% from last month</span>
    </div>
  );
};

export default Card;
