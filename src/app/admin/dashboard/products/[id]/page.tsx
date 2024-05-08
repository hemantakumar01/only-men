import React from "react";
// import { Shadan } from "@shadan/shadan"; Shadan image upload component
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NewModle from "../../components/NewModle";
// import { useForm } from "react-hook-form"; // Form validation library (consider using)

type Props = {};

function page(props: Props) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm(); // For validation (optional)
  // const [images, setImages] = React.useState([]); // State to store uploaded images
  // const [file, setFile] = React.useState<Object[]>([]);
  const progress = 0;
  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    // - Validate data (consider using form validation library)
    // - Send data (product details and images) to your backend API for storage
    // - Handle success or error messages
    console.log(data);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl xs:text-2xl font-bold">Create New Product</h1>
        <NewModle open={<Button>Update</Button>} />
      </div>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className=" flex-col md:flex-row flex gap-5 items-start"
      >
        <div className="flex-1 p-3 flex flex-col gap-4 w-full">
          <div className="">
            <Label htmlFor="name">Product Name:</Label>
            <Input
              type="text"
              id="name"
              // {...register("name", { required: true })}
            />
            {/* Add error message if validation fails (optional) */}
            {/* {errors.name && (
              <span className="error">Product name is required</span>
            )} */}
          </div>

          <div>
            <Label htmlFor="category">Category:</Label>
            <Input
              type="text"
              id="category"
              // {...register("category", { required: true })}
            />
          </div>
          <div>
            <Label htmlFor="description">Description:</Label>
            <Textarea
              // {...register("description", { required: true })}
              placeholder="Enter Description of"
            />
          </div>
        </div>
        <div className="w-full flex-1 p-3 flex flex-col gap-4">
          <div className="">
            <Label htmlFor="price">Price:</Label>
            <Input
              type="number"
              id="price"
              step="0.01"
              // {...register("price", { required: true })}
            />
            {/* Add error message if validation fails (optional) */}
            {/* {errors.price && <span className="error">Price is required</span>} */}
          </div>
          <div>
            <Label htmlFor="quantity">Quantity:</Label>
            <Input
              type="number"
              id="quantity"
              // {...register("quantity", { required: true })}
            />
            {/* Add error message if validation fails (optional) */}
            {/* {errors.quantity && <span className="error">File is required</span>} */}
          </div>
          <div className="flex flex-col gap-3">
            <Input
              type="file"
              id="file"
              multiple
              // {...register("file", { required: true })}
              onChange={(e: any) => {
                // console.log(e?.target?.files[0]!);
                // console.log(e?.target?.files.length);
                const myFile = [];
                for (let i = 0; i < e?.target?.files.length; i++) {
                  let data = e?.target?.files[i];
                  myFile.push(data);
                }

                // setFile(myFile);
              }}
            />
            {/* Add error message if validation fails (optional) */}
            {/* {errors.file && <span className="error">Quantity is required</span>} */}
            {/* <div className="flex flex-col gap-4">
              {file.length > 0 &&
                file.map((e: any, index) => {
                  return (
                    <div key={index}>
                      <span className="text-xs">
                        {e.name} {(e.size / (1024 * 1024)).toFixed(2)}MB
                      </span>
                      <div className="flex gap-2 items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-blue-500 rounded-full h-2 transition-all duration-300 ease-linear`}
                            style={{ width: `0%` }}
                          />
                        </div>
                        <span className="text-xs">{progress}%</span>
                      </div>
                    </div>
                  );
                })}
            </div> */}
          </div>

          <Button type="submit">Create Product</Button>
        </div>
      </form>
    </div>
  );
}

export default page;
