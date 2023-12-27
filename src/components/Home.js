import React from 'react'


const data=[
    {
        iconClass:'fa-user',
        title:'Find your specialist',
        des:'Before consulting, look out for the specialist<',
        link:'Explore more',
        icon:'fa-arrow-right',id:1,color:'#3b8e9e'},
    {
        iconClass:'fa-bag-shopping',
        title:'Schedule appointments',
        des:'Choose the date and time slots according to your availability',
        link:'Explore more',
        icon:'fa-arrow-right',id:2,color:'#f3b499'
    },
    {
        iconClass:'fa-star',
        title:'Get your appointments',
        des:'Be always prepared for your treatments',
        link:'Explore more',
        icon:'fa-arrow-right',id:3,color:'#3b8e9e'
    }
]

const Home = () => {
  return (
    <>
    <div className='md:px-10 px-6 py-2 m-auto max-w-[1500px]' id='home'>
       <div className='flex flex-col lg:flex-row items-center justify-center gap-10 mt-10 '>
       <div className='px-1 font-thin'>
            <h1 className='text-3xl font-bold'>Need healthcare consultant?</h1>
            <h1 className='text-3xl font-bold'>Just <span className='text-[#e48a64] font-bold'>beezap</span></h1>
            <p className='mt-4 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" <br/>tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button className={'mt-4 border border-[#3b8e9e] text-[#3b8e9e] font-bold px-6 py-2 rounded hover:border-[#e48a64] hover:text-[#da63c2]'}>Get Appointment</button>
        </div>
        <div>
            <img className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]' src='https://www.shutterstock.com/image-vector/vector-medical-icon-doctor-image-600nw-1170228883.jpg' alt='doctor'/>
        </div>
       </div>
       <div className='text-center mt-12 font-thin'>
        <h3 className='text-[#e68f6a] font-bold text-xl'>Scheduling with doctor</h3>
        <h1 className='text-3xl font-bold'>Features that get you an Appointment</h1>
       </div>

       <div className='mt-10 flex flex-wrap items-center justify-center'>
        {data.map((el)=>(
        <div key={el.id} className='w-[300px] m-8 border rounded shadow-md p-4 hover:cursor-pointer hover:scale-105 duration-150'>
        <div className={`w-[50px] h-[50px] bg-[${el.color}] rounded p-2 text-center`}> <i className={`fa-solid ${el.iconClass}`}></i>
        </div>
        <h4 className='font-bold mt-2'>{el.title}</h4>
        <p className='my-2'>{el.des}</p>
        <p className='text-[#3b8e9e]'>{el.link}<i className={`fa-solid ${el.icon} ml-2`}></i> </p>
       </div>))}
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-56 justify-center mt-10'>
            <div>
                <img className='w-[350px] ' src='https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg' alt='doctor'/>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Health news updates</h1>
                <ol className='text-[#3b8e9e] list-disc'>
                    <li>India a cost-effective healthcare destination:Jitendra singh</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li>Lorem ipsum dolor  sed do eiusmod tempor incididunt sit amet,  </li>
                    <li>sed do eiusmod tempor incididunt:Mohit singh</li>
                </ol>
            </div>
        </div>
    </div>
    <hr className='mt-10 border-b-2'/>
    </>
  )
}

export default Home