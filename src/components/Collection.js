import React from 'react'
import laptop from '../images/image.png';
import mobile1 from '../images/Rectangle 90.png';
import mobile2 from '../images/Rectangle 91.png'


const Collection = () => {
  return (
    <>
    <div className='md:px-10 px-6 py-2 m-auto max-w-[1500px]' id='collection'>
        <div className='mt-16 flex flex-wrap items-center justify-center gap-16'>
          <div className='w-[300px] cursor-pointer  hover:scale-105 duration-200'>
            <h1 className='text-4xl'>Your<br/><span className='font-bold'>Creative</span><br/><span className='font-bold'>Design</span><br/>Collection</h1>
            <img className='m-2' src={laptop} alt='laptop'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt inim veniam,quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/> consequat Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          </div>
          <div className='w-[300px] cursor-pointer  hover:scale-105 duration-200'>
            <img src={mobile1} alt='mobile1'/>
            <div className='flex gap-4 item-center mt-3' >
                <h1 className='text-3xl text-gray-500'>01</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt </p>
            </div>
          </div>
          <div className='w-[300px] cursor-pointer  hover:scale-105 duration-200'>
            <img src={mobile2} alt='mobile1'/>
            <div className='flex gap-4 item-center mt-3'>
                <h1 className='text-3xl text-gray-500'>02</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt </p>
            </div>
          </div>
        </div>
    </div>
    <hr className='mt-10 border-b-2'/>
    </>
  )
}

export default Collection