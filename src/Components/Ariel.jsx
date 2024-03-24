import React from 'react'
import Ariel from '../LIDC Images/ArielShot.jpg'

const Aerial = () => {
  return (
    <div className='max-w-[1640px]'>
      <div className='relative flex justify-center'>
        <img className='w-full h-[80vh] object-cover' src={Ariel} alt="" />
        <div className='absolute top-[0px] sm:top-[200px] text-white text-center'>
          <h1 className='sm:text-[80px] text-[50px] font-bold'>Explore LASU</h1>
          <ul className='sm:flex hidden justify-center flex-wrap text-[20px]'>
            <li className='border-r-2 px-4'><a href="/">Visitor Information</a></li>
            <li className='border-r-2 px-4'><a href="/">Virtual tours</a></li>
            <li className='border-r-2 px-4'><a href="/">Online Courses</a></li>
            <li className='border-r-2 px-4'><a href="/">Map & Direction</a></li>
            <li className='px-4'><a href="/">Parking & Transportation</a>n</li>
          </ul>
          <ul className='flex sm:hidden justify-center flex-wrap text-[20px]'>
            <li className='border-b-2 w-[50%] ml-[2px] py-3'><a href="/">Visitor Information</a></li>
            <li className='border-b-2 w-[50%] ml-[2px] py-3'><a href="/">Virtual tours</a></li>
            <li className='border-b-2 w-[50%] ml-[2px] py-3'><a href="/">Online Courses</a></li>
            <li className='border-b-2 w-[50%] ml-[2px] py-3'><a href="/">Map & Direction</a></li>
            <li className='w-[50%] ml-[2px] py-3'><a href="/">Parking & Transportation</a>n</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aerial