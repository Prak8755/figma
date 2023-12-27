import React from "react";
import vector from "../images/Vector 3.png";
import Left from "../images/image bg.png";
import Right from "../images/ right.png";

export const About = () => {
  return (
   <>
    <div className="md:px-10 px-6 py-2 m-auto max-w-[1500px]" id="about">
      {/*  */}
      <div className="text-center">
        <div className=" mt-10 relative  cursor-pointer">
          <h1 className="text-xl lg:text-5xl">
            Companies that can <span className="font-bold">help you</span> in{" "}
            <button className="px-5  py-1  cursor-pointer rounded-full bg-[#3b8e9e] text-white text-sm">
              Know more <i className="fa-solid fa-arrow-right"></i>
            </button>
          </h1>
          <h1 className="text-xl lg:text-5xl">
            developing your company in the{" "}
            <span className="font-bold">future</span>
          </h1>
          <p className="text-sm my-3">
            inim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
          </p>
          <div className="absolute top-0 hidden lg:block left-[250px]">
            <img
              className="h-[200px] md:w-[700px] lg:w-[900px]"
              src={vector}
              alt="vector"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center flex-col md:flex-row justify-around  gap-3 md:gap-10 mt-24">
        <div>
          <h1 className="text-xl lg:text-5xl">
            Let's <span className="font-bold">Work together</span>
          </h1>
          <h1 className="text-xl lg:text-5xl">With us</h1>
          <p className="my-2">
            nim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in
          </p>
        </div>
        <div>
          <button className=" px-6 py-2  cursor-pointer rounded-full bg-[#3b8e9e] text-white text-sm">
            Get started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex-col flex md:flex-row justify-center items-center mt-20 p-10">
        <div className="text-center relative ">
          <img  className='h-[500px] md:h-[700px] w-full' src={Left} alt="left" />
          <div className="absolute z-10 top-[25%] sm:top-[50%] text-sm md:text-xl  p-2">
            <p className="text-white">
              inim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              <br /> reprehenderit in voluptate velit esse cillum dolore es
              fugiat
            </p>
            <button className="mt-4 rounded-full px-8 py-2 text-black bg-white">Get Started</button>
          </div>
        </div>
        <div className=" relative ">
          <img className='h-[500px] md:h-[700px] w-full'  src={Right} alt="right" />
          <div className="absolute top-0 sm:top-[20%] text-white  font-bold p-10">
            <h1 className="text-sm md:text-2xl lg:text-3xl font-bold">
             Drive your design to a <br/>new age technology that<br/> we deliver.
            </h1>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-10 mt-1 md:mt-10">
              <div className="flex items-center justify-around gap-1 md:gap-6">
               <div>
                <h1 className="text-gray-400  lg:text-xl">01</h1>
                <p className="my-2 text-white text-xs ">inim veniam, quis nostrud ullamco <br/>laboris nisi ut dghsd ssd</p>
               </div>
               <div>
                <h1 className="text-gray-400   lg:text-xl">02</h1>
                <p className="my-2 text-white text-xs ">inim veniam, quis nostrud ullamco <br/>laboris nisi ut uthsd sew</p>
               </div>
              </div>
              <div className="flex items-center justify-around gap-1 md:gap-6">
               <div>
                <h1 className="text-gray-400  lg:text-xl">03</h1>
                <p className="my-2 text-white text-xs ">inim veniam, quis nostrud ullamco <br/>laboris nisi ut dghsd ssd</p>
               </div>
               <div>
                <h1 className="text-gray-400   lg:text-xl">04</h1>
                <p className="my-2 text-white text-xs ">inim veniam, quis nostrud ullamco <br/>laboris nisi ut uthsd sew</p>
               </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className='mt- border-b-2'/>
   </>
  );
};
