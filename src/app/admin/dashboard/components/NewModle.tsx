"use client";
import React, { ReactElement, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form"; // Form validation library (consider using)
// import { Shadan } from "@shadan/shadan"; Shadan image upload component
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Props = {
  open: ReactElement;
};

const NewModle = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState<Object[]>([]);

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    // - Validate data (consider using form validation library)
    // - Send data (product details and images) to your backend API for storage
    // - Handle success or error messages
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger>{props.open}</DialogTrigger>
      <DialogContent className="max-h-[90vh] md:min-w-[80vw]  md:min-h-[80vh] overflow-scroll no-scrollbar">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex-col md:flex-row flex gap-5 items-start"
          >
            <div className="flex-1 p-3 flex flex-col gap-4 w-full">
              <div className="text-left">
                <Label htmlFor="name">Product Name:</Label>
                <Input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                />
                {/* Add error message if validation fails (optional) */}
                {errors.name && (
                  <span className="error">Product name is required</span>
                )}
              </div>

              <div className="text-left">
                <Label htmlFor="category">Category:</Label>
                <Input
                  type="text"
                  id="category"
                  {...register("category", { required: true })}
                />
              </div>
              <div className="text-left">
                <Label htmlFor="description">Description:</Label>
                <Textarea
                  {...register("description", { required: true })}
                  placeholder="Enter Description of"
                />
              </div>
            </div>
            <div className="w-full flex-1 p-3 flex flex-col gap-4">
              <div className="text-left">
                <Label htmlFor="price">Price:</Label>
                <Input
                  type="number"
                  id="price"
                  step="0.01"
                  {...register("price", { required: true })}
                />
                {/* Add error message if validation fails (optional) */}
                {errors.price && (
                  <span className="error">Price is required</span>
                )}
              </div>
              <div className="text-left">
                <Label htmlFor="quantity">Quantity:</Label>
                <Input
                  type="number"
                  id="quantity"
                  {...register("quantity", { required: true })}
                />
                {/* Add error message if validation fails (optional) */}
                {errors.quantity && (
                  <span className="error">File is required</span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Input
                  type="file"
                  id="file"
                  multiple
                  {...register("file", { required: true })}
                  onChange={(e: any) => {
                    // console.log(e?.target?.files[0]!);
                    // console.log(e?.target?.files.length);
                    const myFile = [];
                    for (let i = 0; i < e?.target?.files.length; i++) {
                      let data = e?.target?.files[i];
                      myFile.push(data);
                    }

                    setFile(myFile);
                  }}
                />
                {/* Add error message if validation fails (optional) */}
                {errors.file && (
                  <span className="error">Quantity is required</span>
                )}
                <div className="flex flex-col gap-4">
                  {file.length > 0 &&
                    file.map((e: any, index) => {
                      return (
                        <div className="" key={index}>
                          <span className="text-xs w-8  whitespace-nowrap	 overflow-hidden">
                            {e.name} {(e.size / (1024 * 1024)).toFixed(2)}MB
                          </span>
                          <div className="flex gap-2 items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`bg-blue-500 rounded-full h-2 transition-all duration-300 ease-linear`}
                                style={{ width: `0%` }}
                              />
                            </div>
                            <span className="text-xs">{0}%</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <Button type="submit">Create Product</Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewModle;
