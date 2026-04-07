import React from 'react'
import RightOne from './RightOne'
import RightTwo from './RightTwo'
import RightThree from './RightThree'
import RightFooter from './RightFooter'

const RightSection = () => {
  return (
    <div className='w-[312px] mr-4'>
        <RightOne />
        <RightTwo />
        <RightThree />
        <RightFooter />
    </div>
  )
}

export default RightSection