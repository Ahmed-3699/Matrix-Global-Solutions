import React from 'react'
import NavbarHome from '../Navbars/NavbarHome'
import { Link } from 'react-router-dom'

const MainSection = () => {
  return (
    <>
      <div className='Main-Section lg:h-[100vh] h-max w-full'>
        <div className='h-full w-full bg-[rgba(15,23,42,0.69)] mb-10'>
          <NavbarHome />

          <div className='sm:pl-8 pl-5 2xl:mt-40 mt-28 pb-12'>
            <h1 className='text-white sm:text-5xl text-3xl font-bold lg:w-[60%] md:w-[70%] w-[95%] leading-tight'>Maximize Your Growth Potential 11x with Matrix Global Solutions Formula</h1>
            <p className='text-white mt-8 md:w-[50%] sm:w-[70%] w-[95%]'>Maximize your potential, reduce expenses, and boost success with our expert-driven solutions that deliver measurable results.</p>
            <Link to={'/contact'}>
              <button className='bg-[rgb(254,49,49)] text-white sm:px-10 px-0 sm:w-max w-[95%] py-4 rounded-md text-[16px] font-medium  mt-10 z-50 relative group overflow-hidden'>Book a Free Consultation Today!
                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainSection