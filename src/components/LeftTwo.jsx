import React from 'react'
import goldenIcon from '../assets/goldenIcon.png'

const LeftTwo = () => {
  return (
    <div className='bg-white w-full mt-1.5 rounded-lg p-3.5 border border-[#DFDEDA]'>
        <p className='text-[#787878] text-[12px] leading-4'>Get exclusive tools, conversations with leaders, and more</p>
        <div className='flex items-center gap-2 mt-1'>
            <img src={goldenIcon} alt="img here" className='w-3 h-3' />
            <p className='text-[12px] text-black font-semibold'>Try Premium for PKRO</p>
        </div>
    </div>
  )
}

export default LeftTwo