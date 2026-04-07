import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import RightTwoList from './RightTwoList'
import r8 from '../assets/r8.png'
import r9 from '../assets/r9.png'
import r10 from '../assets/r10.png'

const RightTwo = () => {
  return (
    <div className='bg-white w-full mt-1.5 rounded-lg pt-2.5 pb-2 border border-[#DFDEDA] flex flex-col justify-end gap-2'>
      <p className='text-[#1B1B1B] px-4 font-semibold'>Add to your feed</p>
      <RightTwoList title="Prime Minister's Youth ..." desc1="Company" desc2="Govt Admin" img={r8} />
      <RightTwoList title="Github" desc1="Company" desc2="" img={r9} />
      <RightTwoList title="Usman Asif" desc1="Access 2000+ software engineers in you..." img={r10} />
      <div className='flex items-center rounded cursor-pointer transition-all  ml-4'>
        <button className='px-2 py-1.5 text-[14px] text-[#535353] hover:text-black font-semibold cursor-pointer'>View all recommendations</button>
        <FaArrowRight />
      </div>
    </div>
  )
}

export default RightTwo