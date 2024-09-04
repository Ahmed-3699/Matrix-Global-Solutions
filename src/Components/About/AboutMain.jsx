import React from 'react'
import NavbarAbout from '../Navbars/NavbarAbout'
import { Link } from 'react-router-dom'

const AboutMain = () => {
    return (
        <>
            <div className='about-main h-max w-full pb-[87px]'>
                <div className='h-full w-full bg-[rgba(9,3,4,0.48)]'>
                <NavbarAbout />

                    <div className='h-max w-full flex flex-col items-center sm:mt-28 mt-20'>
                        <h1 className='text-white sm:text-5xl text-4xl font-bold text-center lg:w-[60%] md:w-[80%] w-[90%] lg:leading-snug leading-snug'>Empowering Business Growth for Over 3 Years</h1>
                        <p className='text-white text-center lg:w-[60%] md:w-[80%] w-[90%] mt-3'>For over 3 years, we’ve been the trusted partner for organizations aiming to streamline operations and enhance customer satisfaction.</p>
                        <Link to={"/contact"}>
                        <button className='bg-[rgb(254,49,49)] text-white sm:px-10 px-5  py-4 rounded-md text-[16px] font-medium  mt-8 z-50 relative group overflow-hidden'>UNLEASH BOUNDLESS POTENTIAL
                            <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                        </button>
                        </Link>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutMain