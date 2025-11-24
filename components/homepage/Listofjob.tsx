import React from 'react'
import Image from 'next/image' 
import Chicago from '@/assets/images/Chicago.jpg'
import Boston from '@/assets/images/Boston.jpg'
import NewYork from '@/assets/images/NewYorkCity.jpg'
import Seatle from '@/assets/images/Seatle.jpg'


const Listofjob = () => {

    const cities = [
  {
    image: Seatle,
    name: "Seatle",
    jobs: 6,
  },
  {
    image: Boston,
    name: "Boston",
    jobs: 12,
  },
  {
    image: NewYork,
    name: "New York",
    jobs: 9,
  },
  ,
  {
    image: Chicago,
    name: "Chicago",
    jobs: 9,
  },
  // Add more cities if you want
];
  return (
    <div className=' h-170 bg-gray-100 pt-12'>
        <div className='text-center'>
            <h1 className=' text-3xl font-bold '>
                List of USA jobs
            </h1>
            <p className=' text-xl pt-3'>
                Explore trending job searches in the USA
            </p>
        </div>

       <div className="pt-10 px-30 grid grid-cols-4 gap-8">
  {cities.map((city, index) => (
    <section key={index} className="overflow-hidden">
      <Image
        src={city.image}
        alt={city.name}
        className="h-90 w-70 rounded-2xl transition-transform duration-300 hover:scale-110"
      />

      <div className="mx-25 pt-5">
        <h1 className="text-xl">{city.name}</h1>
        <p className="mx-2">{city.jobs} Jobs</p>
      </div>
    </section>
  ))}
</div>

      
    </div>
  )
}

export default Listofjob
