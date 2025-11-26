"use client";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <form action="">
        <div className="flex">
          <div className="w-full">
            <label htmlFor="" className=" font-bold">
              First Name
            </label>
            <input
              type="text"
              name="Name"
              id=""
              placeholder="Name"
              className=" border p-2 "
            />
          </div>

          <div>
            <label htmlFor="" className=" font-bold">
              Last Name
            </label>
            <input
              type="text"
              name="Name"
              id=""
              placeholder="Name"
              className=" border p-2"
            />
          </div>
        </div>

        <div className=" w-full pt-6">
          <label htmlFor="" className=" font-bold">
            UserName
          </label>
          <br />
          <input
            type="text"
            name="Name"
            id=""
            placeholder="Enter UserName"
            className=" border p-2 w-full"
          />
        </div>

        <div className=" w-full pt-6">
          <label htmlFor="" className=" font-bold">
            Email
          </label>
          <br />
          <input
            type="email"
            name="Name"
            id=""
            placeholder="Enter Email"
            className=" border p-2 w-full"
          />
        </div>

        <div className=" w-full pt-6">
          <label htmlFor="" className=" font-bold">
            Phone Number
          </label>
          <br />
          <input
            type="number"
            placeholder="Enter Email"
            className=" border p-2 w-full"
          />
        </div>

         <div className="pt-8">
        <label htmlFor="" className="font-bold">
          Password
        </label><br />
        <input type="password" name="" id="" placeholder="Enter password" className="border p-2 w-full pl-4" />
        </div>
      
      </form>


      <div>
        
      <h1 className="pt-5 pb-5">
        <input type="checkbox" name="" id="" className="pl-2" />
        Accept the {" "}
        <span className="text-green-900">terms and Privacy Policy </span>
      </h1>
      </div>

      <button className="w-full p-3 bg-green-900 border rounded-full text-white pt-4">
        Sign in
      </button>
    
    </div>
  );
};

export default SignUp;
