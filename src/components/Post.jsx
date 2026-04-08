import React from 'react'
import { IoIosSend, IoMdClose } from 'react-icons/io'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { TiWorld } from 'react-icons/ti'
import { FaPlus, FaRegCommentDots } from 'react-icons/fa6'
import { BiLike, BiRepost } from 'react-icons/bi'

const Post = ({cmntImg, cmntName, idImg, idName, idDesc, idTime, postDesc, postImg}) => {
    const seeMore = (e) => {
        if (e.target.innerText == "less") {
            // e.target.closest("div").innerText = e.target.closest("div").innerText.slice(0, 29)
            e.target.innerText = "... more"
        } else if (e.target.innerText == "... more") {
            // e.target.closest("div").innerText = e.target.closest("div").innerText.slice(0,)
            e.target.innerText = "less"
        }
    }
  return (
    <div className='bg-white rounded-lg p-2 border border-[#DFDEDA] flex flex-col gap-3 mb-2'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={cmntImg} alt="" className='w-6 h-6' />
                <p><span className='font-semibold'>{cmntName}</span> commented on this</p>
            </div>
            <div className='flex gap-4 items-center'>
                <HiOutlineDotsHorizontal />
                <IoMdClose />
            </div>
        </div>
        <hr className='text-[#DFDEDA] my-1' />
        <div className='flex justify-between'>
            <div className='flex gap-1'>
                <img src={idImg} alt="" className='w-12 h-12' />
                <div>
                    <p className='font-semibold'>{idName}<span className='text-[12px] font-normal text-gray-500'> • 2nd</span></p>
                    <p className='text-[12px] text-gray-500'>{idDesc}</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-[12px] text-gray-500'>{idTime} •</p>
                        <TiWorld />
                    </div>
                </div>
            </div>
            <div className='flex items-center h-fit text-[#0A66C2] font-semibold text-[14px] gap-1'>
                <FaPlus />
                Follow
            </div>
        </div>
        <div>
            <div className='text-[14px] text-[#222222]'>
                {postDesc}
                <button onClick={seeMore} className='cursor-pointer text-black font-semibold'>... more</button>
            </div>
            <img src={postImg} alt="" />
        </div>
        <hr className='text-[#DFDEDA] my-1' />
        <div className='flex justify-center'>
            <button className='w-[23%] flex flex-col justify-center items-center font-semibold text-[#404040] rounded cursor-pointer hover:bg-[#F3F3F3]'>
                <BiLike />
                <p>Like</p>
            </button>
            <button className='w-[23%] flex flex-col justify-center items-center font-semibold text-[#404040] rounded cursor-pointer hover:bg-[#F3F3F3]'>
                <FaRegCommentDots />
                <p>Comment</p>
            </button>
            <button className='w-[23%] flex flex-col justify-center items-center font-semibold text-[#404040] rounded cursor-pointer hover:bg-[#F3F3F3]'>
                <BiRepost />
                <p>Repost</p>
            </button>
            <button className='w-[23%] flex flex-col justify-center items-center font-semibold text-[#404040] rounded cursor-pointer hover:bg-[#F3F3F3]'>
                <IoIosSend />
                <p>Share</p>
            </button>
        </div>
    </div>
  )
}

export default Post