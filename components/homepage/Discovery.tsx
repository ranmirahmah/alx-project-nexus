import React from 'react'
import Image from "next/image";
import Girl from '@/assets/images/girlannounce.svg'

const Discovery = () => {
  return (
    <div className='h-170 w-full bg-amber-200 flex px-30 py-15 justify-around items-center' >
        <div className=' flex-1 h-full'>
            <Image src={Girl} alt=""  className="" />
        </div>

        <div className='flex-1 h-full bg-amber-950' >
            <div className='flex justify-center'>
                <h1>
                    Discover why more companies are using <br /> 
                    Civi to make hiring easy
                </h1>
                <p>
                    Faucibus sed diam lorem nibh nibh risus dui ultricies purus eget <br />
                     convallis auctor massa.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Discovery
