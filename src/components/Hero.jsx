import React from 'react'
import LeftSection from './LeftSection'
import LeftTwo from './LeftTwo'
import LeftThree from './LeftThree'
import LeftFour from './LeftFour'
import RightSection from './RightSection'
import MiddleSection from './MiddleSection'

const Hero = () => {
  return (
    <div className='w-[75vw] mx-auto flex justify-between'>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default Hero