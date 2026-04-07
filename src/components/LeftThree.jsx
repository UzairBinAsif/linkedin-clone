import React from 'react'

const LeftThree = () => {
  return (
    <div className='bg-white w-full mt-1.5 rounded-lg p-3.5 border border-[#DFDEDA] flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-2 mt-1'>
            <p className='text-[12px] text-black font-semibold'>Profile viewers</p>
            <p className='text-[12px] text-blue-600 font-semibold'>4,017</p>
        </div>
        <div className='flex items-center justify-between gap-2 mt-1'>
            <p className='text-[12px] text-black font-semibold'>Post impressions</p>
            <p className='text-[12px] text-blue-600 font-semibold'>7,189</p>
        </div>
    </div>
  )
}

export default LeftThree