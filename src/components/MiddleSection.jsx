import React from 'react'
import PostStart from './PostStart'
import Post from './Post'
import postImg1 from '../assets/postImg1.jpg'
import postImg2 from '../assets/postImg2.jpg'
import r11 from '../assets/r11.png'
import r13 from '../assets/r13.png'
import r14 from '../assets/r13.png'

const MiddleSection = () => {
  return (
    <div className='mt-6 w-[49%]'>
        <PostStart />
        <hr className='text-[#DFDEDA] my-3' />
        <Post cmntImg={r11} cmntName={"Tahami Kashif"} idImg={r13} idName={"Engr. Muhammad Rizwan Razi"} idDesc={"Electrical Engineer (UIT-NED-25)| Solar System Installer | Shopify Develop."} idTime={"11h"} postImg={postImg1} postDesc={`🚨 Urgent Hiring Alert: 

                Multiple Internship Roles!

                Ready to turn your coding knowledge into real-world industrial impact?

                • Web & Systems (Full Stack)
                • Core Logic & APIs (Backend)
                • Interfaces & UX (Frontend)

                Comment #INTERESTED below to secure your spot now!

                #Hiring #DecodeLabs #TechJobs #Interns`}/>
        <Post cmntImg={r11} cmntName={"Junaid Sangi"} idImg={r14} idName={"Mohsin Raza"} idDesc={"Agentic AI Developer | AI Engineer | DevOps Engineer | n8n Automation | "} idTime={"22h"} postImg={postImg2} postDesc={`🚀 OpenClaw Tutorial for Beginners | Setup + WhatsApp Integration`}/>
    </div>
  )
}

export default MiddleSection