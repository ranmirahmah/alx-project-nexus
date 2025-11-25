import React from "react";
import Image from "next/image";
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import leadWeb from "@/assets/images/Lead-web.png";

const Filter = () => {
  const jobs = [
    {
      id: 1,
      title: "Lead Web3 Engineer",
      company: "Uxper",
      category: "Development and IT",
      image: leadWeb,
      tags: ["Remote", "New York", "$450 - $900/month"],
    },
  ];

  return (
    <div className="h-300 bg-gray-200 flex gap-10 justify-center pt-20">
      {/* Sidebar MUST have a key */}
      <div
        key="sidebar"
        className="h-200 bg-gray-10  w-80 pl-5 pt-5 rounded-2xl"
      >
        <p className="text-lg font-bold pb-10">Filter</p>
        <div>
          <h1 className="text-lg pb-5 font-bold">JOBS TYPE</h1>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Full Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Intership</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" className="text-lg " name="" id="" />
            <p className="text-lg ">Part Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Remote</p>
          </section>
        </div>

        <div className="pb-15 pt-15">
          <h1 className="text-lg pb-5 font-bold">JOBS CAREER</h1>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Full Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Intership</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" className="text-lg " name="" id="" />
            <p className="text-lg ">Part Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Remote</p>
          </section>
        </div>

        <div className="pb-15">
          <h1 className="text-lg pb-5 font-bold">JOBS EXPERIENCE</h1>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Full Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Intership</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" className="text-lg " name="" id="" />
            <p className="text-lg ">Part Time</p>
          </section>
          <section className="flex gap-2">
            <input type="checkbox" name="" className="text-lg " id="" />
            <p className="text-lg ">Remote</p>
          </section>
        </div>
      </div>

      {jobs.map((job) => (
        <div key={job.id} className="w-200 h-45 bg-gray-300 rounded-2xl  mb-6">
          <section className="p-10 pt-5 flex justify-between">
            <div className="flex gap-4">
              <Image src={job.image} alt="" className="h-15 w-15" />

              <div>
                <h1 className="text-2xl">{job.title}</h1>
                <p className="text-lg">
                  by {job.company} in {job.category}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <RiVipCrown2Fill className="text-amber-400 text-2xl" />
              <BsFillLightningChargeFill className="text-red-800 text-2xl" />
              <MdFavoriteBorder className="text-gray-800 text-2xl" />
            </div>
          </section>

          <div className="pl-9 pb-4">
            <div className="flex gap-2">
              {job.tags.map((tag, i) => (
                <button key={i} className="bg-amber-50 p-2 rounded-full">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
