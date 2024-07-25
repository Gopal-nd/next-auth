import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 px-10 py-10 gap-10">
    <div className=" flex justify-center items-center col-span-1">
       <h1 className="text-3xl font-semibold">
         Login Now
        </h1>
    </div>
    <div className=" flex justify-center items-center col-span-1">
<SignUp/>
    </div>
</div>
  )
}