import React from 'react'
import { BiSolidMessageDots } from 'react-icons/bi'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaBell, FaCaretDown, FaSearch } from 'react-icons/fa'
import { IoBagRemoveSharp, IoHomeSharp, IoPeople } from 'react-icons/io5'
import userImage from '../assets/userImage.png'

const Navbar = () => {
    return (
        <nav className='flex justify-center bg-white border-b border-[#E8E8E8]'>
            <div className='w-[75vw] flex items-center justify-between'>
                <div className='flex gap-2 m-2'>
                    <svg className='logo w-8.5 h-8.5 mercado-match scale-120' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="34x34" fill="#0A66C2" width="34" height="34" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    <div className='flex items-center relative'>
                        <FaSearch className='absolute left-4' />
                        <input type="text" placeholder='Search' className='py-1 pl-10 pr-4 w-70 text-[14px] border border-[#B2B2B2] rounded-full hover:bg-[#F4F2EE] focus:bg-[#F4F2EE] focus:w-[25vw] transition-all focus:outline-1' />
                    </div>
                </div>
                <div className='h-[50px] flex justify-center items-center'>
                    <button className='w-[80px] h-full flex flex-col justify-center cursor-pointer text-black items-center border-b-2'><IoHomeSharp className='w-6 h-6' />
                        <p className='text-[12px]'>Home</p>
                    </button>
                    <button className='w-[80px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center '><IoPeople className='w-6 h-6' />
                        <p className='text-[12px]'>My Network</p>
                    </button>
                    <button className='w-[80px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center '><IoBagRemoveSharp className='w-6 h-6' />
                        <p className='text-[12px]'>Jobs</p>
                    </button>
                    <button className='w-[80px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center '><BiSolidMessageDots className='w-6 h-6' />
                        <p className='text-[12px]'>Messaging</p>
                    </button>
                    <button className='w-[80px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center '><FaBell className='w-6 h-6' />
                        <p className='text-[12px]'>Notifications</p>
                    </button>
                    <button className="w-[80px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center border-r border-[#E8E8E8] mr-3">
                        <img src={userImage} className="w-6 h-6 rounded-full" />
                        <div className="flex justify-center items-center">
                            <p className="text-[12px]">Me</p>
                            <FaCaretDown />
                        </div>
                    </button>

                    <button className='w-[85px] h-full flex flex-col justify-center cursor-pointer text-[#666666] hover:text-black items-center '><BsGrid3X3GapFill className='w-6 h-6' />
                        <div className='flex justify-center items-center'>
                            <p className='text-[12px]'>For Business</p>
                            <FaCaretDown />
                        </div>
                    </button>
                    <a href="/" className='ml-3 mr-7 text-center underline text-[#915907] text-[12px]'>Try Premium for <br />PKR0</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar