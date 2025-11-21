import React from 'react'
import Image from 'next/image' 
import Chicago from '@/assets/images/Chicago.jpg'

const Listofjob = () => {
  return (
    <div className=' h-170 bg-amber-300 pt-12'>
        <div className='text-center'>
            <h1 className=' text-3xl font-bold '>
                List of USA jobs
            </h1>
            <p className=' text-xl pt-3'>
                Explore trending job searches in the USA
            </p>
        </div>

        <div className='pt-10 px-30'>
            <section className=' overflow-hidden '>
            <Image src={Chicago} alt=""  className='h-100 w-70  rounded-2xl transition-transform duration-300 hover:scale-110"'/>
            <div className='mx-25 pt-5'>
            <h1 className=' text-xl'>Chicago</h1>
            <p className='mx-2'>6 Jobs</p>
            </div>

            </section>
        </div>
      
    </div>
  )
}

export default Listofjob
