import React from 'react'
import Image from "next/image";
import Shopify from '@/assets/images/shopify.webp'
import Stripe from '@/assets/images/stripe.webp'
import Upwork from '@/assets/images/upwork.webp'
import Webflow from '@/assets/images/webflow.webp'
import Attentive from '@/assets/images/attentive.webp'
import Coinbase from '@/assets/images/coinbase.webp'




const Companies = () => {
  return (
    <div className='h-70 p-30 pb-20'> 
    <div className='flex-1 text-center' >
      <h1 className='text-3xl font-bold text-gray-500'>
        Trusted by 5,000 companies around the world
      </h1>
    </div>
      
      <div className='flex justify-center items-center gap-20 pt-10'>
        <Image src={Coinbase} alt="" className="" />
        <Image src={Shopify} alt="" className="" />
        <Image src={Attentive} alt="" className="" />
        <Image src={Stripe} alt="" className="" />
        <Image src={Coinbase} alt="" className="" />
        <Image src={Upwork} alt="" className="" />
      </div>
    </div>
  )
}

export default Companies
