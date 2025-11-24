import React from "react";
import Image from "next/image";
import hrInterview from "@/assets/images/hr-interview.jpg";

const Employer = () => {
  return (
    <div className="h-100 bg-green-900 flex">
      <div className="flex flex-1  justify-center items-center h-full  text-white">
        <div className="flex flex-col">
          <p className="text-lg font-bold">Employers</p>
          <h1 className="text-3xl font-bold">Looking to post a job?</h1>
          <p className="text-lg ">
            We have end-to-end solutions that can keep up <br /> with you and
            your standards.
          </p>

          <div className=" outline-white ">
            <button className="bg-green-900 p-3 mt-10 rounded-full w-60 border text-white border-white">
              Post your job for FREE
            </button>
          </div>
        </div>
      </div>

      <div className=" flex-1 bg-white h-full">
        <Image src={hrInterview} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Employer;
