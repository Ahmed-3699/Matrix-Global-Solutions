import React from 'react'
import NavbarSecurity from '../Navbars/NavbarSecurity'
import { Link } from 'react-router-dom'

const HomeSecurityMain = () => {
    return (
        <>
            <div className='h-max w-full z-50 relative'>
                <NavbarSecurity />

                <div className='security-main h-max w-full'>
                    <div className='h-full w-full bg-[rgba(9,3,4,0.73)] flex flex-col items-center sm:py-32 py-24 z-50'>
                        <h1 className='sm:text-5xl text-3xl font-bold text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%]'>Reliable Home Security Solutions by Matrix Global Solutions</h1>
                        <p className='text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] mt-8'> Our comprehensive home security services are designed to offer you peace of mind by providing reliable.Trust us to be your partner in creating a safe and secure environment for you and your loved ones.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-4 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>SECURE YOUR HOME NOW
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeSecurityMain