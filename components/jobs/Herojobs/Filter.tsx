import React from "react";
import Image from "next/image";
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

export interface Job {
  image: string;
  title: string;
  company: string;
  category: string;
  jobCategoryid: string;
  location: string;
  type: string;
  salary: string;
  daysLeft: string;
  premium: boolean;
}

export type JobsData = Job[];

interface FilterProps {
  jobs: JobsData;
}

const Filter: React.FC<FilterProps> = ({ jobs }) => {
  return (
    <div className="h-550 bg-white flex gap-10 justify-center pt-20">
      {/* Sidebar */}
      <div
        key="sidebar"
        className="h-200 bg-gray-10  w-80 pl-5 pt-5 rounded-2xl"
      >
        <p className="text-lg font-bold pb-10">Filter</p>
        {/* Add your filter checkboxes here */}
      </div>

      {/* Jobs List */}
      <div className="">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-200 h-45 bg-gray-100 rounded-2xl mb-6"
          >
            <section className="p-10 pt-5 flex justify-between ">
              <div className="flex gap-4">
                {/* <Image
                width={100}
                height={100}
                  src={job.image}
                  alt={job.title}
                  className="h-15 w-15 bg-gray-100"
                /> */}

                <div>
                  <h1 className="text-2xl">{job.title}</h1>
                  <p className="text-lg">
                    by {job.company} in {job.category}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <RiVipCrown2Fill
                  className={`text-2xl ${
                    job.premium ? "text-amber-400" : "text-gray-400"
                  }`}
                />
                <BsFillLightningChargeFill className="text-red-800 text-2xl" />
                <MdFavoriteBorder className="text-gray-800 text-2xl" />
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
