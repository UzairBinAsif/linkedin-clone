import React from 'react'
import r11 from '../assets/r11.png'
import r13 from '../assets/r13.png'
import { IoMdClose } from 'react-icons/io'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { TiWorld } from 'react-icons/ti'
import { FaPlus } from 'react-icons/fa6'

const Post = () => {
  return (
    <div className='bg-white rounded-lg p-2 border border-[#DFDEDA] flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={r11} alt="" className='w-6 h-6' />
                <p><span className='font-semibold'>Tahami Kashif</span> commented on this</p>
            </div>
            <div className='flex gap-4 items-center'>
                <HiOutlineDotsHorizontal />
                <IoMdClose />
            </div>
        </div>
        <hr className='text-[#DFDEDA] my-1' />
        <div className='flex justify-between'>
            <div className='flex gap-1'>
                <img src={r13} alt="" className='w-12 h-12' />
                <div>
                    <p className='font-semibold'>Engr. Muhammad Rizwan Razi<span className='text-[12px] font-normal text-gray-500'> • 2nd</span></p>
                    <p className='text-[12px] text-gray-500'>Electrical Engineer (UIT-NED-25)| Solar System Installer | Shopify Develop.</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] text-gray-500'>11h •</p>
                        <TiWorld />
                    </div>
                </div>
            </div>
            <div className='flex items-center h-fit text-[#0A66C2] font-semibold text-[14px] gap-1'>
                <FaPlus />
                Follow
            </div>
        </div>
    </div>
  )
}

export default Post