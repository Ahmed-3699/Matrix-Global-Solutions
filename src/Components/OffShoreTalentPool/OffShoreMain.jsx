import React from 'react'
import NavbarOffShore from '../Navbars/NavbarOffShore'
import { Link } from 'react-router-dom'

const OffShoreMain = () => {
  return (
    <>
    <div className='h-max w-full z-50 relative'>
        <NavbarOffShore />

        <div className='offshore-main h-max w-full'>
          <div className='h-full w-full bg-[rgba(9,3,4,0.73)] flex flex-col items-center sm:py-32 py-24 z-50'>
            <h1 className='sm:text-5xl text-3xl font-bold text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%]'>Drive Success with Strategic Outsourcing: Leverage Offshore Talent for Growth</h1>
            <p className='text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] mt-8'>Leverage the expertise and efficiency of our international workforce to drive your success. Matrix Global Solutions connects you with skilled professionals across diverse industries, delivering tailored and cost-effective solutions to meet your business requirements.</p>
            <Link to={"/contact"}>
            <button className='bg-[rgb(254,49,49)] text-white px-8 py-4 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>BROWSE OUR SERVICES
              <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default OffShoreMain