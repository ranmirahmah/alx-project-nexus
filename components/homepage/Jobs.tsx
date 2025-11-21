import React from 'react'
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import leadWeb from '@/assets/images/Lead-web.svg'

const Jobs = () => {
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

        <div className='flex pt-15 px-30'>
          <section className=' h-80 w-90 bg-amber-600 rounded-2xl p-5'>
            <section className='flex justify-between'>
              <div>
              <MdFavoriteBorder className="text-2xl text-gray-500" />
              </div>
              <div className='flex gap-2'>
                <RiVipCrown2Fill className="text-2xl text-yellow-500" />
                <MdFavoriteBorder className="text-2xl text-gray-500" />
              </div>
            </section>

            <div className='pt-8'>
              <h1 className=' text-xl font-bold ' >
                Lead Web3 Engineer
              </h1>
              <p className=' text-l'>
                by Uxper in Development and IT
              </p>
            </div>

            <div className='flex pt-6 gap-2' >
              <button className=' px-3 py-2 bg-amber-50 rounded-full'>
              Remote
              </button>
              <button className='flex px-3 py-2 bg-amber-50 rounded-full'> 
                <HiLocationMarker className="text-red-500 text-xl" />
              New York
              </button>
            </div>

            <div>
              <button className=' px-3 py-2 bg-amber-50 rounded-full mt-2' >
                $450 - $900/month
              </button>
            </div>

            <h1 className='text-amber-50 pt-10 font-bold'>
              75days more to apply
            </h1>
          </section>

        </div>

        <h1 className=' text-center text-2xl text-amber-50 mt-10'> View all jobs</h1>
    </div>
  )
}

export default Jobs
