import React from 'react'
import NavbarContactCenter from '../Navbars/NavbarContactCenter'
import { Link } from 'react-router-dom'

const ContactCenterMain = () => {
  return (
    <>
      <div className='h-max w-full z-50 relative'>
        <NavbarContactCenter />

        <div className='contact-center-main h-max w-full'>
          <div className='h-full w-full sm:bg-[rgba(9,3,4,0.73)] bg-[rgba(9,3,4,0.60)] flex flex-col items-center sm:py-36 py-24 z-50'>
            <h1 className='sm:text-5xl text-3xl font-bold text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%]'>Powering Next-Gen Contact Center Solutions for the Digital Age</h1>
            <p className='text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] mt-8'>Our solutions empower you to elevate your customer engagement strategies, streamline your support operations, and drive sustainable growth in the highly competitive landscape.</p>
            <Link to={"/contact"}>
            <button className='bg-[rgb(254,49,49)] text-white px-8 py-4 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>GET STARTED TODAY
              <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCenterMain