import React from 'react';
import bgImage from '../images/Group 1597883128.png'
import Group1 from '../images/Group 1.png';
import Line from '../images/Line 1.png';
import Logo from '../images/ZAPMEDICS.png'



export const DoctorLogin = () => {
  return (
    <>
    <div className="md:px-10 px-6 py-2 m-auto max-w-[1500px] " id="doctor-login">
       <div className='relative text-center'>
        <img className='h-[400px] md:h-[400px] w-full' src={bgImage} alt=''/>
        <div className='flex items-center justify-around gap-4 absolute top-[5%] md:top-[2%] p-4'>
         <div className='hidden sm:block'><img src={Group1} alt=''/></div>
         <div className='hidden sm:block'><img src={Line} alt=''/></div>
         <div className=''><img src={Logo} alt=''/></div>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='font-mono text-xs md:text-4xl text-white'>Amazing website creation with Zapmedics</h1>
            <p className='text-white text-xs md:text-sm my-1 md:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <button className=' py-1 sm:py-1 px-3 text-xs md:text-sm md:px-6 md:py-2 bg-white text-black rounded-full hover:text-red-600'>Get Started</button>
        </div>
       </div>
    </div>
    <hr className='mt-10 border-b-2'/>
    </>
  )
}
