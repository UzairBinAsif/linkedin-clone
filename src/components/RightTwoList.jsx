import React from 'react'
import { FaChevronRight, FaPlus } from 'react-icons/fa6'

const RightTwoList = ({title, desc1, desc2, img}) => {
  return (
    <div className='flex flex-col items-start px-4 py-0.5 cursor-pointer'>
        <div className='flex items-center gap-2'>
            <img src={img} alt="" width={48} height={48}/>
            <div>
                <p className='text-black font-semibold truncate'>{title}</p>
                <p className='text-[12px] text-gray-700 truncate'>{desc1} {desc2 ? "• " + desc2 : ""}</p>
            </div>
        </div>
        <div className='flex items-center rounded-full border hover:border-2 hover:bg-[#F3F3F3] transition-all cursor-pointer px-3 py-1 text-[14px] font-normal ml-13 mt-1'>
            <FaPlus />
            <button className='cursor-pointer'>Follow</button>
        </div>
    </div>
  )
}

export default RightTwoList