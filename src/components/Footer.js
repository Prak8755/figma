import React from 'react';
import Group from '../images/Group 1597883128.png'

export const Footer = () => {
  return (
    <div className='className="md:px-10 px-6 py-2 m-auto max-w-[1500px' id="contact">
   <div className='relative text-center'>
     <img className='h-[400px] md:h-[400px] w-full' src={Group} alt=''/>
     <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xs '>
   <h1 className='text-4xl font-serif md:text-5xl'>Z</h1>
   <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
   <p className='text-xs'>Are you ready ?</p>
   <h1 className='my-2 text-2xl font-sans'>Let's get started</h1>
   <button className='px-6 py-2 text-black bg-white rounded-md  my-2 md:my-4'>Get started</button>

   <ul className='flex items-center justify-center  gap-4 md:gap-10'>
<li>About</li>
<li>Contact</li>
<li>Blogs</li>
<li>Product</li>
<li>FAQS</li>
   </ul>

     </div>
   </div>
    </div>
  )
}
