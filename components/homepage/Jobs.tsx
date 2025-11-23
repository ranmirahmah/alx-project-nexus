import React from 'react'
import Image from 'next/image'
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import leadWeb from '@/assets/images/Lead-web.png'

const Jobs = () => {


const jobCards = [
  {
    image: leadWeb,
    title: "Lead Web3 Engineer",
    company: "Uxper",
    category: "Development and IT",
    location: "New York",
    type: "Remote",
    salary: "$450 - $900/month",
    daysLeft: "75 days more to apply",
    premium: true,
  },
  {
    image: leadWeb,
    title: "Senior UI Designer",
    company: "Figma Co.",
    category: "Design & Creativity",
    location: "San Francisco",
    type: "Hybrid",
    salary: "$350 - $700/month",
    daysLeft: "50 days more to apply",
    premium: false,
  },
  {
    image: leadWeb,
    title: "Backend Node.js Developer",
    company: "Techify",
    category: "Development",
    location: "Remote",
    type: "Remote",
    salary: "$500 - $1000/month",
    daysLeft: "90 days more to apply",
    premium: true,
  },
  // add more cards until you have 6
];
  return (
    <div className=' h-150 bg-blue-300 pt-10'>
      <div className='text-center'>
            <h1 className=' text-3xl font-bold '>
                Featured jobs
            </h1>
            <p className=' text-xl pt-3'>
                50k+ jobs for you to explore
            </p>
        </div>
<div className="pt-15 px-30 grid grid-cols-3 gap-6">
  {jobCards.map((job, index) => (
    <section 
      key={index}
      className="h-85 w-95 bg-amber-600 rounded-2xl p-5"
    >
      <section className="flex justify-between">
        <Image 
          src={job.image} 
          alt={job.title}  
          className="h-15 w-15 rounded-2xl"
        />

        <div className="flex gap-2">
          <RiVipCrown2Fill 
            className={`text-2xl ${job.premium ? "text-yellow-500" : "text-gray-400"}`} 
          />
          <BsFillLightningChargeFill size={24} className="text-red-700" />
          <MdFavoriteBorder className="text-2xl text-gray-500" />
        </div>
      </section>

      <div className="pt-5">
        <h1 className="text-xl font-bold">{job.title}</h1>
        <p className="text-l">
          by {job.company} in {job.category}
        </p>
      </div>

      <div className="flex pt-6 gap-2">
        <button className="px-3 py-2 bg-amber-50 rounded-full">
          {job.type}
        </button>

        <button className="flex px-3 py-2 bg-amber-50 rounded-full">
          <HiLocationMarker className="text-red-500 text-xl" />
          {job.location}
        </button>
      </div>

      <div>
        <button className="px-3 py-2 bg-amber-50 rounded-full mt-2">
          {job.salary}
        </button>
      </div>

      <h1 className="text-amber-50 pt-10 font-bold">{job.daysLeft}</h1>
    </section>
  ))}
</div>


        <h1 className=' text-center text-2xl text-amber-50 mt-10'> View all jobs</h1>
    </div>
  )
}

export default Jobs
