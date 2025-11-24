import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbWritingOff } from "react-icons/tb";
import { SiMarketo } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";




const Category = () => {


    const categories = [
  {
    icon: <IoCodeSlashOutline className="text-2xl  text-white" />,
    title: "Development & IT",
    jobs: 16
  },
  {
    icon: <SiMarketo className="text-2xl text-white" />,
    title: "Marketing & Sales",
    jobs: 10
  },
  {
    icon: <SiAltiumdesigner className="text-2xl text-white" />,
    title: "Design & Creative",
    jobs: 8
  }
  ,
  {
    icon: < TbWritingOff className="text-2xl text-white" />,
    title: "Writing & Translation",
    jobs: 8
  }
  ,
  {
    icon: < AiTwotoneCustomerService className="text-2xl text-white" />,
    title: "Customer Service",
    jobs: 8
  }
  ,
  {
    icon: <MdManageHistory className="text-2xl text-white" />,
    title: "Product Management",
    jobs: 8
  }
];

  return (
    <div className=' h-150 bg-white justify-center pt-14'>
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
      className="h-35 w-100 bg-gray-100 rounded-2xl flex items-center gap-4 pl-6 mb-4"
    >
      <div className="border-2 p-3 rounded-full bg-green-900 outline-green-900">
        {item.icon}
      </div>

      <div>
        <h1 className="text-xl font-bold">{item.title}</h1>
        <p className="font-bold text-gray-500">{item.jobs} jobs</p>
      </div>
    </section>
  ))}
</div>

<div className='text-center underline text-green-900 pt-2'>
  <h1>
    View all Categories
  </h1>
</div>
      
    </div>
  )
}

export default Category
