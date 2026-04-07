import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const RightOneList = ({title, no, desc, img}) => {
  return (
    <div className='flex items-center justify-between px-4 py-0.5 cursor-pointer hover:bg-[#E8E8E8]'>
      <div className='flex items-center gap-2'>
          <img src={img} alt="" width={32} height={32}/>
          <div>
            <p className='text-[14px] text-black font-semibold'><span className='font-semibold'>{title}</span> #{no}</p>
            <p className='text-[12px] text-[#666666]'>{desc}</p>
          </div>
      </div>
      <FaChevronRight />
    </div>
  )
}

export default RightOneList