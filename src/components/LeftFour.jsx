import React from 'react'
import { BiNews } from 'react-icons/bi'
import { IoIosBookmark } from 'react-icons/io'
import { MdGroups2, MdOutlineEvent } from 'react-icons/md'

const LeftThree = () => {
  return (
    <div className='bg-white w-full mt-1.5 rounded-lg px-3.5 py-2.5 border border-[#DFDEDA] flex flex-col gap-2'>
        <div className='flex items-center justify-start gap-2 mt-1'>
            <IoIosBookmark />
            <p className='text-[12px] text-black font-semibold'>Saved Items</p>
        </div>
        <div className='flex items-center justify-start gap-2 mt-1'>
            <MdGroups2 />
            <p className='text-[12px] text-black font-semibold'>Groups</p>
        </div>
        <div className='flex items-center justify-start gap-2 mt-1'>
            <BiNews />
            <p className='text-[12px] text-black font-semibold'>Newsletters</p>
        </div>
        <div className='flex items-center justify-start gap-2 mt-1'>
            <MdOutlineEvent />
            <p className='text-[12px] text-black font-semibold'>Events</p>
        </div>
    </div>
  )
}

export default LeftThree