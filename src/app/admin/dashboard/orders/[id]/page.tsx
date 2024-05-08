import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/SimpleDataTable";
import { Button } from "@/components/ui/button";
type Props = {};
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
const payments = [
  { id: "1", amount: 100, status: "pending", email: "example1@example.com" },
  { id: "2", amount: 200, status: "processing", email: "example2@example.com" },
  { id: "3", amount: 150, status: "success", email: "example3@example.com" },
  { id: "4", amount: 300, status: "failed", email: "example4@example.com" },
  { id: "5", amount: 250, status: "pending", email: "example5@example.com" },
  { id: "6", amount: 180, status: "processing", email: "example6@example.com" },
  { id: "7", amount: 220, status: "success", email: "example7@example.com" },
  { id: "8", amount: 120, status: "failed", email: "example8@example.com" },
  { id: "9", amount: 350, status: "pending", email: "example9@example.com" },
  {
    id: "10",
    amount: 270,
    status: "processing",
    email: "example10@example.com",
  },
  { id: "11", amount: 180, status: "success", email: "example11@example.com" },
  { id: "12", amount: 200, status: "failed", email: "example12@example.com" },
  { id: "13", amount: 150, status: "pending", email: "example13@example.com" },
  {
    id: "14",
    amount: 300,
    status: "processing",
    email: "example14@example.com",
  },
  { id: "15", amount: 250, status: "success", email: "example15@example.com" },
  { id: "16", amount: 220, status: "failed", email: "example16@example.com" },
  { id: "17", amount: 100, status: "pending", email: "example17@example.com" },
  {
    id: "18",
    amount: 350,
    status: "processing",
    email: "example18@example.com",
  },
  { id: "19", amount: 180, status: "success", email: "example19@example.com" },
  { id: "20", amount: 200, status: "failed", email: "example20@example.com" },
];

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
const page = (props: Props) => {
  return (
    <div className=" w-full h-full">
      <div className="headings my-4 text-2xl font-[600] flex items-center ">
        <h1>
          Order ID- <span className="text-red-400">njhudgbfdfkojhdfjdif</span>
        </h1>
      </div>
      <div className="grid grid-cols-8 gap-4 w-full">
        <div className="col-span-8 lg:col-span-4 xl:col-span-5 ">
          <DataTable columns={columns} data={payments} />
          <div className="custer my-5 sm:px-7 xs:py-5 rounded-md border  shadow-md p-4 xs:p-0 ">
            <h1 className="border-b-2 xs:mx-8 pb-2 text-xl font-[500]">
              Customer Order Details
            </h1>
            <div className="details flex justify-between items-center xs:mx-8 border-b-2 py-3">
              <span className="font-[500]">Name</span>
              <span className="text-sm">Hemanta Kumar Paswan</span>
            </div>
            <div className="details flex justify-between items-center xs:mx-8 border-b-2 py-3">
              <span className="font-[500]">Phone</span>
              <span className="text-sm">9395585260</span>
            </div>
            <div className="details flex justify-between items-center xs:mx-8 border-b-2 py-3">
              <span className="font-[500]">email</span>
              <span className="text-sm">hemantakumarpaswan@gmail.com</span>
            </div>
            <div className="details flex justify-between items-center xs:mx-8 border-b-2 py-3">
              <span className="font-[500]">Country</span>
              <span className="text-sm">India</span>
            </div>
            <div className="text-right mt-4">
              <Button>Viwe Detail</Button>
            </div>
          </div>
        </div>

        <div className="col-span-8 xl:col-span-3 lg:col-span-4   h-full flex flex-col gap-5">
          <div className="delivery border-2 rounded-md shadow-md p-4 sx:px-10 sx:py-6">
            <h1 className="text-lg font-bold">Delivery Address</h1>
            <div className="">
              <div className="flex items-center gap-2 font-[500]">
                <span className="font-[600]">Address line:</span>
                <span className="text-sm">Tis is Addsress</span>
              </div>
              <div className="flex items-center gap-2 font-[500]">
                <span className="font-[600]">Flate/Building:</span>
                <span className="text-sm">Tis is Addsress</span>
              </div>
              <div className="flex items-center gap-2 font-[500]">
                <span className="font-[600]">Streat Name:</span>
                <span className="text-sm">Anglessy Road</span>
              </div>
              <div className="flex items-center gap-2 font-[500]">
                <span className="font-[600]">Pincode:</span>
                <span className="text-sm">784505</span>
              </div>
              <div className="text-right">
                <Button>Print Lable</Button>
              </div>
            </div>
          </div>
          <div className="xs:p-10 p-4 border-2 rounded-md shadow-md">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">Order Summery</h1>
              <Button
                variant={"secondary"}
                className="text-yellow-400 font-bold"
              >
                Update
              </Button>
            </div>
            <div className=" mt-4 border-b-2 py-2 flex items-center justify-between text-sm">
              <span className="font-[600]">Order Created</span>
              <span>Sun 2nd Jan 2024 </span>
            </div>
            <div className=" mt-4 border-b-2 py-2 flex items-center justify-between text-sm">
              <span className="font-[600]">Creation Time</span>
              <span>06:00 PM</span>
            </div>
            <div className=" mt-4 border-b-2 py-2 flex items-center justify-between text-sm">
              <span className="font-[600]">Subtotal</span>
              <span>888</span>
            </div>
            <div className=" mt-4 border-b-2 py-2 flex items-center justify-between text-sm">
              <span className="font-[600]">Delivery Fee</span>
              <span>₹0 </span>
            </div>
            <div className=" mt-4 border-b-2 py-2 flex items-center justify-between text-sm">
              <span className="font-[600]">Status</span>
              <span>Pending </span>
            </div>
          </div>
          <div className=" rounded-md  shadow-md border-2 px-10 py-4 flex items-center justify-between text-base">
            <span className="font-[600] ">Total</span>
            <span>₹577 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
