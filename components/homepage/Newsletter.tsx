import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-50 bg-rose-300 flex'>
      <div className='flex-1 bg-amber-800 text-center pt-15'>
        <h1 className=' text-3xl font-bold'>
            Subscribe to our newsletter
        </h1>
        <p className='text-lg'>
        We will keep you updated with the best new jobs.
        </p>
      </div>
      <div className='flex-1 bg-amber-700 flex justify-start items-center gap-3'>
        <input type="email" name="" id="" placeholder='Enter your email' className='bg-amber-200 text-lg w-90 p-4 rounded-full'/>
        <button type="submit" className='bg-amber-100 w-40 p-4 text-lg rounded-full'> Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
