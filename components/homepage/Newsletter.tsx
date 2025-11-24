import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-50 flex'>
      <div className='flex-1  text-center pt-15'>
        <h1 className=' text-3xl font-bold'>
            Subscribe to our newsletter
        </h1>
        <p className='text-lg'>
        We will keep you updated with the best new jobs.
        </p>
      </div>
      <div className='flex-1 bg-white flex justify-start items-center gap-3'>
        <input type="email" name="" id="" placeholder='Enter your email' className=' text-lg w-90 p-4 rounded-full border border-green-900'/>
        <button type="submit" className=' w-40 p-4 text-lg rounded-full bg-green-900 text-white'> Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
