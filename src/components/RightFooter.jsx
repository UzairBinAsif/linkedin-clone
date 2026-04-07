import React from 'react'
import linkedinLogo from "../assets/linkedinLogo.png"

const RightFooter = () => {
  return (
    <div className='flex flex-col items-center text-[12px] text-[#666666] mt-2.5 gap-1.5'>
        <p>About &nbsp;&nbsp;&nbsp; Accessibility &nbsp;&nbsp;&nbsp; Help Center &nbsp;&nbsp;&nbsp; </p>
        <p>Privacy & Terms &nbsp;&nbsp;&nbsp; Ad Choices &nbsp;&nbsp;&nbsp; Advertising</p>
        <p> &nbsp;&nbsp;&nbsp; Business Services &nbsp;&nbsp;&nbsp; Get the LinkedIn app &nbsp;&nbsp;&nbsp; More &nbsp;&nbsp;&nbsp; </p>
        <div className='flex items-center gap-2 text-black mt-3'>
            <img src={linkedinLogo} alt="" className='h-[16px]'/>
            <p>LinkedIn Corporation © 2026</p>
        </div>
    </div>
  )
}

export default RightFooter