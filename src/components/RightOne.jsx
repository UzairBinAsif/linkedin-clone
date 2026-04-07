import React from 'react'
import RightOneList from './RightOneList'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import r4 from '../assets/r4.png'
import { FaChevronDown } from 'react-icons/fa6'


const RightOne = () => {
  return (
    <div className='bg-white w-full mt-6 rounded-lg pt-2.5 pb-2 border border-[#DFDEDA] flex flex-col justify-end gap-2'>
      <p className='text-[#666666] px-4 font-semibold'>Today's puzzles</p>
      <RightOneList title="Patches" no="21" desc="10 Connections Played" img={r1}/>
      <RightOneList title="Zip" no="386" desc="4 Connections Played" img={r2}/>
      <RightOneList title="Mini Sudoku" no="239" desc="The classic game, made mini" img={r3}/>
      <RightOneList title="Tango" no="547" desc="Harmonize the grid" img={r4}/>
      <div className='flex items-center rounded hover:bg-[#F3F3F3] cursor-pointer transition-all w-[107px] ml-4'>
        <button className='px-2 py-1.5 text-[14px] text-[#535353] font-semibold cursor-pointer'>Show more</button>
        <FaChevronDown />
      </div>
    </div>
  )
}

export default RightOne