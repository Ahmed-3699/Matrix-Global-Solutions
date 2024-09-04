import React from 'react'
import { Link } from 'react-router-dom'

const ActionNow = () => {
  return (
    <>
      <div className='actionNow lg:h-[120vh] md:h-[110vh] h-[100vh] w-full'>
        <div className='h-full w-full bg-[rgba(15,23,42,0.66)] flex justify-center items-center'>
          <div data-aos="zoom-in-up" className='h-max sm:w-[60%] w-[90%]  bg-white rounded-lg flex flex-col items-center pt-16 sm:py-16 py-8'>
            <p className='text-[rgb(15,23,42)] font-medium'>TAKE ACTION NOW</p>
            <h1 className='text-[rgb(15,23,42)] sm:text-[36px] text-[24px] font-bold text-center leading-11 md:w-[80%] w-[90%] mt-3'>Unlock your potential and transform your life starting today!</h1>
            <p className='text-[rgb(58,58,115)] text-center md:w-[65%] w-[90%] mt-5'>Let’s Sow the Seeds of Customer Satisfaction Together for a Thriving Future</p>
            <Link to={"/contact"}>
              <button className='bg-[rgb(254,49,49)] text-white sm:px-10 px-8 py-[13px] rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>GET STARTED
                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
              </button>
            </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default ActionNow