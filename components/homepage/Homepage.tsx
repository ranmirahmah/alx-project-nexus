import React from 'react'
import Herosection from './Herosection'
import Companies from './Companies'
import Jobs from './Jobs'
import Category from './Category'
import Listofjob from './Listofjob'
import Discovery from './Discovery'
import Newsletter from './Newsletter'
import Employer from './Employer'
import Review from './Review'


const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <Companies/>
      <Jobs/>
      <Category/>
      <Listofjob/>
      <Discovery/>
      <Review/>
      <Employer/>
      <Newsletter/>
    </div>
  )
}

export default Homepage
