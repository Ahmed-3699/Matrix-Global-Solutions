import React from 'react'
import outsourch from '../../Images/5-Advantages-Of-IT-Outsourcing-In-The-Era-Of-Remote-Working-1.jpg'
import { Link } from 'react-router-dom'


const Section1 = () => {
  return (
    <>
      <div className='h-max w-full bg-white overflow-hidden'>

        <div className='h-max sm:w-[95%] w-[90%] m-auto grid lg:grid-cols-2 grid-cols-1 sm:gap-16 gap-10 sm:mt-24 mt-12 mb-14'>

          <div data-aos="zoom-in-right" className='h-max w-full sm:pt-5 pt-0'>
            <h1 className='text-[rgb(15,23,42)] text-[27px] font-bold'>The Perfect Outsourcing Partner for Your Business</h1>
            <p className='text-[rgb(58,58,58)] mt-4'>With three years in the business process outsourcing sector, our company is a proven partner for organizations aiming to enhance customer satisfaction and streamline operations. Based in the dynamic city of Richmond Hill, USA, we utilize our 50+ skilled professionals to offer top-tier outsourcing solutions customized to meet each client’s specific requirements. Our extensive industry experience, coupled with a dedication to innovation and client-focused service, has established us as a leader in consistently surpassing expectations.</p>
            <Link to={"/contact"}>
              <button className='bg-[rgb(254,49,49)] text-white px-8 py-[14px] rounded-md font-medium sm:mt-10 mt-8 relative z-50 group overflow-hidden'>BOOST YOUR POTENTIAL
                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
              </button>
            </Link>
          </div>
          <div data-aos="zoom-in-left" className='sm:h-[400px] h-[300px] w-full overflow-hidden'>
            <img className='h-full w-full hover:scale-110 duration-200' src={outsourch} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Section1