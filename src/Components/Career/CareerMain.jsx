import React from 'react'
import NavbarCareer from '../Navbars/NavbarCareer'
import { Link } from 'react-router-dom'

const CareerMain = () => {
  return (
    <>
      <div className='career-main h-max w-full'>
        <div className='h-full w-full bg-[rgba(9,3,4,0.48)] pb-[90px]'>
          <NavbarCareer />

          <div className='h-max w-full flex flex-col items-center sm:mt-28 mt-20'>
            <h1 className='text-white sm:text-5xl text-4xl font-bold text-center'>Careers</h1>
            <p className='text-white text-center lg:w-[60%] md:w-[80%] w-[90%] mt-3'>By innovating today, we pave the way for a brighter tomorrow. Let’s grow together.</p>
            <Link to={"/contact"}>
              <button className='bg-[rgb(254,49,49)] text-white px-10 py-4 rounded-md text-[16px] font-medium  mt-5 z-10 relative group overflow-hidden'>APPLY NOW
                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
              </button>
            </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default CareerMain