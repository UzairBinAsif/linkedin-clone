import React from 'react'
import PostStart from './PostStart'
import Post from './Post'

const MiddleSection = () => {
  return (
    <div className='mt-6 w-[49%]'>
        <PostStart />
        <hr className='text-[#DFDEDA] my-3' />
        <Post />
    </div>
  )
}

export default MiddleSection