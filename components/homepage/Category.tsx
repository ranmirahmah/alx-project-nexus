import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";


const Category = () => {
  return (
    <div className=' h-150 bg-indigo-50 justify-center pt-14'>
        <div className='text-center'>
            <h1 className=' text-3xl font-bold '>
                Popular category
            </h1>
            <p className=' text-xl pt-3'>
                Find and hire professionals across all skills
            </p>
        </div>

        <div className=' pt-15 px-30'>
            <section className=' h-35 w-100 bg-amber-100 rounded-2xl flex items-center gap-4 pl-6'>
            <div className=' border-2 p-3 rounded-full bg-black outline-none'>
            <IoCodeSlashOutline className="text-2xl text-gray-500" />
            </div>
            <div>
                <h1 className='text-xl font-bold'>Development & IT</h1>
                <p className='font-bold  text-gray-500'>16 jobs</p>
            </div>
            </section>
        </div>
      
    </div>
  )
}

export default Category
