import React from 'react'
import userImage from '../assets/userImage.png'
import bannerImage from '../assets/Banner.png'
import aciImage from "../assets/ACI.png"
import openToWork from "../assets/openToWork.png"

const LeftSection = () => {
  return (
    <>
    <div className='bg-white w-[19%] relative mt-6 rounded-lg'>
      <img src={bannerImage} className="w-full h-14 absolute rounded-t-lg" />
      <div className='p-4'>
        <div>
          <img src={userImage} className="w-20 h-20 rounded-full z-99 relative border-2 mt-4 border-white" />
          <img src={openToWork} alt="" className='absolute top-4 z-199 w-20 h-20 left-4 border-2 mt-4 border-white rounded-full'/>
        </div>
        <h1 className='text-xl font-semibold mt-2'>Uzair Bin Asif</h1>
        <p className='text-[12px]'>AI & Web Developer | Next.js |</p>
        <p className='truncate text-[12px]'>OpenAI Agents SDK | Civil Engineering Undergraduate at NED | BIM & AutoCAD</p>
        <p className='text-[#787878] text-[12px]'>Karachi Division, Sindh</p>
        <div className='flex mt-2 justify-center items-center'>
          <img src={aciImage} alt="img" className='w-6.5 h-6.5 rounded-sm mr-2' />
          <p className='font-semibold text-[12px]/4'>ACI NEDUET Student Chapter</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default LeftSection