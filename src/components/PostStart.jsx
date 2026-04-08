import React from 'react'
import userImg from '../assets/userImage.png'
import openToImg from '../assets/openToWork.png'
import { IoLogoYoutube } from 'react-icons/io'
import { MdArticle, MdPhotoSizeSelectActual } from 'react-icons/md'

const PostStart = () => {
  return (
    <div className='bg-white rounded-lg p-3.5 pb-1.5 border border-[#DFDEDA] flex flex-col gap-3'>
        <div className='relative flex gap-[2%]'>
            <div>
                <img src={userImg} alt="" className='rounded-full w-12 h-12' />
                <img src={openToImg} alt="" className='rounded-full w-12 h-12 absolute top-0' />
            </div>
            <input type="text" placeholder='Start a post' className='py-1 pl-5 pr-4 w-[90%] font-bold text-black border border-[#B2B2B2] rounded-full hover:bg-[#F4F2EE] transition-all focus:outline-1 cursor-pointer' />
        </div>
        <div className='flex justify-evenly'>
            <div className='flex items-center justify-center hover:bg-[#F4F2EE] px-4 py-2 font-semibold text-[16px] text-gray-700 gap-1 rounded cursor-pointer'>
                <IoLogoYoutube className='text-[#44712E]' />
                <button className='cursor-pointer'>Video</button>
            </div>
            <div className='flex items-center justify-center hover:bg-[#F4F2EE] px-4 py-2 font-semibold text-[16px] text-gray-700 gap-1 rounded cursor-pointer'>
                <MdPhotoSizeSelectActual className='text-[#0A66C2]' />
                <button className='cursor-pointer'>Photo</button>
            </div>
            <div className='flex items-center justify-center hover:bg-[#F4F2EE] px-4 py-2 font-semibold text-[16px] text-gray-700 gap-1 rounded cursor-pointer'>
                <MdArticle className='text-[#B24020]' />
                <button className='cursor-pointer'>Write article</button>
            </div>
        </div>
    </div>
  )
}

export default PostStart