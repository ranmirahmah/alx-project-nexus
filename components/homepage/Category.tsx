import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";


const Category = () => {


    const categories = [
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Development & IT",
    jobs: 16
  },
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Design & Creative",
    jobs: 10
  },
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Engineering",
    jobs: 8
  }
  ,
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Engineering",
    jobs: 8
  }
  ,
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Engineering",
    jobs: 8
  }
  ,
  {
    icon: <IoCodeSlashOutline className="text-2xl text-gray-500" />,
    title: "Engineering",
    jobs: 8
  }
];

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

        <div className="pt-15 px-30 grid grid-cols-3 gap-6">
  {categories.map((item, index) => (
    <section 
      key={index}
      className="h-35 w-100 bg-amber-100 rounded-2xl flex items-center gap-4 pl-6 mb-4"
    >
      <div className="border-2 p-3 rounded-full bg-black outline-none">
        {item.icon}
      </div>

      <div>
        <h1 className="text-xl font-bold">{item.title}</h1>
        <p className="font-bold text-gray-500">{item.jobs} jobs</p>
      </div>
    </section>
  ))}
</div>

      
    </div>
  )
}

export default Category
