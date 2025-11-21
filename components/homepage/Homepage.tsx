import React from 'react'
import Herosection from './Herosection'
import Companies from './Companies'
import Jobs from './Jobs'
import Category from './Category'
import Listofjob from './Listofjob'


const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <Companies/>
      <Jobs/>
      <Category/>
      <Listofjob/>
    </div>
  )
}

export default Homepage
