import React from 'react'
import Pencil from '@/assets/images/pencils.jpg'
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";

const Herojobs = () => {
  return (
    <div className='h-90'>
      <div
        className="h-full w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Pencil.src})` }}
      >
        <div className="">
                <h1 className=" text-5xl text-amber-50  font-bold pb-10 pt-10  text-center">
                    Find your dream job now
                </h1>
                <div className="p-4 bg-amber-50 rounded-full w-[70rem] flex gap-4">
          
          {/* Search input */}
          <div className='flex '>
          <section className="flex items-center gap-2 flex-1 border-r pr-4">
            <CiSearch className="text-gray-400 text-2xl" />
            <input 
              type="text" 
              placeholder="Job title or Keyword" 
              className="outline-none w-full bg-transparent text-lg"
            />
          </section>
        
          {/* Location input */}
          <section className="flex items-center gap-2 flex-1 border-r pr-4">
            <MdMyLocation className="text-gray-400 text-2xl" />
            <input 
              type="text" 
              placeholder="All Cities" 
              className="outline-none w-full bg-transparent text-lg"
            />
          </section>

          <section className="flex items-center gap-2 flex-1 border-r pr-4">
            <MdMyLocation className="text-gray-400 text-2xl" />
            <input 
              type="text" 
              placeholder="All Categories" 
              className="outline-none w-full bg-transparent text-lg"
            />
          </section>
          </div>
        
          {/* Button */}
          <section>
            <button 
              type="submit" 
              className="bg-green-900 px-4 py-2 pl-7 pr-7 rounded-full text-amber-50 text-lg"
            >
              Search
            </button>
          </section>
        
        </div>

      </div>
    </div>
    </div>
  )
}

export default Herojobs
