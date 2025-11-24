import React from 'react'
import Image from "next/image";
import Girl from '@/assets/images/girlannounce.svg'

const Discovery = () => {
  return (
    <div className='h-170 w-full bg-amber-50 flex px-30 py-15 justify-around items-center' >
        <div className=' flex-1 h-full'>
            <Image src={Girl} alt=""  className="" />
        </div>

        <div className='flex-1 h-full ' >
            <div className=''>
                <h1 className='text-3xl font-bold'>
                    Discover why more companies are using <br /> 
                    Civi to make hiring easy
                </h1>
                <p className='text-lg pt-4'>
                    Faucibus sed diam lorem nibh nibh risus dui ultricies purus eget <br />
                     convallis auctor massa.
                </p>
            </div>

            <div className='flex gap-30 items-center pt-10'> 
                <div className=''>
                    <p className=' text-lg pt-4'>
                        Candidate Applied
                    </p>
                    <h1 className='text-5xl font-bold text-green-900'>
                        24k+
                    </h1>
                </div>

                <div className=''>
                     <p className=' text-lg pt-4'> 
                        Company Reviews
                    </p>
                    <h1 className='text-5xl font-bold text-green-900'>
                        10k+
                    </h1>
                </div>
                </div>

                <div className='flex gap-37 items-center pt-10'> 
                <div className=''>
                    <p className=' text-lg pt-4'>
                        Jobs submited
                    </p>
                    <h1 className='text-5xl font-bold text-green-900'>
                        60k+
                    </h1>
                </div>

                <div className=''>
                     <p className='text-lg pt-4'> 
                        Monthly Users
                    </p>
                    <h1 className='text-5xl font-bold text-green-900'>
                        30k+
                    </h1>
                </div>
                </div>


                <div>
                    <button className='bg-green-900 p-3 mt-10 text-white rounded-full w-60'> 
                        Post your job for FREE
                    </button>
                </div>
            
        </div>
      
    </div>
  )
}

export default Discovery
