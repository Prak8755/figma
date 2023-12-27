import React, { useState } from 'react'
import { Link } from 'react-scroll';



const Header = () => {
    const[nav,setNav]=useState(true);

  return (
    <>
   <div className='md:px-10 px-6 py-2 m-auto max-w-[1500px]' id=''>
     <div className='flex justify-between items-center'>
        <div className='flex gap-2 md:gap-4 items-center font-mono z-30'>
            <h1 className='sm:text-xl md:text-3xl text-[#3b8e9e]'><i className="fa-brands fa-figma"></i>beezap</h1>
            <p>Find Doctor</p>
        </div>
        {/* for larger screen */}
        <ul className='lg:flex lg:items-center lg:gap-4 lg:block hidden'>
            <Link to={'home'} smooth duration={500} className='text-[#3b8e9e] text-xl hover:scale-105 duration-200 cursor-pointer' >Home</Link>
            <Link to={'about'} smooth duration={500} className='hover:scale-105 duration-200 cursor-pointer'>About</Link>
            <Link to={'blog'}  smooth duration={500}className='hover:scale-105 duration-200 cursor-pointer'>Blog</Link>
            <Link to={'doctor-login'}  smooth duration={500}className='hover:scale-105 duration-200 cursor-pointer'>Doctor Login <i className="fa-solid font fa-angle-up"></i></Link>
            <Link to={'collection'}  smooth duration={500}className='hover:scale-105 duration-200 cursor-pointer'>Collection</Link>
            <Link to={'contact'}  smooth duration={500}className='hover:scale-105 duration-200 cursor-pointer'>Contact</Link>
            <button className='bg-[#3b8e9e] text-white px-4 py-2 rounded border'>Sign in <i className="fa-solid fa-right-to-bracket"></i></button>
        </ul>
        {/* For smaller screen */}
        <button className='text-4xl text-[#3b8e9e] lg:hidden z-30' onClick={function(){setNav(!nav);console.log('done');}}>{nav?<i className="fa-solid fa-bars"></i>:<i className="fa-solid fa-xmark"></i>}</button>

        {!nav&& <ul className='lg:hidden flex flex-col items-center justify-center absolute z-100 top-0 border left-0 w-full h-screen bg-white text-2xl'>
         <Link onClick={function(){setNav(!nav)}} to={'home'} smooth duration={500} className='px-4 py-6 text-[#3b8e9e]  hover:scale-105 duration-200 cursor-pointer' id='home'>Home</Link>
            <Link onClick={function(){setNav(!nav)}} to={'about'} smooth duration={500}  className=' px-4 py-6 hover:scale-105 duration-200 cursor-pointer'>About</Link>
            <Link onClick={function(){setNav(!nav)}} to={'blog'}  smooth duration={500} className=' px-4 py-6 hover:scale-105 duration-200 cursor-pointer'>Blog</Link>
            <Link onClick={function(){setNav(!nav)}} to={'doctor-login'}  smooth duration={500} className='px-4 py-6 hover:scale-105 duration-200 cursor-pointer'>Doctor Login <i className="fa-solid font fa-angle-up"></i></Link>
            <Link onClick={function(){setNav(!nav)}} to={'collection'} smooth duration={500}  className=' px-4 py-6 hover:scale-105 duration-200 cursor-pointer'>Collection</Link>
            <Link onClick={function(){setNav(!nav)}} to={'contact'} smooth duration={500}  className=' px-4 py-6 hover:scale-105 duration-200 cursor-pointer'>Contact</Link>
            <button className='px-4 py-6 bg-[#3b8e9e] text-white px-4 py-2 rounded border w-[150px]'>Sign in <i className="fa-solid fa-right-to-bracket"></i></button>
         </ul>}
    </div>
   </div>
   <hr className='mt-4 border-b-2'/>
    </>
  )
}

export default Header




 