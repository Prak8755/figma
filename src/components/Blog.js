import React from 'react';
import img1 from '../images/Frame 14165.png';
import img2 from '../images/Frame 14165 (2).png';
import img3 from '../images/Frame 14165 (1).png'

const Blog = () => {
  return (
    <>
    <div className="md:px-10 px-6 py-2 m-auto max-w-[1500px]" id="blog">
       <div className='p-10'>
        <h1 className='text-sm md:text-4xl'>Blogs</h1>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            <div className='hover:scale-105 duration-200 cursor-pointer'>
                <img className='my-3' src={img1} alt='img1'/>
                <h1 className='text-sm md:text-2xl'>Topic 1</h1>
                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore.<br/> Ut enim ad minim veniam, quis nostrud .</p>
            </div>
            <div className='hover:scale-105 duration-200 cursor-pointer'>
                <img className='my-3' src={img2} alt='img1'/>
                <h1 className='text-sm md:text-2xl'>Topic 2</h1>
                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore.<br/> Ut enim ad minim veniam, quis nostrud .</p>
            </div>
            <div className='hover:scale-105 duration-200 cursor-pointer'>
                <img className='my-3' src={img3} alt='img1'/>
                <h1 className='text-sm md:text-2xl'>Topic 3</h1>
                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore.<br/> Ut enim ad minim veniam, quis nostrud .</p>
            </div>
        </div>
        </div> 
   </div>
   <hr className=' border-b-2 mt-10'/>
    </>
  )
}

export default Blog